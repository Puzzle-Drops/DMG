/* Dark Magician Girl — OCG collection data
 *
 * SOURCE OF TRUTH for your collection. To mark a card as owned, find its
 * variant below and change  "collected": false  ->  "collected": false
 * then reload the page. Nothing else needs editing.
 *
 * Optional per-variant "locked": defaults to !collected. Set it explicitly
 * only if you want a row tickable in the page without owning it yet.
 *
 * Data verified against Yugipedia JP card galleries (fetched 2026-08-01).
 * Scans are the per-rarity Japanese printings, downscaled to 400px wide.
 * "art" groups variants by illustration; "conf" is how confident the
 * artwork match is (high / med / low) — see README.
 */

const CARD_DATA = {
  rarities: {
    "C": {
      "color": "#666",
      "name": "Common (C)",
      "desc": "No foil. Plain matte card — no shine anywhere."
    },
    "R": {
      "color": "#aaa",
      "name": "Rare (R)",
      "desc": "Only the card name has a silver foil sheen. Artwork is flat matte."
    },
    "NPR": {
      "color": "#b8c6d9",
      "name": "Normal Parallel Rare (NPR)",
      "desc": "Whole card has a fine parallel/holo sparkle, but the name stays plain silver."
    },
    "SR": {
      "color": "#d0d0d0",
      "name": "Super Rare (SR)",
      "desc": "Artwork has a subtle holographic shimmer when tilted. Card name is plain text."
    },
    "SPR": {
      "color": "#dfe6ee",
      "name": "Super Parallel Rare (SPR)",
      "desc": "Super Rare artwork foil plus an all-over parallel sparkle."
    },
    "UR": {
      "color": "#ffd700",
      "name": "Ultra Rare (UR)",
      "desc": "Gold foil card name + holographic artwork. The name glints gold."
    },
    "UtR": {
      "color": "#e8c060",
      "name": "Ultimate Rare (UtR)",
      "desc": "Embossed raised texture on artwork and name — you can feel the bumps."
    },
    "ScR": {
      "color": "#c8b0ff",
      "name": "Secret Rare (ScR)",
      "desc": "Diagonal rainbow scratch/sparkle across the artwork."
    },
    "20ScR": {
      "color": "#9fd0ff",
      "name": "20th Secret Rare (20ScR)",
      "desc": "Secret Rare sparkle plus a red 20th-anniversary stamp."
    },
    "PScR": {
      "color": "#80eeff",
      "name": "Prismatic Secret Rare (PScR)",
      "desc": "Full prismatic rainbow shimmer — shifts through all colours as you tilt it."
    },
    "MLR": {
      "color": "#c8900a",
      "name": "Millennium Rare (MLR)",
      "desc": "Gold embossed texture — raised gold etching, like ancient Egyptian metal."
    },
    "CR": {
      "color": "#a0e8ff",
      "name": "Collector’s Rare (CR)",
      "desc": "Rippling wave foil — like light through water."
    },
    "PGR": {
      "color": "#ffe04a",
      "name": "Premium Gold Rare (PGR)",
      "desc": "Deep gold foil across the whole card."
    },
    "HGR": {
      "color": "#e0e0ff",
      "name": "Holographic Rare (HGR)",
      "desc": "Full-art holographic treatment used for attendance/promo cards."
    },
    "DSPR": {
      "color": "#9ad6c0",
      "name": "Duel Terminal Super Parallel (DSPR)",
      "desc": "Duel Terminal parallel foil, dispensed by the arcade machine."
    },
    "KCC": {
      "color": "#c0a0ff",
      "name": "Kaiba Corporation Card (KCC)",
      "desc": "Special KC-branded finish from the Duel Set."
    },
    "QCScR": {
      "color": "#ff88ff",
      "name": "Quarter Century Secret Rare (QCScR)",
      "desc": "Secret Rare sparkle PLUS the QC prismatic stamp. Most prestigious modern rarity."
    }
  },
  artworks: {
    "dmg1": {
      "order": 1,
      "label": "Original artwork",
      "note": "The classic close-up — hieroglyph ring behind, staff raised."
    },
    "dmg2": {
      "order": 2,
      "label": "Alternate — seated pose",
      "note": "Full body, seated against the hieroglyph disc, pink field."
    },
    "dmg3": {
      "order": 3,
      "label": "Alternate — action pose",
      "note": "Dynamic mid-leap pose on a red/orange field."
    },
    "dmg4": {
      "order": 4,
      "label": "Anniversary artwork",
      "note": "Bright yellow field, arm swept overhead."
    },
    "dmg5": {
      "order": 5,
      "label": "Alternate — concentric rings",
      "note": "Full body framed by magenta concentric rings."
    },
    "dmg-qcac-alt": {
      "order": 6,
      "label": "Quarter Century Art Collection alt art",
      "note": "New illustration commissioned for QCAC."
    },
    "ocg-711e": {
      "order": 7,
      "label": "7-Eleven campaign art",
      "note": "OCG-exclusive art from the 2025 7-Eleven collaboration."
    },
    "ocg-lpst": {
      "order": 8,
      "label": "Stamp Edition art",
      "note": "OCG-exclusive postage-stamp styled illustration."
    },
    "ocg-ddm-blue": {
      "order": 9,
      "label": "Dungeon Dice Monsters — wide shot",
      "note": "DDM promo, full-body framing with the hieroglyph ring. Blue colourway, in Secret and Ultimate Rare."
    },
    "ocg-ddm-green": {
      "order": 10,
      "label": "Dungeon Dice Monsters — mid shot",
      "note": "DDM promo, waist-up framing holding the staff. Green colourway, in Secret and Ultimate Rare."
    },
    "ocg-ddm-pink": {
      "order": 11,
      "label": "Dungeon Dice Monsters — close-up",
      "note": "DDM promo, tight facial framing. Pink colourway, in Secret and Ultimate Rare."
    },
    "ocg-hc01": {
      "order": 12,
      "label": "History Archive Collection art",
      "note": "OCG-exclusive art from History Archive Collection."
    },
    "ocg-qcuc": {
      "order": 13,
      "label": "QC Unity & Pride campaign art",
      "note": "OCG-exclusive campaign artwork."
    },
    "ocg-steel": {
      "order": 14,
      "label": "Special Card artwork",
      "note": "The \"Dark Magician Girl\" Special Card promo."
    },
    "toon1": {
      "order": 20,
      "label": "Toon artwork",
      "note": "The single Toon illustration."
    },
    "dk1": {
      "order": 30,
      "label": "Dragon Knight — original",
      "note": "Original Dragon Knight illustration."
    },
    "dk2": {
      "order": 31,
      "label": "Dragon Knight — alternate",
      "note": "Alternate Dragon Knight illustration."
    },
    "app1": {
      "order": 40,
      "label": "Magician's Apprentice artwork",
      "note": "The single Apprentice illustration."
    },
    "magi1": {
      "order": 50,
      "label": "Magi Magi ☆ Magician Gal artwork",
      "note": "The single Magi Magi illustration."
    },
    "unverified": {
      "order": 99,
      "label": "Unverified artwork",
      "note": "Not yet matched to a reference illustration — compare the scans and set \"art\" by hand."
    }
  },
  cards: [
    {
      "key": "dark-magician-girl",
      "en": "Dark Magician Girl",
      "jp": "ブラック・マジシャン・ガール",
      "sub": "DARK · Lv 6 · Spellcaster / Effect · ATK 2000 / DEF 1700",
      "yugipedia": "https://yugipedia.com/wiki/Card_Gallery:Dark_Magician_Girl",
      "printings": [
        {
          "code": "G3-11",
          "set": "Yu-Gi-Oh! Duel Monsters III: Tri-Holy God Advent Official Tournament Street Duel Legend of Power prize card",
          "year": "2000",
          "replica": false,
          "prize": true,
          "variants": [
            {
              "rarity": "R",
              "label": "Rare",
              "art": "dmg1",
              "conf": "med",
              "img": "artwork/cards/dark-magician-girl/G3-11-R.jpg",
              "collected": false
            },
            {
              "rarity": "ScR",
              "label": "Secret Rare",
              "art": "dmg1",
              "conf": "low",
              "img": "artwork/cards/dark-magician-girl/G3-11-ScR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "P4-01",
          "set": "Premium Pack 4",
          "year": "2000",
          "replica": true,
          "prize": false,
          "variants": [
            {
              "rarity": "UR",
              "label": "Ultra Rare",
              "art": "dmg1",
              "conf": "med",
              "img": "artwork/cards/dark-magician-girl/P4-01-UR-RP.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "DDM",
          "set": "Yu-Gi-Oh! Dungeon Dice Monsters promotional cards",
          "year": "2001",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "UtR",
              "label": "Ultimate Rare (Pink)",
              "art": "ocg-ddm-pink",
              "conf": "low",
              "img": "artwork/cards/dark-magician-girl/DDM-UtR-Pink.jpg",
              "collected": false
            },
            {
              "rarity": "UtR",
              "label": "Ultimate Rare (Green)",
              "art": "ocg-ddm-green",
              "conf": "low",
              "img": "artwork/cards/dark-magician-girl/DDM-UtR-Green.jpg",
              "collected": false
            },
            {
              "rarity": "UtR",
              "label": "Ultimate Rare (Blue)",
              "art": "ocg-ddm-blue",
              "conf": "low",
              "img": "artwork/cards/dark-magician-girl/DDM-UtR-Blue.jpg",
              "collected": false
            },
            {
              "rarity": "ScR",
              "label": "Secret Rare (Pink)",
              "art": "ocg-ddm-pink",
              "conf": "low",
              "img": "artwork/cards/dark-magician-girl/DDM-ScR-Pink.jpg",
              "collected": false
            },
            {
              "rarity": "ScR",
              "label": "Secret Rare (Green)",
              "art": "ocg-ddm-green",
              "conf": "low",
              "img": "artwork/cards/dark-magician-girl/DDM-ScR-Green.jpg",
              "collected": false
            },
            {
              "rarity": "ScR",
              "label": "Secret Rare (Blue)",
              "art": "ocg-ddm-blue",
              "conf": "low",
              "img": "artwork/cards/dark-magician-girl/DDM-ScR-Blue.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "YU-01",
          "set": "Structure Deck: Yugi",
          "year": "2001",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "SR",
              "label": "Super Rare",
              "art": "dmg5",
              "conf": "med",
              "img": "artwork/cards/dark-magician-girl/YU-01-SR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "LE5-002",
          "set": "Limited Edition 5",
          "year": "2003",
          "replica": true,
          "prize": false,
          "variants": [
            {
              "rarity": "UR",
              "label": "Ultra Rare",
              "art": "dmg2",
              "conf": "med",
              "img": "artwork/cards/dark-magician-girl/LE5-002-UR-RP.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "SY2-011",
          "set": "Structure Deck: Yugi Volume 2",
          "year": "2003",
          "replica": true,
          "prize": false,
          "variants": [
            {
              "rarity": "C",
              "label": "Common",
              "art": "dmg3",
              "conf": "med",
              "img": "artwork/cards/dark-magician-girl/SY2-011-C-RP.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "SD16-JPSE3",
          "set": "Structure Deck: Lord of Magician Limited Edition",
          "year": "2008",
          "replica": true,
          "prize": false,
          "variants": [
            {
              "rarity": "NPR",
              "label": "Normal Parallel Rare",
              "art": "dmg1",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/SD16-JPSE3-NPR-RP.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "YAP1-JP006",
          "set": "Anniversary Pack",
          "year": "2008",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "UR",
              "label": "Ultra Rare",
              "art": "dmg4",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/YAP1-JP006-UR.jpg",
              "collected": true
            }
          ]
        },
        {
          "code": "DT12-JP014",
          "set": "Duel Terminal - Xyz Startup!!",
          "year": "2011",
          "replica": true,
          "prize": false,
          "variants": [
            {
              "rarity": "DSPR",
              "label": "Duel Terminal Super Parallel",
              "art": "dmg2",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/DT12-JP014-DSPR-RP.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "15AY-JPA04",
          "set": "Memories of the Duel King: Duelist Kingdom Arc",
          "year": "2014",
          "replica": true,
          "prize": false,
          "variants": [
            {
              "rarity": "UR",
              "label": "Ultra Rare",
              "art": "dmg1",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/15AY-JPA04-UR-RP.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "15AY-JPB03",
          "set": "Memories of the Duel King: Battle City Arc",
          "year": "2014",
          "replica": true,
          "prize": false,
          "variants": [
            {
              "rarity": "UR",
              "label": "Ultra Rare (B)",
              "art": "dmg2",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/15AY-JPB03-UR-RP-B.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "15AX-JPM01",
          "set": "Duelist Road -Piece of Memory- Side: Yugi Muto",
          "year": "2015",
          "replica": true,
          "prize": false,
          "variants": [
            {
              "rarity": "ScR",
              "label": "Secret Rare",
              "art": "dmg1",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/15AX-JPM01-ScR-RP.jpg",
              "collected": false
            },
            {
              "rarity": "MLR",
              "label": "Millennium Rare",
              "art": "dmg1",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/15AX-JPM01-MLR-RP.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "15AY-JPC10",
          "set": "Memories of the Duel King: Ceremonial Battle Arc",
          "year": "2014",
          "replica": true,
          "prize": false,
          "variants": [
            {
              "rarity": "UR",
              "label": "Ultra Rare (C)",
              "art": "dmg3",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/15AY-JPC10-UR-RP-C.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "DP16-JP009",
          "set": "Duelist Pack: Battle City",
          "year": "2015",
          "replica": true,
          "prize": false,
          "variants": [
            {
              "rarity": "SR",
              "label": "Super Rare",
              "art": "dmg2",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/DP16-JP009-SR-RP.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "MB01-JP011",
          "set": "Millennium Box Gold Edition",
          "year": "2015",
          "replica": true,
          "prize": false,
          "variants": [
            {
              "rarity": "MLR",
              "label": "Millennium Rare",
              "art": "dmg1",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/MB01-JP011-MLR-RP.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "MVPL-JP001",
          "set": "Yu-Gi-Oh! The Dark Side of Dimensions Duel Set",
          "year": "2016",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "KCC",
              "label": "Kaiba Corporation Card",
              "art": "dmg5",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/MVPL-JP001-KCC.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "SDMY-JP011",
          "set": "Structure Deck: Yugi Muto",
          "year": "2016",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "C",
              "label": "Common",
              "art": "dmg1",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/SDMY-JP011-C.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "2017-JPP01",
          "set": "Yu-Gi-Oh! World Championship 2017 attendance cards",
          "year": "2017",
          "replica": false,
          "prize": true,
          "variants": [
            {
              "rarity": "HGR",
              "label": "Holographic Rare",
              "art": "dmg1",
              "conf": "med",
              "img": "artwork/cards/dark-magician-girl/2017-JPP01-HGR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "LG01-JP003",
          "set": "Yu-Gi-Oh! Duel Links Legend Deck Guide: Yami Yugi VS Seto Kaiba promotional cards",
          "year": "2017",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "C",
              "label": "Common",
              "art": "dmg1",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/LG01-JP003-C.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "YCPC-JP005",
          "set": "Yu-Gi-Oh! Chips",
          "year": "2018",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "C",
              "label": "Common",
              "art": "dmg1",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/YCPC-JP005-C.jpg",
              "collected": false
            },
            {
              "rarity": "MLR",
              "label": "Millennium Rare",
              "art": "dmg1",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/YCPC-JP005-MLR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "20TH-JPC55",
          "set": "20th Anniversary Legend Collection",
          "year": "2019",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "ScR",
              "label": "Secret Rare",
              "art": "dmg5",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/20TH-JPC55-ScR.jpg",
              "collected": false
            },
            {
              "rarity": "20ScR",
              "label": "20th Secret Rare",
              "art": "dmg5",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/20TH-JPC55-20ScR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "DMMD-JP001",
          "set": "Yu-Gi-Oh! Duelist and Monsters Memorial Disc Blu-ray & DVD promotional card",
          "year": "2019",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "20ScR",
              "label": "20th Secret Rare",
              "art": "dmg1",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/DMMD-JP001-20ScR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "DP23-JP000",
          "set": "Duelist Pack: Legend Duelist 6",
          "year": "2019",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "HGR",
              "label": "Holographic Rare",
              "art": "dmg2",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/DP23-JP000-HGR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "STEEL",
          "set": "\"Dark Magician Girl\" Special Card",
          "year": "2020",
          "replica": false,
          "prize": true,
          "variants": [
            {
              "rarity": "UR",
              "label": "Ultra Rare",
              "art": "ocg-steel",
              "conf": "low",
              "img": "artwork/cards/dark-magician-girl/STEEL-UR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "DR01-JPA02",
          "set": "Duel Royale Deck Set EX",
          "year": "2021",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "SR",
              "label": "Super Rare",
              "art": "dmg1",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/DR01-JPA02-SR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "HC01-JP003",
          "set": "History Archive Collection",
          "year": "2022",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "UR",
              "label": "Ultra Rare",
              "art": "ocg-hc01",
              "conf": "low",
              "img": "artwork/cards/dark-magician-girl/HC01-JP003-UR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "2023-JPP01",
          "set": "Yu-Gi-Oh! World Championship 2023 attendance cards",
          "year": "2023",
          "replica": false,
          "prize": true,
          "variants": [
            {
              "rarity": "QCScR",
              "label": "Quarter Century Secret Rare",
              "art": "dmg3",
              "conf": "med",
              "img": "artwork/cards/dark-magician-girl/2023-JPP01-QCScR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "QCDB-JP008",
          "set": "Quarter Century Duelist Box",
          "year": "2023",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "UR",
              "label": "Ultra Rare",
              "art": "dmg2",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/QCDB-JP008-UR.jpg",
              "collected": false
            },
            {
              "rarity": "ScR",
              "label": "Secret Rare",
              "art": "dmg2",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/QCDB-JP008-ScR.jpg",
              "collected": false
            },
            {
              "rarity": "QCScR",
              "label": "Quarter Century Secret Rare",
              "art": "dmg2",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/QCDB-JP008-QCScR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "WPP4-JP066",
          "set": "World Premiere Pack 2023",
          "year": "2023",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "QCScR",
              "label": "Quarter Century Secret Rare",
              "art": "dmg5",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/WPP4-JP066-QCScR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "CCC2-JP001",
          "set": "Coco's x Yu-Gi-Oh! Card Game Anniversary Campaign 2024 Part 1",
          "year": "2024",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "NPR",
              "label": "Normal Parallel Rare",
              "art": "dmg1",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/CCC2-JP001-NPR.jpg",
              "collected": true
            }
          ]
        },
        {
          "code": "QCCU-JP002",
          "set": "Quarter Century Chronicle side:Unity",
          "year": "2024",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "UR",
              "label": "Ultra Rare",
              "art": "dmg1",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/QCCU-JP002-UR.jpg",
              "collected": false
            },
            {
              "rarity": "UtR",
              "label": "Ultimate Rare",
              "art": "dmg1",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/QCCU-JP002-UtR.jpg",
              "collected": false
            },
            {
              "rarity": "ScR",
              "label": "Secret Rare",
              "art": "dmg1",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/QCCU-JP002-ScR.jpg",
              "collected": false
            },
            {
              "rarity": "QCScR",
              "label": "Quarter Century Secret Rare",
              "art": "dmg1",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/QCCU-JP002-QCScR.jpg",
              "collected": false
            },
            {
              "rarity": "QCScR",
              "label": "Quarter Century Secret Rare (Alt Art)",
              "art": "dmg5",
              "conf": "med",
              "img": "artwork/cards/dark-magician-girl/QCCU-JP002-QCScR-AA.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "QCUC-JP002",
          "set": "Quarter Century Unity & Pride Campaign side:Unity",
          "year": "2024",
          "replica": false,
          "prize": true,
          "variants": [
            {
              "rarity": "QCScR",
              "label": "Quarter Century Secret Rare",
              "art": "ocg-qcuc",
              "conf": "low",
              "img": "artwork/cards/dark-magician-girl/QCUC-JP002-QCScR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "711E-JP002",
          "set": "Yu-Gi-Oh! Card Game x 7-Eleven 2025 Collaboration Campaign",
          "year": "2025",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "NPR",
              "label": "Normal Parallel Rare",
              "art": "ocg-711e",
              "conf": "low",
              "img": "artwork/cards/dark-magician-girl/711E-JP002-NPR.jpg",
              "collected": true
            }
          ]
        },
        {
          "code": "LPST-JP002",
          "set": "Limited Pack: Stamp Edition",
          "year": "2025",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "UR",
              "label": "Ultra Rare",
              "art": "ocg-lpst",
              "conf": "low",
              "img": "artwork/cards/dark-magician-girl/LPST-JP002-UR.jpg",
              "collected": false
            },
            {
              "rarity": "PScR",
              "label": "Prismatic Secret Rare",
              "art": "ocg-lpst",
              "conf": "low",
              "img": "artwork/cards/dark-magician-girl/LPST-JP002-PScR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "QCAC-JP019",
          "set": "Quarter Century Art Collection",
          "year": "2025",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "UR",
              "label": "Ultra Rare",
              "art": "dmg1",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/QCAC-JP019-UR.jpg",
              "collected": false
            },
            {
              "rarity": "ScR",
              "label": "Secret Rare",
              "art": "dmg1",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/QCAC-JP019-ScR.jpg",
              "collected": false
            },
            {
              "rarity": "ScR",
              "label": "Secret Rare (Alt Art)",
              "art": "dmg-qcac-alt",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/QCAC-JP019-ScR-AA.jpg",
              "collected": false
            },
            {
              "rarity": "QCScR",
              "label": "Quarter Century Secret Rare",
              "art": "dmg-qcac-alt",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/QCAC-JP019-QCScR.jpg",
              "collected": false
            },
            {
              "rarity": "QCScR",
              "label": "Quarter Century Secret Rare (Alt Art)",
              "art": "dmg2",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/QCAC-JP019-QCScR-AA.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "TTP1-JP005",
          "set": "Tactical-Try Pack: Dark Magic / HERO / Mikanko",
          "year": "2025",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "R",
              "label": "Rare",
              "art": "dmg1",
              "conf": "high",
              "img": "artwork/cards/dark-magician-girl/TTP1-JP005-R.jpg",
              "collected": false
            }
          ]
        }
      ]
    },
    {
      "key": "toon-dark-magician-girl",
      "en": "Toon Dark Magician Girl",
      "jp": "トゥーン・ブラック・マジシャン・ガール",
      "sub": "DARK · Lv 6 · Spellcaster / Toon / Effect · ATK 2000 / DEF 1700",
      "yugipedia": "https://yugipedia.com/wiki/Card_Gallery:Toon_Dark_Magician_Girl",
      "printings": [
        {
          "code": "G6-02",
          "set": "Yu-Gi-Oh! Duel Monsters 6: Expert 2 promotional cards",
          "year": "2001",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "UR",
              "label": "Ultra Rare",
              "art": "toon1",
              "conf": "high",
              "img": "artwork/cards/toon-dark-magician-girl/G6-02-UR.jpg",
              "collected": false
            },
            {
              "rarity": "ScR",
              "label": "Secret Rare",
              "art": "toon1",
              "conf": "high",
              "img": "artwork/cards/toon-dark-magician-girl/G6-02-ScR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "BE02-JP207",
          "set": "Beginner's Edition 2 (2011)",
          "year": "2011",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "ScR",
              "label": "Secret Rare",
              "art": "toon1",
              "conf": "high",
              "img": "artwork/cards/toon-dark-magician-girl/BE02-JP207-ScR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "DP16-JP042",
          "set": "Duelist Pack: Battle City",
          "year": "2015",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "R",
              "label": "Rare",
              "art": "toon1",
              "conf": "high",
              "img": "artwork/cards/toon-dark-magician-girl/DP16-JP042-R.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "PGB1-JP021",
          "set": "Prismatic God Box",
          "year": "2020",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "MLR",
              "label": "Millennium Rare",
              "art": "toon1",
              "conf": "high",
              "img": "artwork/cards/toon-dark-magician-girl/PGB1-JP021-MLR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "QCLP-JP010",
          "set": "Quarter Century Limited Pack",
          "year": "2024",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "UR",
              "label": "Ultra Rare (Original Layout, OriginalLayout)",
              "art": "toon1",
              "conf": "high",
              "img": "artwork/cards/toon-dark-magician-girl/QCLP-JP010-UR-OriginalLayout.jpg",
              "collected": false
            },
            {
              "rarity": "UR",
              "label": "Ultra Rare",
              "art": "toon1",
              "conf": "high",
              "img": "artwork/cards/toon-dark-magician-girl/QCLP-JP010-UR.jpg",
              "collected": false
            },
            {
              "rarity": "ScR",
              "label": "Secret Rare",
              "art": "toon1",
              "conf": "high",
              "img": "artwork/cards/toon-dark-magician-girl/QCLP-JP010-ScR.jpg",
              "collected": true
            },
            {
              "rarity": "QCScR",
              "label": "Quarter Century Secret Rare",
              "art": "toon1",
              "conf": "high",
              "img": "artwork/cards/toon-dark-magician-girl/QCLP-JP010-QCScR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "RV01-JP013",
          "set": "Revolution Booster: Toon / Witchcrafter / Unchained",
          "year": "2026",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "C",
              "label": "Common",
              "art": "toon1",
              "conf": "high",
              "img": "artwork/cards/toon-dark-magician-girl/RV01-JP013-C.jpg",
              "collected": false
            },
            {
              "rarity": "ScR",
              "label": "Secret Rare",
              "art": "toon1",
              "conf": "high",
              "img": "artwork/cards/toon-dark-magician-girl/RV01-JP013-ScR.jpg",
              "collected": true
            }
          ]
        }
      ]
    },
    {
      "key": "dmg-the-dragon-knight",
      "en": "Dark Magician Girl the Dragon Knight",
      "jp": "竜騎士ブラック・マジシャン・ガール",
      "sub": "DARK · Lv 8 · Dragon / Fusion / Effect · ATK 2600 / DEF 1700",
      "yugipedia": "https://yugipedia.com/wiki/Card_Gallery:Dark_Magician_Girl_the_Dragon_Knight",
      "printings": [
        {
          "code": "CPL1-JP004",
          "set": "Collectors Pack: Duelist of Legend Version",
          "year": "2014",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "UR",
              "label": "Ultra Rare",
              "art": "dk2",
              "conf": "high",
              "img": "artwork/cards/dmg-the-dragon-knight/CPL1-JP004-UR.jpg",
              "collected": false
            },
            {
              "rarity": "CR",
              "label": "Collector's Rare",
              "art": "dk2",
              "conf": "high",
              "img": "artwork/cards/dmg-the-dragon-knight/CPL1-JP004-CR.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "RC03-JP020",
          "set": "Rarity Collection Premium Gold Edition",
          "year": "2020",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "UR",
              "label": "Ultra Rare",
              "art": "dk2",
              "conf": "high",
              "img": "artwork/cards/dmg-the-dragon-knight/RC03-JP020-UR.jpg",
              "collected": false
            },
            {
              "rarity": "ScR",
              "label": "Secret Rare",
              "art": "dk1",
              "conf": "high",
              "img": "artwork/cards/dmg-the-dragon-knight/RC03-JP020-ScR.jpg",
              "collected": false
            },
            {
              "rarity": "CR",
              "label": "Collector's Rare",
              "art": "dk1",
              "conf": "high",
              "img": "artwork/cards/dmg-the-dragon-knight/RC03-JP020-CR.jpg",
              "collected": false
            },
            {
              "rarity": "PGR",
              "label": "Premium Gold Rare",
              "art": "dk2",
              "conf": "high",
              "img": "artwork/cards/dmg-the-dragon-knight/RC03-JP020-PGR.jpg",
              "collected": false
            },
            {
              "rarity": "PGR",
              "label": "Premium Gold Rare (Alt Art)",
              "art": "dk1",
              "conf": "high",
              "img": "artwork/cards/dmg-the-dragon-knight/RC03-JP020-PGR-AA.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "PAC1-JP023",
          "set": "Prismatic Art Collection",
          "year": "2021",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "SR",
              "label": "Super Rare",
              "art": "dk2",
              "conf": "high",
              "img": "artwork/cards/dmg-the-dragon-knight/PAC1-JP023-SR.jpg",
              "collected": false
            },
            {
              "rarity": "ScR",
              "label": "Secret Rare",
              "art": "dk2",
              "conf": "high",
              "img": "artwork/cards/dmg-the-dragon-knight/PAC1-JP023-ScR.jpg",
              "collected": false
            },
            {
              "rarity": "ScR",
              "label": "Secret Rare (Alt Art)",
              "art": "dk1",
              "conf": "high",
              "img": "artwork/cards/dmg-the-dragon-knight/PAC1-JP023-ScR-AA.jpg",
              "collected": false
            },
            {
              "rarity": "PScR",
              "label": "Prismatic Secret Rare",
              "art": "dk2",
              "conf": "high",
              "img": "artwork/cards/dmg-the-dragon-knight/PAC1-JP023-PScR.jpg",
              "collected": true
            },
            {
              "rarity": "PScR",
              "label": "Prismatic Secret Rare (Alt Art)",
              "art": "dk1",
              "conf": "high",
              "img": "artwork/cards/dmg-the-dragon-knight/PAC1-JP023-PScR-AA.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "QCAC-JP020",
          "set": "Quarter Century Art Collection",
          "year": "2025",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "SR",
              "label": "Super Rare",
              "art": "dk2",
              "conf": "high",
              "img": "artwork/cards/dmg-the-dragon-knight/QCAC-JP020-SR.jpg",
              "collected": true
            },
            {
              "rarity": "ScR",
              "label": "Secret Rare",
              "art": "dk2",
              "conf": "high",
              "img": "artwork/cards/dmg-the-dragon-knight/QCAC-JP020-ScR.jpg",
              "collected": false
            },
            {
              "rarity": "ScR",
              "label": "Secret Rare (Alt Art)",
              "art": "dk1",
              "conf": "high",
              "img": "artwork/cards/dmg-the-dragon-knight/QCAC-JP020-ScR-AA.jpg",
              "collected": false
            },
            {
              "rarity": "QCScR",
              "label": "Quarter Century Secret Rare",
              "art": "dk2",
              "conf": "high",
              "img": "artwork/cards/dmg-the-dragon-knight/QCAC-JP020-QCScR.jpg",
              "collected": false
            },
            {
              "rarity": "QCScR",
              "label": "Quarter Century Secret Rare (Alt Art)",
              "art": "dk1",
              "conf": "high",
              "img": "artwork/cards/dmg-the-dragon-knight/QCAC-JP020-QCScR-AA.jpg",
              "collected": false
            }
          ]
        },
        {
          "code": "TTP1-JP014",
          "set": "Tactical-Try Pack: Dark Magic / HERO / Mikanko",
          "year": "2025",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "C",
              "label": "Common",
              "art": "dk2",
              "conf": "high",
              "img": "artwork/cards/dmg-the-dragon-knight/TTP1-JP014-C.jpg",
              "collected": true
            }
          ]
        }
      ]
    },
    {
      "key": "dmg-the-magicians-apprentice",
      "en": "Dark Magician Girl the Magician's Apprentice",
      "jp": "魔術師の弟子－ブラック・マジシャン・ガール",
      "sub": "DARK · Lv 6 · Spellcaster / Effect · ATK 2000 / DEF 1700",
      "yugipedia": "https://yugipedia.com/wiki/Card_Gallery:Dark_Magician_Girl_the_Magician's_Apprentice",
      "printings": [
        {
          "code": "ALIN-JP004",
          "set": "Alliance Insight",
          "year": "2025",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "UR",
              "label": "Ultra Rare",
              "art": "app1",
              "conf": "high",
              "img": "artwork/cards/dmg-the-magicians-apprentice/ALIN-JP004-UR.jpg",
              "collected": true
            },
            {
              "rarity": "UR",
              "label": "Ultra Rare (+1 Bonus Pack)",
              "art": "app1",
              "conf": "high",
              "img": "artwork/cards/dmg-the-magicians-apprentice/ALIN-JP004-UR.jpg",
              "collected": false
            },
            {
              "rarity": "UtR",
              "label": "Ultimate Rare",
              "art": "app1",
              "conf": "high",
              "img": "artwork/cards/dmg-the-magicians-apprentice/ALIN-JP004-UtR.jpg",
              "collected": true
            },
            {
              "rarity": "ScR",
              "label": "Secret Rare",
              "art": "app1",
              "conf": "high",
              "img": "artwork/cards/dmg-the-magicians-apprentice/ALIN-JP004-ScR.jpg",
              "collected": false
            },
            {
              "rarity": "QCScR",
              "label": "Quarter Century Secret Rare",
              "art": "app1",
              "conf": "high",
              "img": "artwork/cards/dmg-the-magicians-apprentice/ALIN-JP004-QCScR.jpg",
              "collected": false
            },
            {
              "rarity": "QCScR",
              "label": "Quarter Century Secret Rare (+1 Bonus Pack)",
              "art": "app1",
              "conf": "high",
              "img": "artwork/cards/dmg-the-magicians-apprentice/ALIN-JP004-QCScR.jpg",
              "collected": false
            }
          ]
        }
      ]
    },
    {
      "key": "magi-magi-magician-gal",
      "en": "Magi Magi ☆ Magician Gal",
      "jp": "魔導法士 ジュノン",
      "sub": "DARK · Rank 6 · Spellcaster / Xyz / Effect · ATK 2400 / DEF 2000",
      "yugipedia": "https://yugipedia.com/wiki/Card_Gallery:Magi_Magi_%E2%98%86_Magician_Gal",
      "printings": [
        {
          "code": "WJMP-JP018",
          "set": "Weekly Shōnen Jump 2012, Issue 2 promotional card",
          "year": "2011",
          "replica": false,
          "prize": false,
          "variants": [
            {
              "rarity": "UR",
              "label": "Ultra Rare",
              "art": "magi1",
              "conf": "high",
              "img": "artwork/cards/magi-magi-magician-gal/WJMP-JP018-UR.jpg",
              "collected": true
            }
          ]
        }
      ]
    }
  ]
};

/* `const` at top level does not attach to window, so publish it explicitly. */
if (typeof window !== 'undefined') { window.CARD_DATA = CARD_DATA; }
if (typeof module !== 'undefined') { module.exports = CARD_DATA; }
