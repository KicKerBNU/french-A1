import type { ExtraSection, Labeled, UnitMeta } from '@/types/course'

export const course = {
  name: 'Premiers pas',
  level: 'A1',
  cefr: 'CEFR A1',
  unitCount: 9,
  thematicUnits: 8,
}

export const units: UnitMeta[] = [
  {
    id: 0,
    slug: 'tour-du-monde',
    title: 'Tour du monde en français',
    titleEn: 'Around the French-speaking world',
    page: 10,
    available: true,
    accent: '#2c5c4f',
    blurb: {
      fr: 'Entre dans le français par les salutations, l’alphabet et le monde francophone.',
      en: 'Start French with greetings, the alphabet, and a first look at the French-speaking world.',
    },
    culture: [
      { fr: 'Le monde francophone', en: 'The French-speaking world' },
      { fr: 'Afrique, Asie, Amériques, Europe', en: 'Africa, Asia, the Americas, Europe' },
      { fr: 'Voix francophones et villes', en: 'Francophone voices and cities' },
    ],
    vocabulary: [
      { fr: 'Les salutations', en: 'Greetings' },
      { fr: 'Les expressions de politesse', en: 'Polite phrases' },
      { fr: 'Allô et bienvenue (Canada)', en: 'Allô and bienvenue (Canada)' },
      { fr: 'Les jours et les mois', en: 'Days and months' },
      { fr: 'Les verbes de la classe', en: 'Classroom verbs' },
    ],
    interactions: [
      { fr: 'Saluer et prendre congé', en: 'Say hello and goodbye' },
      { fr: 'Remercier', en: 'Say thank you' },
      { fr: 'S’excuser', en: 'Apologize' },
    ],
    grammar: [],
    phonetics: [{ fr: 'L’alphabet', en: 'The alphabet' }],
    dailyLife: [
      { fr: 'Les consignes dans la classe', en: 'Classroom instructions' },
      { fr: 'Comprendre un nom et un prénom', en: 'Understand first and last names' },
      { fr: 'Découvrir un plan de ville', en: 'Read a simple city map' },
    ],
    project: null,
  },
  {
    id: 1,
    slug: 'bienvenue',
    title: 'Bienvenue',
    titleEn: 'Welcome',
    page: 15,
    available: true,
    accent: '#1a7a86',
    blurb: {
      fr: 'Présente-toi, parle des pays et des nationalités, et fais connaissance.',
      en: 'Introduce yourself, talk about countries and nationalities, and meet people.',
    },
    culture: [
      { fr: 'Nationalités et marques', en: 'Nationalities and brands' },
      { fr: 'Les documents d’identité', en: 'ID documents' },
      { fr: 'Premières rencontres au travail et à la fac', en: 'First meetings at work and university' },
    ],
    vocabulary: [
      { fr: 'Les pays et les nationalités', en: 'Countries and nationalities' },
      { fr: 'Le tutoiement et le vouvoiement', en: 'Tu vs vous' },
      { fr: 'Les métiers (1)', en: 'Jobs (1)' },
      { fr: 'Les formules dans un courriel', en: 'Email phrases' },
    ],
    interactions: [
      { fr: 'Faire connaissance', en: 'Get to know someone' },
      { fr: 'Se présenter et présenter quelqu’un', en: 'Introduce yourself and someone else' },
      { fr: 'S’informer sur l’identité', en: 'Ask about identity' },
    ],
    grammar: [
      { fr: 'Les adjectifs de nationalité', en: 'Nationality adjectives' },
      { fr: 'Le présent du verbe être', en: 'Present tense of être' },
      { fr: 'Les articles indéfinis un, une, des', en: 'Indefinite articles un, une, des' },
      { fr: 'Venir de / du, habiter en / au', en: 'Venir de/du, habiter en/au' },
      { fr: 'Est-ce que c’est ?', en: 'Est-ce que c’est?' },
    ],
    phonetics: [
      { fr: 'Les consonnes et les voyelles', en: 'Consonants and vowels' },
      { fr: 'La liaison', en: 'Liaison' },
    ],
    dailyLife: [
      { fr: 'Dans un train : échanges formels et informels', en: 'On a train: formal and informal talk' },
      { fr: 'Les titres : Madame, Monsieur…', en: 'Titles: Madame, Monsieur…' },
      { fr: 'Louer une voiture', en: 'Rent a car' },
    ],
    project: { fr: 'Participer à un salon des métiers', en: 'Take part in a jobs fair' },
  },
  {
    id: 2,
    slug: 'des-metiers-de-reve',
    title: 'Des métiers de rêve ?',
    titleEn: 'Dream jobs?',
    page: 27,
    available: true,
    accent: '#243044',
    blurb: {
      fr: 'Parle des métiers, des goûts, des nombres et du téléphone.',
      en: 'Talk about jobs, likes, numbers, and phone calls.',
    },
    culture: [
      { fr: 'Cinéma et création francophones', en: 'Francophone film and design' },
      { fr: 'Un métier en contact avec la nature', en: 'A job in contact with nature' },
    ],
    vocabulary: [
      { fr: 'Les métiers (2)', en: 'Jobs (2)' },
      { fr: 'Le cinéma', en: 'Cinema' },
      { fr: 'Les nombres', en: 'Numbers' },
      { fr: 'Les animaux', en: 'Animals' },
      { fr: 'La mode', en: 'Fashion' },
      { fr: 'Les rituels d’une conversation téléphonique', en: 'Phone-call routines' },
      { fr: 'Il fait beau, il y a du soleil', en: 'Weather: il fait beau' },
    ],
    interactions: [
      { fr: 'Demander et donner des informations personnelles', en: 'Ask and give personal information' },
      { fr: 'Demander des renseignements', en: 'Ask for information' },
      { fr: 'Exprimer ses préférences', en: 'Say what you prefer' },
      { fr: 'Compter', en: 'Count' },
      { fr: 'Prendre un rendez-vous', en: 'Make an appointment' },
      { fr: 'Demander de répéter, d’épeler, d’expliquer', en: 'Ask someone to repeat, spell, or explain' },
      { fr: 'Interagir au téléphone', en: 'Talk on the phone' },
    ],
    grammar: [
      { fr: 'Le présent du verbe avoir', en: 'Present tense of avoir' },
      { fr: 'Le présent des verbes en -er', en: 'Present tense of -er verbs' },
      { fr: 'Les articles définis le, la, les', en: 'Definite articles le, la, les' },
      { fr: 'Le pluriel des noms', en: 'Plural of nouns' },
      { fr: 'Les pronoms toniques', en: 'Stressed pronouns' },
      { fr: 'Quand ?', en: 'Quand?' },
    ],
    phonetics: [
      { fr: 'Les voyelles orales [e], [ə], [a]', en: 'Oral vowels [e], [ə], [a]' },
      { fr: 'Les enchaînements', en: 'Linking sounds' },
    ],
    dailyLife: [
      { fr: 'Les expressions au travail', en: 'Workplace phrases' },
      { fr: 'Une première journée au travail', en: 'A first day at work' },
    ],
    project: { fr: 'Trouver son métier idéal', en: 'Find your ideal job' },
  },
  {
    id: 3,
    slug: 'jadore-ma-ville',
    title: 'J’adore ma ville',
    titleEn: 'I love my city',
    page: 39,
    available: true,
    accent: '#c0563a',
    blurb: {
      fr: 'Décris une ville, donne des indications et parle des transports.',
      en: 'Describe a city, give directions, and talk about transport.',
    },
    culture: [
      {
        fr: 'Villes francophones : Montréal, Kinshasa, Paris, Casablanca, Bruxelles',
        en: 'Francophone cities: Montreal, Kinshasa, Paris, Casablanca, Brussels',
      },
    ],
    vocabulary: [
      { fr: 'Les lieux de la ville', en: 'Places in the city' },
      { fr: 'Le quartier et les commerces de proximité', en: 'The neighbourhood and local shops' },
      { fr: 'Les activités quotidiennes', en: 'Daily activities' },
      { fr: 'Les déplacements et les moyens de transport', en: 'Getting around and transport' },
    ],
    interactions: [
      { fr: 'Décrire une ville', en: 'Describe a city' },
      { fr: 'S’informer sur les lieux', en: 'Ask about places' },
      { fr: 'Parler de ses goûts (1)', en: 'Talk about likes (1)' },
      { fr: 'Donner des instructions', en: 'Give instructions' },
      { fr: 'Parler des transports', en: 'Talk about transport' },
    ],
    grammar: [
      { fr: 'Il y a', en: 'Il y a' },
      { fr: 'La négation', en: 'Negation' },
      { fr: 'Qu’est-ce que c’est ?', en: 'Qu’est-ce que c’est?' },
      { fr: 'Les adverbes de lieu : ici, là', en: 'Place adverbs: ici, là' },
      { fr: 'Faire, aller, prendre', en: 'Faire, aller, prendre' },
      { fr: 'Les prépositions de lieu', en: 'Place prepositions' },
      { fr: 'L’impératif', en: 'The imperative' },
    ],
    phonetics: [
      { fr: 'Les lettres muettes', en: 'Silent letters' },
      { fr: 'Les voyelles orales [y], [u], [o], [i]', en: 'Oral vowels [y], [u], [o], [i]' },
    ],
    dailyLife: [
      { fr: 'Exposer un problème : une panne de voiture', en: 'Explain a problem: a car breakdown' },
    ],
    project: { fr: 'Découvrir les lieux de son quartier', en: 'Explore places in your neighbourhood' },
  },
  {
    id: 4,
    slug: 'nous-tous',
    title: 'Nous tous',
    titleEn: 'All of us',
    page: 51,
    available: true,
    accent: '#8a4a62',
    blurb: {
      fr: 'Parle de la famille, décris les personnes et réagis à un événement.',
      en: 'Talk about family, describe people, and react to an event.',
    },
    culture: [
      { fr: 'Familles et récits francophones', en: 'Francophone families and stories' },
      { fr: 'Cinéma, bande dessinée et design', en: 'Film, comics, and design' },
    ],
    vocabulary: [
      { fr: 'La famille et les relations', en: 'Family and relationships' },
      { fr: 'La description physique', en: 'Physical description' },
      { fr: 'Les vêtements et les accessoires', en: 'Clothes and accessories' },
      { fr: 'Les meubles', en: 'Furniture' },
      { fr: 'Un faire-part et une carte de vœux', en: 'Announcements and greeting cards' },
    ],
    interactions: [
      { fr: 'S’informer sur les personnes', en: 'Ask about people' },
      { fr: 'Relater un événement récent', en: 'Talk about a recent event' },
      { fr: 'Décrire et caractériser des personnes', en: 'Describe people' },
      { fr: 'Féliciter, souhaiter, faire des compliments', en: 'Congratulate, wish, compliment' },
      { fr: 'Exprimer l’accord et le désaccord (1)', en: 'Agree and disagree (1)' },
    ],
    grammar: [
      { fr: 'Qui est-ce ?', en: 'Qui est-ce?' },
      { fr: 'Les déterminants possessifs', en: 'Possessive adjectives' },
      { fr: 'Le passé récent (venir de)', en: 'Recent past with venir de' },
      { fr: 'Le féminin et le pluriel des adjectifs', en: 'Feminine and plural adjectives' },
      { fr: 'La place de l’adjectif', en: 'Adjective position' },
      { fr: 'Les conjonctions mais et et', en: 'Conjunctions mais and et' },
    ],
    phonetics: [
      { fr: 'Les marques orales du féminin', en: 'How feminine endings sound' },
      { fr: 'Les voyelles orales [ɛ], [œ], [ø]', en: 'Oral vowels [ɛ], [œ], [ø]' },
    ],
    dailyLife: [
      { fr: 'Choisir un cadeau d’anniversaire', en: 'Choose a birthday present' },
      { fr: 'Participer à une fête d’anniversaire', en: 'Join a birthday party' },
    ],
    project: {
      fr: 'Réaliser un montage photo-vidéo pour un mariage',
      en: 'Make a photo-video montage for a wedding',
    },
  },
  {
    id: 5,
    slug: 'une-vie-trepidante',
    title: 'Une vie trépidante',
    titleEn: 'A busy life',
    page: 65,
    available: true,
    accent: '#3d6b8a',
    blurb: {
      fr: 'Parle de tes journées, de tes loisirs et invite quelqu’un.',
      en: 'Talk about your days, free time, and invitations.',
    },
    culture: [
      { fr: 'Sports, fêtes et séries francophones', en: 'Sports, festivals, and Francophone series' },
    ],
    vocabulary: [
      { fr: 'Les tâches quotidiennes et ménagères', en: 'Daily and household tasks' },
      { fr: 'Les loisirs et les sports', en: 'Free time and sports' },
      { fr: 'Les lieux de sortie', en: 'Places to go out' },
      { fr: 'L’emploi du temps, l’heure, la date', en: 'Timetables, time, and dates' },
      { fr: 'Les formules d’invitation', en: 'Invitation phrases' },
    ],
    interactions: [
      { fr: 'Parler des habitudes quotidiennes', en: 'Talk about daily habits' },
      { fr: 'Parler de ses goûts (2)', en: 'Talk about likes (2)' },
      { fr: 'Échanger des idées pour une sortie', en: 'Suggest a night out' },
      { fr: 'Inviter : accepter ou refuser (1)', en: 'Invite: accept or refuse (1)' },
      { fr: 'Indiquer une date', en: 'Give a date' },
      { fr: 'Décrire un état physique', en: 'Describe how you feel physically' },
    ],
    grammar: [
      { fr: 'Les verbes pronominaux', en: 'Pronominal verbs' },
      { fr: 'Le futur proche', en: 'Near future' },
      { fr: 'Les prépositions de temps', en: 'Time prepositions' },
      { fr: 'Pouvoir, vouloir, devoir, savoir', en: 'Pouvoir, vouloir, devoir, savoir' },
      { fr: 'La fréquence', en: 'Frequency' },
      { fr: 'Il faut + infinitif', en: 'Il faut + infinitive' },
    ],
    phonetics: [
      { fr: 'L’intonation de la question', en: 'Question intonation' },
      { fr: 'L’opposition [œ̃] / [ɔ̃]', en: 'The contrast [œ̃] / [ɔ̃]' },
    ],
    dailyLife: [
      { fr: 'Participer à une sortie sportive', en: 'Join a sports outing' },
      { fr: 'Exposer un manque d’équipement', en: 'Explain missing equipment' },
      { fr: 'Donner des consignes de sécurité', en: 'Give safety instructions' },
    ],
    project: { fr: 'Planifier une activité surprise', en: 'Plan a surprise activity' },
  },
  {
    id: 6,
    slug: 'le-coin-des-bonnes-affaires',
    title: 'Le coin des bonnes affaires',
    titleEn: 'The bargain corner',
    page: 77,
    available: true,
    accent: '#3f6b4a',
    blurb: {
      fr: 'Fais des achats, parle des prix et gère une transaction simple.',
      en: 'Shop, talk about prices, and handle a simple transaction.',
    },
    culture: [
      { fr: 'Magasins, marchés et achats francophones', en: 'Shops, markets, and Francophone shopping' },
      { fr: 'La mode et les réseaux sociaux', en: 'Fashion and social media' },
    ],
    vocabulary: [
      { fr: 'Les objets du quotidien', en: 'Everyday objects' },
      { fr: 'Les vêtements et accessoires', en: 'Clothes and accessories' },
      { fr: 'Les prix et les moyens de paiement', en: 'Prices and payment' },
      { fr: 'Les magasins et les commerces', en: 'Shops' },
      { fr: 'Les couleurs', en: 'Colours' },
    ],
    interactions: [
      { fr: 'S’informer sur les choses', en: 'Ask about things' },
      { fr: 'Exprimer l’accord et le désaccord (2)', en: 'Agree and disagree (2)' },
      { fr: 'Compter, demander et donner des prix', en: 'Count and talk about prices' },
      { fr: 'Réaliser des transactions simples', en: 'Complete simple transactions' },
      { fr: 'Parler d’un service ou d’un bien', en: 'Talk about a service or product' },
      { fr: 'Parler de ses goûts (3)', en: 'Talk about likes (3)' },
    ],
    grammar: [
      { fr: 'Les conjonctions et et ou', en: 'Conjunctions et and ou' },
      { fr: 'Pour + infinitif', en: 'Pour + infinitive' },
      { fr: 'Quel, quelle, quels, quelles', en: 'Quel, quelle, quels, quelles' },
      { fr: 'Les démonstratifs ce, cet, cette, ces', en: 'Demonstratives ce, cet, cette, ces' },
    ],
    phonetics: [
      { fr: 'Le son [j]', en: 'The sound [j]' },
      { fr: 'Les voyelles nasales', en: 'Nasal vowels' },
    ],
    dailyLife: [
      { fr: 'Retirer de l’argent à un distributeur', en: 'Withdraw money from a cash machine' },
      { fr: 'Profiter de promotions', en: 'Use a promotion' },
      { fr: 'Gérer les problèmes de paiement', en: 'Handle a payment problem' },
    ],
    project: { fr: 'Choisir des souvenirs de son pays', en: 'Choose souvenirs from your country' },
  },
  {
    id: 7,
    slug: 'cuisines-du-monde',
    title: 'Cuisines du monde',
    titleEn: 'World kitchens',
    page: 89,
    available: true,
    accent: '#a65b2b',
    blurb: {
      fr: 'Parle de la nourriture, réserve au restaurant et raconte un repas.',
      en: 'Talk about food, book a restaurant, and tell about a meal.',
    },
    culture: [
      { fr: 'Petits déjeuners et boissons dans le monde francophone', en: 'Breakfasts and drinks in the Francophone world' },
      { fr: 'Une recette, les manières à table, un chef', en: 'A recipe, table manners, a chef' },
    ],
    vocabulary: [
      { fr: 'Les aliments et les repas', en: 'Food and meals' },
      { fr: 'La cuisine', en: 'Cooking' },
      { fr: 'Les mesures et les quantités', en: 'Measures and quantities' },
      { fr: 'Le restaurant, la réservation, le menu', en: 'Restaurant, booking, menu' },
    ],
    interactions: [
      { fr: 'Exprimer ses habitudes alimentaires', en: 'Talk about eating habits' },
      { fr: 'Exprimer des quantités et des mesures', en: 'Talk about quantities' },
      { fr: 'Raconter des événements passés (1)', en: 'Tell past events (1)' },
      { fr: 'Faire une réservation, commander', en: 'Book and order in a restaurant' },
      { fr: 'Inviter : accepter ou refuser (2)', en: 'Invite: accept or refuse (2)' },
    ],
    grammar: [
      { fr: 'Les articles partitifs', en: 'Partitive articles' },
      { fr: 'Les expressions de quantité', en: 'Quantity expressions' },
      { fr: 'Le passé composé', en: 'Passé composé' },
    ],
    phonetics: [
      { fr: 'Révision des voyelles nasales [ɛ̃], [ɑ̃], [ɔ̃]', en: 'Nasal vowels [ɛ̃], [ɑ̃], [ɔ̃]' },
      { fr: 'L’accentuation et le rythme', en: 'Stress and rhythm' },
    ],
    dailyLife: [
      { fr: 'Réserver un restaurant', en: 'Book a restaurant' },
      { fr: 'Réagir à un problème de commande', en: 'Handle a problem with an order' },
    ],
    project: { fr: 'Participer à un repas partagé', en: 'Take part in a shared meal' },
  },
  {
    id: 8,
    slug: 'bon-voyage',
    title: 'Bon voyage !',
    titleEn: 'Have a good trip!',
    page: 101,
    available: true,
    accent: '#4a5d8a',
    blurb: {
      fr: 'Raconte un voyage, parle de tes projets et demande de l’aide.',
      en: 'Tell a travel story, talk about plans, and ask for help.',
    },
    culture: [
      { fr: 'Aventuriers et déplacements francophones', en: 'Francophone travellers and journeys' },
      { fr: 'L’aéroport de demain', en: 'The airport of tomorrow' },
    ],
    vocabulary: [
      { fr: 'Les voyages', en: 'Travel' },
      { fr: 'La nature', en: 'Nature' },
      { fr: 'La météo', en: 'Weather' },
      { fr: 'La technologie', en: 'Technology' },
    ],
    interactions: [
      { fr: 'Raconter des événements passés (2)', en: 'Tell past events (2)' },
      { fr: 'Parler de ses projets', en: 'Talk about plans' },
      { fr: 'Donner ses impressions', en: 'Give impressions' },
      { fr: 'Demander des renseignements', en: 'Ask for information' },
      { fr: 'Demander ou proposer de l’aide', en: 'Ask for or offer help' },
    ],
    grammar: [
      { fr: 'Les indicateurs de temps : dans, depuis, il y a', en: 'Time markers: dans, depuis, il y a' },
      { fr: 'La comparaison', en: 'Comparison' },
      { fr: 'La cause : pourquoi, parce que', en: 'Cause: pourquoi, parce que' },
      { fr: 'La conséquence : donc, alors', en: 'Result: donc, alors' },
    ],
    phonetics: [
      { fr: 'Le son [wa]', en: 'The sound [wa]' },
      { fr: 'L’opposition [g] / [ʒ]', en: 'The contrast [g] / [ʒ]' },
    ],
    dailyLife: [
      { fr: 'Choisir un billet de train', en: 'Choose a train ticket' },
      { fr: 'Comprendre une carte d’embarquement', en: 'Read a boarding pass' },
      { fr: 'Déclarer un bagage perdu', en: 'Report lost luggage' },
    ],
    project: { fr: 'Raconter un voyage', en: 'Tell the story of a trip' },
  },
]

