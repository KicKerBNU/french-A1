import type { Lesson } from '@/types/course'

export const vocabularyLessons: Lesson[] = [
  {
    id: 'v-u0',
    unitId: 91,
    number: 0,
    title: { fr: 'Unité 0 · Emploi du temps et monde', en: 'Unit 0 · Timetable and the world' },
    summary: {
      fr: 'Jours, matin / après-midi, et une courte bio de diplomate (texte original).',
      en: 'Days, morning / afternoon, and a short diplomat bio (original text).',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Lina étudie le lundi matin et le mercredi après-midi. Tom est en cours le mardi matin et le jeudi après-midi.',
          en: 'Lina studies Monday morning and Wednesday afternoon. Tom has class Tuesday morning and Thursday afternoon.',
        },
      },
    ],
    activities: [
      {
        id: 'rv-u0-emploi',
        type: 'matching',
        title: { fr: 'Qui est en cours ?', en: 'Who is in class?' },
        pairs: [
          { id: 'e1', left: 'lundi matin et mercredi après-midi', right: 'Lina' },
          { id: 'e2', left: 'mardi matin et jeudi après-midi', right: 'Tom' },
        ],
      },
      {
        id: 'rv-u0-bio',
        type: 'quiz',
        title: { fr: 'Lire une bio', en: 'Read a bio' },
        intro: {
          fr: 'Amina Diallo est diplomate sénégalo-canadienne. Elle est née à Dakar. Elle a travaillé pour une organisation francophone. Avant 2015, le poste de secrétaire général était surtout occupé par des hommes.',
          en: 'Amina Diallo is a Senegalese-Canadian diplomat. She was born in Dakar. She worked for a Francophone organisation. Before 2015, the secretary-general post was mostly held by men.',
        },
        questions: [
          {
            id: 'b1',
            prompt: { fr: 'Amina est née…', en: 'Amina was born…' },
            options: [
              { fr: 'à Dakar', en: 'in Dakar' },
              { fr: 'à Percé', en: 'in Percé' },
              { fr: 'sur une planète', en: 'on a planet' },
            ],
            answer: 0,
            explanation: { fr: 'On relie le lieu et la personne.', en: 'Match the place and the person.' },
          },
          {
            id: 'b2',
            prompt: { fr: 'Le Sénégal est…', en: 'Senegal is…' },
            options: [
              { fr: 'un État (un pays)', en: 'a state (a country)' },
              { fr: 'une île seulement', en: 'only an island' },
              { fr: 'une planète', en: 'a planet' },
            ],
            answer: 0,
            explanation: { fr: 'Pays ≠ île ≠ planète.', en: 'Country ≠ island ≠ planet.' },
          },
        ],
      },
    ],
  },
  {
    id: 'v-u1',
    unitId: 91,
    number: 1,
    title: { fr: 'Unité 1 · Prénoms, nationalités, courriel', en: 'Unit 1 · Names, nationalities, email' },
    summary: {
      fr: 'Prénoms, générations, un tableau de nationalités, les parties d’un e-mail.',
      en: 'First names, generations, a nationality table, the parts of an email.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'En Belgique : Emma, Noah. Au Sénégal : Fatou, Mamadou. Au Québec : William, Olivia. Un prénom « ancien » n’est pas un prénom de 2018.',
          en: 'In Belgium: Emma, Noah. In Senegal: Fatou, Mamadou. In Quebec: William, Olivia. An “old” first name is not a 2018 name.',
        },
      },
    ],
    activities: [
      {
        id: 'rv-u1-prenoms',
        type: 'matching',
        title: { fr: 'Équivalents', en: 'Equivalents' },
        pairs: [
          { id: 'p1', left: 'Piotr', right: 'Pierre' },
          { id: 'p2', left: 'Maria', right: 'Marie' },
          { id: 'p3', left: 'William', right: 'Guillaume' },
          { id: 'p4', left: 'Youcef', right: 'Joseph' },
          { id: 'p5', left: 'Esteban', right: 'Stéphane' },
        ],
      },
      {
        id: 'rv-u1-nat',
        type: 'matching',
        title: { fr: 'Pays → nationalité', en: 'Country → nationality' },
        pairs: [
          { id: 'n1', left: 'Japon', right: 'japonais / japonaise' },
          { id: 'n2', left: 'Italie', right: 'italien / italienne' },
          { id: 'n3', left: 'Inde', right: 'indien / indienne' },
          { id: 'n4', left: 'Espagne', right: 'espagnol / espagnole' },
          { id: 'n5', left: 'Mexique', right: 'mexicain / mexicaine' },
        ],
      },
      {
        id: 'rv-u1-mail',
        type: 'matching',
        title: { fr: 'Un courriel', en: 'An email' },
        pairs: [
          { id: 'm1', left: 'De :', right: 'l’expéditeur' },
          { id: 'm2', left: 'À :', right: 'le destinataire' },
          { id: 'm3', left: 'Cc :', right: 'mettre en copie' },
          { id: 'm4', left: 'fichier .pdf', right: 'une pièce jointe' },
          { id: 'm5', left: '@', right: 'arobase' },
          { id: 'm6', left: 'prénom_nom', right: 'underscore' },
        ],
      },
    ],
  },
  {
    id: 'v-u2',
    unitId: 91,
    number: 2,
    title: { fr: 'Unité 2 · Métiers et téléphone', en: 'Unit 2 · Jobs and the phone' },
    summary: {
      fr: 'Les métiers, un appel, qui contacter au bureau.',
      en: 'Jobs, a phone call, who to contact at the office.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Au téléphone : Allô ? Je vous passe X. Pourriez-vous… ? Au bureau : contrat → RH. Rendez-vous client → secrétariat. Nouveau projet → le/la graphiste ou le directeur.',
          en: 'On the phone: Hello? I’ll put X on. Could you…? At the office: contract → HR. Client meeting → reception. New project → the designer or the director.',
        },
      },
    ],
    activities: [
      {
        id: 'rv-u2-metiers',
        type: 'matching',
        title: { fr: 'Le métier', en: 'The job' },
        pairs: [
          { id: 'j1', left: 'il prend des photos', right: 'le photographe' },
          { id: 'j2', left: 'elle conduit les visiteurs', right: 'l’éco-guide' },
          { id: 'j3', left: 'il joue dans un film', right: 'l’acteur' },
          { id: 'j4', left: 'elle vend en boutique', right: 'la vendeuse' },
          { id: 'j5', left: 'elle travaille à la banque', right: 'la banquière' },
        ],
      },
      {
        id: 'rv-u2-tel',
        type: 'matching',
        title: { fr: 'Étapes d’un appel', en: 'Steps of a call' },
        pairs: [
          { id: 't1', left: '1', right: 'saluer' },
          { id: 't2', left: '2', right: 'se présenter' },
          { id: 't3', left: '3', right: 'dire l’objet de l’appel' },
          { id: 't4', left: '4', right: 'proposer une rencontre' },
          { id: 't5', left: '5', right: 'confirmer le jour et le lieu' },
          { id: 't6', left: '6', right: 'remercier et prendre congé' },
        ],
      },
    ],
  },
  {
    id: 'v-u3',
    unitId: 91,
    number: 3,
    title: { fr: 'Unité 3 · Ville, chiffres, transports', en: 'Unit 3 · City, numbers, transport' },
    summary: {
      fr: 'Les nombres, les lieux de la ville, les moyens de transport.',
      en: 'Numbers, city places, means of transport.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'capitale, arrondissement, immeuble, logement, mairie, mosquée, théâtre. En ville : métro, bus, vélo. Pour quitter la ville : train, avion, covoiturage.',
          en: 'capital, district, building, housing, town hall, mosque, theatre. In town: metro, bus, bike. To leave town: train, plane, car-share.',
        },
      },
    ],
    activities: [
      {
        id: 'rv-u3-def',
        type: 'matching',
        title: { fr: 'Le mot et sa définition', en: 'The word and its definition' },
        pairs: [
          { id: 'd1', left: 'une mosquée', right: 'un lieu de culte' },
          { id: 'd2', left: 'un arrondissement', right: 'une partie d’une ville' },
          { id: 'd3', left: 'un logement', right: 'un lieu d’habitation' },
          { id: 'd4', left: 'une mairie', right: 'les bureaux du gouvernement local' },
          { id: 'd5', left: 'un théâtre', right: 'un lieu pour les spectacles' },
          { id: 'd6', left: 'un immeuble', right: 'un bâtiment à plusieurs étages' },
        ],
      },
      {
        id: 'rv-u3-nombres',
        type: 'quiz',
        title: { fr: 'Compter', en: 'Count' },
        questions: [
          {
            id: 'n1',
            prompt: { fr: '17 = ___. 70 = ___. 80 = ___.', en: '17 = ___. 70 = ___. 80 = ___.' },
            options: [
              { fr: 'dix-sept · soixante-dix · quatre-vingts', en: 'dix-sept · soixante-dix · quatre-vingts' },
              { fr: 'dix-huit · soixante · vingt', en: 'dix-huit · soixante · vingt' },
              { fr: 'seize · treize · douze', en: 'seize · treize · douze' },
            ],
            answer: 0,
            explanation: { fr: '70 = 60+10. 80 = 4×20. 81 = quatre-vingt-un (sans s).', en: '70 = 60+10. 80 = 4×20. 81 = quatre-vingt-un (no s).' },
          },
        ],
      },
      {
        id: 'rv-u3-trans',
        type: 'matching',
        title: { fr: 'Transports', en: 'Transport' },
        pairs: [
          { id: 'tr1', left: 'en ville, souvent', right: 'métro, bus, vélo, tramway' },
          { id: 'tr2', left: 'pour quitter la ville', right: 'train, avion, car' },
          { id: 'tr3', left: 'urgence', right: 'ambulance' },
          { id: 'tr4', left: 'loisir / rare', right: 'montgolfière, voilier' },
        ],
      },
    ],
  },
  {
    id: 'v-u4',
    unitId: 91,
    number: 4,
    title: { fr: 'Unité 4 · Famille et description', en: 'Unit 4 · Family and description' },
    summary: {
      fr: 'Un arbre, le physique, les vêtements, un chat entre copains.',
      en: 'A family tree, looks, clothes, a chat between friends.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'grand(e), petit(e), mince, les cheveux blonds / bruns, les yeux bleus. Tu es marié(e) ? Tu as des enfants ? Je ne me rappelle pas… Parle-moi un peu de toi !',
          en: 'tall, short, slim, blond / brown hair, blue eyes. Are you married? Do you have children? I don’t remember… Tell me a bit about yourself!',
        },
      },
    ],
    activities: [
      {
        id: 'rv-u4-famille',
        type: 'matching',
        title: { fr: 'L’arbre', en: 'The tree' },
        pairs: [
          { id: 'f1', left: 'la mère et le père', right: 'les parents' },
          { id: 'f2', left: 'le frère du père', right: 'l’oncle' },
          { id: 'f3', left: 'la fille / le fils', right: 'les enfants' },
          { id: 'f4', left: 'les parents des parents', right: 'les grands-parents' },
        ],
      },
      {
        id: 'rv-u4-physique',
        type: 'quiz',
        title: { fr: 'Décrire', en: 'Describe' },
        intro: {
          fr: 'Inès porte une robe jaune courte, des cheveux châtains, un sourire. Elle est plutôt mince et de taille moyenne.',
          en: 'Inès is wearing a short yellow dress, has brown hair, a smile. She is rather slim and of average height.',
        },
        questions: [
          {
            id: 'd1',
            prompt: { fr: 'Sur la photo, elle porte…', en: 'In the photo she is wearing…' },
            options: [
              { fr: 'une robe jaune', en: 'a yellow dress' },
              { fr: 'un manteau noir', en: 'a black coat' },
              { fr: 'un dossard', en: 'a race bib' },
            ],
            answer: 0,
            explanation: { fr: 'On relie vêtement + couleur + taille.', en: 'Match clothes + colour + height.' },
          },
        ],
      },
      {
        id: 'rv-u4-chat',
        type: 'dialogue',
        title: { fr: 'Copains d’avant', en: 'Old friends' },
        dialogue: {
          id: 'chat',
          title: { fr: 'Message', en: 'Message' },
          context: {
            fr: 'Noah écrit à Lina. Remets les bulles dans l’ordre.',
            en: 'Noah writes to Lina. Put the bubbles in order.',
          },
          lines: [
            { speaker: 'Noah', fr: 'Parle-moi un peu de toi ! Tu es mariée maintenant ?', en: 'Tell me a bit about you! Are you married now?' },
            { speaker: 'Lina', fr: 'Je ne suis pas mariée. Et toi, tu as des enfants ?', en: 'I’m not married. And you, do you have children?' },
            { speaker: 'Noah', fr: 'Non. Tu as des frères et sœurs ?', en: 'No. Do you have brothers and sisters?' },
            { speaker: 'Lina', fr: 'Oui, un frère. Et toi, tu habites où ?', en: 'Yes, a brother. And you, where do you live?' },
          ],
        },
      },
    ],
  },
  {
    id: 'v-u5',
    unitId: 91,
    number: 5,
    title: { fr: 'Unité 5 · Quotidien, ménage, sports', en: 'Unit 5 · Daily life, chores, sports' },
    summary: {
      fr: 'Se laver, les tâches, les loisirs, les meubles.',
      en: 'Washing, chores, hobbies, furniture.',
    },
    blocks: [
      {
        type: 'note',
        title: { fr: 'Saisons', en: 'Seasons' },
        text: {
          fr: 'Pas de majuscule : en hiver, au printemps. Juillet est le mois du déménagement (au Québec). En_hiver : n’oublie pas la liaison.',
          en: 'No capital letter: en hiver, au printemps. July is moving-house month (in Quebec). En_hiver: don’t forget the liaison.',
        },
      },
    ],
    activities: [
      {
        id: 'rv-u5-hygiene',
        type: 'matching',
        title: { fr: 'Le matin', en: 'In the morning' },
        pairs: [
          { id: 'h1', left: 'dents', right: 'se brosser les dents' },
          { id: 'h2', left: 'douche', right: 'se doucher' },
          { id: 'h3', left: 'barbe', right: 'se raser' },
          { id: 'h4', left: 'vêtements', right: 's’habiller' },
        ],
      },
      {
        id: 'rv-u5-menage',
        type: 'matching',
        title: { fr: 'Les tâches', en: 'The chores' },
        pairs: [
          { id: 'c1', left: 'le linge sale', right: 'faire la lessive' },
          { id: 'c2', left: 'le sol', right: 'passer l’aspirateur' },
          { id: 'c3', left: 'les assiettes', right: 'faire la vaisselle' },
          { id: 'c4', left: 'le supermarché', right: 'faire les courses' },
          { id: 'c5', left: 'les chemises', right: 'faire le repassage' },
        ],
      },
      {
        id: 'rv-u5-sport',
        type: 'quiz',
        title: { fr: 'Sports et loisirs', en: 'Sports and hobbies' },
        questions: [
          {
            id: 's1',
            prompt: { fr: 'Tennis → raquette. Natation → ___. Vélo → ___.', en: 'Tennis → racket. Swimming → ___. Cycling → ___.' },
            options: [
              { fr: 'maillot · casque', en: 'swimsuit · helmet' },
              { fr: 'filet · ballon seulement', en: 'net · ball only' },
              { fr: 'fourchette · menu', en: 'fork · menu' },
            ],
            answer: 0,
            explanation: { fr: 'Danse : chaussons. Volley : ballon et filet.', en: 'Dance: ballet shoes. Volleyball: ball and net.' },
          },
          {
            id: 's2',
            prompt: { fr: 'L’intrus : badminton, basket, guitare.', en: 'The odd one out: badminton, basketball, guitar.' },
            options: [
              { fr: 'la guitare (ce n’est pas un sport d’équipe ici)', en: 'the guitar isn’t a team sport — la guitare' },
              { fr: 'le badminton', en: 'badminton' },
              { fr: 'le basket', en: 'basketball' },
            ],
            answer: 0,
            explanation: { fr: 'Piano / flûte / tennis : le tennis est le sport. Vaisselle / courses / yoga : la vaisselle est une tâche.', en: 'Piano / flute / tennis: tennis is the sport. Dishes / shopping / yoga: dishes are a chore.' },
          },
        ],
      },
      {
        id: 'rv-u5-meubles',
        type: 'matching',
        title: { fr: 'Chambre, salon, cuisine', en: 'Bedroom, living room, kitchen' },
        pairs: [
          { id: 'u1', left: 'un lit', right: 'chambre' },
          { id: 'u2', left: 'un canapé', right: 'salon' },
          { id: 'u3', left: 'une table et des chaises', right: 'cuisine ou salon' },
          { id: 'u4', left: 'une lampe de chevet', right: 'chambre' },
        ],
      },
    ],
  },
  {
    id: 'v-u6',
    unitId: 91,
    number: 6,
    title: { fr: 'Unité 6 · Magasins et vêtements', en: 'Unit 6 · Shops and clothes' },
    summary: {
      fr: 'Accessoires, qui fait quoi en boutique, la caisse, les couleurs.',
      en: 'Accessories, who does what in a shop, the till, colours.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Une cravate, un nœud papillon, une bague, un collier, des boucles d’oreilles, une banane (sac). À la caisse : carte, espèces, paiement, monnaie, ticket. Le vendeur explique la promo ; le client décide et paie. Il ne faut pas mentir sur le prix.',
          en: 'A tie, a bow tie, a ring, a necklace, earrings, a belt bag. At the till: card, cash, payment, change, receipt. The assistant explains the offer; the customer decides and pays. You mustn’t lie about the price.',
        },
      },
    ],
    activities: [
      {
        id: 'rv-u6-objets',
        type: 'matching',
        title: { fr: 'Où acheter ?', en: 'Where to buy?' },
        pairs: [
          { id: 'o1', left: 'un cadeau romantique, une bague', right: 'bijouterie / magasin de vêtements' },
          { id: 'o2', left: 'une robe pour une fête', right: 'magasin de vêtements' },
          { id: 'o3', left: 'un tableau et des bougies', right: 'magasin de déco' },
          { id: 'o4', left: 'des croissants', right: 'boulangerie' },
          { id: 'o5', left: 'des médicaments', right: 'pharmacie' },
        ],
      },
      {
        id: 'rv-u6-caisse',
        type: 'quiz',
        title: { fr: 'À la caisse', en: 'At the till' },
        questions: [
          {
            id: 'c1',
            prompt: { fr: 'Ça fait 4 €. Comment vous souhaitez ___ ? — Par ___, s’il vous plaît.', en: 'That’s €4. How would you like to ___? — By ___, please.' },
            options: [
              { fr: 'payer · carte', en: 'pay · card' },
              { fr: 'ranger · cravate', en: 'tidy · tie' },
              { fr: 'cuisiner · sel', en: 'cook · salt' },
            ],
            answer: 0,
            explanation: { fr: 'Espèces, carte, ticket de caisse, monnaie.', en: 'Cash, card, receipt, change.' },
          },
          {
            id: 'c2',
            prompt: { fr: 'Intrus : pièce, billet, carte de crédit.', en: 'Odd one out: coin, banknote, credit card.' },
            options: [
              { fr: 'ce n’est pas un intrus — ce sont trois moyens de payer', en: 'not an odd one — three ways to pay' },
              { fr: 'seulement la carte', en: 'only the card' },
              { fr: 'seulement la pièce', en: 'only the coin' },
            ],
            answer: 0,
            explanation: { fr: 'Insérer / acheter / retirer : retirer = au distributeur. Code erroné → transaction refusée.', en: 'Insert / buy / withdraw: withdraw = at the cash machine. Wrong PIN → declined.' },
          },
        ],
      },
      {
        id: 'rv-u6-vet',
        type: 'matching',
        title: { fr: 'Motifs', en: 'Patterns' },
        pairs: [
          { id: 'w1', left: 'une chemise à carreaux', right: 'carreaux' },
          { id: 'w2', left: 'une jupe à pois', right: 'pois' },
          { id: 'w3', left: 'un T-shirt à rayures', right: 'rayures' },
          { id: 'w4', left: 'une robe à fleurs', right: 'fleurs' },
        ],
      },
    ],
  },
  {
    id: 'v-u7',
    unitId: 91,
    number: 7,
    title: { fr: 'Unité 7 · Table, goûts, resto', en: 'Unit 7 · Table, tastes, restaurant' },
    summary: {
      fr: 'Sucré / salé, couverts, métiers de la salle, un menu.',
      en: 'Sweet / savoury, cutlery, front-of-house jobs, a menu.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Entrées, plats, desserts, boissons. Le pâtissier prépare les gâteaux. La cheffe cuisine. La réceptionniste accueille. Le plongeur fait la vaisselle. La serveuse prend les commandes.',
          en: 'Starters, mains, desserts, drinks. The pastry cook makes cakes. The head chef cooks. The receptionist greets. The dishwasher does the dishes. The waitress takes orders.',
        },
      },
    ],
    activities: [
      {
        id: 'rv-u7-gouts',
        type: 'matching',
        title: { fr: 'Sucré ou salé ?', en: 'Sweet or savoury?' },
        pairs: [
          { id: 'g1', left: 'la confiture, le miel, le chocolat', right: 'sucré' },
          { id: 'g2', left: 'le sel, les saucisses', right: 'salé' },
          { id: 'g3', left: 'les crêpes, le beurre', right: 'sucré ou salé' },
        ],
      },
      {
        id: 'rv-u7-table',
        type: 'matching',
        title: { fr: 'À table', en: 'At the table' },
        pairs: [
          { id: 't1', left: 'on coupe', right: 'un couteau' },
          { id: 't2', left: 'on pique', right: 'une fourchette' },
          { id: 't3', left: 'on boit', right: 'un verre' },
          { id: 't4', left: 'on pose le plat', right: 'une assiette' },
          { id: 't5', left: 'on essuie', right: 'une serviette' },
        ],
      },
      {
        id: 'rv-u7-jobs',
        type: 'matching',
        title: { fr: 'En cuisine / en salle', en: 'Kitchen / dining room' },
        pairs: [
          { id: 'j1', left: 'prépare les gâteaux', right: 'pâtissier / pâtissière' },
          { id: 'j2', left: 'prépare les plats', right: 'chef / cheffe' },
          { id: 'j3', left: 'accueille à l’entrée', right: 'réceptionniste' },
          { id: 'j4', left: 'fait la vaisselle', right: 'plongeur / plongeuse' },
          { id: 'j5', left: 'prend les commandes', right: 'serveur / serveuse' },
        ],
      },
      {
        id: 'rv-u7-etapes',
        type: 'matching',
        title: { fr: 'Préparer une réception', en: 'Prepare a reception' },
        pairs: [
          { id: 'e1', left: '1', right: 'Couper les fruits et les légumes' },
          { id: 'e2', left: '2', right: 'Cuire la viande' },
          { id: 'e3', left: '3', right: 'Mettre la table' },
          { id: 'e4', left: '4', right: 'Monter les assiettes' },
          { id: 'e5', left: '5', right: 'Servir les plats et les boissons' },
        ],
      },
    ],
  },
  {
    id: 'v-u8',
    unitId: 91,
    number: 8,
    title: { fr: 'Unité 8 · Météo, voyage, valise', en: 'Unit 8 · Weather, travel, suitcase' },
    summary: {
      fr: 'Il pleut, les métiers de l’aéroport, ville / mer / nature, cabine ou soute.',
      en: 'It’s raining, airport jobs, city / sea / nature, cabin or hold.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Je prends mon parapluie parce qu’il pleut. Il y a des nuages : on annonce une averse. Il y a du soleil. Il y a de la neige. Annonce : les passagers du vol CN 12 sont invités à se présenter à la porte 4.',
          en: 'I take my umbrella because it’s raining. There are clouds: a shower is forecast. It’s sunny. There’s snow. Announcement: passengers on flight CN 12 are invited to go to gate 4.',
        },
      },
    ],
    activities: [
      {
        id: 'rv-u8-meteo',
        type: 'matching',
        title: { fr: 'Compléter la météo', en: 'Complete the weather' },
        pairs: [
          { id: 'w1', left: 'parapluie', right: 'il pleut' },
          { id: 'w2', left: 'nuages, on reste chez nous', right: 'une averse / de la pluie' },
          { id: 'w3', left: 'il fait beau toute la journée', right: 'du soleil' },
          { id: 'w4', left: 'tout est blanc sur les montagnes', right: 'de la neige' },
        ],
      },
      {
        id: 'rv-u8-jobs',
        type: 'matching',
        title: { fr: 'À l’aéroport', en: 'At the airport' },
        pairs: [
          { id: 'j1', left: 'accueille à l’hôtel ou au comptoir', right: 'réceptionniste' },
          { id: 'j2', left: 'contrôle les passeports', right: 'douanier / douanière' },
          { id: 'j3', left: 'sert dans l’avion', right: 'hôtesse / steward' },
          { id: 'j4', left: 'pilote l’avion', right: 'pilote' },
        ],
      },
      {
        id: 'rv-u8-lieux',
        type: 'matching',
        title: { fr: 'Ville, mer, nature', en: 'City, sea, nature' },
        pairs: [
          { id: 'l1', left: 'musées, cathédrales, voitures', right: 'la ville' },
          { id: 'l2', left: 'maillot, serviette, chapeau de paille', right: 'la mer' },
          { id: 'l3', left: 'forêt, silence, lacs', right: 'la nature' },
        ],
      },
      {
        id: 'rv-u8-intrus',
        type: 'quiz',
        title: { fr: 'Hôtel et valise', en: 'Hotel and suitcase' },
        questions: [
          {
            id: 'i1',
            prompt: { fr: 'Intrus : une valise, un comptoir, un lit double, un billet de train.', en: 'Odd one out: a suitcase, a desk, a double bed, a train ticket.' },
            options: [
              { fr: 'le billet de train (pas un objet d’hôtel)', en: 'the train ticket (not a hotel object)' },
              { fr: 'le lit', en: 'the bed' },
              { fr: 'la valise', en: 'the suitcase' },
            ],
            answer: 0,
            explanation: { fr: 'Réservation / hôtesse / passeport : l’hôtesse n’est pas un service d’hôtel. Bienvenue / météo / se reposer / climatisation : la météo n’est pas une prestation.', en: 'Booking / flight attendant / passport: the attendant isn’t a hotel service. Welcome / weather / rest / A/C: weather isn’t a hotel extra.' },
          },
          {
            id: 'i2',
            prompt: { fr: 'Dans le sac cabine, tu mets surtout…', en: 'In the cabin bag you mainly put…' },
            options: [
              { fr: 'chargeur, médicaments, papiers, un livre', en: 'charger, medicine, papers, a book' },
              { fr: 'uniquement les chaussures de marche', en: 'only hiking boots' },
              { fr: 'le réfrigérateur', en: 'the fridge' },
            ],
            answer: 0,
            explanation: { fr: 'Soute : vêtements, chaussures. Cabine : ce dont tu as besoin dans l’avion.', en: 'Hold: clothes, shoes. Cabin: what you need on the plane.' },
          },
        ],
      },
    ],
  },
]
