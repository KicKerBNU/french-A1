import type { Lesson } from '@/types/course'

export const unit6Lessons: Lesson[] = [
  {
    id: 'ouverture',
    unitId: 6,
    number: 1,
    title: { fr: 'Le coin des bonnes affaires', en: 'The bargain corner' },
    summary: {
      fr: 'Magasins, marchés, souvenirs… Vous aimez faire les magasins ? Quels sont vos magasins préférés ?',
      en: 'Shops, markets, souvenirs… Do you like shopping? What are your favourite shops?',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Acheter, échanger, payer', en: 'Buy, swap, pay' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Paris est une ville de shopping : grandes avenues, petites boutiques, bouquinistes au bord de l’eau. Dans cette unité tu parles des objets, des prix, des couleurs et des vêtements. Tu paies, tu tapes ton code, tu protestes si ça ne marche pas — et tu choisis un souvenir de ton pays.',
          en: 'Paris is a shopping city: big avenues, small shops, second-hand booksellers by the water. In this unit you talk about objects, prices, colours and clothes. You pay, you enter your PIN, you complain if it doesn’t work — and you choose a souvenir from your country.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'Vous aimez faire les magasins ?', en: 'Do you like shopping?' },
          { fr: 'C’est combien ? Combien je vous dois ?', en: 'How much is it? How much do I owe you?' },
          { fr: 'Je paie par carte. / Je paie en espèces.', en: 'I’ll pay by card. / I’ll pay in cash.' },
        ],
      },
    ],
    activities: [
      {
        id: 'u6-open-quiz',
        type: 'quiz',
        title: { fr: 'Shopping', en: 'Shopping' },
        questions: [
          {
            id: 'o1',
            prompt: { fr: 'Une « bonne affaire », c’est…', en: 'A “bonne affaire” is…' },
            options: [
              { fr: 'un prix intéressant, une promo, un échange malin', en: 'a good price, a deal, a smart swap' },
              { fr: 'un verbe pronominal', en: 'a pronominal verb' },
              { fr: 'une gare', en: 'a station' },
            ],
            answer: 0,
            explanation: { fr: 'Soldes, -50 %, deux pour le prix d’un : des bonnes affaires.', en: 'Sales, 50% off, two for one: bargains.' },
          },
          {
            id: 'o2',
            prompt: { fr: 'Les bouquinistes vendent surtout…', en: 'Bouquinistes mainly sell…' },
            options: [
              { fr: 'des livres d’occasion, des gravures, des souvenirs', en: 'second-hand books, prints, souvenirs' },
              { fr: 'des métros', en: 'metros' },
              { fr: 'des rendez-vous médicaux', en: 'medical appointments' },
            ],
            answer: 0,
            explanation: { fr: 'Petits stands près de la Seine, à Paris.', en: 'Little stalls by the Seine, in Paris.' },
          },
          {
            id: 'o3',
            prompt: { fr: 'Dans cette unité, tu vas surtout…', en: 'In this unit you will mainly…' },
            options: [
              { fr: 'acheter, demander le prix, payer', en: 'buy, ask the price, pay' },
              { fr: 'conjuguer seulement se lever', en: 'only conjugate se lever' },
              { fr: 'apprendre le passé composé entier', en: 'learn the whole passé composé' },
            ],
            answer: 0,
            explanation: { fr: 'Objets, magasins, couleurs, carte bancaire, souvenirs.', en: 'Objects, shops, colours, bank cards, souvenirs.' },
          },
        ],
      },
    ],
  },
  {
    id: 'a-prendre-ou-a-laisser',
    unitId: 6,
    number: 2,
    title: { fr: 'À prendre ou à laisser', en: 'Take it or leave it' },
    summary: {
      fr: 'Objets du quotidien, et / ou, magasins, collectionner, être d’accord pour un échange.',
      en: 'Everyday objects, et / ou, shops, collecting, agreeing to a swap.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Pièces de collection', en: 'Collector’s pieces' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'On collectionne des clés, des cartes postales, des stylos. On peut vendre, acheter, ou échanger. Et ajoute. Ou propose un choix : Je vais à la boutique aujourd’hui ou demain. C’est cher, mais c’est en très bon état. Marché conclu !',
          en: 'People collect keys, postcards, pens. You can sell, buy, or swap. Et adds. Ou offers a choice: I’ll go to the shop today or tomorrow. It’s expensive, but it’s in very good condition. Deal!',
        },
      },
      {
        type: 'note',
        title: { fr: 'Et et ou', en: 'Et and ou' },
        text: {
          fr: 'et = addition : du shampoing et des savons. ou = option : au marché ou au supermarché. Sur internet, vous préférez les articles neufs ou d’occasion ?',
          en: 'et = addition: shampoo and soaps. ou = a choice: at the market or at the supermarket. Online, do you prefer new items or second-hand?',
        },
      },
    ],
    activities: [
      {
        id: 'u6-objets-cards',
        type: 'flashcards',
        title: { fr: 'Objets du quotidien', en: 'Everyday objects' },
        items: [
          { id: 'sav', fr: 'un savon', en: 'a bar of soap' },
          { id: 'sha', fr: 'du shampoing', en: 'shampoo' },
          { id: 'den', fr: 'du dentifrice / une brosse à dents', en: 'toothpaste / a toothbrush' },
          { id: 'bou', fr: 'une bougie', en: 'a candle' },
          { id: 'vas', fr: 'un vase', en: 'a vase' },
          { id: 'sty', fr: 'un stylo', en: 'a pen' },
          { id: 'dra', fr: 'des draps', en: 'sheets' },
          { id: 'cle', fr: 'une clé', en: 'a key' },
        ],
      },
      {
        id: 'u6-magasins-match',
        type: 'matching',
        title: { fr: 'On achète ça où ?', en: 'Where do you buy this?' },
        pairs: [
          { id: 'mg1', left: 'du dentifrice, une brosse à dents', right: 'au supermarché / à la pharmacie' },
          { id: 'mg2', left: 'une bougie, un vase', right: 'au magasin de déco' },
          { id: 'mg3', left: 'un stylo', right: 'à la papeterie / au supermarché' },
          { id: 'mg4', left: 'des draps', right: 'au magasin de maison' },
          { id: 'mg5', left: 'des légumes', right: 'au marché' },
        ],
      },
      {
        id: 'u6-etou-quiz',
        type: 'quiz',
        title: { fr: 'Et ou ou ?', en: 'Et or ou?' },
        questions: [
          {
            id: 'eo1',
            prompt: { fr: 'Dans cette boutique, il y a du shampoing solide ___ des savons.', en: 'In this shop there is solid shampoo ___ soaps.' },
            options: [
              { fr: 'et', en: 'et' },
              { fr: 'ou', en: 'ou' },
              { fr: 'pour', en: 'pour' },
            ],
            answer: 0,
            explanation: { fr: 'Les deux existent → et.', en: 'Both are there → et.' },
          },
          {
            id: 'eo2',
            prompt: { fr: 'En général, vous faites vos courses au marché ___ au supermarché ?', en: 'In general, do you shop at the market ___ at the supermarket?' },
            options: [
              { fr: 'ou', en: 'ou' },
              { fr: 'et', en: 'et' },
              { fr: 'de', en: 'de' },
            ],
            answer: 0,
            explanation: { fr: 'Un choix → ou.', en: 'A choice → ou.' },
          },
          {
            id: 'eo3',
            prompt: { fr: 'Pendant les soldes, ce magasin propose des promotions ___ des offres spéciales.', en: 'During the sales this shop offers promotions ___ special deals.' },
            options: [
              { fr: 'et', en: 'et' },
              { fr: 'ou (si c’est l’un ou l’autre)', en: 'ou (if it’s one or the other)' },
              { fr: 'qui', en: 'qui' },
            ],
            answer: 0,
            explanation: { fr: 'Les deux en même temps → et. Un choix exclusif → ou.', en: 'Both at once → et. An exclusive choice → ou.' },
          },
          {
            id: 'eo4',
            prompt: { fr: 'Un produit écoresponsable, c’est souvent…', en: 'An eco-responsible product is often…' },
            options: [
              { fr: 'fabriqué près de chez vous, bon pour l’environnement', en: 'made nearby, good for the environment' },
              { fr: 'un métro automatique', en: 'an automatic metro' },
              { fr: 'un possessif', en: 'a possessive' },
            ],
            answer: 0,
            explanation: { fr: 'Savon, bougie, aliments bio… hygiène d’un côté, maison de l’autre.', en: 'Soap, candle, organic food… hygiene on one side, home on the other.' },
          },
        ],
      },
      {
        id: 'u6-echange-dialogue',
        type: 'dialogue',
        title: { fr: 'Marché conclu', en: 'It’s a deal' },
        dialogue: {
          id: 'echange',
          title: { fr: 'Collectionneurs', en: 'Collectors' },
          context: {
            fr: 'Deux collectionneurs. Écoute le prix et l’échange, puis remets dans l’ordre.',
            en: 'Two collectors. Listen for the price and the swap, then put the lines in order.',
          },
          lines: [
            { speaker: 'Noah', fr: 'J’aimerais des informations sur votre collection. Cette clé est très belle !', en: 'I’d like some information about your collection. This key is really beautiful!' },
            { speaker: 'Maya', fr: 'Merci. Ce sont des clés anciennes, en très bon état. Elles coûtent 35 euros la pièce.', en: 'Thanks. They’re old keys, in very good condition. They’re 35 euros each.' },
            { speaker: 'Noah', fr: 'C’est cher… Je collectionne les cartes postales. Je peux proposer un échange ?', en: 'That’s expensive… I collect postcards. Can I suggest a swap?' },
            { speaker: 'Maya', fr: 'Pourquoi pas. Un lot de cinquante cartes contre une clé, ça vous va ?', en: 'Why not. A set of fifty cards for one key — does that work for you?' },
            { speaker: 'Noah', fr: 'Marché conclu ! Je vous téléphone demain soir.', en: 'It’s a deal! I’ll phone you tomorrow evening.' },
          ],
        },
      },
    ],
  },
  {
    id: 'combien-je-vous-dois',
    unitId: 6,
    number: 3,
    title: { fr: 'Combien je vous dois ?', en: 'How much do I owe you?' },
    summary: {
      fr: 'Prix, monnaies, payer par carte ou en espèces, pour + infinitif, le son [j].',
      en: 'Prices, currencies, paying by card or in cash, pour + infinitive, the sound [j].',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'En promo !', en: 'On offer!' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Combien ça coûte ? 1 euro le kilo. Paiement sans contact. Oh non, j’ai juste ma carte, je n’ai pas d’espèces. Des fraises : deux barquettes pour le prix d’une. Pour exprimer le but : pour + infinitif. Vous pouvez passer votre carte ici pour payer.',
          en: 'How much is it? 1 euro a kilo. Contactless payment. Oh no, I only have my card, I haven’t got cash. Strawberries: two punnets for the price of one. To express purpose: pour + infinitive. You can insert your card here to pay.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Monnaies francophones', en: 'Francophone currencies' },
        text: {
          fr: 'l’euro (€) · le franc suisse (CHF) · le franc Pacifique (XPF) · le dollar canadien (CAD) · le franc CFA. Au Québec, on entend aussi : Excusez (plus court qu’Excusez-moi), la facture, payer comptant.',
          en: 'the euro (€) · the Swiss franc (CHF) · the Pacific franc (XPF) · the Canadian dollar (CAD) · the CFA franc. In Quebec you also hear: Excusez (shorter than Excusez-moi), la facture, payer comptant (pay cash).',
        },
      },
      {
        type: 'note',
        title: { fr: 'Le son [j]', en: 'The sound [j]' },
        text: {
          fr: 'Souvent -il / -ill : travail, portefeuille. Ou -y : rayon, payer. Prononce : envoyer, travailler, billet.',
          en: 'Often -il / -ill: travail, portefeuille. Or -y: rayon, payer. Say: envoyer, travailler, billet.',
        },
      },
    ],
    activities: [
      {
        id: 'u6-prix-cards',
        type: 'flashcards',
        title: { fr: 'Payer', en: 'Paying' },
        items: [
          { id: 'esp', fr: 'payer en espèces / comptant', en: 'to pay in cash' },
          { id: 'car', fr: 'payer par carte / sans contact', en: 'to pay by card / contactless' },
          { id: 'fac', fr: 'la facture / le reçu', en: 'the bill / the receipt' },
          { id: 'red', fr: 'une réduction / une promotion', en: 'a discount / a special offer' },
          { id: 'sol', fr: 'les soldes', en: 'the sales' },
          { id: 'kilo', fr: '3 euros le kilo', en: '3 euros a kilo' },
          { id: 'dol', fr: 'le dollar canadien', en: 'the Canadian dollar' },
          { id: 'eur', fr: 'l’euro', en: 'the euro' },
        ],
      },
      {
        id: 'u6-pour-match',
        type: 'matching',
        title: { fr: 'Pour + infinitif', en: 'Pour + infinitive' },
        pairs: [
          { id: 'po1', left: 'Tu as des pièces et des billets…', right: 'pour payer en espèces' },
          { id: 'po2', left: 'Il attend les soldes…', right: 'pour faire une bonne affaire' },
          { id: 'po3', left: 'Nous allons à la pharmacie…', right: 'pour acheter des médicaments' },
          { id: 'po4', left: 'Elles utilisent une calculatrice…', right: 'pour convertir le prix en dollars' },
        ],
      },
      {
        id: 'u6-caisse-dialogue',
        type: 'dialogue',
        title: { fr: 'À la pharmacie', en: 'At the pharmacy' },
        dialogue: {
          id: 'pharma',
          title: { fr: 'Le prix et la carte', en: 'The price and the card' },
          context: {
            fr: 'Lina achète des vitamines. Écoute le prix et le paiement, puis remets dans l’ordre.',
            en: 'Lina buys vitamins. Listen for the price and the payment, then put the lines in order.',
          },
          lines: [
            { speaker: 'Lina', fr: 'Excusez, quel est le prix des vitamines avec la réduction ?', en: 'Excuse me, what’s the price of the vitamins with the discount?' },
            { speaker: 'Employé', fr: '12,49 dollars. Est-ce que c’est correct ?', en: '12.49 dollars. Is that right?' },
            { speaker: 'Lina', fr: 'Oui, c’est correct.', en: 'Yes, that’s right.' },
            { speaker: 'Employé', fr: 'Vous payez comment ?', en: 'How are you paying?' },
            { speaker: 'Lina', fr: 'Par carte, s’il vous plaît.', en: 'By card, please.' },
            { speaker: 'Employé', fr: 'Vous pouvez passer votre carte ici pour payer. Je mets la facture dans le sac.', en: 'You can tap your card here to pay. I’ll put the receipt in the bag.' },
            { speaker: 'Lina', fr: 'Oui, merci ! Bonne journée.', en: 'Yes, thank you! Have a good day.' },
          ],
        },
      },
      {
        id: 'u6-marche-quiz',
        type: 'quiz',
        title: { fr: 'Au marché et les prix', en: 'At the market and prices' },
        questions: [
          {
            id: 'ma1',
            prompt: { fr: '« 3 $ le kilo. Ok, je vais en prendre deux kilos. » La cliente…', en: '“$3 a kilo. OK, I’ll take two kilos.” The customer…' },
            options: [
              { fr: 'calcule : 6 $ pour les tomates', en: 'works out: $6 for the tomatoes' },
              { fr: 'paie 3 $ seulement', en: 'pays only $3' },
              { fr: 'prend le métro', en: 'takes the metro' },
            ],
            answer: 0,
            explanation: { fr: 'Prix au kilo × quantité. Puis : autre chose ? Des bananes, un jus…', en: 'Price per kilo × quantity. Then: anything else? Bananas, juice…' },
          },
          {
            id: 'ma2',
            prompt: { fr: 'Deux jus pour 5 $, un seul à 3 $. C’est…', en: 'Two juices for $5, one at $3. That’s…' },
            options: [
              { fr: 'une promotion', en: 'a special offer' },
              { fr: 'un arbre généalogique', en: 'a family tree' },
              { fr: 'un verbe pronominal', en: 'a pronominal verb' },
            ],
            answer: 0,
            explanation: { fr: 'On compare le prix unitaire et l’offre.', en: 'Compare the unit price and the offer.' },
          },
          {
            id: 'ma3',
            prompt: { fr: 'À Montréal, 865 $ par mois pour un studio. Pour comparer, tu…', en: 'In Montreal, $865 a month for a studio. To compare, you…' },
            options: [
              { fr: 'convertis en euros et tu compares avec Paris, Genève…', en: 'convert into euros and compare with Paris, Geneva…' },
              { fr: 'conjugues seulement se laver', en: 'only conjugate se laver' },
              { fr: 'épelles un savon', en: 'spell a soap' },
            ],
            answer: 0,
            explanation: { fr: 'Euro, franc suisse, dollar canadien, franc CFA : des prix différents.', en: 'Euro, Swiss franc, Canadian dollar, CFA franc: different prices.' },
          },
          {
            id: 'ma4',
            prompt: { fr: 'Tu entends [j] dans…', en: 'You hear [j] in…' },
            options: [
              { fr: 'payer, billet, travailler', en: 'payer, billet, travailler' },
              { fr: 'table, sac, code', en: 'table, sac, code' },
              { fr: 'un, une, des', en: 'un, une, des' },
            ],
            answer: 0,
            explanation: { fr: 'travail, portefeuille, rayon, envoyer.', en: 'travail, portefeuille, rayon, envoyer.' },
          },
        ],
      },
      {
        id: 'u6-j-listen',
        type: 'listen',
        title: { fr: 'Le son [j]', en: 'The sound [j]' },
        intro: {
          fr: 'Écoute et répète : le [j] de payer, billet, travailler.',
          en: 'Listen and repeat: the [j] in payer, billet, travailler.',
        },
        items: [
          { id: 'j1', fr: 'payer', en: '[j] in the middle' },
          { id: 'j2', fr: 'billet', en: '[j] before et' },
          { id: 'j3', fr: 'travailler', en: '-ill-' },
          { id: 'j4', fr: 'portefeuille', en: 'wallet' },
          { id: 'j5', fr: 'envoyer', en: 'send' },
        ],
      },
    ],
  },
  {
    id: 'toujours-sur-son-31',
    unitId: 6,
    number: 4,
    title: { fr: 'Toujours sur son 31', en: 'Dressed to the nines' },
    summary: {
      fr: 'Couleurs, quel / laquelle, ce / cet / cette / ces, vêtements, et un peu de SAPE.',
      en: 'Colours, quel / which, ce / cet / cette / ces, clothes, and a little SAPE.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Affiche tes couleurs', en: 'Show your colours' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Quelle couleur vous préférez ? Quel magasin tu préfères ? quels + masculin pluriel, quelles + féminin pluriel. Pour désigner près de toi : ce pull, cet automne, cette jupe, ces articles. Au Congo, la SAPE, c’est l’art de s’habiller avec élégance : couleurs vives, costumes, accessoires.',
          en: 'Which colour do you prefer? Which shop do you prefer? quels + masculine plural, quelles + feminine plural. To point to something near you: ce pull, cet automne, cette jupe, ces articles. In Congo, SAPE is the art of dressing with elegance: bright colours, suits, accessories.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Ce, cet, cette, ces', en: 'Ce, cet, cette, ces' },
        text: {
          fr: 'ce + masculin : ce centre. cet + masculin voyelle ou h muet : cet automne. cette + féminin : cette robe. ces + pluriel : ces magasins. Ces articles sont en solde.',
          en: 'ce + masculine: ce centre. cet + masculine vowel or silent h: cet automne. cette + feminine: cette robe. ces + plural: ces magasins. These items are on sale.',
        },
      },
    ],
    activities: [
      {
        id: 'u6-vetements-cards',
        type: 'flashcards',
        title: { fr: 'Vêtements et couleurs', en: 'Clothes and colours' },
        items: [
          { id: 'pul', fr: 'un pull', en: 'a jumper' },
          { id: 'blu', fr: 'un blouson', en: 'a bomber jacket' },
          { id: 'man', fr: 'un manteau', en: 'a coat' },
          { id: 'jup', fr: 'une jupe', en: 'a skirt' },
          { id: 'ech', fr: 'une écharpe', en: 'a scarf' },
          { id: 'lun', fr: 'des lunettes de soleil', en: 'sunglasses' },
          { id: 'rou', fr: 'rouge, bleu, noir, blanc', en: 'red, blue, black, white' },
          { id: 'ver', fr: 'vert, jaune, violet, orange', en: 'green, yellow, purple, orange' },
        ],
      },
      {
        id: 'u6-quel-quiz',
        type: 'quiz',
        title: { fr: 'Quel, quelle, ce, cette…', en: 'Quel, quelle, ce, cette…' },
        questions: [
          {
            id: 'ql1',
            prompt: { fr: '___ saison vous préférez ?', en: '___ season do you prefer?' },
            options: [
              { fr: 'Quelle', en: 'Quelle' },
              { fr: 'Quel', en: 'Quel' },
              { fr: 'Quels', en: 'Quels' },
            ],
            answer: 0,
            explanation: { fr: 'saison = féminin singulier → quelle.', en: 'saison = feminine singular → quelle.' },
          },
          {
            id: 'ql2',
            prompt: { fr: 'Vous avez ___ âge ? ___ sont les couleurs de l’arc-en-ciel ?', en: '___ age are you? ___ are the colours of the rainbow?' },
            options: [
              { fr: 'quel · Quelles', en: 'quel · Quelles' },
              { fr: 'quelle · Quel', en: 'quelle · Quel' },
              { fr: 'quels · Quelle', en: 'quels · Quelle' },
            ],
            answer: 0,
            explanation: { fr: 'âge = masculin → quel. couleurs = féminin pluriel → quelles.', en: 'âge = masculine → quel. couleurs = feminine plural → quelles.' },
          },
          {
            id: 'ql3',
            prompt: { fr: 'Je cherche des vêtements pour ___ automne. Oh, ___ blouson !', en: 'I’m looking for clothes for ___ autumn. Oh, ___ jacket!' },
            options: [
              { fr: 'cet · ce', en: 'cet · ce' },
              { fr: 'cette · ces', en: 'cette · ces' },
              { fr: 'ce · cette', en: 'ce · cette' },
            ],
            answer: 0,
            explanation: { fr: 'automne commence par voyelle → cet. blouson = masculin → ce.', en: 'automne starts with a vowel → cet. blouson = masculine → ce.' },
          },
          {
            id: 'ql4',
            prompt: { fr: '___ articles sont en solde. J’adore ___ jupe noire.', en: '___ items are on sale. I love ___ black skirt.' },
            options: [
              { fr: 'Ces · cette', en: 'Ces · cette' },
              { fr: 'Ce · ces', en: 'Ce · ces' },
              { fr: 'Cet · ce', en: 'Cet · ce' },
            ],
            answer: 0,
            explanation: { fr: 'articles = pluriel → ces. jupe = féminin → cette.', en: 'articles = plural → ces. jupe = feminine → cette.' },
          },
          {
            id: 'ql5',
            prompt: { fr: 'L’été, je porte une jupe et un t-shirt. L’hiver…', en: 'In summer I wear a skirt and a T-shirt. In winter…' },
            options: [
              { fr: 'un manteau, un pull, une écharpe', en: 'a coat, a jumper, a scarf' },
              { fr: 'des lunettes de soleil seulement', en: 'only sunglasses' },
              { fr: 'un dossard', en: 'a race bib' },
            ],
            answer: 0,
            explanation: { fr: 'Associe vêtement et saison. Un sapeur aime les couleurs vives et les costumes.', en: 'Match clothes and season. A sapeur likes bright colours and suits.' },
          },
        ],
      },
      {
        id: 'u6-look-dialogue',
        type: 'dialogue',
        title: { fr: 'Dans le magasin', en: 'In the shop' },
        dialogue: {
          id: 'look',
          title: { fr: 'Ce pull ou cette jupe ?', en: 'This jumper or this skirt?' },
          context: {
            fr: 'Maya cherche un look d’automne. Écoute les démonstratifs, puis remets dans l’ordre.',
            en: 'Maya is looking for an autumn look. Listen for the demonstratives, then put the lines in order.',
          },
          lines: [
            { speaker: 'Vendeuse', fr: 'Vous parlez de quelle robe, ici ?', en: 'Which dress are you talking about, here?' },
            { speaker: 'Maya', fr: 'Non, non, ce pull noir, là. Combien coûte cet article ?', en: 'No, no, that black jumper there. How much is this item?' },
            { speaker: 'Vendeuse', fr: 'Le pull est en promotion à 14,99 euros. Nous avons ces chaussures en solde aussi.', en: 'The jumper is on offer at 14.99 euros. We have these shoes on sale too.' },
            { speaker: 'Maya', fr: 'C’est super ! Je prends le pull et les chaussures.', en: 'Great! I’ll take the jumper and the shoes.' },
          ],
        },
      },
      {
        id: 'u6-nasales-listen',
        type: 'listen',
        title: { fr: 'Voyelles nasales', en: 'Nasal vowels' },
        intro: {
          fr: 'Écoute an / en, on, in dans : centre, solde, pull, ceinture, manteau.',
          en: 'Listen for an / en, on, in in: centre, solde, pull, ceinture, manteau.',
        },
        items: [
          { id: 'na1', fr: 'centre', en: '[ɑ̃]' },
          { id: 'na2', fr: 'solde', en: '[ɔ̃]' },
          { id: 'na3', fr: 'ceinture', en: '[ɛ̃]' },
          { id: 'na4', fr: 'manteau', en: '[ɑ̃]' },
          { id: 'na5', fr: 'promotion', en: '[ɔ̃]' },
        ],
      },
    ],
  },
  {
    id: 'tapez-votre-code',
    unitId: 6,
    number: 5,
    title: { fr: 'Tapez votre code', en: 'Enter your PIN' },
    summary: {
      fr: 'Le distributeur, les soldes, Black Friday / Green Friday, et un problème à la caisse.',
      en: 'The cash machine, sales, Black Friday / Green Friday, and a problem at the till.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Insérez la carte', en: 'Insert the card' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Au distributeur : insérez votre carte, tapez votre code, sélectionnez le montant, retirez la carte et les billets. À la caisse, parfois ça ne marche pas : transaction refusée, code bon, carte à retirer. Vous pouvez payer autrement ? Désolé, nous n’acceptons pas les chèques pour un petit montant. C’est un scandale !',
          en: 'At the ATM: insert your card, enter your PIN, choose the amount, take the card and the notes. At the till, sometimes it doesn’t work: transaction declined, PIN OK, remove card. Can you pay another way? Sorry, we don’t accept cheques for a small amount. That’s outrageous!',
        },
      },
      {
        type: 'note',
        title: { fr: 'Promotions', en: 'Special offers' },
        text: {
          fr: 'Soldes tout le week-end. Articles à -40 %, -50 %. Échange ou remboursement pendant 15 jours. Le Green Friday, c’est l’idée inverse du Black Friday : moins consommer, réparer, acheter d’occasion.',
          en: 'Sales all weekend. Items 40%, 50% off. Exchange or refund for 15 days. Green Friday is the opposite idea of Black Friday: consume less, repair, buy second-hand.',
        },
      },
    ],
    activities: [
      {
        id: 'u6-dab-match',
        type: 'matching',
        title: { fr: 'Les étapes du distributeur', en: 'ATM steps' },
        pairs: [
          { id: 'd1', left: '1', right: 'Insérez votre carte' },
          { id: 'd2', left: '2', right: 'Tapez votre code et validez' },
          { id: 'd3', left: '3', right: 'Sélectionnez le montant du retrait' },
          { id: 'd4', left: '4', right: 'Retirez votre carte et récupérez les billets' },
        ],
      },
      {
        id: 'u6-soldes-quiz',
        type: 'quiz',
        title: { fr: 'Soldes et mécontentement', en: 'Sales and complaining' },
        questions: [
          {
            id: 'so1',
            prompt: { fr: '« Soldes express ce dimanche. Ordinateurs à moitié prix. Échange pendant 15 jours. » Vrai :', en: '“Express sale this Sunday. Computers half price. Exchange for 15 days.” True:' },
            options: [
              { fr: 'il y a un échange possible après l’achat', en: 'an exchange is possible after buying' },
              { fr: 'il n’y a jamais d’échange', en: 'there is never an exchange' },
              { fr: 'les soldes durent un an', en: 'the sales last a year' },
            ],
            answer: 0,
            explanation: { fr: 'Lis la durée, le %, l’échange. Moitié prix = -50 %.', en: 'Read the duration, the %, the exchange. Half price = 50% off.' },
          },
          {
            id: 'so2',
            prompt: { fr: 'À la caisse : « Ça ne marche pas. Ça dit transaction refusée. » Le problème…', en: 'At the till: “It doesn’t work. It says transaction declined.” The problem…' },
            options: [
              { fr: 'est le paiement par carte, pas forcément le magasin', en: 'is card payment, not necessarily the shop' },
              { fr: 'est que le magasin n’a pas de caisse', en: 'is that the shop has no till' },
              { fr: 'est un semi-marathon', en: 'is a half-marathon' },
            ],
            answer: 0,
            explanation: { fr: 'On réessaie, on vérifie le code, on propose un autre moyen.', en: 'You try again, check the PIN, offer another method.' },
          },
          {
            id: 'so3',
            prompt: { fr: 'Pour exprimer ton mécontentement :', en: 'To show you’re unhappy:' },
            options: [
              { fr: 'C’est un scandale ! Je ne comprends pas, j’ai de l’argent sur mon compte.', en: 'That’s outrageous! I don’t understand, I have money in my account.' },
              { fr: 'Joyeux anniversaire seulement.', en: 'only Happy birthday.' },
              { fr: 'Je me réveille à 7 h.', en: 'I wake up at 7.' },
            ],
            answer: 0,
            explanation: { fr: 'Patienter, réessayer, payer autrement, ou partir.', en: 'Wait, try again, pay another way, or leave.' },
          },
          {
            id: 'so4',
            prompt: { fr: 'Le Green Friday, c’est plutôt…', en: 'Green Friday is more…' },
            options: [
              { fr: 'acheter moins, réparer, choisir l’occasion', en: 'buying less, repairing, choosing second-hand' },
              { fr: 'toujours -90 % sur tout', en: 'always 90% off everything' },
              { fr: 'un verbe en -er', en: 'an -er verb' },
            ],
            answer: 0,
            explanation: { fr: 'Un mouvement contre la surconsommation du vendredi noir.', en: 'A movement against Black Friday over-consumption.' },
          },
        ],
      },
      {
        id: 'u6-carte-dialogue',
        type: 'dialogue',
        title: { fr: 'Problème de carte', en: 'Card problem' },
        dialogue: {
          id: 'carte',
          title: { fr: 'À la caisse', en: 'At the till' },
          context: {
            fr: 'Le paiement échoue. Écoute le problème, puis remets dans l’ordre.',
            en: 'Payment fails. Listen for the problem, then put the lines in order.',
          },
          lines: [
            { speaker: 'Caisse', fr: 'Allez-y, insérez la carte et composez votre code secret.', en: 'Go ahead, insert the card and enter your PIN.' },
            { speaker: 'Cliente', fr: 'Ça ne marche pas. Ça dit « retirez la carte ».', en: 'It doesn’t work. It says “remove the card”.' },
            { speaker: 'Caisse', fr: 'Ah, ça arrive. Patientons… Allez-y, recommencez.', en: 'Ah, that happens. Let’s wait… Go ahead, try again.' },
            { speaker: 'Cliente', fr: 'Encore « transaction refusée ». J’ai de l’argent sur mon compte !', en: '“Transaction declined” again. I have money in my account!' },
            { speaker: 'Caisse', fr: 'Vous pouvez payer autrement ? Nous n’acceptons pas les chèques pour moins de 50 euros.', en: 'Can you pay another way? We don’t accept cheques under 50 euros.' },
            { speaker: 'Cliente', fr: 'Bon, je vais retirer des espèces au distributeur.', en: 'Right, I’ll take out cash at the machine.' },
          ],
        },
      },
    ],
  },
  {
    id: 'projet-souvenirs',
    unitId: 6,
    number: 6,
    title: { fr: 'Souvenirs de nos pays', en: 'Souvenirs from our countries' },
    summary: {
      fr: 'Une soirée d’intégration, présenter un objet, voter pour un souvenir.',
      en: 'A welcome evening, present an object, vote for a souvenir.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Le projet : une soirée pour les nouveaux étudiants. Cocktail, rencontre, un défi : apportez un objet-souvenir de votre pays. Qu’est-ce que c’est ? Comment ça marche ? C’est un savon, un pull, un petit jeu, une enveloppe porte-bonheur… La soirée est souvent gratuite. À gagner parfois : un dictionnaire, des livres.',
          en: 'The project: an evening for new students. Drinks, meeting people, a challenge: bring a souvenir object from your country. What is it? How does it work? It’s a soap, a jumper, a little game, a lucky envelope… The evening is often free. Sometimes you can win: a dictionary, books.',
        },
      },
    ],
    activities: [
      {
        id: 'u6-soiree-quiz',
        type: 'quiz',
        title: { fr: 'Lire l’affiche', en: 'Read the poster' },
        questions: [
          {
            id: 'af1',
            prompt: { fr: '« Venez samedi à 18 h. La soirée est gratuite. » Vrai :', en: '“Come Saturday at 6 p.m. The evening is free.” True:' },
            options: [
              { fr: 'ce n’est pas payant', en: 'it isn’t paid' },
              { fr: 'il faut 50 euros', en: 'you need 50 euros' },
              { fr: 'c’est un distributeur', en: 'it’s a cash machine' },
            ],
            answer: 0,
            explanation: { fr: 'Lis : jour, heure, prix, programme, défi.', en: 'Read: day, time, price, programme, challenge.' },
          },
          {
            id: 'af2',
            prompt: { fr: 'Pour présenter ton souvenir :', en: 'To present your souvenir:' },
            options: [
              { fr: 'Qu’est-ce que c’est ? C’est un objet du quotidien de mon pays.', en: 'What is it? It’s an everyday object from my country.' },
              { fr: 'Je me lève à 7 h seulement.', en: 'only I get up at 7.' },
              { fr: 'Tapez le métro.', en: 'Enter the metro.' },
            ],
            answer: 0,
            explanation: { fr: 'Puis : Comment ça marche ? C’est facile, regarde…', en: 'Then: How does it work? It’s easy, look…' },
          },
        ],
      },
      {
        id: 'u6-souvenir-match',
        type: 'matching',
        title: { fr: 'Quel objet ?', en: 'Which object?' },
        pairs: [
          { id: 'sv1', left: 'on se lave les mains', right: 'un savon' },
          { id: 'sv2', left: 'on le porte l’hiver', right: 'un pull' },
          { id: 'sv3', left: 'un petit jeu électronique', right: 'un jouet rétro' },
          { id: 'sv4', left: 'une enveloppe rouge pour le Nouvel An', right: 'un porte-bonheur' },
        ],
      },
      {
        id: 'u6-projet-dialogue',
        type: 'dialogue',
        title: { fr: 'Mon souvenir', en: 'My souvenir' },
        dialogue: {
          id: 'souv',
          title: { fr: 'Le défi', en: 'The challenge' },
          context: {
            fr: 'Tom présente un objet. Écoute ce que c’est, puis remets dans l’ordre.',
            en: 'Tom presents an object. Listen to what it is, then put the lines in order.',
          },
          lines: [
            { speaker: 'Maya', fr: 'Qu’est-ce que c’est ?', en: 'What is it?' },
            { speaker: 'Tom', fr: 'C’est un savon de mon pays. Un objet du quotidien.', en: 'It’s a soap from my country. An everyday object.' },
            { speaker: 'Maya', fr: 'Comment est-ce que ça marche ?', en: 'How does it work?' },
            { speaker: 'Tom', fr: 'C’est facile, regarde… Et toi, tu votes pour quel souvenir ?', en: 'It’s easy, look… And you, which souvenir are you voting for?' },
          ],
        },
      },
    ],
  },
  {
    id: 'bilan',
    unitId: 6,
    number: 7,
    title: { fr: 'Bilan', en: 'Checkpoint' },
    summary: {
      fr: 'Magasins, prix, quel / ce, pour + infinitif, la caisse et le code.',
      en: 'Shops, prices, quel / ce, pour + infinitive, the till and the PIN.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Coche dans ta tête : je m’informe sur les choses, je donne un prix, je paie, je dis d’accord ou c’est un scandale. Si une question bloque, retourne à la leçon.',
          en: 'Check in your head: I can ask about things, give a price, pay, say I agree or that’s outrageous. If a question sticks, go back to the lesson.',
        },
      },
    ],
    activities: [
      {
        id: 'u6-bilan-match',
        type: 'matching',
        title: { fr: 'Verbe et lieu', en: 'Verb and place' },
        pairs: [
          { id: 'vm1', left: 'payer électroniquement', right: 'la caisse / sans contact' },
          { id: 'vm2', left: 'faire de la monnaie', right: 'des pièces' },
          { id: 'vm3', left: 'trouver des vitamines', right: 'une pharmacie' },
          { id: 'vm4', left: 'acheter des légumes', right: 'un marché' },
          { id: 'vm5', left: 'avoir la facture', right: 'après l’achat' },
        ],
      },
      {
        id: 'u6-bilan-argent',
        type: 'matching',
        title: { fr: 'Qu’est-ce que c’est ?', en: 'What is it?' },
        pairs: [
          { id: 'ar1', left: 'une pièce d’un euro', right: 'de la monnaie' },
          { id: 'ar2', left: 'des billets', right: 'de l’argent papier' },
          { id: 'ar3', left: 'des centimes', right: 'la petite monnaie' },
          { id: 'ar4', left: 'un portefeuille', right: 'on range cartes et billets' },
        ],
      },
      {
        id: 'u6-bilan-quiz',
        type: 'quiz',
        title: { fr: 'Checkpoint unité 6', en: 'Unit 6 checkpoint' },
        questions: [
          {
            id: 'x1',
            prompt: { fr: 'Pour acheter des légumes, je vais au marché. Ici pour + infinitif exprime…', en: 'To buy vegetables, I go to the market. Here pour + infinitive expresses…' },
            options: [
              { fr: 'le but', en: 'purpose' },
              { fr: 'l’âge', en: 'age' },
              { fr: 'la nationalité', en: 'nationality' },
            ],
            answer: 0,
            explanation: { fr: 'pour + infinitif = le but de l’action.', en: 'pour + infinitive = the purpose of the action.' },
          },
          {
            id: 'x2',
            prompt: { fr: 'Cela fait 67,50 €. Comment vous payez ? — Par… Allez-y, tapez votre…', en: 'That’s €67.50. How are you paying? — By… Go ahead, enter your…' },
            options: [
              { fr: 'carte · code', en: 'card · PIN' },
              { fr: 'métro · frère', en: 'metro · brother' },
              { fr: 'yoga · casque', en: 'yoga · helmet' },
            ],
            answer: 0,
            explanation: { fr: 'À la caisse : carte, code, ticket de caisse, retirez la carte.', en: 'At the till: card, PIN, receipt, remove the card.' },
          },
          {
            id: 'x3',
            prompt: { fr: 'J’adore ce look. T-shirt et jupe. Combien coûte cette petite robe noire ? Tu…', en: 'I love this look. T-shirt and skirt. How much is this little black dress? You…' },
            options: [
              { fr: 'parles de tes goûts et tu demandes le prix', en: 'talk about your tastes and ask the price' },
              { fr: 'conjugues seulement se coucher', en: 'only conjugate se coucher' },
              { fr: 'réserves un restaurant gastronomique', en: 'book a gourmet restaurant' },
            ],
            answer: 0,
            explanation: { fr: 'ce / cette + vêtement. Quel pull ? Quelles couleurs ?', en: 'ce / cette + clothes. Which jumper? Which colours?' },
          },
          {
            id: 'x4',
            prompt: { fr: 'Une barquette de fraises, s’il vous plaît. C’est bon pour moi. Tu…', en: 'A punnet of strawberries, please. That’s fine for me. You…' },
            options: [
              { fr: 'fais un achat simple et tu es d’accord sur le prix', en: 'make a simple purchase and agree on the price' },
              { fr: 'roules sur les trottoirs', en: 'ride on the pavement' },
              { fr: 'présentes l’arbre des Morel', en: 'present the Morel family tree' },
            ],
            answer: 0,
            explanation: { fr: 'C’est bon pour moi = accord. C’est un scandale = mécontentement.', en: 'C’est bon pour moi = agreement. C’est un scandale = complaint.' },
          },
        ],
      },
    ],
  },
]
