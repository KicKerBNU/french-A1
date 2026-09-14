import type { Lesson } from '@/types/course'

export const grammarLessons: Lesson[] = [
  {
    id: 'g-u0',
    unitId: 90,
    number: 0,
    title: { fr: 'Unité 0 · Alphabet et accents', en: 'Unit 0 · Alphabet and accents' },
    summary: {
      fr: 'Les lettres, la cédille, les accents, et quelques consonnes qui se ressemblent.',
      en: 'The letters, the cedilla, the accents, and a few lookalike consonants.',
    },
    blocks: [
      {
        type: 'note',
        title: { fr: 'Accents', en: 'Accents' },
        text: {
          fr: 'ç = cédille. é = accent aigu. è, à, ù = accent grave. ê, â, ô, î, û = circonflexe. ë, ï, ü = tréma.',
          en: 'ç = cedilla. é = acute. è, à, ù = grave. ê, â, ô, î, û = circumflex. ë, ï, ü = diaeresis.',
        },
      },
    ],
    activities: [
      {
        id: 'rg-u0-accents',
        type: 'matching',
        title: { fr: 'Quel accent ?', en: 'Which accent?' },
        pairs: [
          { id: 'a1', left: 'français', right: 'cédille' },
          { id: 'a2', left: 'café', right: 'accent aigu' },
          { id: 'a3', left: 'très', right: 'accent grave' },
          { id: 'a4', left: 'hôtel', right: 'accent circonflexe' },
          { id: 'a5', left: 'Noël', right: 'tréma' },
        ],
      },
      {
        id: 'rg-u0-cons',
        type: 'quiz',
        title: { fr: 'Quelle consonne ?', en: 'Which consonant?' },
        questions: [
          {
            id: 'c1',
            prompt: { fr: 'pain / bain : tu entends d’abord…', en: 'pain / bain: you first hear…' },
            options: [
              { fr: '[p] puis [b]', en: '[p] then [b]' },
              { fr: '[f] puis [v]', en: '[f] then [v]' },
              { fr: '[k] puis [g]', en: '[k] then [g]' },
            ],
            answer: 0,
            explanation: { fr: 'p/b, f/v, t/d, k/g : des paires sourde / sonore.', en: 'p/b, f/v, t/d, k/g: voiceless / voiced pairs.' },
          },
          {
            id: 'c2',
            prompt: { fr: 'chocolat commence par…', en: 'chocolat starts with…' },
            options: [
              { fr: '[ʃ]', en: '[ʃ]' },
              { fr: '[ʒ]', en: '[ʒ]' },
              { fr: '[s]', en: '[s]' },
            ],
            answer: 0,
            explanation: { fr: 'ch → [ʃ]. j / ge → souvent [ʒ] : jour, voyage.', en: 'ch → [ʃ]. j / ge → often [ʒ]: jour, voyage.' },
          },
        ],
      },
    ],
  },
  {
    id: 'g-u1',
    unitId: 90,
    number: 1,
    title: { fr: 'Unité 1 · Être, nationalités, articles', en: 'Unit 1 · Être, nationalities, articles' },
    summary: {
      fr: 'Voyelles, adjectifs de nationalité, être, c’est, venir / habiter, un une des.',
      en: 'Vowels, nationality adjectives, être, c’est, venir / habiter, un une des.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Les nationalités s’accordent. canadien → canadienne, grec → grecque, turc → turque. Venir de France, d’Italie. Habiter en Suisse, au Canada, aux États-Unis, à Lyon. Un métier, une carte, des collègues.',
          en: 'Nationalities agree. canadien → canadienne, grec → grecque, turc → turque. Come from France, from Italy. Live in Switzerland, in Canada, in the United States, in Lyon. A job, a card, colleagues.',
        },
      },
    ],
    activities: [
      {
        id: 'rg-u1-nat',
        type: 'quiz',
        title: { fr: 'Nationalités', en: 'Nationalities' },
        questions: [
          {
            id: 'n1',
            prompt: { fr: 'Elle est ___ (canadien).', en: 'She is ___ (canadien).' },
            options: [
              { fr: 'canadienne', en: 'canadienne' },
              { fr: 'canadien', en: 'canadien' },
              { fr: 'canadiens', en: 'canadiens' },
            ],
            answer: 0,
            explanation: { fr: 'Féminin : +ne après n.', en: 'Feminine: +ne after n.' },
          },
          {
            id: 'n2',
            prompt: { fr: 'Ils sont ___ (grec).', en: 'They are ___ (grec).' },
            options: [
              { fr: 'grecs', en: 'grecs' },
              { fr: 'grecques', en: 'grecques' },
              { fr: 'grec', en: 'grec' },
            ],
            answer: 0,
            explanation: { fr: 'Masculin pluriel : grecs. Féminin : grecque / grecques.', en: 'Masculine plural: grecs. Feminine: grecque / grecques.' },
          },
          {
            id: 'n3',
            prompt: { fr: 'Est-ce que c’est un téléphone ? — Non, ___ un ordinateur.', en: 'Is it a phone? — No, ___ a computer.' },
            options: [
              { fr: 'c’est', en: 'c’est' },
              { fr: 'est-ce que', en: 'est-ce que' },
              { fr: 'ils sont', en: 'ils sont' },
            ],
            answer: 0,
            explanation: { fr: 'Question : Est-ce que c’est… ? Réponse : C’est… / Non, c’est…', en: 'Question: Est-ce que c’est…? Answer: C’est… / Non, c’est…' },
          },
        ],
      },
      {
        id: 'rg-u1-lieu',
        type: 'matching',
        title: { fr: 'Venir / habiter', en: 'Come from / live in' },
        pairs: [
          { id: 'l1', left: 'Je viens ___ France.', right: 'de' },
          { id: 'l2', left: 'Elle habite ___ Suisse.', right: 'en' },
          { id: 'l3', left: 'Nous habitons ___ Canada.', right: 'au' },
          { id: 'l4', left: 'Ils habitent ___ États-Unis.', right: 'aux' },
          { id: 'l5', left: 'Tu habites ___ Lyon.', right: 'à' },
        ],
      },
      {
        id: 'rg-u1-articles',
        type: 'matching',
        title: { fr: 'Un, une, des', en: 'Un, une, des' },
        pairs: [
          { id: 'i1', left: '___ passeport', right: 'un' },
          { id: 'i2', left: '___ carte d’identité', right: 'une' },
          { id: 'i3', left: '___ documents', right: 'des' },
          { id: 'i4', left: '___ permis de conduire', right: 'un' },
        ],
      },
    ],
  },
  {
    id: 'g-u2',
    unitId: 90,
    number: 2,
    title: { fr: 'Unité 2 · Avoir, -er, aller / faire / prendre', en: 'Unit 2 · Avoir, -er, aller / faire / prendre' },
    summary: {
      fr: 'Avoir, les verbes en -er, trois irréguliers, les prépositions de lieu, l’impératif.',
      en: 'Avoir, -er verbs, three irregulars, place prepositions, the imperative.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Avoir : possession, âge, sensation. J’ai une carte. J’ai 30 ans. J’ai soif. Impératif : Prends le métro. Va à la bibliothèque. Allons au resto. Pas de tu : Prends, pas Tu prends.',
          en: 'Avoir: possession, age, feeling. I have a card. I’m 30. I’m thirsty. Imperative: Take the metro. Go to the library. Let’s go to the restaurant. No tu: Prends, not Tu prends.',
        },
      },
    ],
    activities: [
      {
        id: 'rg-u2-avoir',
        type: 'quiz',
        title: { fr: 'Avoir et -er', en: 'Avoir and -er' },
        questions: [
          {
            id: 'a1',
            prompt: { fr: 'Nous ___ soif. Vous ___ une carte. On ___ 30 ans. (avoir)', en: 'We ___ thirsty. You ___ a card. One ___ 30. (avoir)' },
            options: [
              { fr: 'avons · avez · a', en: 'avons · avez · a' },
              { fr: 'sommes · êtes · est', en: 'sommes · êtes · est' },
              { fr: 'allons · allez · va', en: 'allons · allez · va' },
            ],
            answer: 0,
            explanation: { fr: 'Avoir, pas être, pour l’âge et la soif.', en: 'Avoir, not être, for age and thirst.' },
          },
          {
            id: 'a2',
            prompt: { fr: 'Je demande, tu ___, ils ___.', en: 'I ask, you ___, they ___.' },
            options: [
              { fr: 'demandes · demandent', en: 'demandes · demandent' },
              { fr: 'demande · demande', en: 'demande · demande' },
              { fr: 'demandez · demandons', en: 'demandez · demandons' },
            ],
            answer: 0,
            explanation: { fr: '-e, -es, -e, -ons, -ez, -ent.', en: '-e, -es, -e, -ons, -ez, -ent.' },
          },
        ],
      },
      {
        id: 'rg-u2-irr',
        type: 'matching',
        title: { fr: 'Aller, faire, prendre', en: 'Aller, faire, prendre' },
        pairs: [
          { id: 'r1', left: 'je vais / tu vas / il va', right: 'aller' },
          { id: 'r2', left: 'je fais / tu fais / nous faisons', right: 'faire' },
          { id: 'r3', left: 'je prends / tu prends / ils prennent', right: 'prendre' },
          { id: 'r4', left: 'Prends le métro !', right: 'impératif (tu)' },
          { id: 'r5', left: 'Allons au restaurant !', right: 'impératif (nous)' },
        ],
      },
      {
        id: 'rg-u2-prep',
        type: 'matching',
        title: { fr: 'Où est-ce ?', en: 'Where is it?' },
        pairs: [
          { id: 'p1', left: 'à côté de', right: 'juste à côté' },
          { id: 'p2', left: 'en face de', right: 'de l’autre côté de la rue' },
          { id: 'p3', left: 'près du métro', right: 'pas loin (de + le → du)' },
          { id: 'p4', left: 'à droite / à gauche', right: 'côté' },
        ],
      },
    ],
  },
  {
    id: 'g-u3',
    unitId: 90,
    number: 3,
    title: { fr: 'Unité 3 · Il y a, négation, ici / là', en: 'Unit 3 · Il y a, negation, ici / là' },
    summary: {
      fr: 'Décrire un quartier, dire ce qu’il n’y a pas, montrer du doigt.',
      en: 'Describe a neighbourhood, say what there isn’t, point.',
    },
    blocks: [
      {
        type: 'note',
        title: { fr: 'Négation', en: 'Negation' },
        text: {
          fr: 'ne (n’) + verbe + pas. un / une / des → de / d’ à la négation : Il n’y a pas de mosquée. Ici = tout près. Là = plus loin.',
          en: 'ne (n’) + verb + pas. un / une / des → de / d’ in the negative: There is no mosque. Ici = right here. Là = further away.',
        },
      },
    ],
    activities: [
      {
        id: 'rg-u3-iya',
        type: 'quiz',
        title: { fr: 'Il y a / il n’y a pas', en: 'There is / there isn’t' },
        questions: [
          {
            id: 'y1',
            prompt: { fr: 'Dans ma ville, ___ un musée. Il n’y a pas ___ métro.', en: 'In my city, ___ a museum. There is no ___ metro.' },
            options: [
              { fr: 'il y a · de', en: 'il y a · de' },
              { fr: 'c’est · du', en: 'c’est · du' },
              { fr: 'j’ai · des', en: 'j’ai · des' },
            ],
            answer: 0,
            explanation: { fr: 'Il y a + un/une/des. Négation : pas de.', en: 'Il y a + un/une/des. Negative: pas de.' },
          },
          {
            id: 'y2',
            prompt: { fr: 'Un quartier, qu’est-ce que c’est ?', en: 'A neighbourhood — what is it?' },
            options: [
              { fr: 'une petite partie d’une ville', en: 'a small part of a city' },
              { fr: 'un verbe du 1er groupe', en: 'a group-1 verb' },
              { fr: 'un article partitif', en: 'a partitive article' },
            ],
            answer: 0,
            explanation: { fr: 'Qu’est-ce que c’est ? → C’est…', en: 'What is it? → It’s…' },
          },
          {
            id: 'y3',
            prompt: { fr: 'J’habite ici. Tu habites là. Ici, c’est…', en: 'I live here. You live there. Ici is…' },
            options: [
              { fr: 'tout près de moi', en: 'right next to me' },
              { fr: 'toujours un autre pays', en: 'always another country' },
              { fr: 'un passé composé', en: 'a passé composé' },
            ],
            answer: 0,
            explanation: { fr: 'ici proche, là plus loin.', en: 'ici close, là further.' },
          },
        ],
      },
    ],
  },
  {
    id: 'g-u4',
    unitId: 90,
    number: 4,
    title: { fr: 'Unité 4 · C’est qui, possessifs, adjectifs', en: 'Unit 4 · Who is it, possessives, adjectives' },
    summary: {
      fr: 'Qui est-ce, mon / ma / mes, l’accord de l’adjectif, venir de, mais / et, le / la / les.',
      en: 'Who is it, mon / ma / mes, adjective agreement, venir de, mais / et, le / la / les.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Qui est-ce ? C’est mon frère. Ma, ta, sa → mon, ton, son devant une voyelle : mon amie. L’adjectif s’accorde : une robe blanche. Moi, toi, lui : pronoms toniques. Quand est-ce que tu travailles ?',
          en: 'Who is it? It’s my brother. Ma, ta, sa → mon, ton, son before a vowel: mon amie. The adjective agrees: a white dress. Moi, toi, lui: tonic pronouns. When do you work?',
        },
      },
    ],
    activities: [
      {
        id: 'rg-u4-poss',
        type: 'quiz',
        title: { fr: 'Possessifs et qui', en: 'Possessives and who' },
        questions: [
          {
            id: 'p1',
            prompt: { fr: 'Je ne connais pas Léa. ___ ? — ___ une actrice.', en: 'I don’t know Léa. ___? — ___ an actress.' },
            options: [
              { fr: 'Qui est-ce · C’est', en: 'Qui est-ce · C’est' },
              { fr: 'Où est-ce · Il y a', en: 'Où est-ce · Il y a' },
              { fr: 'Quand · Ce sont', en: 'Quand · Ce sont' },
            ],
            answer: 0,
            explanation: { fr: 'Qui est-ce ? C’est… Pour plusieurs : Ce sont mes parents.', en: 'Who is it? It’s… For several: Ce sont mes parents.' },
          },
          {
            id: 'p2',
            prompt: { fr: 'Je connais ___ amie. (ton / ta)', en: 'I know ___ friend. (ton / ta)' },
            options: [
              { fr: 'ton', en: 'ton' },
              { fr: 'ta', en: 'ta' },
              { fr: 'tes', en: 'tes' },
            ],
            answer: 0,
            explanation: { fr: 'amie commence par une voyelle → ton amie.', en: 'amie starts with a vowel → ton amie.' },
          },
          {
            id: 'p3',
            prompt: { fr: 'Elle est ___ (créatif). La robe est ___ (blanc).', en: 'She is ___ (créatif). The dress is ___ (blanc).' },
            options: [
              { fr: 'créative · blanche', en: 'créative · blanche' },
              { fr: 'créatif · blanc', en: 'créatif · blanc' },
              { fr: 'créatives · blancs', en: 'créatives · blancs' },
            ],
            answer: 0,
            explanation: { fr: 'beau → belle, blanc → blanche, vieux → vieille.', en: 'beau → belle, blanc → blanche, vieux → vieille.' },
          },
        ],
      },
      {
        id: 'rg-u4-art',
        type: 'matching',
        title: { fr: 'Le, la, l’, les / moi toi', en: 'Le, la, l’, les / moi toi' },
        pairs: [
          { id: 'd1', left: '___ métier (m.)', right: 'le' },
          { id: 'd2', left: '___ heure', right: 'l’' },
          { id: 'd3', left: '___ semaine', right: 'la' },
          { id: 'd4', left: 'Et ___ , tu aimes la mode ?', right: 'toi' },
          { id: 'd5', left: 'Elle vient ___ se marier.', right: 'de' },
        ],
      },
    ],
  },
  {
    id: 'g-u5',
    unitId: 90,
    number: 5,
    title: { fr: 'Unité 5 · Pronominaux, fréquence, il faut', en: 'Unit 5 · Reflexives, frequency, il faut' },
    summary: {
      fr: 'Se lever, souvent / jamais, à quelle heure, le futur proche, devoir / pouvoir / vouloir.',
      en: 'Se lever, often / never, at what time, the near future, devoir / pouvoir / vouloir.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Je me lève. Je ne me couche pas tard. Jamais remplace pas : Je ne vais jamais à la piscine. Futur proche : je vais + infinitif. Il faut + infinitif (pas de je). Il ne faut pas marcher sur la pelouse.',
          en: 'I get up. I don’t go to bed late. Jamais replaces pas: I never go to the pool. Near future: je vais + infinitive. Il faut + infinitive (no je). You mustn’t walk on the grass.',
        },
      },
    ],
    activities: [
      {
        id: 'rg-u5-refl',
        type: 'quiz',
        title: { fr: 'Se lever, fréquence, futur', en: 'Getting up, frequency, future' },
        questions: [
          {
            id: 'f1',
            prompt: { fr: 'Le matin, elle ___ à 8 h, puis elle ___ tout de suite. (se réveiller / se lever)', en: 'In the morning she ___ at 8, then she ___ right away.' },
            options: [
              { fr: 'se réveille · se lève', en: 'se réveille · se lève' },
              { fr: 'réveille · lève', en: 'réveille · lève' },
              { fr: 'me réveille · te lèves', en: 'me réveille · te lèves' },
            ],
            answer: 0,
            explanation: { fr: 'Pronom réfléchi = la personne du verbe.', en: 'Reflexive pronoun = the person of the verb.' },
          },
          {
            id: 'f2',
            prompt: { fr: 'Je ne fais ___ de roller. Combien de fois ___ semaine tu fais les courses ?', en: 'I ___ go roller skating. How many times ___ week do you shop?' },
            options: [
              { fr: 'jamais · par', en: 'jamais · par' },
              { fr: 'pas jamais · de', en: 'pas jamais · de' },
              { fr: 'toujours · à', en: 'toujours · à' },
            ],
            answer: 0,
            explanation: { fr: 'jamais sans pas. une fois par semaine.', en: 'jamais without pas. once a week.' },
          },
          {
            id: 'f3',
            prompt: { fr: 'Samedi, je ___ au tennis. Il ___ pas beau. (aller)', en: 'Saturday I ___ tennis. The weather ___ nice. (aller)' },
            options: [
              { fr: 'vais jouer · ne va', en: 'vais jouer · ne va' },
              { fr: 'joue vais · n’est va', en: 'joue vais · n’est va' },
              { fr: 'aller · va ne', en: 'aller · va ne' },
            ],
            answer: 0,
            explanation: { fr: 'je vais + infinitif. Négation : ne va pas.', en: 'je vais + infinitive. Negative: ne va pas.' },
          },
          {
            id: 'f4',
            prompt: { fr: 'À la piscine : Il ___ un bonnet. Il ___ pas courir.', en: 'At the pool: You ___ a cap. You ___ not run.' },
            options: [
              { fr: 'faut · ne faut', en: 'faut · ne faut' },
              { fr: 'dois · ne dois', en: 'dois · ne dois' },
              { fr: 'vais · ne vais', en: 'vais · ne vais' },
            ],
            answer: 0,
            explanation: { fr: 'Il faut + infinitif. Il ne faut pas + infinitif.', en: 'Il faut + infinitive. Il ne faut pas + infinitive.' },
          },
        ],
      },
      {
        id: 'rg-u5-quand',
        type: 'matching',
        title: { fr: 'À quelle heure / avec qui', en: 'At what time / with whom' },
        pairs: [
          { id: 'q1', left: 'À quelle heure tu fais du yoga ?', right: 'À 18 h 30.' },
          { id: 'q2', left: 'Avec qui tu vas au cinéma ?', right: 'Avec mes amis.' },
          { id: 'q3', left: 'Je range ma chambre ___.', right: 'maintenant' },
          { id: 'q4', left: 'On se voit ___.', right: 'demain' },
          { id: 'q5', left: 'Je finis ___.', right: 'bientôt' },
        ],
      },
    ],
  },
  {
    id: 'g-u6',
    unitId: 90,
    number: 6,
    title: { fr: 'Unité 6 · Quel, ce, et / ou, pour', en: 'Unit 6 · Quel, ce, et / ou, pour' },
    summary: {
      fr: 'Quel / laquelle, ce / cet / cette / ces, et ou ou, des → de, pour + infinitif.',
      en: 'Quel / which, ce / cet / cette / ces, et or ou, des → de, pour + infinitive.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Quel style tu aimes ? Quelle jupe ? Ce pull, cet homme, cette ceinture, ces chaussures. Pour choisir : le savon vert ou orange ? Pour ajouter : draps et serviettes. des → de devant un adjectif pluriel : de belles clés. Je vais à la pharmacie pour acheter des vitamines.',
          en: 'What style do you like? Which skirt? This jumper, this man, this belt, these shoes. To choose: green or orange soap? To add: sheets and towels. des → de before a plural adjective: de belles clés. I’m going to the pharmacy to buy vitamins.',
        },
      },
    ],
    activities: [
      {
        id: 'rg-u6-quel',
        type: 'quiz',
        title: { fr: 'Quel et ce', en: 'Quel and ce' },
        questions: [
          {
            id: 'w1',
            prompt: { fr: '___ pantalon tu préfères ? ___ sacs sont pratiques ?', en: '___ trousers do you prefer? ___ bags are practical?' },
            options: [
              { fr: 'Quel · Quels', en: 'Quel · Quels' },
              { fr: 'Quelle · Quelles', en: 'Quelle · Quelles' },
              { fr: 'Ce · Ces', en: 'Ce · Ces' },
            ],
            answer: 0,
            explanation: { fr: 'quel + masculin. quels + masculin pluriel.', en: 'quel + masculine. quels + masculine plural.' },
          },
          {
            id: 'w2',
            prompt: { fr: 'Je prends ___ écharpe et ___ blouson.', en: 'I’ll take ___ scarf and ___ jacket.' },
            options: [
              { fr: 'cette · ce', en: 'cette · ce' },
              { fr: 'cet · cette', en: 'cet · cette' },
              { fr: 'ces · cet', en: 'ces · cet' },
            ],
            answer: 0,
            explanation: { fr: 'cet + voyelle : cet homme, cet accessoire.', en: 'cet + vowel: cet homme, cet accessoire.' },
          },
          {
            id: 'w3',
            prompt: { fr: 'Je vends ___ objets anciens. Le magasin propose ___ nouveaux produits.', en: 'I sell ___ old objects. The shop offers ___ new products.' },
            options: [
              { fr: 'des · de', en: 'des · de' },
              { fr: 'de · des', en: 'de · des' },
              { fr: 'du · de la', en: 'du · de la' },
            ],
            answer: 0,
            explanation: { fr: 'des + nom. de + adjectif pluriel + nom.', en: 'des + noun. de + plural adjective + noun.' },
          },
        ],
      },
      {
        id: 'rg-u6-pour',
        type: 'matching',
        title: { fr: 'Pour + infinitif', en: 'Pour + infinitive' },
        pairs: [
          { id: 'o1', left: 'Je vais à la pharmacie pour…', right: 'acheter des vitamines' },
          { id: 'o2', left: 'Il utilise un distributeur pour…', right: 'retirer de l’argent' },
          { id: 'o3', left: 'Vous achetez en solde pour…', right: 'économiser' },
          { id: 'o4', left: 'Nous regardons l’étiquette pour…', right: 'vérifier le prix' },
        ],
      },
    ],
  },
  {
    id: 'g-u7',
    unitId: 90,
    number: 7,
    title: { fr: 'Unité 7 · Partitifs et passé composé', en: 'Unit 7 · Partitives and passé composé' },
    summary: {
      fr: 'Du / de la / des, pas de, un peu de, avoir ou être + participe.',
      en: 'Du / de la / des, pas de, a little, avoir or être + participle.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Je bois du vin. Je ne bois pas de vin. un kilo de farine, trop de sel. PC avec avoir : j’ai fait, tu as bu, ils ont dit. Avec être (mouvement) : elle est arrivée, ils sont venus. Accord avec être : elle est partie.',
          en: 'I drink wine. I don’t drink wine. a kilo of flour, too much salt. PC with avoir: I did, you drank, they said. With être (movement): she arrived, they came. Agreement with être: she left.',
        },
      },
    ],
    activities: [
      {
        id: 'rg-u7-part',
        type: 'quiz',
        title: { fr: 'Du, de la, pas de', en: 'Du, de la, pas de' },
        questions: [
          {
            id: 't1',
            prompt: { fr: 'Le matin, je prends ___ café. Je ne prends pas ___ thé.', en: 'In the morning I have ___ coffee. I don’t have ___ tea.' },
            options: [
              { fr: 'du · de', en: 'du · de' },
              { fr: 'de · du', en: 'de · du' },
              { fr: 'le · le', en: 'le · le' },
            ],
            answer: 0,
            explanation: { fr: 'Partitif à l’affirmation. pas de à la négation.', en: 'Partitive in the affirmative. pas de in the negative.' },
          },
          {
            id: 't2',
            prompt: { fr: 'Elle met un peu ___ poivre. Nous ne mangeons pas assez ___ poisson.', en: 'She puts a little ___ pepper. We don’t eat enough ___ fish.' },
            options: [
              { fr: 'de · de', en: 'de · de' },
              { fr: 'du · du', en: 'du · du' },
              { fr: 'des · des', en: 'des · des' },
            ],
            answer: 0,
            explanation: { fr: 'Après un peu / assez / trop / beaucoup : de / d’.', en: 'After un peu / assez / trop / beaucoup: de / d’.' },
          },
        ],
      },
      {
        id: 'rg-u7-pc',
        type: 'matching',
        title: { fr: 'Avoir ou être ?', en: 'Avoir or être?' },
        pairs: [
          { id: 'pc1', left: 'Hier, nous ___ préparé une tarte. (avoir)', right: 'avons' },
          { id: 'pc2', left: 'Ma mère ___ venue me voir. (être)', right: 'est' },
          { id: 'pc3', left: 'Mes amis ___ bu du chocolat. (avoir)', right: 'ont' },
          { id: 'pc4', left: 'Vous ___ partis tout de suite ? (être)', right: 'êtes' },
          { id: 'pc5', left: 'Je suis arrivée. (F)', right: 'accord féminin' },
        ],
      },
    ],
  },
  {
    id: 'g-u8',
    unitId: 90,
    number: 8,
    title: { fr: 'Unité 8 · Temps, comparaison, cause', en: 'Unit 8 · Time, comparison, cause' },
    summary: {
      fr: 'Il y a / depuis / dans, plus moins aussi que, pourquoi / parce que, donc.',
      en: 'Il y a / depuis / dans, plus moins aussi que, pourquoi / parce que, donc.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Il y a trois jours : terminé. Depuis cinq ans : ça continue. Dans un an : futur. plus grand que, moins cher que, aussi chaud que. Pourquoi ? Parce que… (parce qu’ + voyelle). Donc = conséquence.',
          en: 'Three days ago: finished. For five years: it continues. In a year: future. bigger than, cheaper than, as hot as. Why? Because… (parce qu’ + vowel). Donc = result.',
        },
      },
    ],
    activities: [
      {
        id: 'rg-u8-temps',
        type: 'quiz',
        title: { fr: 'Depuis, il y a, dans', en: 'Depuis, il y a, dans' },
        questions: [
          {
            id: 's1',
            prompt: { fr: 'Elle est arrivée à Tananarive ___ trois jours.', en: 'She arrived in Antananarivo ___ three days.' },
            options: [
              { fr: 'il y a', en: 'il y a' },
              { fr: 'depuis', en: 'depuis' },
              { fr: 'dans', en: 'dans' },
            ],
            answer: 0,
            explanation: { fr: 'Action terminée dans le passé → il y a.', en: 'Finished past action → il y a.' },
          },
          {
            id: 's2',
            prompt: { fr: 'J’habite ici ___ 5 ans. Je vais visiter la France ___ un an.', en: 'I have lived here ___ 5 years. I will visit France ___ a year.' },
            options: [
              { fr: 'depuis · dans', en: 'depuis · dans' },
              { fr: 'dans · il y a', en: 'dans · il y a' },
              { fr: 'il y a · depuis', en: 'il y a · depuis' },
            ],
            answer: 0,
            explanation: { fr: 'depuis = ça continue. dans = futur.', en: 'depuis = it continues. dans = future.' },
          },
          {
            id: 's3',
            prompt: { fr: 'L’aéroport CDG est ___ grand ___ celui de Marrakech. Le train est ___ confortable ___ mon vrai lit ? Non, moins.', en: 'CDG airport is ___ big ___ Marrakech’s. Is the train ___ comfortable ___ my real bed? No, less.' },
            options: [
              { fr: 'plus · que · moins · que', en: 'plus · que · moins · que' },
              { fr: 'moins · de · plus · de', en: 'moins · de · plus · de' },
              { fr: 'aussi · à · aussi · à', en: 'aussi · à · aussi · à' },
            ],
            answer: 0,
            explanation: { fr: 'plus / moins / aussi + adjectif + que. Accord : cette hôtesse est plus gentille.', en: 'plus / moins / aussi + adjective + que. Agreement: cette hôtesse est plus gentille.' },
          },
        ],
      },
      {
        id: 'rg-u8-cause',
        type: 'matching',
        title: { fr: 'Parce que / donc', en: 'Because / so' },
        pairs: [
          { id: 'z1', left: 'Pourquoi tu es stressé ?', right: 'Parce que je vais à l’aéroport.' },
          { id: 'z2', left: 'Il y a un vol en promo, donc…', right: 'je réserve tout de suite.' },
          { id: 'z3', left: 'Je n’aime pas la neige, donc…', right: 'je voyage en juillet.' },
          { id: 'z4', left: 'Ma valise est perdue, donc…', right: 'je remplis une déclaration.' },
          { id: 'z5', left: 'Elle habite à Marrakech parce qu’…', right: 'elle étudie la finance là-bas.' },
        ],
      },
    ],
  },
]
