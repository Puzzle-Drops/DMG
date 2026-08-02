# Dark Magician Girl — OCG Collection Tracker

A static site tracking every realistically obtainable **OCG (Japanese)** printing of the
Dark Magician Girl cards, with a real scan of every individual rarity.

Open `index.html` in a browser. No build step, no server required.

**5 cards · 49 printings · 92 rarity variants · 90 scans**

| Card | Printings | Variants |
|---|---:|---:|
| Dark Magician Girl | 36 | 56 |
| Toon Dark Magician Girl | 6 | 11 |
| Dark Magician Girl the Dragon Knight | 5 | 18 |
| Dark Magician Girl the Magician's Apprentice | 1 | 6 |
| Magi Magi ☆ Magician Gal | 1 | 1 |

---

## Marking a card as collected

`data/cards.js` is the single source of truth. Find the variant and flip one field:

```js
{ "rarity": "ScR", "label": "Secret Rare", "art": "dmg1",
  "img": "artwork/cards/dark-magician-girl/QCAC-JP019-ScR.jpg",
  "collected": false }        //  <-- change to true, save, reload
```

Clicking a row in the page toggles it for that session only — nothing is written to
the browser, so the file always reflects reality.

### `locked`

A variant may optionally carry `"locked": true`, which makes the row un-tickable in the
page. When omitted it defaults to `!collected`, which reproduces the original tracker's
behaviour exactly. You only need it if you want a row clickable without owning it yet.

---

## Views

| View | Groups by | Use it to |
|---|---|---|
| **Sort by Card** | the five cards | browse everything, the default |
| **Sort by Set** | release year + set | check what a given set contains |
| **Sort by Artwork** | illustration | collect one of each art rather than one of each print |

Views are linkable: `index.html#art`.

Two filters sit under the view switcher:

- **Show replicas** *(on)* — 11 printings are official **Replica** cards (Yugipedia's `RP`),
  reproductions sold in products like *Memories of the Duel King*. Real product, not real cards.
- **Show prize / promo-only** *(off)* — 5 printings you will effectively never find in a shop:
  `G3-11`, `2017-JPP01`, `2023-JPP01`, `STEEL`, `QCUC-JP002`.

---

## Artwork grouping and the `conf` field

Every variant has an `art` key grouping it by illustration, and a `conf` field recording
how that assignment was reached:

- `high` / `med` — matched against a reference illustration by image comparison, then
  **verified by eye**. 77 of 92 variants.
- `low` — no confident match. These are OCG-exclusive artworks with no TCG counterpart
  (the Dungeon Dice Monsters promos, the Stamp Edition art, the 7-Eleven art, the
  steel Special Card). They were assigned by hand where the artwork was obvious.

**One variant is still `"art": "unverified"`.** It appears in its own group at the bottom
of the artwork view. If you can identify it from the scan, set its `art` key by hand.

Artwork identity is the one part of this dataset that is not machine-verifiable —
Yugipedia does not record which illustration a given printing uses. Treat the artwork
grouping as good but not authoritative; the set codes and rarities are solid.

---

## Data provenance

Set codes, rarities, replica flags and per-rarity scans come from the **Japanese** section
of the Yugipedia card galleries (fetched 2026-08-01). Release years come from each set's
`jp_release_date`. Reference illustrations for artwork matching came from YGOPRODeck.

Rush Duel printings are excluded — different game, different card back. Official Proxy
entries are excluded — they are proxies, not cards.

### Corrections to the earlier version

The previous hand-built tracker (`original/dmg-collection.html`) carried real errors,
including on cards that were marked as owned:

| Card | Was | Actually |
|---|---|---|
| `CCC2-JP001` | 2003 · Ceremonial Challenge Cup · Ultra Rare | **2024 · Coco's × Yu-Gi-Oh! Anniversary Campaign Pt.1 · NPR** |
| `711E-JP002` | Ultra Rare (Normal Parallel) | **NPR** — its own rarity |
| `MVP1-JP056` | DSOD Movie Pack, UR + ScR | **no such JP code** — `MVP1-EN056` is the TCG code; the JP release is `MVPL-JP001` (KCC) |
| `QCAC-JP019` | 2 variants | **5** |
| `QCCU-JP002` | 3 variants | **5** (Ultimate Rare was missing) |
| `QCDB-JP008` | 1 variant | **3** |
| `LPST-JP002` | 1 variant | **3** |

About 20 printings were missing entirely, including the six Dungeon Dice Monsters promos.
The `replica` flag in the original was *correct* — it corresponds to Yugipedia's `RP`
suffix — but it was incomplete; `DP16-JP009` and `15AX-JPM01` are replicas too.

All 7 previously-owned variants were carried over.

---

## Layout

```
index.html                 markup
css/styles.css             visual design, unchanged from the original
js/app.js                  rendering, views, modal
data/cards.js              ← collection data; the file you edit
artwork/cards/<card>/      per-rarity scans, 400px wide, ~6 MB total
original/                  the original single-file tracker, kept for reference
```

`data/cards.js` assigns a plain global rather than being fetched as JSON, so the page
works when opened directly from disk (`fetch` of a local JSON file is blocked by CORS
on `file://`).
