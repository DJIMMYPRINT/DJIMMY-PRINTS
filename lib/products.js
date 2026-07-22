// Single source of truth for the product catalog.
// catalogue.js (full detail: desc, techniques, popular badge) and
// commande.js (order wizard: just needs emoji/name/price) both import this
// same array, so adding, removing, or repricing a product only needs to
// happen in one place instead of staying in sync across two files by hand.
export const PRODUCTS = [
  { emoji: '👕', name: 'Polo', photo: 'polo1.jpeg', price: 2400, desc: 'Piqué coton 220g/m². Col côtelé, fermeture 3 boutons.', techniques: ['Broderie','Sérigraphie','Transfert'], popular: true },
  { emoji: '👕', name: 'T-shirt', photo: 'tshirt1.jpeg', price: 1950, desc: 'Coton 180g/m². Col rond renforcé. Idéal pour équipes.', techniques: ['Sérigraphie','Transfert','Sublimation'] },
  { emoji: '🥼', name: 'Combinaison', photo: 'combinaison1.png', price: 4900, desc: 'Combinaison de travail complète. Multipoches, résistante.', techniques: ['Broderie','Sérigraphie'] },
  { emoji: '🧥', name: 'Veste', photo: 'veste1.jpeg', price: 3000, desc: 'Softshell imperméable. Idéal pour équipes terrain.', techniques: ['Broderie','Flocage'] },
  { emoji: '👖', name: 'Pantalon', photo: 'pantalon1.jpeg', price: 2500, desc: 'Tissu pro résistant. Tailles S→3XL. Multiple coloris.', techniques: ['Broderie','Transfert'] },
  { emoji: '🥼', name: 'Tablier', photo: 'tablier1.jpeg', price: 2200, desc: 'Coton épais 280g/m². Protection totale, look cuisine pro.', techniques: ['Broderie','Sérigraphie'], popular: true },
  { emoji: '🦺', name: 'Gilet avec col', photo: 'gilet1.jpeg', price: 2700, desc: 'Gilet multipoches avec col. Style corporate ou terrain.', techniques: ['Broderie','Sérigraphie'] },
  { emoji: '🦺', name: 'Gilet sans col', photo: 'gilet2.jpeg', price: 2300, desc: 'Gilet multipoches sans col. Léger, coupe droite.', techniques: ['Broderie','Sérigraphie'] },
  { emoji: '🧢', name: 'Casquette', photo: 'casquette1.png', price: 1150, desc: 'Coton structuré. Réglable, 6 panneaux.', techniques: ['Broderie','Flocage'] },
]