export const extraSections: ExtraSection[] = [
  { id: 'delf-1', title: 'Entraînement au DELF', titleEn: 'DELF practice', afterUnit: 4, available: false },
  { id: 'delf-2', title: 'Entraînement au DELF', titleEn: 'DELF practice', afterUnit: 8, available: false },
  {
    id: 'resources',
    title: 'Banque de ressources',
    titleEn: 'Practice bank',
    afterUnit: 8,
    available: true,
    to: '/resources',
  },
]

const emptyBank = {
  culture: [] as Labeled[],
  vocabulary: [] as Labeled[],
  interactions: [] as Labeled[],
  grammar: [] as Labeled[],
  phonetics: [] as Labeled[],
  dailyLife: [] as Labeled[],
  project: null,
}

export const resourceBanks: UnitMeta[] = [
  {
    id: 90,
    slug: 'grammaire',
    title: 'Grammaire',
    titleEn: 'Grammar',
    page: 116,
    available: true,
    accent: '#1e3a8a',
    hub: 'resources',
    blurb: {
      fr: 'Revois les règles unité par unité : articles, verbes, temps, cause et comparaison.',
      en: 'Review the rules unit by unit: articles, verbs, tenses, cause and comparison.',
    },
    ...emptyBank,
  },
  {
    id: 91,
    slug: 'vocabulaire',
    title: 'Vocabulaire',
    titleEn: 'Vocabulary',
    page: 132,
    available: true,
    accent: '#65a30d',
    hub: 'resources',
    blurb: {
      fr: 'Revois les mots : identité, ville, famille, quotidien, magasin, table, voyage.',
      en: 'Review the words: identity, city, family, daily life, shops, the table, travel.',
    },
    ...emptyBank,
  },
  {
    id: 92,
    slug: 'communication',
    title: 'Communication',
    titleEn: 'Communication',
    page: 144,
    available: true,
    accent: '#6b21a8',
    hub: 'resources',
    blurb: {
      fr: 'Réutilise la langue : formulaires, invitations, négociations, récits de voyage.',
      en: 'Reuse the language: forms, invitations, bargaining, travel stories.',
    },
    ...emptyBank,
  },
]

export function getUnitBySlug(slug: string) {
  return units.find((unit) => unit.slug === slug) ?? resourceBanks.find((unit) => unit.slug === slug)
}

export function getUnitById(id: number) {
  return units.find((unit) => unit.id === id) ?? resourceBanks.find((unit) => unit.id === id)
}
