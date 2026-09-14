export interface Visual {
  src: string
  alt: string
}

const unitCovers: Record<number, Visual> = {
  0: { src: '/images/covers/u0.jpg', alt: 'Travel notes and a camera' },
  1: { src: '/images/covers/u1.jpg', alt: 'Friends at a café' },
  2: { src: '/images/covers/u2.jpg', alt: 'An office workspace' },
  3: { src: '/images/covers/u3.jpg', alt: 'Paris rooftops' },
  4: { src: '/images/covers/u4.jpg', alt: 'A family around a table' },
  5: { src: '/images/covers/u5.jpg', alt: 'Breakfast at home' },
  6: { src: '/images/covers/u6.jpg', alt: 'Clothes in a shop' },
  7: { src: '/images/covers/u7.jpg', alt: 'A restaurant table' },
  8: { src: '/images/covers/u8.jpg', alt: 'A tent in the mountains' },
  90: { src: '/images/covers/grammar.jpg', alt: 'A notebook and a pen' },
  91: { src: '/images/covers/vocab.jpg', alt: 'A stack of books' },
  92: { src: '/images/covers/communication.jpg', alt: 'Friends talking' },
}

export const homeHero: Visual = {
  src: '/images/covers/home.jpg',
  alt: 'Coffee cups on a café table',
}

export const howImages: Record<string, Visual> = {
  open: { src: '/images/how/open.jpg', alt: 'Students working together' },
  lessons: { src: '/images/how/lessons.jpg', alt: 'A child reading' },
  daily: { src: '/images/how/daily.jpg', alt: 'A cup of coffee' },
  project: { src: '/images/how/project.jpg', alt: 'Friends talking' },
  bilan: { src: '/images/how/bilan.jpg', alt: 'Notes on a desk' },
}

export const extraCovers: Record<string, Visual> = {
  'delf-1': { src: '/images/covers/delf.jpg', alt: 'Study notes' },
  'delf-2': { src: '/images/covers/delf.jpg', alt: 'Study notes' },
  resources: { src: '/images/covers/vocab.jpg', alt: 'Books for practice' },
}

const people: Record<string, Visual> = {
  lina: { src: '/images/people/lina.jpg', alt: 'Lina' },
  maya: { src: '/images/people/maya.jpg', alt: 'Maya' },
  noah: { src: '/images/people/noah.jpg', alt: 'Noah' },
  tom: { src: '/images/people/tom.jpg', alt: 'Tom' },
  serveuse: { src: '/images/people/server.jpg', alt: 'Serveuse' },
  serveur: { src: '/images/people/server.jpg', alt: 'Serveur' },
  réceptionniste: { src: '/images/people/host.jpg', alt: 'Réceptionniste' },
  receptionniste: { src: '/images/people/host.jpg', alt: 'Réceptionniste' },
  agent: { src: '/images/people/agent.jpg', alt: 'Agent' },
  vendeur: { src: '/images/people/agent.jpg', alt: 'Vendeur' },
  vendeuse: { src: '/images/people/host.jpg', alt: 'Vendeuse' },
  visiteur: { src: '/images/people/tom.jpg', alt: 'Visiteur' },
  resto: { src: '/images/people/server.jpg', alt: 'Restaurant' },
  employe: { src: '/images/people/agent.jpg', alt: 'Employé' },
  caisse: { src: '/images/people/host.jpg', alt: 'Caisse' },
  cliente: { src: '/images/people/maya.jpg', alt: 'Cliente' },
}

