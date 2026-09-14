import type { Lesson } from '@/types/course'

export const unit8Lessons: Lesson[] = [
  {
    id: 'ouverture',
    unitId: 8,
    number: 1,
    title: { fr: 'Bon voyage !', en: 'Have a good trip!' },
    summary: {
      fr: 'Les voyages font nos plus belles histoires. Vous faites quel type de voyage ? Vous êtes allé(e) où ?',
      en: 'Travel makes our best stories. What kind of trip do you take? Where have you been?',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'On sort de la routine', en: 'We leave the routine' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Dans cette unité tu racontes un voyage au passé composé, tu parles de tes projets (dans un an…), tu donnes tes impressions (c’était magnifique), tu compares deux villes, tu expliques pourquoi, tu lis un billet de train et une carte d’embarquement — et tu déclares un bagage perdu.',
          en: 'In this unit you tell a trip in the passé composé, you talk about plans (in a year…), you give impressions (it was wonderful), you compare two cities, you explain why, you read a train ticket and a boarding pass — and you report lost luggage.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'Je suis allé(e) au Cameroun avec ma famille.', en: 'I went to Cameroon with my family.' },
          { fr: 'Dans un an, je vais retourner en Italie.', en: 'In a year, I’m going back to Italy.' },
          { fr: 'C’était extraordinaire.', en: 'It was extraordinary.' },
        ],
      },
    ],
    activities: [
      {
        id: 'u8-open-quiz',
        type: 'quiz',
        title: { fr: 'Pourquoi on voyage ?', en: 'Why do we travel?' },
        questions: [
          {
            id: 'o1',
            prompt: { fr: 'On voyage souvent pour…', en: 'People often travel to…' },
            options: [
              { fr: 'explorer, se reposer, travailler, voir des amis', en: 'explore, rest, work, see friends' },
              { fr: 'conjuguer seulement du, de la', en: 'only conjugate du, de la' },
              { fr: 'taper un code bancaire', en: 'enter a PIN' },
            ],
            answer: 0,
            explanation: { fr: 'Affaires, vacances, camping, croisière, visite familiale…', en: 'Business, holidays, camping, a cruise, a family visit…' },
          },
          {
            id: 'o2',
            prompt: { fr: 'Il y a, depuis, dans, c’est…', en: 'Il y a, depuis, dans are…' },
            options: [
              { fr: 'des indicateurs de temps (passé, présent, futur)', en: 'time markers (past, present, future)' },
              { fr: 'des articles partitifs', en: 'partitive articles' },
              { fr: 'des nationalités', en: 'nationalities' },
            ],
            answer: 0,
            explanation: { fr: 'Il y a deux ans. Depuis 2019. Dans un mois.', en: 'Two years ago. Since 2019. In a month.' },
          },
          {
            id: 'o3',
            prompt: { fr: 'Dans cette unité, tu vas surtout…', en: 'In this unit you will mainly…' },
            options: [
              { fr: 'raconter, comparer, réserver, demander de l’aide', en: 'tell, compare, book, ask for help' },
              { fr: 'apprendre seulement les partitifs', en: 'only learn partitives' },
              { fr: 'cuisiner une quiche', en: 'cook a quiche' },
            ],
            answer: 0,
            explanation: { fr: 'Météo, aéroport, hôtel, train, valise perdue.', en: 'Weather, airport, hotel, train, lost suitcase.' },
          },
        ],
      },
    ],
  },
  {
    id: 'a-l-aventure',
    unitId: 8,
    number: 2,
    title: { fr: 'À l’aventure', en: 'Off on an adventure' },
    summary: {
      fr: 'Un parcours d’explorateur, il y a / depuis / dans, et tes impressions : c’était…',
      en: 'An explorer’s path, il y a / depuis / dans, and your impressions: it was…',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Sous la tente', en: 'Under the tent' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Il y a = passé révolu : Il y a deux ans, je suis allé(e) au Népal. Depuis = ça continue : Elle voyage depuis vingt ans. Dans = futur : Dans un mois, je vais partir. Pour les impressions au passé : c’était magnifique, fantastique, difficile, horrible, extraordinaire… Au présent : c’est compliqué → au passé : c’était compliqué.',
          en: 'Il y a = finished past: Two years ago I went to Nepal. Depuis = it continues: She has been travelling for twenty years. Dans = future: In a month I’m leaving. For past impressions: it was wonderful, fantastic, difficult, horrible, extraordinary… Present: it’s complicated → past: it was complicated.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Léa, exploratrice', en: 'Léa, explorer' },
        text: {
          fr: 'Léa Moreau est chercheuse. Il y a huit ans, elle est partie seule dans le désert. Depuis 2018, elle voyage pour la science. Elle a dormi sous la tente par −40 °C. Dans un an, elle va partir en mission avec un petit groupe. « C’était dur, mais magnifique. »',
          en: 'Léa Moreau is a researcher. Eight years ago she left alone for the desert. Since 2018 she has travelled for science. She slept in a tent at −40 °C. In a year she will leave on a mission with a small group. “It was hard, but wonderful.”',
        },
      },
    ],
    activities: [
      {
        id: 'u8-nature-cards',
        type: 'flashcards',
        title: { fr: 'Lieux et météo', en: 'Places and weather' },
        items: [
          { id: 'des', fr: 'le désert', en: 'the desert' },
          { id: 'for', fr: 'la forêt', en: 'the forest' },
          { id: 'mon', fr: 'la montagne / un glacier', en: 'the mountain / a glacier' },
          { id: 'cha', fr: 'très chaud', en: 'very hot' },
          { id: 'hum', fr: 'très humide', en: 'very humid' },
          { id: 'fro', fr: 'très froid', en: 'very cold' },
          { id: 'ten', fr: 'une tente / un sac à dos', en: 'a tent / a backpack' },
          { id: 'exp', fr: 'une expédition', en: 'an expedition' },
        ],
      },
      {
        id: 'u8-temps-quiz',
        type: 'quiz',
        title: { fr: 'Il y a, depuis, dans', en: 'Il y a, depuis, dans' },
        questions: [
          {
            id: 't1',
            prompt: { fr: 'Elle est partie au Népal ___ deux ans.', en: 'She left for Nepal ___ two years.' },
            options: [
              { fr: 'il y a', en: 'il y a' },
              { fr: 'depuis', en: 'depuis' },
              { fr: 'dans', en: 'dans' },
            ],
            answer: 0,
            explanation: { fr: 'Action finie dans le passé → il y a.', en: 'Finished past action → il y a.' },
          },
          {
            id: 't2',
            prompt: { fr: 'Il voyage à travers le monde ___ vingt ans.', en: 'He has been travelling the world ___ twenty years.' },
            options: [
              { fr: 'depuis', en: 'depuis' },
              { fr: 'il y a', en: 'il y a' },
              { fr: 'dans', en: 'dans' },
            ],
            answer: 0,
            explanation: { fr: 'Ça a commencé et ça continue → depuis.', en: 'It started and continues → depuis.' },
          },
          {
            id: 't3',
            prompt: { fr: 'Je vais retourner ___ un an.', en: 'I’m going back ___ a year.' },
            options: [
              { fr: 'dans', en: 'dans' },
              { fr: 'il y a', en: 'il y a' },
              { fr: 'depuis', en: 'depuis' },
            ],
            answer: 0,
            explanation: { fr: 'Projet futur → dans.', en: 'Future plan → dans.' },
          },
          {
            id: 't4',
            prompt: { fr: 'Il va faire des tests ___ un mois. Il est seul dans le désert ___ dix jours.', en: 'He will do tests ___ a month. He has been alone in the desert ___ ten days.' },
            options: [
              { fr: 'dans · depuis', en: 'dans · depuis' },
              { fr: 'il y a · dans', en: 'il y a · dans' },
              { fr: 'depuis · il y a', en: 'depuis · il y a' },
            ],
            answer: 0,
            explanation: { fr: 'Futur : dans. Durée qui continue : depuis.', en: 'Future: dans. Ongoing duration: depuis.' },
          },
          {
            id: 't5',
            prompt: { fr: 'Le désert est souvent ___. La forêt amazonienne est ___. Un glacier est ___.', en: 'The desert is often ___. The Amazon forest is ___. A glacier is ___.' },
            options: [
              { fr: 'très chaud · très humide · très froid', en: 'very hot · very humid · very cold' },
              { fr: 'très froid · très chaud · très humide', en: 'very cold · very hot · very humid' },
              { fr: 'fade · sucré · salé', en: 'bland · sweet · savoury' },
            ],
            answer: 0,
            explanation: { fr: 'On relie le lieu et le climat.', en: 'Match the place and the climate.' },
          },
        ],
      },
      {
        id: 'u8-impressions-match',
        type: 'matching',
        title: { fr: 'C’était comment ?', en: 'How was it?' },
        pairs: [
          { id: 'im1', left: 'J’ai vu les pyramides.', right: 'C’était impressionnant.' },
          { id: 'im2', left: 'Je n’ai pas mangé et j’ai eu soif.', right: 'C’était difficile.' },
          { id: 'im3', left: 'Le soleil se couche sur la tente.', right: 'C’était magnifique.' },
          { id: 'im4', left: 'Il a plu pendant des heures.', right: 'C’était horrible.' },
          { id: 'im5', left: 'On a visité l’île en moto.', right: 'C’était fantastique.' },
        ],
      },
      {
        id: 'u8-chiara-quiz',
        type: 'quiz',
        title: { fr: 'Compléter un récit', en: 'Complete a story' },
        intro: {
          fr: 'Maya raconte : « … mon enfance, je rêve d’aller en Indonésie. Je suis partie à Bali … deux ans avec des amis. Nous avons visité des temples. C’était un voyage magnifique. Je vais y retourner … un an. »',
          en: 'Maya tells: “… childhood, I have dreamed of going to Indonesia. I left for Bali … two years with friends. We visited temples. It was a wonderful trip. I will go back … a year.”',
        },
        questions: [
          {
            id: 'c1',
            prompt: { fr: 'Les trois trous, dans l’ordre :', en: 'The three gaps, in order:' },
            options: [
              { fr: 'Depuis · il y a · dans', en: 'Depuis · il y a · dans' },
              { fr: 'Dans · depuis · il y a', en: 'Dans · depuis · il y a' },
              { fr: 'Il y a · dans · depuis', en: 'Il y a · dans · depuis' },
            ],
            answer: 0,
            explanation: { fr: 'Depuis l’enfance (ça continue). Il y a deux ans (passé). Dans un an (futur).', en: 'Depuis childhood (it continues). Two years ago (past). In a year (future).' },
          },
        ],
      },
    ],
  },
  {
    id: 'decouvertes',
    unitId: 8,
    number: 3,
    title: { fr: 'Découvertes', en: 'Discoveries' },
    summary: {
      fr: 'La météo, le son [wa], parce que, plus / moins / aussi… que, choisir une ville.',
      en: 'Weather, the sound [wa], because, plus / moins / aussi… que, choosing a city.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Quel temps fait-il ?', en: 'What’s the weather like?' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Il y a du soleil. Il y a des nuages. Il pleut. Il neige. Il y a de l’orage. Il fait chaud / froid. Pour comparer : plus grand que, moins cher que, aussi gentil que. Pour la cause : Pourquoi tu apprends le français ? — Parce que je fais des études ici.',
          en: 'It’s sunny. It’s cloudy. It’s raining. It’s snowing. There’s a storm. It’s hot / cold. To compare: bigger than, less expensive than, as kind as. For cause: Why are you learning French? — Because I’m studying here.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Le son [wa]', en: 'The sound [wa]' },
        text: {
          fr: 'Les lettres oi se prononcent [wa] : Je suis allé voir mes amis. Il vient de Côte d’Ivoire. Il fait froid, je crois.',
          en: 'The letters oi are pronounced [wa]: I went to see my friends. He’s from Côte d’Ivoire. It’s cold, I think.',
        },
      },
    ],
    activities: [
      {
        id: 'u8-meteo-cards',
        type: 'flashcards',
        title: { fr: 'La météo', en: 'The weather' },
        items: [
          { id: 'sol', fr: 'Il y a du soleil. / Il fait beau.', en: 'It’s sunny. / The weather is nice.' },
          { id: 'nua', fr: 'Il y a des nuages.', en: 'It’s cloudy.' },
          { id: 'plu', fr: 'Il pleut.', en: 'It’s raining.' },
          { id: 'nei', fr: 'Il neige.', en: 'It’s snowing.' },
          { id: 'ora', fr: 'Il y a de l’orage.', en: 'There’s a thunderstorm.' },
          { id: 'ven', fr: 'Il y a du vent.', en: 'It’s windy.' },
          { id: 'cha2', fr: 'Il fait chaud. / 33 °C', en: 'It’s hot. / 33°C' },
          { id: 'fro2', fr: 'Il fait froid. / −5 °C', en: 'It’s cold. / −5°C' },
        ],
      },
      {
        id: 'u8-meteo-match',
        type: 'matching',
        title: { fr: 'Lire la carte météo', en: 'Read the weather map' },
        pairs: [
          { id: 'me1', left: 'Abidjan, 27 °C, nuages', right: 'Il ne pleut pas, mais il y a des nuages et il fait chaud.' },
          { id: 'me2', left: 'Phnom Penh, 33 °C, orage', right: 'Il y a de l’orage et il fait très chaud.' },
          { id: 'me3', left: 'Vancouver, 20 °C, ensoleillé', right: 'Il y a du soleil, il fait doux.' },
          { id: 'me4', left: 'Moscou, −5 °C, neige', right: 'Il neige et il fait froid.' },
        ],
      },
      {
        id: 'u8-comparaison-quiz',
        type: 'quiz',
        title: { fr: 'Comparer et expliquer', en: 'Compare and explain' },
        questions: [
          {
            id: 'co1',
            prompt: { fr: 'Le train est ___ rapide ___ l’avion.', en: 'The train is ___ fast ___ the plane.' },
            options: [
              { fr: 'moins · que', en: 'moins · que' },
              { fr: 'plus · de', en: 'plus · de' },
              { fr: 'aussi · à', en: 'aussi · à' },
            ],
            answer: 0,
            explanation: { fr: 'moins / plus / aussi + adjectif + que.', en: 'moins / plus / aussi + adjective + que.' },
          },
          {
            id: 'co2',
            prompt: { fr: 'Lyon est ___ grande ___ Saint-Denis de La Réunion.', en: 'Lyon is ___ big ___ Saint-Denis, Réunion.' },
            options: [
              { fr: 'plus · que', en: 'plus · que' },
              { fr: 'moins · que', en: 'moins · que' },
              { fr: 'aussi · de', en: 'aussi · de' },
            ],
            answer: 0,
            explanation: { fr: 'Lyon a beaucoup plus d’habitants.', en: 'Lyon has far more inhabitants.' },
          },
          {
            id: 'co3',
            prompt: { fr: 'Je préfère l’hôtel ___ c’est plus confortable ___ le camping.', en: 'I prefer the hotel ___ it’s more comfortable ___ camping.' },
            options: [
              { fr: 'parce que · que', en: 'parce que · que' },
              { fr: 'pourquoi · de', en: 'pourquoi · de' },
              { fr: 'donc · à', en: 'donc · à' },
            ],
            answer: 0,
            explanation: { fr: 'pourquoi ? → parce que. Comparaison : plus + adj + que.', en: 'pourquoi? → parce que. Comparison: plus + adj + que.' },
          },
          {
            id: 'co4',
            prompt: { fr: 'Pourquoi est-ce que vous apprenez le français ?', en: 'Why are you learning French?' },
            options: [
              { fr: 'Parce que je fais des études ici. / Parce que j’aime voyager.', en: 'Because I’m studying here. / Because I like travelling.' },
              { fr: 'Pourquoi je fais des études ici.', en: 'Why I’m studying here.' },
              { fr: 'Il y a du soleil seulement.', en: 'It’s only sunny.' },
            ],
            answer: 0,
            explanation: { fr: 'Question : pourquoi. Réponse : parce que.', en: 'Question: pourquoi. Answer: parce que.' },
          },
          {
            id: 'co5',
            prompt: { fr: 'Je préfère Lyon ___ cette ville est plus animée. Saint-Denis a un climat tropical, Lyon un climat continental. Tu…', en: 'I prefer Lyon ___ this city is livelier. Saint-Denis has a tropical climate, Lyon a continental one. You…' },
            options: [
              { fr: 'choisis une destination et tu justifies', en: 'choose a destination and justify it' },
              { fr: 'conjugues seulement se lever', en: 'only conjugate se lever' },
              { fr: 'commandes une quiche', en: 'order a quiche' },
            ],
            answer: 0,
            explanation: { fr: 'Population, climat, à faire, comment arriver : autant d’arguments.', en: 'Population, climate, things to do, how to get there: all arguments.' },
          },
        ],
      },
      {
        id: 'u8-wa-listen',
        type: 'listen',
        title: { fr: 'Le son [wa]', en: 'The sound [wa]' },
        intro: {
          fr: 'Lis à voix haute : oi = [wa].',
          en: 'Read aloud: oi = [wa].',
        },
        items: [
          { id: 'w1', fr: 'Je suis allé voir mes amis.', en: 'voir → [wa]' },
          { id: 'w2', fr: 'Il vient de Côte d’Ivoire.', en: 'Ivoire → [wa]' },
          { id: 'w3', fr: 'Il fait froid, je crois.', en: 'froid, crois → [wa]' },
        ],
      },
      {
        id: 'u8-casablanca-quiz',
        type: 'quiz',
        title: { fr: 'Étudier ailleurs', en: 'Studying abroad' },
        intro: {
          fr: 'Noah est étudiant à Casablanca. Il est venu parce que la ville est cosmopolite. Au début, il a eu le mal du pays. Casablanca et Yaoundé sont grandes ; les deux ont la mer proche, mais le climat n’est pas le même.',
          en: 'Noah is a student in Casablanca. He came because the city is cosmopolitan. At first he was homesick. Casablanca and Yaoundé are both large; both are near the sea, but the climate is not the same.',
        },
        questions: [
          {
            id: 'ca1',
            prompt: { fr: 'Pourquoi Noah est venu à Casablanca ?', en: 'Why did Noah come to Casablanca?' },
            options: [
              { fr: 'pour étudier, dans une ville cosmopolite', en: 'to study, in a cosmopolitan city' },
              { fr: 'pour ouvrir une boulangerie seulement', en: 'only to open a bakery' },
              { fr: 'parce qu’il déteste le français', en: 'because he hates French' },
            ],
            answer: 0,
            explanation: { fr: 'Cause : parce que + raison.', en: 'Cause: parce que + reason.' },
          },
          {
            id: 'ca2',
            prompt: { fr: 'Casablanca est plus ___ que beaucoup de villes plus petites.', en: 'Casablanca is more ___ than many smaller cities.' },
            options: [
              { fr: 'grande', en: 'big' },
              { fr: 'petit', en: 'small' },
              { fr: 'fade', en: 'bland' },
            ],
            answer: 0,
            explanation: { fr: 'plus + adjectif + que.', en: 'plus + adjective + que.' },
          },
        ],
      },
    ],
  },
  {
    id: 'aeroport-hotel',
    unitId: 8,
    number: 4,
    title: { fr: 'De l’aéroport à l’hôtel', en: 'From the airport to the hotel' },
    summary: {
      fr: 'Les étapes en avion, donc / alors, un hôtel, [g] et [ʒ].',
      en: 'The steps of a flight, donc / alors, a hotel, [g] and [ʒ].',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'L’aéroport de demain', en: 'Tomorrow’s airport' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'À l’aéroport Horizon, tu n’as plus de carte papier : tout est sur le téléphone. Un petit train électrique t’amène jusqu’à l’avion. Les valises ont une puce : tu les suis sur l’écran. Il y a encore un contrôle de sécurité. Tu es responsable de tes affaires, donc n’oublie pas le chargeur. Sans téléphone, tu t’orientes mal, alors garde-le chargé.',
          en: 'At Horizon Airport you no longer have a paper pass: everything is on the phone. A small electric train takes you to the plane. Suitcases have a chip: you follow them on the screen. There is still a security check. You are responsible for your things, so don’t forget the charger. Without a phone you get lost, so keep it charged.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Donc, alors', en: 'Donc, alors' },
        text: {
          fr: 'Conséquence : Une application indique le chemin, donc c’est facile de s’orienter. Vous êtes responsable de vos bagages, alors n’oubliez pas de prendre votre chargeur.',
          en: 'Result: An app shows the way, so it’s easy to find your way. You are responsible for your bags, so don’t forget to take your charger.',
        },
      },
    ],
    activities: [
      {
        id: 'u8-avion-cards',
        type: 'flashcards',
        title: { fr: 'À l’aéroport', en: 'At the airport' },
        items: [
          { id: 'emb', fr: 'embarquer / une porte d’embarquement', en: 'to board / a boarding gate' },
          { id: 'car', fr: 'une carte d’embarquement', en: 'a boarding pass' },
          { id: 'sou', fr: 'le bagage en soute / le bagage cabine', en: 'checked baggage / cabin bag' },
          { id: 'sec', fr: 'passer la sécurité / la douane', en: 'go through security / customs' },
          { id: 'gui', fr: 'le guichet d’enregistrement', en: 'the check-in desk' },
          { id: 'pas', fr: 'un passeport / un billet', en: 'a passport / a ticket' },
          { id: 'vol', fr: 'un vol / une compagnie aérienne', en: 'a flight / an airline' },
          { id: 'sie', fr: 'un siège / une porte', en: 'a seat / a gate' },
        ],
      },
      {
        id: 'u8-etapes-match',
        type: 'matching',
        title: { fr: 'Les étapes du voyage', en: 'The steps of the trip' },
        pairs: [
          { id: 'et1', left: '1. Avant l’avion', right: 'enregistrement, déposer la valise, prendre le billet' },
          { id: 'et2', left: '2. Contrôles', right: 'passer la sécurité, parfois la douane' },
          { id: 'et3', left: '3. Attendre', right: 'trouver la porte d’embarquement' },
          { id: 'et4', left: '4. Partir', right: 'embarquer' },
          { id: 'et5', left: '5. À l’arrivée', right: 'récupérer sa valise au carrousel' },
        ],
      },
      {
        id: 'u8-donc-quiz',
        type: 'quiz',
        title: { fr: 'Donc ou alors', en: 'Donc or alors' },
        questions: [
          {
            id: 'do1',
            prompt: { fr: 'L’application indique le chemin, ___ c’est facile de s’orienter.', en: 'The app shows the way, ___ it’s easy to find your way.' },
            options: [
              { fr: 'donc', en: 'donc' },
              { fr: 'parce que', en: 'parce que' },
              { fr: 'il y a', en: 'il y a' },
            ],
            answer: 0,
            explanation: { fr: 'donc / alors = conséquence, pas la cause.', en: 'donc / alors = result, not the cause.' },
          },
          {
            id: 'do2',
            prompt: { fr: 'Tu es responsable de tes bagages, ___ n’oublie pas le chargeur.', en: 'You are responsible for your bags, ___ don’t forget the charger.' },
            options: [
              { fr: 'alors', en: 'alors' },
              { fr: 'depuis', en: 'depuis' },
              { fr: 'moins que', en: 'moins que' },
            ],
            answer: 0,
            explanation: { fr: 'alors + consigne / résultat.', en: 'alors + instruction / result.' },
          },
          {
            id: 'do3',
            prompt: { fr: 'Dans l’aéroport du futur, quels objets deviennent souvent numériques ?', en: 'In the airport of the future, which objects often become digital?' },
            options: [
              { fr: 'la carte d’embarquement, parfois le passeport', en: 'the boarding pass, sometimes the passport' },
              { fr: 'le chargeur et la valise (ils disparaissent)', en: 'the charger and the suitcase (they disappear)' },
              { fr: 'uniquement la forêt', en: 'only the forest' },
            ],
            answer: 0,
            explanation: { fr: 'Le chargeur, lui, reste bien réel.', en: 'The charger, though, stays very real.' },
          },
          {
            id: 'do4',
            prompt: { fr: 'Annonce : destination finale Bordeaux. Tu débarques à Paris. L’ordre logique :', en: 'Announcement: final destination Bordeaux. You land in Paris. Logical order:' },
            options: [
              { fr: 'récupérer les bagages → contrôle → correspondance pour Bordeaux', en: 'collect bags → check → connection to Bordeaux' },
              { fr: 'embarquer d’abord à Bordeaux', en: 'board in Bordeaux first' },
              { fr: 'aller au camping seulement', en: 'only go camping' },
            ],
            answer: 0,
            explanation: { fr: 'Escales : on suit les étapes jusqu’à la destination finale.', en: 'Layovers: you follow the steps through to the final destination.' },
          },
        ],
      },
      {
        id: 'u8-hotel-quiz',
        type: 'quiz',
        title: { fr: 'Lire une offre d’hôtel', en: 'Read a hotel offer' },
        intro: {
          fr: 'Hôtel des Quais, Montréal. Chambre simple : 90 $ / nuit, lit simple, salle de bain partagée, climatisation, Wi-Fi. Petit-déjeuner : + 5 $. Chambre double : 145 $ / nuit, salle de bain privée, TV, petit-déjeuner inclus. Réception 24 h/24 pour les deux. Navette aéroport : non incluse.',
          en: 'Hôtel des Quais, Montreal. Single: $90 / night, single bed, shared bathroom, A/C, Wi-Fi. Breakfast: + $5. Double: $145 / night, private bathroom, TV, breakfast included. 24-hour reception for both. Airport shuttle: not included.',
        },
        questions: [
          {
            id: 'h1',
            prompt: { fr: 'Le petit-déjeuner est inclus…', en: 'Breakfast is included…' },
            options: [
              { fr: 'dans la chambre double seulement', en: 'in the double room only' },
              { fr: 'dans les deux chambres', en: 'in both rooms' },
              { fr: 'jamais', en: 'never' },
            ],
            answer: 0,
            explanation: { fr: 'Simple : en supplément. Double : inclus.', en: 'Single: extra. Double: included.' },
          },
          {
            id: 'h2',
            prompt: { fr: 'La salle de bain privée, c’est…', en: 'The private bathroom is…' },
            options: [
              { fr: 'pour la chambre double', en: 'for the double room' },
              { fr: 'pour la chambre simple', en: 'for the single room' },
              { fr: 'pour personne', en: 'for nobody' },
            ],
            answer: 0,
            explanation: { fr: 'Simple = partagée.', en: 'Single = shared.' },
          },
          {
            id: 'h3',
            prompt: { fr: 'La navette aéroport-hôtel…', en: 'The airport–hotel shuttle…' },
            options: [
              { fr: 'n’est pas dans le prix', en: 'is not in the price' },
              { fr: 'est toujours gratuite', en: 'is always free' },
              { fr: 'remplace le passeport', en: 'replaces the passport' },
            ],
            answer: 0,
            explanation: { fr: 'Lis ce qui est coché / écrit « inclus ».', en: 'Read what is ticked / written as “included”.' },
          },
        ],
      },
      {
        id: 'u8-gj-listen',
        type: 'listen',
        title: { fr: '[g] ou [ʒ] ?', en: '[g] or [ʒ]?' },
        intro: {
          fr: '[g] : magazine, Patagonie, langue, guichet. [ʒ] : voyage, origine, voyageons, jours, plage. fatigué a les deux idées : [g] au milieu.',
          en: '[g]: magazine, Patagonia, langue, guichet. [ʒ]: voyage, origine, voyageons, jours, plage. fatigué has [g] in the middle.',
        },
        items: [
          { id: 'g1', fr: 'bagage', en: '[g]' },
          { id: 'g2', fr: 'plage', en: '[ʒ]' },
          { id: 'g3', fr: 'fatigué', en: '[g]' },
          { id: 'g4', fr: 'chargeur', en: '[ʒ]' },
          { id: 'g5', fr: 'voyage', en: '[ʒ]' },
        ],
      },
      {
        id: 'u8-reception-dialogue',
        type: 'dialogue',
        title: { fr: 'À la réception', en: 'At reception' },
        dialogue: {
          id: 'hot',
          title: { fr: 'Après un long voyage', en: 'After a long trip' },
          context: {
            fr: 'Noah arrive à l’hôtel. Écoute réservation, chambre, clé, puis remets dans l’ordre.',
            en: 'Noah arrives at the hotel. Listen for the booking, room, key, then put the lines in order.',
          },
          lines: [
            { speaker: 'Réceptionniste', fr: 'Bonjour, vous avez fait bon voyage ?', en: 'Hello, did you have a good trip?' },
            { speaker: 'Noah', fr: 'Oui, merci, mais je suis très fatigué. J’ai une réservation au nom de Costa.', en: 'Yes, thanks, but I’m very tired. I have a reservation in the name of Costa.' },
            { speaker: 'Réceptionniste', fr: 'Chambre 214. Voici la clé. Le petit-déjeuner est de 7 h à 10 h.', en: 'Room 214. Here’s the key. Breakfast is from 7 to 10.' },
            { speaker: 'Noah', fr: 'Parfait. À quelle heure est le dîner ? Il y a la climatisation ?', en: 'Perfect. What time is dinner? Is there air conditioning?' },
            { speaker: 'Réceptionniste', fr: 'Oui, et le Wi-Fi. Une question ? Le restaurant ferme à 22 h.', en: 'Yes, and Wi-Fi. Any questions? The restaurant closes at 10 p.m.' },
          ],
        },
      },
    ],
  },
  {
    id: 'train-et-avion',
    unitId: 8,
    number: 5,
    title: { fr: 'En train et en avion', en: 'By train and by plane' },
    summary: {
      fr: 'Choisir un billet, lire une carte d’embarquement, une valise perdue, demander de l’aide.',
      en: 'Choose a ticket, read a boarding pass, a lost suitcase, ask for help.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Aller simple', en: 'One way' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Je préfère le train de 7 h 25 parce qu’il est direct. Moi, je prends un trajet avec un changement : c’est moins cher. Sur la carte d’embarquement : compagnie, numéro de vol, nom, siège, date, origine, destination, heure d’embarquement, porte. Si la valise n’est pas au carrousel : déclaration de perte, numéro de vol, contenu, adresse de livraison.',
          en: 'I prefer the 7:25 train because it’s direct. I take a journey with a change: it’s cheaper. On the boarding pass: airline, flight number, name, seat, date, origin, destination, boarding time, gate. If the suitcase isn’t on the carousel: loss report, flight number, contents, delivery address.',
        },
      },
    ],
    activities: [
      {
        id: 'u8-train-quiz',
        type: 'quiz',
        title: { fr: 'Quel billet ?', en: 'Which ticket?' },
        intro: {
          fr: 'Paris → Bruxelles, jeudi. Direct 7 h 30–8 h 52 : 64 €. Avec correspondance 8 h 40–12 h 20 : 36 €. Quasi-direct 9 h 10–11 h 05, 12 min de correspondance : 54 €.',
          en: 'Paris → Brussels, Thursday. Direct 7:30–8:52: €64. With a connection 8:40–12:20: €36. Almost direct 9:10–11:05, 12-minute change: €54.',
        },
        questions: [
          {
            id: 'tr1',
            prompt: { fr: 'Le plus rapide, c’est…', en: 'The fastest is…' },
            options: [
              { fr: 'le direct du matin (64 €)', en: 'the morning direct (€64)' },
              { fr: 'la correspondance longue (36 €)', en: 'the long connection (€36)' },
              { fr: 'un vol transatlantique', en: 'a transatlantic flight' },
            ],
            answer: 0,
            explanation: { fr: 'Direct = moins de temps, souvent plus cher.', en: 'Direct = less time, often more expensive.' },
          },
          {
            id: 'tr2',
            prompt: { fr: '« Je prends le 36 € parce que c’est moins cher. » Tu justifies avec…', en: '“I’ll take the €36 one because it’s cheaper.” You justify with…' },
            options: [
              { fr: 'parce que + comparaison', en: 'parce que + comparison' },
              { fr: 'un article partitif seulement', en: 'only a partitive article' },
              { fr: 'un plat du jour', en: 'today’s special' },
            ],
            answer: 0,
            explanation: { fr: 'Prix, durée, correspondance : trois arguments.', en: 'Price, duration, connection: three arguments.' },
          },
        ],
      },
      {
        id: 'u8-carte-match',
        type: 'matching',
        title: { fr: 'Carte d’embarquement', en: 'Boarding pass' },
        pairs: [
          { id: 'bo1', left: 'TX 540', right: 'numéro du vol' },
          { id: 'bo2', left: 'Maya Costa', right: 'nom du passager' },
          { id: 'bo3', left: 'Paris → Montréal', right: 'origine et destination' },
          { id: 'bo4', left: 'siège 12A', right: 'numéro de siège' },
          { id: 'bo5', left: 'porte B23 · 10 h 15', right: 'porte et heure d’embarquement' },
          { id: 'bo6', left: 'Ciel Nord', right: 'compagnie aérienne' },
        ],
      },
      {
        id: 'u8-agence-match',
        type: 'matching',
        title: { fr: 'À l’agence de voyage', en: 'At the travel agency' },
        pairs: [
          { id: 'ag1', left: 'Pour quelle date ?', right: 'l’agent demande la date' },
          { id: 'ag2', left: 'Combien coûte le billet ?', right: 'le client demande le prix' },
          { id: 'ag3', left: 'Je vous fais la réservation.', right: 'l’agent confirme' },
          { id: 'ag4', left: 'Aller-retour ou aller simple ?', right: 'l’agent précise le type' },
          { id: 'ag5', left: 'Je voudrais des renseignements sur les vols.', right: 'le client demande des infos' },
          { id: 'ag6', left: 'Avec ou sans escale ?', right: 'on parle de correspondance' },
        ],
      },
      {
        id: 'u8-valise-dialogue',
        type: 'dialogue',
        title: { fr: 'Bagage perdu', en: 'Lost luggage' },
        dialogue: {
          id: 'bag',
          title: { fr: 'Au service clientèle', en: 'At customer service' },
          context: {
            fr: 'La valise de Lina n’est pas au carrousel. Écoute le vol et la solution, puis remets dans l’ordre.',
            en: 'Lina’s suitcase isn’t on the carousel. Listen for the flight and the solution, then put the lines in order.',
          },
          lines: [
            { speaker: 'Agent', fr: 'Bonjour, je peux vous aider ?', en: 'Hello, can I help you?' },
            { speaker: 'Lina', fr: 'Bonjour. J’ai voyagé sur le vol Ciel Nord CN 218, Lisbonne–Lyon, et ma valise est perdue. Elle n’est pas au carrousel.', en: 'Hello. I travelled on Ciel Nord flight CN 218, Lisbon–Lyon, and my suitcase is lost. It isn’t on the carousel.' },
            { speaker: 'Agent', fr: 'Je vois dans le système : elle est restée à Lisbonne. On va la mettre sur le prochain vol et vous la livrer demain. Quelle est votre adresse à Lyon ?', en: 'I can see in the system: it stayed in Lisbon. We’ll put it on the next flight and deliver it tomorrow. What’s your address in Lyon?' },
            { speaker: 'Lina', fr: 'Je vais rester chez une amie, 18 rue des Capucins.', en: 'I’ll stay at a friend’s, 18 rue des Capucins.' },
            { speaker: 'Agent', fr: 'D’accord. Complétez la déclaration. Si elle n’arrive pas dans le délai, vous pouvez demander un remboursement.', en: 'All right. Fill in the report. If it doesn’t arrive in time, you can ask for a refund.' },
          ],
        },
      },
      {
        id: 'u8-valise-quiz',
        type: 'quiz',
        title: { fr: 'Vrai ou faux ?', en: 'True or false?' },
        questions: [
          {
            id: 'v1',
            prompt: { fr: 'La valise est perdue parce que c’était un vol international.', en: 'The suitcase is lost because it was an international flight.' },
            options: [
              { fr: 'Faux : elle est restée à l’aéroport de départ, d’après le système', en: 'False: it stayed at the departure airport, according to the system' },
              { fr: 'Vrai : tous les vols internationaux perdent les valises', en: 'True: all international flights lose suitcases' },
              { fr: 'On ne peut pas le dire', en: 'You can’t say' },
            ],
            answer: 0,
            explanation: { fr: 'La cause n’est pas « international », c’est une erreur de transit.', en: 'The cause isn’t “international”; it’s a transfer error.' },
          },
          {
            id: 'v2',
            prompt: { fr: 'On peut souvent demander une compensation si la valise n’arrive pas dans le délai.', en: 'You can often ask for compensation if the suitcase doesn’t arrive in time.' },
            options: [
              { fr: 'Vrai, d’après l’agent', en: 'True, according to the agent' },
              { fr: 'Faux, jamais', en: 'False, never' },
              { fr: 'Seulement pour le camping', en: 'Only for camping' },
            ],
            answer: 0,
            explanation: { fr: 'Déclaration : vol, origine, destination, compagnie, contenu, nom.', en: 'Report: flight, origin, destination, airline, contents, name.' },
          },
          {
            id: 'v3',
            prompt: { fr: 'Trois solutions pratiques si la valise est perdue :', en: 'Three practical solutions if the suitcase is lost:' },
            options: [
              { fr: 'déclarer, acheter l’essentiel, appeler l’ami qui t’héberge', en: 'file a report, buy essentials, call the friend hosting you' },
              { fr: 'rentrer sans passeport', en: 'go home without a passport' },
              { fr: 'ignorer le guichet', en: 'ignore the desk' },
            ],
            answer: 0,
            explanation: { fr: 'Demander et proposer de l’aide : Merci pour votre aide !', en: 'Ask for and offer help: Thanks for your help!' },
          },
        ],
      },
    ],
  },
  {
    id: 'projet-voyage',
    unitId: 8,
    number: 6,
    title: { fr: 'Racontons un voyage', en: 'Let’s tell a trip' },
    summary: {
      fr: 'Une fiche : où, quand, météo, avec qui, impressions et conseils.',
      en: 'A sheet: where, when, weather, with whom, impressions and tips.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Le projet : présenter un voyage. Pays / ville, type (affaires, nature, plage, montagne), dates, météo, saison, seul(e) ou avec des amis, visa ou réservations. Impressions : C’était magnifique. Conseils : à faire absolument, à ne pas faire. On inverse les rôles : — Je suis déjà allé(e) là-bas, mais je n’ai pas visité les musées. — Ah, dommage ! C’était bien ?',
          en: 'The project: present a trip. Country / city, type (business, nature, beach, mountains), dates, weather, season, alone or with friends, visa or bookings. Impressions: It was wonderful. Tips: must-do, don’t-do. Swap roles: — I’ve already been there, but I didn’t visit the museums. — Ah, pity! Was it good?',
        },
      },
    ],
    activities: [
      {
        id: 'u8-fiche-match',
        type: 'matching',
        title: { fr: 'La fiche voyage', en: 'The trip sheet' },
        pairs: [
          { id: 'fi1', left: 'Pays / ville', right: 'la destination' },
          { id: 'fi2', left: 'Du … au …', right: 'les dates' },
          { id: 'fi3', left: 'Il a plu / il a fait très chaud', right: 'la météo' },
          { id: 'fi4', left: 'En famille / en couple / avec des amis', right: 'avec qui' },
          { id: 'fi5', left: 'Visa, réservations', right: 'à faire avant le départ' },
        ],
      },
      {
        id: 'u8-activites-match',
        type: 'matching',
        title: { fr: 'Qu’est-ce que vous avez visité ?', en: 'What did you visit?' },
        pairs: [
          { id: 'ac1', left: 'musées', right: 'visites culturelles' },
          { id: 'ac2', left: 'randonnées à pied ou à vélo', right: 'la nature' },
          { id: 'ac3', left: 'jardins et parcs', right: 'se promener en ville' },
          { id: 'ac4', left: 'restaurants', right: 'la gastronomie' },
        ],
      },
      {
        id: 'u8-projet-dialogue',
        type: 'dialogue',
        title: { fr: 'Présenter son voyage', en: 'Present your trip' },
        dialogue: {
          id: 'exp',
          title: { fr: 'Questions des camarades', en: 'Classmates’ questions' },
          context: {
            fr: 'Tom présente Belle-Île. Écoute où et comment c’était, puis remets dans l’ordre.',
            en: 'Tom presents Belle-Île. Listen for where and how it was, then put the lines in order.',
          },
          lines: [
            { speaker: 'Lina', fr: 'Tu es déjà allé à cet endroit ?', en: 'Have you already been to that place?' },
            { speaker: 'Tom', fr: 'Oui, à Belle-Île, en Bretagne. C’est une petite île. Il y a trois jours, je suis rentré.', en: 'Yes, to Belle-Île, in Brittany. It’s a small island. I got back three days ago.' },
            { speaker: 'Lina', fr: 'C’était comment ? Tu as visité les musées ?', en: 'How was it? Did you visit the museums?' },
            { speaker: 'Tom', fr: 'Les musées, non. Mais les criques, oui. C’était magnifique. Conseil : prends de la crème solaire.', en: 'The museums, no. But the coves, yes. It was wonderful. Tip: take sun cream.' },
          ],
        },
      },
    ],
  },
  {
    id: 'bilan',
    unitId: 8,
    number: 7,
    title: { fr: 'Bilan', en: 'Checkpoint' },
    summary: {
      fr: 'Temps, météo, comparaison, avion, hôtel, valise, passé composé.',
      en: 'Time, weather, comparison, plane, hotel, suitcase, passé composé.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Coche dans ta tête : je raconte le passé, je parle de projets, je donne mes impressions, je demande des infos, je déclare un bagage. Si une question bloque, retourne à la leçon.',
          en: 'Check in your head: I can tell the past, talk about plans, give impressions, ask for info, report luggage. If a question sticks, go back to the lesson.',
        },
      },
    ],
    activities: [
      {
        id: 'u8-bilan-gouts',
        type: 'matching',
        title: { fr: 'Maintenant je peux…', en: 'Now I can…' },
        pairs: [
          { id: 'n1', left: 'Je suis allé(e) au Cameroun avec ma famille.', right: 'raconter le passé' },
          { id: 'n2', left: 'Dans un an, je vais retourner en Italie.', right: 'parler de mes projets' },
          { id: 'n3', left: 'C’était extraordinaire.', right: 'donner mes impressions' },
          { id: 'n4', left: 'Je vais dormir chez mon ami.', right: 'donner une information' },
          { id: 'n5', left: 'Complétez la déclaration, s’il vous plaît.', right: 'demander / proposer de l’aide' },
          { id: 'n6', left: 'J’ai perdu ma valise le 17 novembre à 20 h.', right: 'déclarer une perte' },
        ],
      },
      {
        id: 'u8-pc-match',
        type: 'matching',
        title: { fr: 'Passé composé du voyage', en: 'Travel passé composé' },
        pairs: [
          { id: 'p1', left: 'Nous ___ (partir) en avion.', right: 'sommes partis' },
          { id: 'p2', left: 'Ma sœur ___ (venir) chez moi.', right: 'est venue' },
          { id: 'p3', left: 'Tu ___ (dormir) dans le train ?', right: 'as dormi' },
          { id: 'p4', left: 'Vous ___ (sortir) de l’avion.', right: 'êtes sortis' },
          { id: 'p5', left: 'Sonia ___ (mettre) son chapeau.', right: 'a mis' },
        ],
      },
      {
        id: 'u8-bilan-quiz',
        type: 'quiz',
        title: { fr: 'Checkpoint unité 8', en: 'Unit 8 checkpoint' },
        questions: [
          {
            id: 'x1',
            prompt: { fr: 'Athènes, le 10 août. Je suis en Grèce ___ une semaine. ___ deux jours, je suis allée à Zante. Je rentre ___ 3 jours. Les Grecs sont ___ !', en: 'Athens, 10 August. I’ve been in Greece ___ a week. ___ two days I went to Zante. I go home ___ 3 days. The Greeks are ___!' },
            options: [
              { fr: 'depuis · Il y a · dans · sympathiques', en: 'depuis · Il y a · dans · friendly' },
              { fr: 'dans · depuis · il y a · froid', en: 'dans · depuis · il y a · cold' },
              { fr: 'il y a · dans · depuis · salé', en: 'il y a · dans · depuis · salty' },
            ],
            answer: 0,
            explanation: { fr: 'Carte postale : depuis (durée), il y a (passé), dans (futur), un adjectif d’impression.', en: 'Postcard: depuis (duration), il y a (past), dans (future), an impression adjective.' },
          },
          {
            id: 'x2',
            prompt: { fr: 'Aéroport Marrakech / Paris (+ beau) → Marrakech est plus beau que Paris ? Non, on dit :', en: 'Marrakech airport / Paris (+ beautiful) → Marrakech is more beautiful than Paris? No, we say:' },
            options: [
              { fr: 'L’aéroport de Marrakech est plus beau que celui de Paris.', en: 'Marrakech airport is more beautiful than Paris’s.' },
              { fr: 'Marrakech est moins que Paris le train.', en: 'Marrakech is less than Paris the train.' },
              { fr: 'Parce que le dessert.', en: 'Because the dessert.' },
            ],
            answer: 0,
            explanation: { fr: 'Train / avion : l’avion est souvent plus confortable. Classe affaires est plus chère que la classe économique.', en: 'Train / plane: the plane is often more comfortable. Business class is more expensive than economy.' },
          },
          {
            id: 'x3',
            prompt: { fr: 'Vous voulez réserver une chambre. Première question typique :', en: 'You want to book a room. A typical first question:' },
            options: [
              { fr: 'Quelle est votre date d’arrivée ? Pour combien de personnes ?', en: 'What is your arrival date? For how many people?' },
              { fr: 'Vous aimez le bacon ?', en: 'Do you like bacon?' },
              { fr: 'C’est quel plat du jour ?', en: 'What’s today’s special?' },
            ],
            answer: 0,
            explanation: { fr: 'Destination, dates, adultes, chambres, motif (travail / loisirs).', en: 'Destination, dates, adults, rooms, reason (work / leisure).' },
          },
          {
            id: 'x4',
            prompt: { fr: 'Image : carrousel + valises. Mot :', en: 'Picture: carousel + suitcases. Word:' },
            options: [
              { fr: 'récupérer les bagages', en: 'collect the bags' },
              { fr: 'un apéritif', en: 'a pre-dinner drink' },
              { fr: 'un article partitif', en: 'a partitive article' },
            ],
            answer: 0,
            explanation: { fr: 'Porte d’embarquement, douane, enregistrement, carte d’embarquement, avion.', en: 'Boarding gate, customs, check-in, boarding pass, plane.' },
          },
        ],
      },
    ],
  },
  {
    id: 'delf-a1',
    unitId: 8,
    number: 8,
    title: { fr: 'Entraînement DELF A1', en: 'DELF A1 practice' },
    summary: {
      fr: 'Lire des petites annonces et un prospectus, comprendre un message, relier des situations : le geste de l’examen, textes originaux.',
      en: 'Read small ads and a flyer, understand a message, match situations: exam-style tasks, original texts.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Après l’unité 8, tu t’entraînes comme au DELF : compréhension écrite (annonces, expo), compréhension orale (ici, un message à lire / écouter), production : inviter par courriel. Ce ne sont pas les sujets du livre : mêmes compétences, textes nouveaux.',
          en: 'After unit 8 you practise DELF-style tasks: reading (ads, an exhibition), listening (here, a message to read / hear), writing: invite by email. These are not the book’s papers: same skills, new texts.',
        },
      },
    ],
    activities: [
      {
        id: 'u8-delf-annonces',
        type: 'quiz',
        title: { fr: 'Lire : petites annonces', en: 'Reading: small ads' },
        intro: {
          fr: 'Librairie Page claire cherche vendeur/vendeuse le week-end. Écrire à jobs@pageclaire.fr. Café des Quais cherche un serveur pour l’été. Appeler Léa au 06 12 34 56 78. Atelier danse cherche un professeur de salsa, contrat du 1er mars au 30 avril. Club junior cherche un animateur tennis pour les 8-12 ans. Envoyer un CV à sport@clubjunior.fr. Restaurant Sel cherche un cuisinier, 3 soirs par semaine, 11e arrondissement. Appeler Karim au 01 44 22 11 09.',
          en: 'Page claire bookshop is looking for a weekend sales assistant. Write to jobs@pageclaire.fr. Café des Quais is looking for a waiter for the summer. Call Léa on 06 12 34 56 78. Dance studio is looking for a salsa teacher, contract 1 March to 30 April. Junior club is looking for a tennis coach for 8–12 year-olds. Send a CV to sport@clubjunior.fr. Restaurant Sel is looking for a cook, 3 evenings a week, 11th arrondissement. Call Karim on 01 44 22 11 09.',
        },
        questions: [
          {
            id: 'd1',
            prompt: { fr: 'Quel restaurant propose un travail de cuisinier ?', en: 'Which restaurant offers a cook’s job?' },
            options: [
              { fr: 'Sel (appeler Karim)', en: 'Sel (call Karim)' },
              { fr: 'Café des Quais', en: 'Café des Quais' },
              { fr: 'Page claire', en: 'Page claire' },
            ],
            answer: 0,
            explanation: { fr: 'On relie le métier et le lieu.', en: 'Match the job and the place.' },
          },
          {
            id: 'd2',
            prompt: { fr: 'Quel lieu offre un travail le week-end ?', en: 'Which place offers weekend work?' },
            options: [
              { fr: 'la librairie Page claire', en: 'Page claire bookshop' },
              { fr: 'l’atelier danse', en: 'the dance studio' },
              { fr: 'le club junior', en: 'the junior club' },
            ],
            answer: 0,
            explanation: { fr: 'Week-end = samedi et dimanche.', en: 'Weekend = Saturday and Sunday.' },
          },
          {
            id: 'd3',
            prompt: { fr: 'Pour travailler avec des jeunes au tennis, vous devez…', en: 'To work with young people in tennis, you must…' },
            options: [
              { fr: 'envoyer un CV', en: 'send a CV' },
              { fr: 'appeler Léa seulement', en: 'only call Léa' },
              { fr: 'écrire à jobs@pageclaire.fr', en: 'write to jobs@pageclaire.fr' },
            ],
            answer: 0,
            explanation: { fr: 'Animateur tennis, 8-12 ans.', en: 'Tennis coach, ages 8–12.' },
          },
          {
            id: 'd4',
            prompt: { fr: 'Vous cherchez un emploi de serveur pour l’été. Vous…', en: 'You’re looking for a waiter job for the summer. You…' },
            options: [
              { fr: 'appelez Léa au 06 12 34 56 78', en: 'call Léa on 06 12 34 56 78' },
              { fr: 'appelez Karim', en: 'call Karim' },
              { fr: 'écrivez à sport@clubjunior.fr', en: 'write to sport@clubjunior.fr' },
            ],
            answer: 0,
            explanation: { fr: 'Café des Quais, été.', en: 'Café des Quais, summer.' },
          },
          {
            id: 'd5',
            prompt: { fr: 'L’atelier danse propose un contrat de…', en: 'The dance studio offers a contract of…' },
            options: [
              { fr: 'deux mois (mars–avril)', en: 'two months (March–April)' },
              { fr: 'un week-end', en: 'one weekend' },
              { fr: 'trois soirs seulement', en: 'only three evenings' },
            ],
            answer: 0,
            explanation: { fr: 'Du 1er mars au 30 avril.', en: 'From 1 March to 30 April.' },
          },
        ],
      },
      {
        id: 'u8-delf-expo',
        type: 'quiz',
        title: { fr: 'Lire : un prospectus', en: 'Reading: a flyer' },
        intro: {
          fr: 'Expo « Voix du large », médiathèque de Nantes, du 5 au 20 octobre. Entrée libre. On célèbre 20 ans d’écriture de Mina Traoré, autrice née à Bamako, qui a vécu à Nantes. Au programme : lecture mercredi 19 h, concert samedi 16 h. Projection vendredi 20 h 30, salle 2. Pas besoin de s’inscrire.',
          en: 'Exhibition “Voix du large”, Nantes media library, 5–20 October. Free entry. Celebrating 20 years of writing by Mina Traoré, an author born in Bamako who lived in Nantes. Programme: reading Wednesday 7 p.m., concert Saturday 4 p.m. Screening Friday 8:30 p.m., room 2. No need to register.',
        },
        questions: [
          {
            id: 'e1',
            prompt: { fr: 'Dans quelle ville se passe cette exposition ?', en: 'In which city is this exhibition?' },
            options: [
              { fr: 'Nantes', en: 'Nantes' },
              { fr: 'Bamako', en: 'Bamako' },
              { fr: 'Montréal', en: 'Montreal' },
            ],
            answer: 0,
            explanation: { fr: 'Médiathèque de Nantes.', en: 'Nantes media library.' },
          },
          {
            id: 'e2',
            prompt: { fr: 'Mina Traoré est…', en: 'Mina Traoré is…' },
            options: [
              { fr: 'autrice', en: 'an author' },
              { fr: 'pilote de ligne', en: 'an airline pilot' },
              { fr: 'serveuse au Café des Quais', en: 'a waitress at Café des Quais' },
            ],
            answer: 0,
            explanation: { fr: 'On célèbre son écriture.', en: 'They are celebrating her writing.' },
          },
          {
            id: 'e3',
            prompt: { fr: 'À quelle heure commence la projection ?', en: 'What time does the screening start?' },
            options: [
              { fr: '20 h 30', en: '8:30 p.m.' },
              { fr: '19 h', en: '7 p.m.' },
              { fr: '16 h', en: '4 p.m.' },
            ],
            answer: 0,
            explanation: { fr: 'Vendredi, salle 2.', en: 'Friday, room 2.' },
          },
          {
            id: 'e4',
            prompt: { fr: 'Pour visiter l’exposition…', en: 'To visit the exhibition…' },
            options: [
              { fr: 'il ne faut pas s’inscrire, l’entrée est libre', en: 'you don’t need to register; entry is free' },
              { fr: 'il faut payer un billet en ligne', en: 'you must buy a ticket online' },
              { fr: 'il faut un passeport', en: 'you need a passport' },
            ],
            answer: 0,
            explanation: { fr: 'Entrée libre, pas d’inscription.', en: 'Free entry, no registration.' },
          },
        ],
      },
      {
        id: 'u8-delf-message',
        type: 'quiz',
        title: { fr: 'Comprendre un message', en: 'Understand a message' },
        intro: {
          fr: 'Répondeur de Maya : « Salut, c’est Tom. Samedi on fait une soirée chez moi, pas vendredi. Tu n’as pas besoin de réserver. J’achète le gâteau, toi tu apportes une salade. On se retrouve à 19 heures. Bisous ! »',
          en: 'Maya’s voicemail: “Hi, it’s Tom. Saturday we’re having a party at my place, not Friday. You don’t need to book. I’ll buy the cake, you bring a salad. We meet at 7 p.m. Kisses!”',
        },
        questions: [
          {
            id: 'm1',
            prompt: { fr: 'C’est le programme de la soirée de…', en: 'It’s the plan for the party on…' },
            options: [
              { fr: 'samedi', en: 'Saturday' },
              { fr: 'jeudi', en: 'Thursday' },
              { fr: 'vendredi', en: 'Friday' },
            ],
            answer: 0,
            explanation: { fr: 'Samedi, pas vendredi.', en: 'Saturday, not Friday.' },
          },
          {
            id: 'm2',
            prompt: { fr: 'Qu’est-ce que Maya doit faire ?', en: 'What does Maya have to do?' },
            options: [
              { fr: 'apporter une salade (pas commander le gâteau, pas réserver)', en: 'bring a salad (not order the cake, not book)' },
              { fr: 'faire la réservation', en: 'make the booking' },
              { fr: 'acheter le gâteau', en: 'buy the cake' },
            ],
            answer: 0,
            explanation: { fr: 'Tom achète le gâteau.', en: 'Tom buys the cake.' },
          },
          {
            id: 'm3',
            prompt: { fr: 'Rendez-vous à…', en: 'Meet at…' },
            options: [
              { fr: '19 h', en: '7 p.m.' },
              { fr: '9 h', en: '9 a.m.' },
              { fr: '22 h', en: '10 p.m.' },
            ],
            answer: 0,
            explanation: { fr: 'On se retrouve à 19 heures.', en: 'We meet at 7 p.m.' },
          },
        ],
      },
      {
        id: 'u8-delf-situations',
        type: 'matching',
        title: { fr: 'Associer la situation', en: 'Match the situation' },
        pairs: [
          { id: 's1', left: 'On commande un café au comptoir.', right: 'au café' },
          { id: 's2', left: 'On prend une clé et on donne son nom.', right: 'à la réception de l’hôtel' },
          { id: 's3', left: 'On signe et on récupère un colis.', right: 'à la livraison / au bureau de poste' },
          { id: 's4', left: 'On essaie un pull dans une cabine.', right: 'dans un magasin de vêtements' },
          { id: 's5', left: 'On paie un livre à la caisse.', right: 'dans une librairie' },
        ],
      },
      {
        id: 'u8-delf-mail',
        type: 'quiz',
        title: { fr: 'Écrire : inviter', en: 'Writing: invite' },
        intro: {
          fr: 'Tu as trouvé un événement. Tu écris un courriel à un(e) ami(e) (40–60 mots) : jour, lieu, heure, et tu invites.',
          en: 'You found an event. You write an email to a friend (40–60 words): day, place, time, and you invite them.',
        },
        questions: [
          {
            id: 'w1',
            prompt: { fr: 'Un bon courriel A1 contient surtout…', en: 'A good A1 email mainly contains…' },
            options: [
              { fr: 'salut + jour + lieu + heure + Ça te dit de venir ?', en: 'hi + day + place + time + Want to come?' },
              { fr: 'seulement un numéro de vol', en: 'only a flight number' },
              { fr: 'une recette de 12 étapes', en: 'a 12-step recipe' },
            ],
            answer: 0,
            explanation: { fr: 'Exemple : Samedi 16 h, médiathèque de Nantes, expo Voix du large. Tu viens ?', en: 'Example: Saturday 4 p.m., Nantes media library, Voix du large exhibition. Are you coming?' },
          },
        ],
      },
    ],
  },
]
