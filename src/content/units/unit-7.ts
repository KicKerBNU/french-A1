import type { Lesson } from '@/types/course'

export const unit7Lessons: Lesson[] = [
  {
    id: 'ouverture',
    unitId: 7,
    number: 1,
    title: { fr: 'Cuisines du monde', en: 'World kitchens' },
    summary: {
      fr: 'Couscous ou tartiflette ? Les francophones aiment partager un repas. Vous allez beaucoup au restaurant ? Quelle cuisine préférez-vous ?',
      en: 'Couscous or tartiflette? French speakers like sharing a meal. Do you eat out a lot? Which cuisine do you prefer?',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Un bon repas', en: 'A good meal' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Dans cette unité tu parles de ce que tu manges : du pain, de la confiture, un peu de sel. Tu suis une recette, tu racontes hier au restaurant avec le passé composé, tu réserves une table, tu commandes — et tu réagis si le plat n’est pas bon.',
          en: 'In this unit you talk about what you eat: some bread, some jam, a little salt. You follow a recipe, you tell about yesterday at the restaurant with the passé composé, you book a table, you order — and you react if the dish isn’t right.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'Je n’aime pas le bacon. C’est trop salé.', en: 'I don’t like bacon. It’s too salty.' },
          { fr: 'Hier soir, j’ai pris le poisson grillé.', en: 'Last night I had the grilled fish.' },
          { fr: 'Je voudrais réserver pour deux personnes.', en: 'I’d like to book for two people.' },
        ],
      },
    ],
    activities: [
      {
        id: 'u7-open-quiz',
        type: 'quiz',
        title: { fr: 'À table', en: 'At the table' },
        questions: [
          {
            id: 'o1',
            prompt: { fr: 'Le couscous et la tartiflette, c’est…', en: 'Couscous and tartiflette are…' },
            options: [
              { fr: 'des plats emblématiques, de cultures différentes', en: 'signature dishes, from different cultures' },
              { fr: 'des verbes pronominaux', en: 'pronominal verbs' },
              { fr: 'des monnaies', en: 'currencies' },
            ],
            answer: 0,
            explanation: { fr: 'Maghreb / Alpes : deux cuisines francophones très connues.', en: 'Maghreb / the Alps: two well-known Francophone cuisines.' },
          },
          {
            id: 'o2',
            prompt: { fr: 'Pour parler d’une quantité pas précise :', en: 'To talk about an uncountable amount:' },
            options: [
              { fr: 'du pain, de la confiture, de l’eau, des céréales', en: 'some bread, jam, water, cereal' },
              { fr: 'un métro, une gare', en: 'a metro, a station' },
              { fr: 'qui est-ce', en: 'who is that' },
            ],
            answer: 0,
            explanation: { fr: 'Articles partitifs : du, de la, de l’, des.', en: 'Partitive articles: du, de la, de l’, des.' },
          },
          {
            id: 'o3',
            prompt: { fr: 'Dans cette unité, tu vas surtout…', en: 'In this unit you will mainly…' },
            options: [
              { fr: 'parler nourriture, recette, resto et passé composé', en: 'talk food, recipes, restaurants and the passé composé' },
              { fr: 'apprendre seulement les nationalités', en: 'learn only nationalities' },
              { fr: 'taper un code bancaire', en: 'enter a PIN' },
            ],
            answer: 0,
            explanation: { fr: 'Goûts, quantités, chef, menu, réservation.', en: 'Tastes, quantities, chef, menu, booking.' },
          },
        ],
      },
    ],
  },
  {
    id: 'croissants-ou-bacon',
    unitId: 7,
    number: 2,
    title: { fr: 'Croissants ou bacon ?', en: 'Croissants or bacon?' },
    summary: {
      fr: 'Le petit-déjeuner, les articles partitifs, sucré / salé, thé ou café, les nasales.',
      en: 'Breakfast, partitive articles, sweet / savoury, tea or coffee, nasal vowels.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Le repas du matin', en: 'The morning meal' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'En France, on dit petit-déjeuner : souvent du pain, du beurre, de la confiture, du café ou du thé — plutôt sucré. Au Canada, le petit-déjeuner américain est plus salé : des œufs, du bacon, des crêpes. Attention au mot : en France, déjeuner = le midi. Au Québec, en Belgique, en Suisse, déjeuner peut être le repas du matin.',
          en: 'In France you say petit-déjeuner: often bread, butter, jam, coffee or tea — rather sweet. In Canada, an American breakfast is more savoury: eggs, bacon, pancakes. Watch the word: in France, déjeuner = midday. In Quebec, Belgium and Switzerland, déjeuner can be the morning meal.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Les articles partitifs', en: 'Partitive articles' },
        text: {
          fr: 'Quand la quantité n’est pas précise : du + masculin (du pain, du lait), de la + féminin (de la confiture), de l’ + voyelle (de l’eau, de l’huile), des + pluriel (des céréales). À la négation : pas de / d’. Elle ne mange pas de céréales. Il ne boit pas de café.',
          en: 'When the amount isn’t precise: du + masculine (du pain, du lait), de la + feminine (de la confiture), de l’ + vowel (de l’eau, de l’huile), des + plural (des céréales). In the negative: pas de / d’. She doesn’t eat cereal. He doesn’t drink coffee.',
        },
      },
    ],
    activities: [
      {
        id: 'u7-aliments-cards',
        type: 'flashcards',
        title: { fr: 'Aliments et goûts', en: 'Foods and tastes' },
        items: [
          { id: 'pai', fr: 'du pain / une baguette', en: 'bread / a baguette' },
          { id: 'beu', fr: 'du beurre', en: 'butter' },
          { id: 'con', fr: 'de la confiture', en: 'jam' },
          { id: 'caf', fr: 'du café / du thé', en: 'coffee / tea' },
          { id: 'oeu', fr: 'des œufs', en: 'eggs' },
          { id: 'bac', fr: 'du bacon / des saucisses', en: 'bacon / sausages' },
          { id: 'suc', fr: 'sucré ≠ salé', en: 'sweet ≠ savoury' },
          { id: 'epi', fr: 'épicé / parfumé / fade', en: 'spicy / flavoured / bland' },
        ],
      },
      {
        id: 'u7-partitif-quiz',
        type: 'quiz',
        title: { fr: 'Du, de la, de l’, des', en: 'Du, de la, de l’, des' },
        questions: [
          {
            id: 'pa1',
            prompt: { fr: 'Tu aimes ___ thé ? — Non, pas ___ thé.', en: 'Do you like ___ tea? — No, no ___ tea.' },
            options: [
              { fr: 'le · de', en: 'le · de' },
              { fr: 'du · du', en: 'du · du' },
              { fr: 'de la · des', en: 'de la · des' },
            ],
            answer: 0,
            explanation: { fr: 'Goût général : aimer le thé. Négation d’une quantité : pas de thé.', en: 'General taste: aimer le thé. Negative quantity: pas de thé.' },
          },
          {
            id: 'pa2',
            prompt: { fr: 'Tu mets ___ huile dans tes crêpes ?', en: 'Do you put ___ oil in your pancakes?' },
            options: [
              { fr: 'de l’', en: 'de l’' },
              { fr: 'du', en: 'du' },
              { fr: 'des', en: 'des' },
            ],
            answer: 0,
            explanation: { fr: 'huile commence par une voyelle → de l’huile.', en: 'huile starts with a vowel → de l’huile.' },
          },
          {
            id: 'pa3',
            prompt: { fr: 'En Asie, au petit-déjeuner, il y a souvent ___ lait de soja, ___ riz ou ___ nouilles.', en: 'In Asia, at breakfast, there is often ___ soy milk, ___ rice or ___ noodles.' },
            options: [
              { fr: 'du · du · des', en: 'du · du · des' },
              { fr: 'de la · de · de la', en: 'de la · de · de la' },
              { fr: 'le · la · les', en: 'le · la · les' },
            ],
            answer: 0,
            explanation: { fr: 'lait, riz = masculin → du. nouilles = pluriel → des.', en: 'lait, riz = masculine → du. nouilles = plural → des.' },
          },
          {
            id: 'pa4',
            prompt: { fr: 'La crème brûlée est ___. Le bretzel est ___. Le gingembre est ___.', en: 'Crème brûlée is ___. The pretzel is ___. Ginger is ___.' },
            options: [
              { fr: 'sucrée · salé · épicé', en: 'sweet · savoury · spicy' },
              { fr: 'salée · sucré · fade', en: 'savoury · sweet · bland' },
              { fr: 'fade · épicé · sucré', en: 'bland · spicy · sweet' },
            ],
            answer: 0,
            explanation: { fr: 'sucré, salé, épicé, parfumé, fade — et délicieux / bon / mauvais.', en: 'sweet, savoury, spicy, flavoured, bland — and delicious / good / bad.' },
          },
          {
            id: 'pa5',
            prompt: { fr: 'Au Liban, le café est souvent servi en petite tasse. Au Canada, le matin, on prend souvent un café à emporter. Vrai :', en: 'In Lebanon, coffee is often served in a small cup. In Canada, in the morning, people often take coffee to go. True:' },
            options: [
              { fr: 'les habitudes de café changent selon le pays', en: 'coffee habits change by country' },
              { fr: 'tout le monde boit uniquement du thé à 3 h', en: 'everyone only drinks tea at 3 p.m.' },
              { fr: 'il n’y a pas de café au Canada', en: 'there is no coffee in Canada' },
            ],
            answer: 0,
            explanation: { fr: 'France : pause goûter sucrée le week-end. Québec : café avant le travail.', en: 'France: a sweet afternoon snack at the weekend. Quebec: coffee before work.' },
          },
        ],
      },
      {
        id: 'u7-gouts-dialogue',
        type: 'dialogue',
        title: { fr: 'Thé ou café ?', en: 'Tea or coffee?' },
        dialogue: {
          id: 'matin',
          title: { fr: 'Le petit-déjeuner', en: 'Breakfast' },
          context: {
            fr: 'Maya et Tom parlent du matin. Écoute ce qu’ils boivent, puis remets dans l’ordre.',
            en: 'Maya and Tom talk about the morning. Listen to what they drink, then put the lines in order.',
          },
          lines: [
            { speaker: 'Maya', fr: 'Tu bois du thé ou du café, le matin ?', en: 'Do you drink tea or coffee in the morning?' },
            { speaker: 'Tom', fr: 'Du café, avec du lait. Je n’aime pas le thé. Et toi ?', en: 'Coffee, with milk. I don’t like tea. And you?' },
            { speaker: 'Maya', fr: 'Moi, je prends du thé et de la confiture. Pas de bacon : c’est trop salé.', en: 'Me, I have tea and jam. No bacon: it’s too salty.' },
            { speaker: 'Tom', fr: 'Moi, je préfère les œufs. C’est délicieux !', en: 'I prefer eggs. They’re delicious!' },
          ],
        },
      },
      {
        id: 'u7-nasales-listen',
        type: 'listen',
        title: { fr: 'Nasales [ɑ̃], [ɔ̃], [ɛ̃]', en: 'Nasals [ɑ̃], [ɔ̃], [ɛ̃]' },
        intro: {
          fr: 'Lis : Je suis en bonne santé. Je mange du pain et de la confiture. Je prends du poisson avec du citron. Pas de jambon ni de saucisson.',
          en: 'Read: I’m in good health. I eat bread and jam. I have fish with lemon. No ham or saucisson.',
        },
        items: [
          { id: 'n1', fr: 'pain', en: '[ɛ̃]' },
          { id: 'n2', fr: 'vin', en: '[ɛ̃]' },
          { id: 'n3', fr: 'citron', en: '[ɔ̃]' },
          { id: 'n4', fr: 'jambon', en: '[ɔ̃]' },
          { id: 'n5', fr: 'en bonne santé', en: '[ɑ̃]' },
        ],
      },
    ],
  },
  {
    id: 'recettes-de-famille',
    unitId: 7,
    number: 3,
    title: { fr: 'Recettes de famille', en: 'Family recipes' },
    summary: {
      fr: 'Une recette, les quantités, les ustensiles, l’accentuation, et la table.',
      en: 'A recipe, quantities, utensils, word stress, and the table.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'On prépare un plat', en: 'We’re making a dish' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Une recette : temps de préparation, temps de cuisson, pour 6 personnes. Coupez, pelez, faites revenir, ajoutez, mélangez, servez. Après beaucoup, un peu, assez, trop, un kilo, un litre, une cuillère, une boîte : on met de / d’. Beaucoup d’épices. Un peu de sel. Une cuillère d’huile.',
          en: 'A recipe: prep time, cooking time, for 6 people. Cut, peel, fry, add, mix, serve. After beaucoup, un peu, assez, trop, un kilo, un litre, une cuillère, une boîte: use de / d’. A lot of spices. A little salt. A spoon of oil.',
        },
      },
      {
        type: 'note',
        title: { fr: 'L’accentuation', en: 'Word stress' },
        text: {
          fr: 'En français, la dernière syllabe est souvent plus longue, surtout dans les questions : Tu peux me passer le sel ? Quel est votre plat du jour ? Tu connais cette recette ?',
          en: 'In French the last syllable is often longer, especially in questions: Can you pass the salt? What’s today’s special? Do you know this recipe?',
        },
      },
    ],
    activities: [
      {
        id: 'u7-cuisine-cards',
        type: 'flashcards',
        title: { fr: 'Ustensiles et actions', en: 'Utensils and actions' },
        items: [
          { id: 'cou', fr: 'couper / un couteau', en: 'to cut / a knife' },
          { id: 'mel', fr: 'mélanger / un bol', en: 'to mix / a bowl' },
          { id: 'ver', fr: 'verser / un verre', en: 'to pour / a glass' },
          { id: 'cui', fr: 'cuire / une poêle / un four', en: 'to cook / a frying pan / an oven' },
          { id: 'pel', fr: 'peler', en: 'to peel' },
          { id: 'cui2', fr: 'une cuillère / une casserole', en: 'a spoon / a saucepan' },
          { id: 'sal', fr: 'un saladier / des brochettes', en: 'a salad bowl / skewers' },
          { id: 'poi', fr: 'poivrer / saler', en: 'to pepper / to salt' },
        ],
      },
      {
        id: 'u7-quantite-quiz',
        type: 'quiz',
        title: { fr: 'Un peu, beaucoup, un kilo…', en: 'A little, a lot, a kilo…' },
        questions: [
          {
            id: 'q1',
            prompt: { fr: 'Vous mettez ___ sel sur les frites ? — Un peu ___ sel, pas trop.', en: 'Do you put ___ salt on the fries? — A little ___ salt, not too much.' },
            options: [
              { fr: 'du · de', en: 'du · de' },
              { fr: 'de · du', en: 'de · du' },
              { fr: 'des · des', en: 'des · des' },
            ],
            answer: 0,
            explanation: { fr: 'Mettre du sel. Après un peu / beaucoup : de sel.', en: 'Put some salt. After un peu / beaucoup: de sel.' },
          },
          {
            id: 'q2',
            prompt: { fr: 'Coupez ___ saucisses. Ajoutez ___ huile.', en: 'Cut ___ sausages. Add ___ oil.' },
            options: [
              { fr: 'un kilo de · une cuillère d’', en: 'un kilo de · une cuillère d’' },
              { fr: 'un kilo du · une cuillère de l’', en: 'un kilo du · une cuillère de l’' },
              { fr: 'kilo · huile le', en: 'kilo · huile le' },
            ],
            answer: 0,
            explanation: { fr: 'un kilo de + nom. une cuillère d’ + voyelle.', en: 'un kilo de + noun. une cuillère d’ + vowel.' },
          },
          {
            id: 'q3',
            prompt: { fr: 'Dans le taboulé, il y a des tomates. Il n’y a pas de piment rouge. Tu…', en: 'In tabbouleh there are tomatoes. There is no red chilli. You…' },
            options: [
              { fr: 'listes les ingrédients d’un plat', en: 'list a dish’s ingredients' },
              { fr: 'conjugues seulement se lever', en: 'only conjugate se lever' },
              { fr: 'tapes un code', en: 'enter a PIN' },
            ],
            answer: 0,
            explanation: { fr: 'Kebab : agneau, oignons… Taboulé : persil, tomates, boulghour, citron, huile d’olive.', en: 'Kebab: lamb, onions… Tabbouleh: parsley, tomatoes, bulgur, lemon, olive oil.' },
          },
          {
            id: 'q4',
            prompt: { fr: 'Couper → dans un bol ? Non. Couper, c’est souvent…', en: 'Cut → in a bowl? No. Cutting is often…' },
            options: [
              { fr: 'avec un couteau, sur une planche', en: 'with a knife, on a board' },
              { fr: 'dans un verre seulement', en: 'only in a glass' },
              { fr: 'avec une fourchette dans un bol', en: 'with a fork in a bowl' },
            ],
            answer: 0,
            explanation: { fr: 'verser dans un verre / un bol. cuire dans une poêle. manger avec une fourchette.', en: 'pour into a glass / a bowl. cook in a pan. eat with a fork.' },
          },
        ],
      },
      {
        id: 'u7-recette-match',
        type: 'matching',
        title: { fr: 'Étapes d’une salade', en: 'Steps of a salad' },
        pairs: [
          { id: 'r1', left: '1', right: 'Lavez les tomates et le persil.' },
          { id: 'r2', left: '2', right: 'Coupez les tomates et l’oignon.' },
          { id: 'r3', left: '3', right: 'Mélangez dans un saladier avec de l’huile et du citron.' },
          { id: 'r4', left: '4', right: 'Salez, poivrez, servez frais.' },
        ],
      },
      {
        id: 'u7-table-match',
        type: 'matching',
        title: { fr: 'À table', en: 'At the table' },
        pairs: [
          { id: 'ta1', left: 'on pose le plat', right: 'une assiette' },
          { id: 'ta2', left: 'on pique les aliments', right: 'une fourchette' },
          { id: 'ta3', left: 'on coupe', right: 'un couteau' },
          { id: 'ta4', left: 'on boit', right: 'un verre' },
          { id: 'ta5', left: 'on essuie la bouche', right: 'une serviette' },
          { id: 'ta6', left: 'on sert la soupe', right: 'une cuillère à soupe' },
        ],
      },
      {
        id: 'u7-accent-listen',
        type: 'listen',
        title: { fr: 'La dernière syllabe', en: 'The last syllable' },
        intro: {
          fr: 'Allonge un peu la fin : Tu peux me passer le sel ? Quel est votre plat du jour ?',
          en: 'Lengthen the end a little: Can you pass the salt? What’s today’s special?',
        },
        items: [
          { id: 'a1', fr: 'Tu peux me passer le sel ?', en: 'stress near the end' },
          { id: 'a2', fr: 'Quel est votre plat du jour ?', en: 'question, last syllable longer' },
          { id: 'a3', fr: 'Tu connais cette recette ?', en: 'same pattern' },
        ],
      },
    ],
  },
  {
    id: 'plat-du-jour',
    unitId: 7,
    number: 4,
    title: { fr: 'Plat du jour', en: 'Today’s special' },
    summary: {
      fr: 'Le passé composé, le menu, commander, un avis, un problème de plat.',
      en: 'The passé composé, the menu, ordering, a review, a problem with a dish.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Comme un chef', en: 'Like a chef' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Le passé composé raconte une action finie. Avoir ou être au présent + participe passé. J’ai travaillé. Je suis rentré(e). Réguliers : étudier → étudié, finir → fini. Irréguliers : avoir → eu, être → été, venir → venu, dire → dit, faire → fait. Avec être : aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber…',
          en: 'The passé composé tells a finished action. Avoir or être in the present + past participle. I worked. I came back. Regular: étudier → étudié, finir → fini. Irregular: avoir → eu, être → été, venir → venu, dire → dit, faire → fait. With être: aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber…',
        },
      },
      {
        type: 'note',
        title: { fr: 'Un rêve de cuisine', en: 'A cooking dream' },
        text: {
          fr: 'Inès a étudié le droit à Port-au-Prince. Puis elle a dit à sa famille : « Je veux être cuisinière. » Elle est venue à Lyon pour une formation. Elle a travaillé dans un petit resto, elle est rentrée aider un été, et maintenant elle a ouvert « Soleil », un restaurant de cuisine haïtienne.',
          en: 'Inès studied law in Port-au-Prince. Then she told her family: “I want to be a cook.” She came to Lyon for training. She worked in a small restaurant, she went home one summer to help, and now she has opened “Soleil”, a Haitian restaurant.',
        },
      },
    ],
    activities: [
      {
        id: 'u7-pc-quiz',
        type: 'quiz',
        title: { fr: 'Le passé composé', en: 'The passé composé' },
        questions: [
          {
            id: 'pc1',
            prompt: { fr: 'Hier soir, je ___ le poisson grillé. (prendre)', en: 'Last night I ___ the grilled fish. (prendre)' },
            options: [
              { fr: 'j’ai pris', en: 'j’ai pris' },
              { fr: 'je suis pris', en: 'je suis pris' },
              { fr: 'j’ai prende', en: 'j’ai prende' },
            ],
            answer: 0,
            explanation: { fr: 'prendre → pris, avec avoir.', en: 'prendre → pris, with avoir.' },
          },
          {
            id: 'pc2',
            prompt: { fr: 'Elle ___ à Montréal pour une formation. (venir)', en: 'She ___ to Montreal for training. (venir)' },
            options: [
              { fr: 'est venue', en: 'est venue' },
              { fr: 'a venu', en: 'a venu' },
              { fr: 'est venir', en: 'est venir' },
            ],
            answer: 0,
            explanation: { fr: 'venir se conjugue avec être. Accord : elle est venue.', en: 'venir takes être. Agreement: elle est venue.' },
          },
          {
            id: 'pc3',
            prompt: { fr: 'J’___ trois ans en droit, puis j’___ « je veux être cuisinier ». (étudier / dire)', en: 'I ___ three years of law, then I ___ “I want to be a cook”. (étudier / dire)' },
            options: [
              { fr: 'ai étudié · ai dit', en: 'ai étudié · ai dit' },
              { fr: 'suis étudié · suis dit', en: 'suis étudié · suis dit' },
              { fr: 'ai étudier · ai dire', en: 'ai étudier · ai dire' },
            ],
            answer: 0,
            explanation: { fr: '-er → é. dire → dit. Les deux avec avoir.', en: '-er → é. dire → dit. Both with avoir.' },
          },
          {
            id: 'pc4',
            prompt: { fr: 'Nous ___ au restaurant à 20 h. Le chef ___ un plat haïtien. (aller / préparer)', en: 'We ___ to the restaurant at 8 p.m. The chef ___ a Haitian dish. (aller / préparer)' },
            options: [
              { fr: 'sommes allés · a préparé', en: 'sommes allés · a préparé' },
              { fr: 'avons allé · est préparé', en: 'avons allé · est préparé' },
              { fr: 'allons · prépare hier', en: 'allons · prépare hier' },
            ],
            answer: 0,
            explanation: { fr: 'aller → être. préparer → avoir + préparé.', en: 'aller → être. préparer → avoir + préparé.' },
          },
          {
            id: 'pc5',
            prompt: { fr: 'À quelle heure vous ___ dîner hier ? Qu’est-ce que vous ___ ? (être / manger)', en: 'What time ___ you dinner yesterday? What ___ you? (être / manger)' },
            options: [
              { fr: 'êtes allé(e)s · avez mangé', en: 'êtes allé(e)s · avez mangé' },
              { fr: 'avez allé · êtes mangé', en: 'avez allé · êtes mangé' },
              { fr: 'êtes manger · avez aller', en: 'êtes manger · avez aller' },
            ],
            answer: 0,
            explanation: { fr: 'Vous êtes allé(e)s dîner. Vous avez mangé quoi ?', en: 'You went to dinner. What did you eat?' },
          },
        ],
      },
      {
        id: 'u7-menu-cards',
        type: 'flashcards',
        title: { fr: 'Au restaurant', en: 'In a restaurant' },
        items: [
          { id: 'ape', fr: 'un apéritif', en: 'a pre-dinner drink' },
          { id: 'ent', fr: 'une entrée', en: 'a starter' },
          { id: 'pla', fr: 'un plat / le plat du jour', en: 'a main / today’s special' },
          { id: 'des', fr: 'un dessert', en: 'a dessert' },
          { id: 'car', fr: 'la carte / le menu', en: 'the à-la-carte list / the set menu' },
          { id: 'ser', fr: 'un serveur / une serveuse', en: 'a waiter / a waitress' },
          { id: 'add', fr: 'l’addition', en: 'the bill' },
          { id: 'res', fr: 'une réservation', en: 'a reservation' },
        ],
      },
      {
        id: 'u7-syn-match',
        type: 'matching',
        title: { fr: 'Le mot et son ami', en: 'The word and its partner' },
        pairs: [
          { id: 'sy1', left: 'chef', right: 'cuisinier' },
          { id: 'sy2', left: 'apéritif', right: 'boisson avant le repas' },
          { id: 'sy3', left: 'plat', right: 'assiette principale' },
          { id: 'sy4', left: 'menu', right: 'carte des plats' },
        ],
      },
      {
        id: 'u7-commande-dialogue',
        type: 'dialogue',
        title: { fr: 'Vous désirez ?', en: 'What would you like?' },
        dialogue: {
          id: 'com',
          title: { fr: 'Commander', en: 'Ordering' },
          context: {
            fr: 'Noah commande. Écoute entrée, plat, dessert, puis remets dans l’ordre.',
            en: 'Noah orders. Listen for starter, main, dessert, then put the lines in order.',
          },
          lines: [
            { speaker: 'Serveuse', fr: 'Bonjour, voici le menu. Vous désirez boire quelque chose ?', en: 'Hello, here’s the menu. Would you like something to drink?' },
            { speaker: 'Noah', fr: 'De l’eau minérale, s’il vous plaît. Et comme entrée, la soupe de légumes.', en: 'Still water, please. And as a starter, the vegetable soup.' },
            { speaker: 'Serveuse', fr: 'Et comme plat principal ?', en: 'And for the main?' },
            { speaker: 'Noah', fr: 'Je vais prendre le plat du jour, avec une salade. Pas de dessert, merci.', en: 'I’ll have today’s special, with a salad. No dessert, thanks.' },
            { speaker: 'Serveuse', fr: 'Très bien. Si vous changez d’avis, il y a une tarte au citron.', en: 'Very good. If you change your mind, there is a lemon tart.' },
          ],
        },
      },
      {
        id: 'u7-probleme-dialogue',
        type: 'dialogue',
        title: { fr: 'Il y a un problème', en: 'There’s a problem' },
        dialogue: {
          id: 'pb',
          title: { fr: 'La commande', en: 'The order' },
          context: {
            fr: 'Le plat n’est pas le bon. Écoute le mécontentement, puis remets dans l’ordre.',
            en: 'The dish isn’t the right one. Listen for the complaint, then put the lines in order.',
          },
          lines: [
            { speaker: 'Tom', fr: 'Tu ne manges pas. Tout va bien ?', en: 'You’re not eating. Is everything OK?' },
            { speaker: 'Maya', fr: 'Non. J’ai commandé le poulet-riz, pas les pâtes. En plus, c’est trop salé.', en: 'No. I ordered chicken and rice, not pasta. And it’s too salty.' },
            { speaker: 'Tom', fr: 'Excusez-nous. Il y a un problème avec le plat.', en: 'Excuse us. There’s a problem with the dish.' },
            { speaker: 'Serveur', fr: 'Je suis désolé. Je vous apporte une autre assiette tout de suite.', en: 'I’m sorry. I’ll bring you another plate right away.' },
          ],
        },
      },
      {
        id: 'u7-avis-quiz',
        type: 'quiz',
        title: { fr: 'Lire un avis', en: 'Read a review' },
        questions: [
          {
            id: 'av1',
            prompt: { fr: '« Super service, plats délicieux, un peu chers. Je recommande. » L’avis est…', en: '“Great service, delicious dishes, a bit expensive. I recommend it.” The review is…' },
            options: [
              { fr: 'plutôt positif, avec un bémol sur le prix', en: 'rather positive, with a caveat on price' },
              { fr: 'entièrement négatif', en: 'entirely negative' },
              { fr: 'un emploi du temps de yoga', en: 'a yoga timetable' },
            ],
            answer: 0,
            explanation: { fr: 'On note : plats, service, rapport qualité/prix, ambiance.', en: 'You note: food, service, value for money, atmosphere.' },
          },
          {
            id: 'av2',
            prompt: { fr: 'Tu invites des collègues. Tu justifie le resto par…', en: 'You invite colleagues. You justify the restaurant with…' },
            options: [
              { fr: 'les commentaires : les plats sont délicieux, le service est rapide', en: 'the comments: the dishes are delicious, service is quick' },
              { fr: 'un arbre généalogique', en: 'a family tree' },
              { fr: 'un code de carte', en: 'a card PIN' },
            ],
            answer: 0,
            explanation: { fr: 'Un court courriel : Est-ce que vous voulez aller au… ? J’ai lu des avis…', en: 'A short email: Would you like to go to…? I read some reviews…' },
          },
        ],
      },
    ],
  },
  {
    id: 'on-se-fait-un-resto',
    unitId: 7,
    number: 5,
    title: { fr: 'On se fait un resto ?', en: 'Shall we eat out?' },
    summary: {
      fr: 'Inviter à dîner, réserver une table, décrire un plat, payer.',
      en: 'Invite to dinner, book a table, describe a dish, pay.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Pause déjeuner', en: 'Lunch break' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Tu veux aller au restaurant ce soir ? On se retrouve à 20 h au resto. Ça marche ? Accepter : Oui, avec plaisir ! Refuser : Désolé, je ne suis pas libre ce soir. Une autre fois, peut-être ? Pour réserver : Bonjour, je voudrais une table pour ce midi à 13 h, pour quatre personnes. C’est noté. À tout à l’heure.',
          en: 'Do you want to go to a restaurant tonight? Shall we meet at 8 at the restaurant. Does that work? Accept: Yes, with pleasure! Refuse: Sorry, I’m not free tonight. Another time, perhaps? To book: Hello, I’d like a table for today at 1 p.m., for four people. That’s noted. See you later.',
        },
      },
    ],
    activities: [
      {
        id: 'u7-invite-match',
        type: 'matching',
        title: { fr: 'Inviter, accepter, refuser', en: 'Invite, accept, refuse' },
        pairs: [
          { id: 'in1', left: 'Ça te dit d’aller au restaurant ce soir ?', right: 'inviter' },
          { id: 'in2', left: 'Oui, avec plaisir !', right: 'accepter' },
          { id: 'in3', left: 'Désolé, je ne suis pas libre. Une autre fois ?', right: 'refuser poliment' },
          { id: 'in4', left: 'On se retrouve à 20 h au resto.', right: 'fixer le lieu et l’heure' },
        ],
      },
      {
        id: 'u7-reserve-dialogue',
        type: 'dialogue',
        title: { fr: 'Réserver une table', en: 'Book a table' },
        dialogue: {
          id: 'res',
          title: { fr: 'Au téléphone', en: 'On the phone' },
          context: {
            fr: 'Lina réserve. Écoute le nom, l’heure, le nombre de personnes, puis remets dans l’ordre.',
            en: 'Lina books. Listen for the name, time, number of people, then put the lines in order.',
          },
          lines: [
            { speaker: 'Lina', fr: 'Bonjour, je voudrais réserver une table pour ce midi à 13 heures.', en: 'Hello, I’d like to book a table for today at 1 p.m.' },
            { speaker: 'Resto', fr: 'Oui, pour combien de personnes ?', en: 'Yes, for how many people?' },
            { speaker: 'Lina', fr: 'Pour 4 personnes. Costa, C.O.S.T.A.', en: 'For 4 people. Costa, C.O.S.T.A.' },
            { speaker: 'Resto', fr: 'Costa, 4 personnes… C’est noté. À tout à l’heure.', en: 'Costa, 4 people… That’s noted. See you later.' },
            { speaker: 'Lina', fr: 'Merci beaucoup. À tout à l’heure.', en: 'Thank you very much. See you later.' },
          ],
        },
      },
      {
        id: 'u7-plat-quiz',
        type: 'quiz',
        title: { fr: 'Ça sent bon !', en: 'That smells good!' },
        questions: [
          {
            id: 'pl1',
            prompt: { fr: '— Mmm, ça sent bon, ton plat. Qu’est-ce que c’est ? — C’est une pizza maison. Super ! Qu’est-ce qu’il y a dedans ? Tu…', en: '— Mmm, that smells good. What is it? — It’s a homemade pizza. Great! What’s in it? You…' },
            options: [
              { fr: 'décris le plat (tomate, fromage, basilic…)', en: 'describe the dish (tomato, cheese, basil…)' },
              { fr: 'conjugues seulement du, de la', en: 'only conjugate du, de la' },
              { fr: 'réserves un métro', en: 'book a metro' },
            ],
            answer: 0,
            explanation: { fr: 'Ingrédients + goût : salé, sucré, épicé.', en: 'Ingredients + taste: savoury, sweet, spicy.' },
          },
          {
            id: 'pl2',
            prompt: { fr: 'Je vais prendre le plat du jour. Tu…', en: 'I’ll have today’s special. You…' },
            options: [
              { fr: 'commandes', en: 'order' },
              { fr: 'déménages le 1er juillet', en: 'move house on 1 July' },
              { fr: 'tapes un code de 16 chiffres', en: 'enter a 16-digit PIN' },
            ],
            answer: 0,
            explanation: { fr: 'Je vais prendre… Vous avez des cocktails ? Et comme dessert ?', en: 'I’ll have… Do you have cocktails? And for dessert?' },
          },
          {
            id: 'pl3',
            prompt: { fr: 'Pronom + verbe, on enchaîne : Je mange. Tu déjeunes. Il dîne. C’est…', en: 'Pronoun + verb, you link: I eat. You have lunch. He has dinner. That’s…' },
            options: [
              { fr: 'le rythme de la phrase française', en: 'the rhythm of the French sentence' },
              { fr: 'un article partitif', en: 'a partitive article' },
              { fr: 'un dossard', en: 'a race bib' },
            ],
            answer: 0,
            explanation: { fr: 'Je cuisine bien. Vous mangez tard. Un grand chef haïtien. Les carottes, les concombres et les oignons…', en: 'I cook well. You eat late. A great Haitian chef. Carrots, cucumbers and onions…' },
          },
        ],
      },
    ],
  },
  {
    id: 'projet-repas',
    unitId: 7,
    number: 6,
    title: { fr: 'Un repas partagé', en: 'A shared meal' },
    summary: {
      fr: 'Un festival de cuisine, un stand, présenter un plat de ton pays.',
      en: 'A food festival, a stall, present a dish from your country.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Le projet : un événement « Cuisines du monde ». Présentation et dégustation. Tu lis l’affiche : pour qui, quand, où, combien. Les animateurs animent un stand : souvent entrée gratuite pour eux. Tu remplis un formulaire : nom du plat, origine, ingrédients, sucré ou salé, entrée / plat / dessert. Puis tu expliques : D’où vient ce plat ? Pouvez-vous m’expliquer la recette ?',
          en: 'The project: a “World kitchens” event. Presentation and tasting. You read the poster: for whom, when, where, how much. Hosts run a stall: often free entry for them. You fill in a form: dish name, origin, ingredients, sweet or savoury, starter / main / dessert. Then you explain: Where is this dish from? Can you explain the recipe?',
        },
      },
    ],
    activities: [
      {
        id: 'u7-festival-quiz',
        type: 'quiz',
        title: { fr: 'Lire l’affiche', en: 'Read the poster' },
        questions: [
          {
            id: 'fe1',
            prompt: { fr: 'Visiteurs : 5 euros. Animateurs : entrée gratuite. Donc…', en: 'Visitors: 5 euros. Hosts: free entry. So…' },
            options: [
              { fr: 'tout le monde ne paie pas le même prix', en: 'not everyone pays the same' },
              { fr: 'personne ne peut manger', en: 'nobody can eat' },
              { fr: 'c’est un distributeur', en: 'it’s a cash machine' },
            ],
            answer: 0,
            explanation: { fr: 'Lis : public, dates, lieu, tarif, âge minimum, date limite de candidature.', en: 'Read: audience, dates, place, price, minimum age, application deadline.' },
          },
          {
            id: 'fe2',
            prompt: { fr: 'Pour animer un stand, tu envoies souvent…', en: 'To host a stall, you often send…' },
            options: [
              { fr: 'une candidature en ligne, pas seulement par la poste', en: 'an online application, not only by post' },
              { fr: 'un dossard de marathon', en: 'a marathon bib' },
              { fr: 'un code secret de carte', en: 'a card PIN' },
            ],
            answer: 0,
            explanation: { fr: 'Formulaire : coordonnées, plat, photo, origine, sucré/salé.', en: 'Form: details, dish, photo, origin, sweet/savoury.' },
          },
        ],
      },
      {
        id: 'u7-stand-match',
        type: 'matching',
        title: { fr: 'Questions au stand', en: 'Questions at the stall' },
        pairs: [
          { id: 'st1', left: 'D’où vient ce plat ?', right: 'le pays, la région' },
          { id: 'st2', left: 'C’est sucré ou salé ?', right: 'le goût' },
          { id: 'st3', left: 'Quels sont les ingrédients ?', right: 'la liste' },
          { id: 'st4', left: 'Pouvez-vous m’expliquer la recette ?', right: 'les étapes' },
        ],
      },
      {
        id: 'u7-projet-dialogue',
        type: 'dialogue',
        title: { fr: 'Au stand', en: 'At the stall' },
        dialogue: {
          id: 'stand',
          title: { fr: 'Dégustation', en: 'Tasting' },
          context: {
            fr: 'Un visiteur goûte. Écoute l’origine du plat, puis remets dans l’ordre.',
            en: 'A visitor tastes. Listen for the origin of the dish, then put the lines in order.',
          },
          lines: [
            { speaker: 'Visiteur', fr: 'D’où vient ce plat ?', en: 'Where is this dish from?' },
            { speaker: 'Tom', fr: 'De La Réunion. C’est un plat de famille, un peu épicé.', en: 'From Réunion. It’s a family dish, a bit spicy.' },
            { speaker: 'Visiteur', fr: 'Pouvez-vous m’expliquer la recette ?', en: 'Can you explain the recipe?' },
            { speaker: 'Tom', fr: 'Oui. On coupe les oignons, on fait revenir, on ajoute des tomates et des épices. On sert avec du riz.', en: 'Yes. You cut the onions, fry them, add tomatoes and spices. You serve it with rice.' },
          ],
        },
      },
    ],
  },
  {
    id: 'bilan',
    unitId: 7,
    number: 7,
    title: { fr: 'Bilan', en: 'Checkpoint' },
    summary: {
      fr: 'Partitifs, quantités, passé composé, menu, réservation.',
      en: 'Partitives, quantities, passé composé, menu, booking.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Coche dans ta tête : je parle de mes goûts, je mesure, je raconte hier au resto, je commande, j’invite, je réserve. Si une question bloque, retourne à la leçon.',
          en: 'Check in your head: I can talk about tastes, measure, tell about yesterday at the restaurant, order, invite, book. If a question sticks, go back to the lesson.',
        },
      },
    ],
    activities: [
      {
        id: 'u7-bilan-gouts',
        type: 'matching',
        title: { fr: 'Maintenant je peux…', en: 'Now I can…' },
        pairs: [
          { id: 'n1', left: 'Je n’aime pas le bacon. C’est trop salé.', right: 'exprimer un goût' },
          { id: 'n2', left: 'Coupez 500 g de tomates.', right: 'exprimer une quantité' },
          { id: 'n3', left: 'Hier soir, j’ai pris le poisson grillé.', right: 'raconter au passé' },
          { id: 'n4', left: 'Je vais prendre le plat du jour.', right: 'commander' },
          { id: 'n5', left: 'Ça te dit d’aller au restaurant ce soir ?', right: 'inviter' },
          { id: 'n6', left: 'Je voudrais une table pour deux.', right: 'réserver' },
        ],
      },
      {
        id: 'u7-bilan-quiz',
        type: 'quiz',
        title: { fr: 'Checkpoint unité 7', en: 'Unit 7 checkpoint' },
        questions: [
          {
            id: 'x1',
            prompt: { fr: 'Vous aimez le thé ? — Non, pas de thé. Tu mets de l’huile ? — Non, pas d’huile, du beurre. C’est…', en: 'Do you like tea? — No, no tea. Do you put oil? — No, no oil, butter. That’s…' },
            options: [
              { fr: 'partitif et négation pas de / d’', en: 'partitive and negative pas de / d’' },
              { fr: 'seulement l’impératif aller', en: 'only the imperative of aller' },
              { fr: 'un démonstratif ce', en: 'a demonstrative ce' },
            ],
            answer: 0,
            explanation: { fr: 'De l’eau ou du jus ? Je ne veux pas boire. Pas de café.', en: 'Water or juice? I don’t want to drink. No coffee.' },
          },
          {
            id: 'x2',
            prompt: { fr: 'Dans un bol, mélangez 3 œufs et du lait. Versez et cuisez 40 minutes. Tu…', en: 'In a bowl, mix 3 eggs and milk. Pour and bake 40 minutes. You…' },
            options: [
              { fr: 'suis une recette (ingrédients + actions)', en: 'follow a recipe (ingredients + actions)' },
              { fr: 'réserves un taxi', en: 'book a taxi' },
              { fr: 'épelles un dossard', en: 'spell a bib' },
            ],
            answer: 0,
            explanation: { fr: 'Préparer, couper, mélanger, verser, cuire. Temps de préparation / de cuisson.', en: 'Prepare, cut, mix, pour, cook. Prep / cooking time.' },
          },
          {
            id: 'x3',
            prompt: { fr: 'Quel est le plat du jour ? — Le poisson grillé. Et comme dessert ? — Une tarte au citron. Tu…', en: 'What’s today’s special? — The grilled fish. And for dessert? — A lemon tart. You…' },
            options: [
              { fr: 'suis un dialogue au resto (entrée, plat, dessert, boisson)', en: 'follow a restaurant dialogue (starter, main, dessert, drink)' },
              { fr: 'ouvres un compte en banque', en: 'open a bank account' },
              { fr: 'conjugues se réveiller seulement', en: 'only conjugate se réveiller' },
            ],
            answer: 0,
            explanation: { fr: 'Bonjour, voici le menu. Qu’est-ce que vous désirez boire ?', en: 'Hello, here’s the menu. What would you like to drink?' },
          },
          {
            id: 'x4',
            prompt: { fr: 'Vous aimez manger à la boulangerie. Vous vous retrouvez pour déjeuner. Tu…', en: 'You like eating at the bakery. You meet for lunch. You…' },
            options: [
              { fr: 'choisis au menu, tu commandes, tu paies', en: 'choose from the menu, order, pay' },
              { fr: 'passes l’aspirateur', en: 'vacuum' },
              { fr: 'loues une voiture à Saint-Denis', en: 'rent a car in Saint-Denis' },
            ],
            answer: 0,
            explanation: { fr: 'Sandwich, quiche, tarte, café. L’addition, s’il vous plaît.', en: 'Sandwich, quiche, tart, coffee. The bill, please.' },
          },
        ],
      },
    ],
  },
]