const topics: { keys: string[]; src: string; alt: string }[] = [
  { keys: ['croissant'], src: '/images/topics/croissant.jpg', alt: 'Croissants' },
  { keys: ['café', 'cafe', 'coffee', 'espresso'], src: '/images/topics/coffee.jpg', alt: 'Coffee' },
  { keys: ['thé', 'the ', 'tea'], src: '/images/topics/tea.jpg', alt: 'Tea' },
  { keys: ['pain', 'baguette', 'beurre', 'bread'], src: '/images/topics/bread.jpg', alt: 'Bread' },
  { keys: ['bacon', 'œuf', 'oeuf', 'petit-déjeuner', 'petit dejeuner', 'breakfast'], src: '/images/topics/breakfast.jpg', alt: 'Breakfast' },
  { keys: ['salade', 'légume', 'legume', 'tomate', 'ingrédient', 'ingredient'], src: '/images/topics/salad.jpg', alt: 'Salad' },
  { keys: ['pizza'], src: '/images/topics/pizza.jpg', alt: 'Pizza' },
  { keys: ['restaurant', 'resto', 'entrée', 'entree', 'dessert', 'plat du jour', 'menu', 'serveur'], src: '/images/topics/restaurant.jpg', alt: 'Restaurant' },
  { keys: ['table', 'fourchette', 'couteau', 'assiette', 'serviette'], src: '/images/topics/table.jpg', alt: 'A set table' },
  { keys: ['cuisine', 'recette', 'poêle', 'poele', 'casserole', 'cuillère', 'cuillere', 'bol'], src: '/images/topics/kitchen.jpg', alt: 'A kitchen' },
  { keys: ['marché', 'marche', 'courses', 'légumes'], src: '/images/topics/market.jpg', alt: 'A market' },
  { keys: ['train', 'gare', 'tgv', 'billet'], src: '/images/topics/train.jpg', alt: 'A train' },
  { keys: ['avion', 'vol', 'aéroport', 'aeroport', 'embarquement', 'pilote'], src: '/images/topics/plane.jpg', alt: 'A plane' },
  { keys: ['valise', 'bagage', 'sac à dos', 'sac a dos'], src: '/images/topics/suitcase.jpg', alt: 'A suitcase' },
  { keys: ['hôtel', 'hotel', 'chambre', 'réception', 'reception'], src: '/images/topics/hotel.jpg', alt: 'A hotel room' },
  { keys: ['pleut', 'pluie', 'parapluie', 'averse'], src: '/images/topics/rain.jpg', alt: 'Rain' },
  { keys: ['neige', 'froid', 'glacier'], src: '/images/topics/snow.jpg', alt: 'Snow' },
  { keys: ['forêt', 'foret', 'arbre'], src: '/images/topics/forest.jpg', alt: 'A forest' },
  { keys: ['désert', 'desert'], src: '/images/topics/desert.jpg', alt: 'A desert' },
  { keys: ['montagne', 'tente', 'randonnée', 'randonnee', 'expedition', 'expédition'], src: '/images/topics/mountain.jpg', alt: 'Mountains' },
  { keys: ['vêtement', 'vetement', 'robe', 'chemise', 'jupe', 'pantalon', 'pull', 'écharpe', 'echarpe', 'mode'], src: '/images/topics/clothes.jpg', alt: 'Clothes' },
  { keys: ['vélo', 'velo', 'bicyclette'], src: '/images/topics/bike.jpg', alt: 'A bicycle' },
  { keys: ['passeport', 'visa', 'identité', 'identite', 'permis'], src: '/images/topics/passport.jpg', alt: 'Travel documents' },
  { keys: ['ville', 'quartier', 'arrondissement', 'paris', 'lyon', 'métro', 'metro'], src: '/images/topics/city.jpg', alt: 'A city street' },
  { keys: ['famille', 'parents', 'frère', 'frere', 'sœur', 'soeur', 'marié', 'marie', 'enfant'], src: '/images/topics/family.jpg', alt: 'A family' },
  { keys: ['téléphone', 'telephone', 'texto', 'appel', 'allô', 'allo'], src: '/images/topics/phone.jpg', alt: 'A phone' },
  { keys: ['heure', 'horloge', 'matin', 'demain', 'samedi'], src: '/images/topics/clock.jpg', alt: 'A clock' },
  { keys: ['grammaire', 'verbe', 'adjectif', 'article', 'carnet', 'cahier'], src: '/images/topics/notebook.jpg', alt: 'A notebook' },
  { keys: ['bonjour', 'salut', 'au revoir', 'hello', 'greeting', 'politesse'], src: '/images/covers/communication.jpg', alt: 'People talking' },
  { keys: ['métier', 'metier', 'travail', 'bureau', 'office', 'job'], src: '/images/covers/u2.jpg', alt: 'A workspace' },
  { keys: ['alphabet', 'lettre', 'épeler', 'epeler', 'spell'], src: '/images/topics/notebook.jpg', alt: 'Letters in a notebook' },
  { keys: ['météo', 'meteo', 'soleil', 'weather'], src: '/images/topics/rain.jpg', alt: 'Weather' },
  { keys: ['sport', 'gym', 'concert', 'danse', 'dance'], src: '/images/topics/bike.jpg', alt: 'Sport' },
  { keys: ['prix', 'euro', 'payer', 'promotion', 'solde'], src: '/images/topics/market.jpg', alt: 'Prices at a market' },
  { keys: ['appartement', 'maison', 'habite', 'logement'], src: '/images/topics/hotel.jpg', alt: 'A home' },
  { keys: ['nationalité', 'nationalite', 'pays', 'identité', 'identite'], src: '/images/topics/passport.jpg', alt: 'Identity documents' },
]

export const kindEmoji: Record<string, string> = {
  flashcards: '🃏',
  quiz: '✅',
  dialogue: '💬',
  matching: '🔗',
  alphabet: '🔤',
  listen: '🎧',
  'greetings-map': '🌍',
  spell: '✍️',
}

export function coverForUnit(unitId: number): Visual {
  return unitCovers[unitId] ?? homeHero
}

export function imageForText(...parts: Array<string | undefined>): Visual | undefined {
  const hay = parts.filter(Boolean).join(' ').toLowerCase()
  if (!hay) return undefined
  for (const topic of topics) {
    if (topic.keys.some((key) => hay.includes(key))) {
      return { src: topic.src, alt: topic.alt }
    }
  }
  return undefined
}

export function imageForTextOrUnit(unitId: number, ...parts: Array<string | undefined>): Visual {
  return imageForText(...parts) ?? coverForUnit(unitId)
}

export function avatarFor(speaker: string): Visual {
  const key = speaker
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(/[\s/]+/)[0]
  if (people[speaker.toLowerCase()]) return people[speaker.toLowerCase()]
  if (people[key]) return people[key]
  const fallbacks = [people.lina, people.noah, people.maya, people.tom]
  const index = Math.abs([...speaker].reduce((sum, char) => sum + char.charCodeAt(0), 0)) % fallbacks.length
  return { ...fallbacks[index], alt: speaker }
}
