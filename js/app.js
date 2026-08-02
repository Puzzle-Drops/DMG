/* DMG OCG Collection — application logic
 *
 * Collection state lives in data/cards.js and is the single source of truth.
 * Flip "collected": false -> true there and reload. Clicking a row in the page
 * toggles it for the current session only; nothing is written to the browser.
 *
 * `locked` keeps its original meaning: a locked variant cannot be ticked.
 * When a variant omits it, it defaults to !collected — which reproduces the
 * original file exactly (there, locked was always the inverse of owned).
 */
(function () {
  'use strict';

  var DATA = window.CARD_DATA;
  var RARITY_META = DATA.rarities;
  var ARTWORKS = DATA.artworks;

  var VIEWS = { card: 1, set: 1, art: 1 };
  var view = VIEWS[(location.hash || '').replace('#', '')] ? location.hash.replace('#', '') : 'card';
  var showReplica = true;
  var showPrize = false;

  // ── helpers ────────────────────────────────────────────────────────
  function isLocked(v) { return v.locked === undefined ? !v.collected : v.locked; }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function rdot(r) {
    var m = RARITY_META[r];
    return '<span class="rdot" style="background:' + ((m && m.color) || '#888') + '"></span>';
  }
  function rarityName(r) {
    var m = RARITY_META[r];
    return (m && m.name) || r;
  }

  // every printing, flattened, with its parent card attached
  function allPrintings() {
    var out = [];
    DATA.cards.forEach(function (card) {
      card.printings.forEach(function (p) { out.push({ card: card, p: p }); });
    });
    return out;
  }
  function visible(p) {
    if (p.replica && !showReplica) return false;
    if (p.prize && !showPrize) return false;
    return true;
  }
  function visiblePrintings() {
    return allPrintings().filter(function (x) { return visible(x.p); });
  }
  function variantsOf(p) { return p.variants; }
  function ownedCount(p) {
    return p.variants.filter(function (v) { return v.collected && !isLocked(v); }).length;
  }
  function unlockedCount(p) {
    return p.variants.filter(function (v) { return !isLocked(v); }).length;
  }

  // ── progress ───────────────────────────────────────────────────────
  function updateProgress() {
    var all = visiblePrintings().reduce(function (acc, x) { return acc.concat(x.p.variants); }, []);
    var n = all.filter(function (v) { return v.collected && !isLocked(v); }).length;
    document.getElementById('prog-text').textContent = n + ' / ' + all.length;
    document.getElementById('bar-fill').style.width = all.length ? (n / all.length) * 100 + '%' : '0%';
  }

  // ── modal ──────────────────────────────────────────────────────────
  var modal = document.getElementById('modal');
  function openModal(card, p, img) {
    document.getElementById('modal-img').src = img || p.variants[0].img;
    document.getElementById('modal-img').alt = card.en;
    document.getElementById('modal-en').textContent = card.en;
    document.getElementById('modal-jp').textContent = card.jp;
    document.getElementById('modal-set').textContent =
      (p.year ? p.year + ' · ' : '') + p.set + ' · ' + p.code;
    var list = document.getElementById('modal-rarities');
    list.innerHTML = '';
    var seen = {};
    p.variants.forEach(function (v) {
      if (seen[v.rarity]) return;
      seen[v.rarity] = 1;
      var m = RARITY_META[v.rarity] || { color: '#888', name: v.rarity, desc: '' };
      list.appendChild(el('div', 'rarity-item',
        '<div class="rarity-swatch" style="background:' + m.color + '"></div>' +
        '<div><div class="rarity-item-name">' + esc(m.name) + '</div>' +
        '<div class="rarity-item-desc">' + esc(m.desc || '') + '</div></div>'));
    });
    modal.classList.add('open');
  }
  function closeModal() { modal.classList.remove('open'); }
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  // ── image loading ──────────────────────────────────────────────────
  function mountImg(wrap, src, alt, cls) {
    var img = el('img');
    img.src = src; img.alt = alt; img.loading = 'lazy';
    if (cls) img.className = cls;
    img.addEventListener('load', function () { img.classList.add('loaded'); });
    img.addEventListener('error', function () { img.style.display = 'none'; });
    // a cached image can finish loading before the listener is attached
    if (img.complete && img.naturalWidth) img.classList.add('loaded');
    wrap.appendChild(img);
    return img;
  }

  // ── one printing tile ──────────────────────────────────────────────
  function buildPrinting(card, p) {
    var anyOwned = ownedCount(p) > 0;
    var ul = unlockedCount(p);
    var allLocked = ul === 0;

    var div = el('div', 'card' + (allLocked ? ' card-locked' : ' card-unlocked') + (anyOwned ? ' any-owned' : ''));

    var wrap = el('div', 'card-img-wrap', '<div class="card-img-placeholder">🃏</div>');
    mountImg(wrap, p.variants[0].img, card.en);
    if (ul > 0) wrap.appendChild(el('div', 'owned-badge', ownedCount(p) + '/' + ul));
    wrap.addEventListener('click', function () {
      window.open(card.yugipedia || 'https://yugipedia.com', '_blank', 'noopener');
    });

    var info = el('div', 'card-info',
      '<div class="card-name">' + esc(card.en) + '</div>' +
      '<div class="card-code">' + esc(p.code) + '</div>' +
      '<div class="card-meta">' + esc((p.year ? p.year + ' · ' : '') + p.set) + '</div>' +
      (p.replica ? '<div class="replica-tag">REPLICA</div>' : '') +
      (p.prize ? '<div class="prize-tag">PRIZE</div>' : ''));
    var rar = el('div', 'rarity-btn', 'Rarity guide ›');
    rar.addEventListener('click', function () { openModal(card, p); });
    info.appendChild(rar);

    var vd = el('div', 'variants');
    p.variants.forEach(function (v) {
      vd.appendChild(buildVariantRow(card, p, v, div));
    });

    div.appendChild(wrap); div.appendChild(info); div.appendChild(vd);
    return div;
  }

  // ── one rarity row (with its own scan) ─────────────────────────────
  function buildVariantRow(card, p, v, tile) {
    var locked = isLocked(v);
    var row = el('div', 'var-row' + (locked ? ' var-locked' : ' unlocked') +
      (v.collected && !locked ? ' owned' : ''));

    var thumb = el('img', 'var-thumb');
    thumb.src = v.img; thumb.alt = v.label; thumb.loading = 'lazy';
    thumb.addEventListener('load', function () { thumb.classList.add('loaded'); });
    thumb.addEventListener('error', function () { thumb.style.visibility = 'hidden'; });
    if (thumb.complete && thumb.naturalWidth) thumb.classList.add('loaded');
    thumb.addEventListener('click', function (e) { e.stopPropagation(); openModal(card, p, v.img); });
    row.appendChild(thumb);

    row.appendChild(el('div', 'var-check', v.collected && !locked ? '✓' : ''));
    row.appendChild(el('div', 'var-label', rdot(v.rarity) + esc(v.label)));

    if (!locked) {
      row.addEventListener('click', function () {
        v.collected = !v.collected;
        row.classList.toggle('owned', v.collected);
        row.querySelector('.var-check').textContent = v.collected ? '✓' : '';
        var n = ownedCount(p);
        tile.classList.toggle('any-owned', n > 0);
        var badge = tile.querySelector('.owned-badge');
        if (badge) badge.textContent = n + '/' + unlockedCount(p);
        updateProgress();
      });
    }
    return row;
  }

  // ── views ──────────────────────────────────────────────────────────
  function sectionHeader(en, jp) {
    return el('div', 'sec-header',
      '<div class="sec-en">' + esc(en) + '</div>' +
      (jp ? '<div class="sec-jp">' + esc(jp) + '</div>' : ''));
  }
  function gridOf(nodes) {
    var g = el('div', 'grid');
    nodes.forEach(function (n) { g.appendChild(n); });
    return g;
  }

  function renderByCard(app) {
    DATA.cards.forEach(function (card) {
      var ps = card.printings.filter(visible);
      if (!ps.length) return;
      app.appendChild(sectionHeader(card.en, card.jp));
      var sub = el('p', 'sec-sub'); sub.textContent = card.sub; app.appendChild(sub);
      app.appendChild(gridOf(ps.map(function (p) { return buildPrinting(card, p); })));
    });
  }

  function renderBySet(app) {
    var map = {};
    visiblePrintings().forEach(function (x) {
      var k = (x.p.year || '____') + '||' + x.p.set;
      (map[k] = map[k] || { year: x.p.year, set: x.p.set, items: [] }).items.push(x);
    });
    Object.keys(map).sort().forEach(function (k) {
      var g = map[k];
      app.appendChild(sectionHeader((g.year || '—') + ' · ' + g.set));
      app.appendChild(gridOf(g.items.map(function (x) { return buildPrinting(x.card, x.p); })));
    });
  }

  /* Artwork view: group every rarity by the illustration it uses, so you can
     collect one of each art instead of one of each printing. */
  function renderByArt(app) {
    var groups = {};
    visiblePrintings().forEach(function (x) {
      x.p.variants.forEach(function (v) {
        var key = v.art || 'unverified';
        (groups[key] = groups[key] || []).push({ card: x.card, p: x.p, v: v });
      });
    });
    var order = Object.keys(groups).sort(function (a, b) {
      if (a === 'unverified') return 1;
      if (b === 'unverified') return -1;
      return (ARTWORKS[a] ? ARTWORKS[a].order : 99) - (ARTWORKS[b] ? ARTWORKS[b].order : 99);
    });

    order.forEach(function (key) {
      var meta = ARTWORKS[key] || { label: 'Unverified artwork', note: 'Artwork not yet identified — check the scans and set "art" in data/cards.js.' };
      var items = groups[key];
      app.appendChild(sectionHeader(meta.label, meta.jp || ''));
      var sub = el('p', 'sec-sub');
      sub.textContent = meta.note || (items.length + ' printings carry this artwork');
      app.appendChild(sub);

      // one tile per rarity within this artwork
      var byRarity = {};
      items.forEach(function (it) {
        (byRarity[it.v.rarity] = byRarity[it.v.rarity] || []).push(it);
      });
      var tiles = Object.keys(byRarity).sort().map(function (r) {
        return buildArtTile(key, meta, r, byRarity[r]);
      });
      app.appendChild(gridOf(tiles));
    });
  }

  function buildArtTile(artKey, meta, rarity, items) {
    var owned = items.filter(function (i) { return i.v.collected && !isLocked(i.v); });
    var unlocked = items.filter(function (i) { return !isLocked(i.v); });
    var div = el('div', 'card' + (unlocked.length ? ' card-unlocked' : ' card-locked') +
      (owned.length ? ' any-owned' : ''));

    var wrap = el('div', 'card-img-wrap', '<div class="card-img-placeholder">🃏</div>');
    mountImg(wrap, items[0].v.img, meta.label + ' ' + rarity);
    wrap.appendChild(el('div', 'owned-badge', owned.length + '/' + items.length));
    wrap.addEventListener('click', function () {
      openModal(items[0].card, items[0].p, items[0].v.img);
    });

    var info = el('div', 'card-info',
      '<div class="card-name">' + rdot(rarity) + esc(rarityName(rarity)) + '</div>' +
      '<div class="card-code">' + esc(meta.label) + '</div>' +
      '<div class="card-meta">' + items.length + ' printing' + (items.length > 1 ? 's' : '') + '</div>');
    div.appendChild(wrap); div.appendChild(info);

    // which sets you can actually find this in
    var pl = el('div', 'printing-list');
    pl.innerHTML = items.map(function (i) {
      return '<div><span class="pl-code">' + esc(i.p.code) + '</span> · ' +
        esc(i.p.set) + (i.p.replica ? ' (replica)' : '') + '</div>';
    }).join('');
    div.appendChild(pl);

    var vd = el('div', 'variants');
    items.forEach(function (i) {
      vd.appendChild(buildVariantRow(i.card, i.p, i.v, div));
    });
    div.appendChild(vd);
    return div;
  }

  // ── render ─────────────────────────────────────────────────────────
  function render() {
    var app = document.getElementById('app');
    app.innerHTML = '';
    if (view === 'card') renderByCard(app);
    else if (view === 'set') renderBySet(app);
    else renderByArt(app);

    var hint = el('p', 'tap-hint');
    hint.textContent = 'Tap card image → Yugipedia OCG gallery · Tap a rarity thumbnail → full scan · Tap "Rarity guide" → identify foiling';
    app.appendChild(hint);

    var note = el('div', 'data-note',
      'Collection state is stored in <code>data/cards.js</code> — set <code>"collected": true</code> and reload. ' +
      'Clicks here are session-only and are not saved.');
    app.appendChild(note);

    updateProgress();
  }

  // ── controls ───────────────────────────────────────────────────────
  function syncButtons() {
    Array.prototype.forEach.call(document.querySelectorAll('.sort-btn'), function (o) {
      o.classList.toggle('active', o.dataset.view === view);
    });
  }
  Array.prototype.forEach.call(document.querySelectorAll('.sort-btn'), function (b) {
    b.addEventListener('click', function () {
      view = b.dataset.view;
      if (location.hash !== '#' + view) location.hash = view;
      syncButtons();
      render();
    });
  });
  window.addEventListener('hashchange', function () {
    var v = (location.hash || '').replace('#', '');
    if (VIEWS[v] && v !== view) { view = v; syncButtons(); render(); }
  });
  syncButtons();
  document.getElementById('f-replica').addEventListener('change', function (e) {
    showReplica = e.target.checked; render();
  });
  document.getElementById('f-prize').addEventListener('change', function (e) {
    showPrize = e.target.checked; render();
  });

  render();
})();
