// Shared user data — "Le Ravitailleur" persona.
// Famille de 4, courses hebdo, gros paniers, rayon n°1 = Fruits & Légumes.
// Tous les chiffres sont fictifs mais cohérents.

const USER = {
  firstName: "Julie",
  year: 2026,

  // Écran 2 — Année en un coup d'œil + magasin
  visits: 58,
  spent: 4280,
  saved: 312,
  products: 892,
  store: {
    name: "Grand Frais Vénissieux",
    rank: "14ème client·e le plus fidèle",
  },

  // Écran 3 — Rayon n°1 + podium
  topAisle: {
    name: "Fruits & Légumes",
    emoji: "🥬",
    share: 41,
    color: "#0E7C4C",
    colorSoft: "#CDE6B6",
    blurb: "Tu as passé plus de temps au rayon frais que certains Français à la plage.",
    podium: [
      { name: "Fruits & Légumes", emoji: "🥬", pct: 41 },
      { name: "Boucherie",        emoji: "🥩", pct: 19 },
      { name: "Crèmerie",         emoji: "🥛", pct: 16 },
    ],
  },

  // Écran 4 — Âge selon tes courses
  ageScore: {
    value: 38,
    label: "maman de famille",
    tags: ["Compote en gourdes", "Jambon blanc ×24", "Bolognaise du dimanche"],
    blurb: "Jambon, compotes, pâtes en 1 kg… Tu es la logistique d'une tribu.",
  },

  // Écran 5 — Chiffre improbable
  absurdStat: {
    product: "Pommes de terre",
    emoji: "🥔",
    produceLabel: "POMME",
    amount: "62 kg",
    equivalence: "C'est le poids moyen d'un adulte. Tu pourrais sculpter une Julie en purée.",
  },

  // Écran 6 — Profil culinaire
  profile: {
    name: "Le Ravitailleur",
    emoji: "",
    tagline: "Tu ne fais pas tes courses. Tu approvisionnes.",
    blurb: "Grand panier, liste maîtrisée, efficacité militaire. La tribu compte sur toi et ça se voit.",
    gradient: ["#FBBA00", "#E51F22"],
    ink: "#292929",
    highlights: [
      { v: "892",  l: "produits / an" },
      { v: "58",   l: "visites" },
      { v: "15,4", l: "produits / visite" },
    ],
  },

  // Écran 7 — Tes produits de l'année (carrousel 3 cards)
  productCards: [
    {
      kind: "phare",
      badge: "🏆",
      title: "Le Produit Phare",
      subtitle: "Celui que tu achètes le plus",
      name: "Pesto Roquette & Noix",
      imgSrc: "icons/pesto.png",
      count: "38",
      countLabel: "achats cette année",
      quip: "Une découverte. Maintenant c'est une religion.",
      bg: "#F4C65A",        // doré
      ink: "#292929",
      accent: "#8E5A00",
    },
    {
      kind: "coupable",
      badge: "🍫",
      title: "Le Plaisir Coupable",
      subtitle: "Celui que tu achètes en douce",
      name: "Cookies chocolat",
      label: "COOKIE",
      count: "32",
      countLabel: "achats cette année",
      quip: "On ne juge pas. Enfin, un peu.",
      bg: "#D96C8F",        // rose gourmand
      ink: "#FFFEF5",
      accent: "#FFE6EE",
    },
    {
      kind: "improbable",
      badge: "❓",
      title: "Le Produit Improbable",
      subtitle: "Celui qu'on n'explique pas",
      name: "Lait de chèvre en poudre",
      label: "CONFITURE",
      count: "7",
      countLabel: "achats cette année",
      quip: "On aimerait bien comprendre.",
      bg: "#3A3A3A",        // mystère
      ink: "#FFFEF5",
      accent: "#CDD508",
    },
  ],

  // Écran 8 — Exploits Mon Fridge
  fridge: {
    universes:  3,
    characters: 7,
    quizz:      42,
    games:      156,
    badges:     12,
    rank:       "top 8%",
    top3: [
      { name: "Pingouin Chef",     emoji: "🐧" },
      { name: "Crabe Épicier",     emoji: "🦀" },
      { name: "Renard Forestier",  emoji: "🦊" },
    ],
  },

  // Écran 9 — Playlist
  playlist: [
    { name: "Gratin dauphinois familial",  tag: "Parce que 62 kg de pommes de terre",   dur: "50 min", diff: "Facile",
      img: "icons/recipes/gratin.jpg" },
    { name: "Bolognaise du dimanche",       tag: "Ton rituel famille",                   dur: "1h15",   diff: "Facile",
      img: "icons/recipes/bolognaise.webp" },
    { name: "Tartine houmous-radis",        tag: "Pour ton côté Ravitailleur",           dur: "10 min", diff: "Facile",
      img: "icons/recipes/houmous.webp" },
    { name: "Poulet rôti aux légumes",      tag: "Parce que dimanche, c'est dimanche",   dur: "1h10",   diff: "Facile",
      img: "icons/recipes/poulet.webp" },
    { name: "Soupe poireau-pomme de terre", tag: "Ton rayon F&L adore",                  dur: "35 min", diff: "Facile",
      img: "icons/recipes/soupe.jpg" },
    { name: "Tarte tomate-moutarde",        tag: "Parce que tomates = été = joie",       dur: "40 min", diff: "Facile",
      img: "icons/recipes/tarte.jpg" },
    { name: "Cookies du goûter",            tag: "Jamais assez, avec 4 à nourrir",       dur: "25 min", diff: "Très facile",
      img: "icons/recipes/cookies.webp" },
  ],
};

Object.assign(window, { USER });
