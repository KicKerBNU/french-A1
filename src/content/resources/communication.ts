import type { Lesson } from '@/types/course'

export const communicationLessons: Lesson[] = [
  {
    id: 'c-u1',
    unitId: 92,
    number: 1,
    title: { fr: 'Unité 1 · Identité', en: 'Unit 1 · Identity' },
    summary: {
      fr: 'Un formulaire, un texto pour une annonce, se présenter.',
      en: 'A form, a text for an ad, introducing yourself.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Demande de passeport : nom, lieu de naissance, adresse, ville, pays, document (carte d’identité, permis, visa). Texto : « Salut, je cherche un coloc à Lyon, je suis étudiant. Appelle-moi. »',
          en: 'Passport application: name, place of birth, address, city, country, document (ID card, licence, visa). Text: “Hi, I’m looking for a flatmate in Lyon, I’m a student. Call me.”',
        },
      },
    ],
    activities: [
      {
        id: 'rc-u1-form',
        type: 'matching',
        title: { fr: 'Formulaire passeport', en: 'Passport form' },
        pairs: [
          { id: 'f1', left: 'Nom', right: 'le nom de famille' },
          { id: 'f2', left: 'Lieu de naissance', right: 'où tu es né(e)' },
          { id: 'f3', left: 'Adresse / ville / pays', right: 'où tu habites' },
          { id: 'f4', left: 'Document support', right: 'carte, permis ou visa' },
        ],
      },
      {
        id: 'rc-u1-texto',
        type: 'quiz',
        title: { fr: 'Répondre à une annonce', en: 'Reply to an ad' },
        intro: {
          fr: 'Annonce : « Cherche étudiant(e) pour des cours de français. Habiter à Lyon. Texto au 04 78 00 00 00. »',
          en: 'Ad: “Looking for a student for French lessons. Live in Lyon. Text 04 78 00 00 00.”',
        },
        questions: [
          {
            id: 't1',
            prompt: { fr: 'Un bon texto contient…', en: 'A good text contains…' },
            options: [
              { fr: 'prénom, je suis étudiant(e), j’habite à Lyon, un créneau', en: 'first name, I’m a student, I live in Lyon, a time slot' },
              { fr: 'seulement un numéro de vol', en: 'only a flight number' },
              { fr: 'une recette de 12 lignes', en: 'a 12-line recipe' },
            ],
            answer: 0,
            explanation: { fr: 'Salut, je m’appelle… Je peux jeudi à 18 h. Merci !', en: 'Hi, my name is… I can do Thursday at 6 p.m. Thanks!' },
          },
        ],
      },
    ],
  },
  {
    id: 'c-u2',
    unitId: 92,
    number: 2,
    title: { fr: 'Unité 2 · Classe et habitudes', en: 'Unit 2 · Class and habits' },
    summary: {
      fr: 'Compter le groupe, trouver quelqu’un, parler de son français avec un pronom tonique.',
      en: 'Count the group, find someone, talk about your French with a tonic pronoun.',
    },
    blocks: [
      {
        type: 'examples',
        items: [
          { fr: 'Dans la classe, il y a 12 apprenants.', en: 'In the class there are 12 learners.' },
          { fr: 'Quand est-ce que tu parles français ? — Moi, je parle en classe.', en: 'When do you speak French? — Me, I speak in class.' },
        ],
      },
    ],
    activities: [
      {
        id: 'rc-u2-stats',
        type: 'matching',
        title: { fr: 'Il y a…', en: 'There are…' },
        pairs: [
          { id: 's1', left: 'apprenants', right: 'le total du groupe' },
          { id: 's2', left: 'femmes / hommes', right: 'le genre' },
          { id: 's3', left: 'personnes bilingues', right: 'plus de 2 langues' },
          { id: 's4', left: 'célibataire / marié(e)', right: 'la situation' },
        ],
      },
      {
        id: 'rc-u2-habits',
        type: 'quiz',
        title: { fr: 'Moi, toi, vous', en: 'Me, you, you (pl.)' },
        questions: [
          {
            id: 'h1',
            prompt: { fr: 'Quand est-ce que tu parles français ? — ___, je parle en classe et avec mes amis.', en: 'When do you speak French? — ___, I speak in class and with friends.' },
            options: [
              { fr: 'Moi', en: 'Moi' },
              { fr: 'Je moi', en: 'Je moi' },
              { fr: 'Me', en: 'Me' },
            ],
            answer: 0,
            explanation: { fr: 'Pronom tonique pour insister : Moi, toi, lui, nous, vous, eux.', en: 'Tonic pronoun for emphasis: Moi, toi, lui, nous, vous, eux.' },
          },
          {
            id: 'h2',
            prompt: { fr: 'Pourriez-vous ___ le mot « livre » ? Pourriez-vous ___ de 0 à 20 ?', en: 'Could you ___ the word “livre”? Could you ___ from 0 to 20?' },
            options: [
              { fr: 'traduire · compter', en: 'translate · count' },
              { fr: 'cuisiner · réserver', en: 'cook · book' },
              { fr: 'embarquer · atterrir', en: 'board · land' },
            ],
            answer: 0,
            explanation: { fr: 'Pourriez-vous + infinitif : demander poliment.', en: 'Pourriez-vous + infinitive: ask politely.' },
          },
        ],
      },
    ],
  },
  {
    id: 'c-u3',
    unitId: 92,
    number: 3,
    title: { fr: 'Unité 3 · Ville et sorties', en: 'Unit 3 · City and going out' },
    summary: {
      fr: 'Un tableau d’activités, demander son chemin, un programme de bibliothèque.',
      en: 'An activities table, asking the way, a library programme.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Je cherche votre restaurant. — Nous sommes dans la rue X, en face de la mairie, à côté du parc. Programme : lundi club de lecture, mercredi conversation, samedi cinéma.',
          en: 'I’m looking for your restaurant. — We’re on street X, opposite the town hall, next to the park. Programme: Monday book club, Wednesday conversation, Saturday cinema.',
        },
      },
    ],
    activities: [
      {
        id: 'rc-u3-chemin',
        type: 'dialogue',
        title: { fr: 'Le restaurant du quartier', en: 'The neighbourhood restaurant' },
        dialogue: {
          id: 'rest',
          title: { fr: 'Au téléphone', en: 'On the phone' },
          context: {
            fr: 'Tom a une adresse. Écoute les prépositions, puis remets dans l’ordre.',
            en: 'Tom has an address. Listen for the prepositions, then put the lines in order.',
          },
          lines: [
            { speaker: 'Tom', fr: 'Bonjour, je cherche votre restaurant.', en: 'Hello, I’m looking for your restaurant.' },
            { speaker: 'Resto', fr: 'Oui, nous sommes maintenant dans la rue des Capucins.', en: 'Yes, we’re now on rue des Capucins.' },
            { speaker: 'Tom', fr: 'D’accord. C’est loin du métro ?', en: 'Right. Is it far from the metro?' },
            { speaker: 'Resto', fr: 'Non : sortez, allez tout droit, nous sommes en face du parc.', en: 'No: come out, go straight on, we’re opposite the park.' },
          ],
        },
      },
      {
        id: 'rc-u3-biblio',
        type: 'matching',
        title: { fr: 'La semaine à la médiathèque', en: 'The week at the media library' },
        pairs: [
          { id: 'b1', left: 'lundi', right: 'club de lecture' },
          { id: 'b2', left: 'mercredi', right: 'cercle de conversation' },
          { id: 'b3', left: 'vendredi', right: 'concert' },
          { id: 'b4', left: 'samedi', right: 'soirée cinéma' },
        ],
      },
      {
        id: 'rc-u3-ville',
        type: 'quiz',
        title: { fr: 'Présenter une ville', en: 'Present a city' },
        questions: [
          {
            id: 'v1',
            prompt: { fr: 'Pour présenter ta ville, tu dis surtout…', en: 'To present your city you mainly say…' },
            options: [
              { fr: 'où c’est, comment y aller, quoi visiter', en: 'where it is, how to get there, what to visit' },
              { fr: 'seulement le plat du jour', en: 'only today’s special' },
              { fr: 'un code de carte', en: 'a card PIN' },
            ],
            answer: 0,
            explanation: { fr: 'Nom, situation, avion/train, loin ou pas, choses à visiter.', en: 'Name, location, plane/train, far or not, things to see.' },
          },
        ],
      },
    ],
  },
  {
    id: 'c-u4',
    unitId: 92,
    number: 4,
    title: { fr: 'Unité 4 · Famille et d’accord', en: 'Unit 4 · Family and agreeing' },
    summary: {
      fr: 'Questions indiscrètes, meubles, une nouvelle, je suis d’accord.',
      en: 'Nosy questions, furniture, news, I agree.',
    },
    blocks: [
      {
        type: 'examples',
        items: [
          { fr: 'Pourquoi tu n’as pas d’enfants ?', en: 'Why don’t you have children?' },
          { fr: 'On achète cette table ? — Oui, d’accord !', en: 'Shall we buy this table? — Yes, OK!' },
          { fr: 'C’est fantastique ! Je ne suis pas d’accord.', en: 'That’s fantastic! I don’t agree.' },
        ],
      },
    ],
    activities: [
      {
        id: 'rc-u4-accord',
        type: 'matching',
        title: { fr: 'D’accord ou pas', en: 'Agree or not' },
        pairs: [
          { id: 'a1', left: 'Je suis d’accord.', right: 'oui, même avis' },
          { id: 'a2', left: 'Je ne suis pas d’accord.', right: 'non, avis différent' },
          { id: 'a3', left: 'C’est fantastique !', right: 'très positif' },
          { id: 'a4', left: 'Bof, pas vraiment.', right: 'peu enthousiaste' },
        ],
      },
      {
        id: 'rc-u4-meubles',
        type: 'quiz',
        title: { fr: 'On achète quoi ?', en: 'What do we buy?' },
        questions: [
          {
            id: 'm1',
            prompt: { fr: 'Petit appartement. Tu proposes…', en: 'Small flat. You suggest…' },
            options: [
              { fr: 'un canapé-lit, une petite table, pas trop de chaises', en: 'a sofa bed, a small table, not too many chairs' },
              { fr: 'douze canapés', en: 'twelve sofas' },
              { fr: 'un avion', en: 'a plane' },
            ],
            answer: 0,
            explanation: { fr: 'On achète cette table ? On achète une grande table et quatre chaises.', en: 'Shall we buy this table? We’ll buy a big table and four chairs.' },
          },
        ],
      },
    ],
  },
  {
    id: 'c-u5',
    unitId: 92,
    number: 5,
    title: { fr: 'Unité 5 · Goûts et invitations', en: 'Unit 5 · Tastes and invitations' },
    summary: {
      fr: 'Une nouvelle activité, une tenue, j’aime / je déteste, un week-end.',
      en: 'A new activity, an outfit, I like / I hate, a weekend.',
    },
    blocks: [
      {
        type: 'examples',
        items: [
          { fr: 'Je n’aime pas me réveiller tôt.', en: 'I don’t like getting up early.' },
          { fr: 'On peut aller au musée ce week-end. Ça te dit ?', en: 'Shall we go to the museum this weekend. Fancy it?' },
          { fr: 'Bof, pas vraiment. Je n’aime pas les musées.', en: 'Meh, not really. I don’t like museums.' },
        ],
      },
    ],
    activities: [
      {
        id: 'rc-u5-gouts',
        type: 'matching',
        title: { fr: 'J’aime / je déteste', en: 'I like / I hate' },
        pairs: [
          { id: 'g1', left: 'Je déteste faire les courses.', right: 'négatif fort' },
          { id: 'g2', left: 'Je passe du temps devant la télé.', right: 'habitude' },
          { id: 'g3', left: 'Ça te dit ?', right: 'inviter' },
          { id: 'g4', left: 'Bof, pas vraiment.', right: 'refuser doucement' },
        ],
      },
      {
        id: 'rc-u5-sport',
        type: 'quiz',
        title: { fr: 'Conseiller une tenue', en: 'Advise an outfit' },
        questions: [
          {
            id: 's1',
            prompt: { fr: 'Yoga : tu conseilles…', en: 'Yoga: you recommend…' },
            options: [
              { fr: 'un t-shirt large, un pantalon souple, pas de jeans', en: 'a loose T-shirt, soft trousers, no jeans' },
              { fr: 'un costume et une cravate', en: 'a suit and tie' },
              { fr: 'des chaussures de ski', en: 'ski boots' },
            ],
            answer: 0,
            explanation: { fr: 'Demande l’avis avant d’acheter l’équipement.', en: 'Ask for advice before buying the kit.' },
          },
        ],
      },
    ],
  },
  {
    id: 'c-u6',
    unitId: 92,
    number: 6,
    title: { fr: 'Unité 6 · Vendre et négocier', en: 'Unit 6 · Selling and bargaining' },
    summary: {
      fr: 'Une annonce, un prix au marché, le camping, un panier en ligne.',
      en: 'An ad, a market price, camping, an online basket.',
    },
    blocks: [
      {
        type: 'examples',
        items: [
          { fr: 'Je vends ce sac à dos noir, 10 €. C’est une bonne affaire !', en: 'I’m selling this black backpack, €10. It’s a bargain!' },
          { fr: '— Combien coûte 1 kilo de pommes ? — 2 €. — Deux kilos pour 3 € ? — D’accord.', en: '— How much is 1 kg of apples? — €2. — Two kilos for €3? — OK.' },
        ],
      },
    ],
    activities: [
      {
        id: 'rc-u6-annonce',
        type: 'quiz',
        title: { fr: 'Écrire une annonce', en: 'Write an ad' },
        questions: [
          {
            id: 'a1',
            prompt: { fr: 'Une bonne petite annonce A1 a…', en: 'A good A1 classified has…' },
            options: [
              { fr: 'l’objet, la couleur, le prix, un contact', en: 'the object, the colour, the price, a contact' },
              { fr: 'seulement « bonjour »', en: 'only “hello”' },
              { fr: 'un menu alsacien', en: 'an Alsatian menu' },
            ],
            answer: 0,
            explanation: { fr: 'Merci pour votre message ! Le sac est encore disponible.', en: 'Thanks for your message! The bag is still available.' },
          },
        ],
      },
      {
        id: 'rc-u6-marche',
        type: 'dialogue',
        title: { fr: 'Au marché', en: 'At the market' },
        dialogue: {
          id: 'mkt',
          title: { fr: 'Les pommes', en: 'The apples' },
          context: {
            fr: 'Maya négocie. Écoute le prix, puis remets dans l’ordre.',
            en: 'Maya bargains. Listen for the price, then put the lines in order.',
          },
          lines: [
            { speaker: 'Maya', fr: 'Combien coûte un kilo de pommes ?', en: 'How much is a kilo of apples?' },
            { speaker: 'Vendeur', fr: 'Deux euros.', en: 'Two euros.' },
            { speaker: 'Maya', fr: 'Deux kilos pour trois euros ?', en: 'Two kilos for three euros?' },
            { speaker: 'Vendeur', fr: 'D’accord. C’est un bon prix.', en: 'OK. That’s a good price.' },
          ],
        },
      },
      {
        id: 'rc-u6-camp',
        type: 'matching',
        title: { fr: 'Cinq objets pour le camping', en: 'Five objects for camping' },
        pairs: [
          { id: 'k1', left: 'savon', right: 'l’hygiène' },
          { id: 'k2', left: 'lampe', right: 'le soir' },
          { id: 'k3', left: 'gourde', right: 'l’eau' },
          { id: 'k4', left: 'sac de couchage', right: 'dormir' },
          { id: 'k5', left: 'carte', right: 'ne pas se perdre' },
        ],
      },
    ],
  },
  {
    id: 'c-u7',
    unitId: 92,
    number: 7,
    title: { fr: 'Unité 7 · Manger ensemble', en: 'Unit 7 · Eating together' },
    summary: {
      fr: 'Un avis de resto, commander en ligne, parler de ses habitudes.',
      en: 'A restaurant review, order online, talk about eating habits.',
    },
    blocks: [
      {
        type: 'examples',
        items: [
          { fr: 'Il y a beaucoup de choix, mais c’est un peu cher.', en: 'There’s a lot of choice, but it’s a bit expensive.' },
          { fr: 'On peut commander un plat végétarien. — Oui, et des pizzas.', en: 'We can order a vegetarian dish. — Yes, and pizzas.' },
          { fr: 'Tu préfères le thé ou le café ? Tu manges beaucoup de fruits ?', en: 'Do you prefer tea or coffee? Do you eat a lot of fruit?' },
        ],
      },
    ],
    activities: [
      {
        id: 'rc-u7-avis',
        type: 'quiz',
        title: { fr: 'Écrire un avis', en: 'Write a review' },
        questions: [
          {
            id: 'r1',
            prompt: { fr: 'Un avis A1 parle de…', en: 'An A1 review talks about…' },
            options: [
              { fr: 'plats, prix, service, une note / un conseil', en: 'food, price, service, a score / a tip' },
              { fr: 'seulement le numéro de vol', en: 'only the flight number' },
              { fr: 'un arbre généalogique', en: 'a family tree' },
            ],
            answer: 0,
            explanation: { fr: 'J’ai adoré la tarte. Le service était lent. 3/5.', en: 'I loved the tart. Service was slow. 3/5.' },
          },
        ],
      },
      {
        id: 'rc-u7-habits',
        type: 'matching',
        title: { fr: 'Questions alimentaires', en: 'Food questions' },
        pairs: [
          { id: 'h1', left: 'Tu préfères le thé ou le café ?', right: 'la boisson du matin' },
          { id: 'h2', left: 'Tu manges beaucoup de fruits ?', right: 'une quantité' },
          { id: 'h3', left: 'Je ne mange pas de viande.', right: 'un refus / un régime' },
          { id: 'h4', left: 'On commande un plat végétarien ?', right: 'un choix au resto' },
        ],
      },
    ],
  },
  {
    id: 'c-u8',
    unitId: 92,
    number: 8,
    title: { fr: 'Unité 8 · Raconter un voyage', en: 'Unit 8 · Tell a trip' },
    summary: {
      fr: 'Selfies, un voyage hors du commun, l’office de tourisme, le mal du pays.',
      en: 'Selfies, an unusual trip, the tourist office, homesickness.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'On est dépaysé(e) dans un lieu très différent. Parfois on a le mal du pays. À l’office de tourisme : Il pleut. Quelle activité nous pouvons faire à l’intérieur ?',
          en: 'You feel out of place in a very different setting. Sometimes you are homesick. At the tourist office: It’s raining. What can we do indoors?',
        },
      },
    ],
    activities: [
      {
        id: 'rc-u8-selfie',
        type: 'matching',
        title: { fr: 'Lire une photo de vacances', en: 'Read a holiday photo' },
        pairs: [
          { id: 's1', left: 'C’est quelle sorte de voyage ?', right: 'famille, amis, solo…' },
          { id: 's2', left: 'Qu’est-ce qu’ils portent ?', right: 'vêtements / saison' },
          { id: 's3', left: 'Quel temps il fait ?', right: 'soleil, neige, pluie' },
          { id: 's4', left: 'Quel moyen de transport ?', right: 'voiture, avion, bateau' },
        ],
      },
      {
        id: 'rc-u8-office',
        type: 'quiz',
        title: { fr: 'S’il pleut à Paris', en: 'If it rains in Paris' },
        questions: [
          {
            id: 'o1',
            prompt: { fr: 'Activité à l’intérieur :', en: 'Indoor activity:' },
            options: [
              { fr: 'un musée, un café, un cinéma', en: 'a museum, a café, a cinema' },
              { fr: 'une randonnée en montagne uniquement', en: 'only a mountain hike' },
              { fr: 'nager dans la Seine', en: 'swim in the Seine' },
            ],
            answer: 0,
            explanation: { fr: 'On explique aussi le dépaysement : culture différente, ou mal du pays.', en: 'You can also explain feeling out of place: different culture, or homesickness.' },
          },
          {
            id: 'o2',
            prompt: { fr: 'Un voyage « hors du commun » à raconter, c’est…', en: 'An “unusual” trip to tell is…' },
            options: [
              { fr: 'lieu + saison + activités + météo + impression', en: 'place + season + activities + weather + impression' },
              { fr: 'seulement le prix du pain', en: 'only the price of bread' },
              { fr: 'un tableau de nationalités', en: 'a nationality table' },
            ],
            answer: 0,
            explanation: { fr: 'Exemple : été au Québec, aurores, tente, il faisait froid, c’était magique.', en: 'Example: summer in Quebec, northern lights, tent, it was cold, it was magical.' },
          },
        ],
      },
    ],
  },
]
