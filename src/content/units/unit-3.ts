import type { Lesson } from '@/types/course'

export const unit3Lessons: Lesson[] = [
  {
    id: 'ouverture',
    unitId: 3,
    number: 1,
    title: { fr: 'J’adore ma ville', en: 'I love my city' },
    summary: {
      fr: 'Montréal, Kinshasa, Paris, Casablanca… Où habites-tu ? Qu’est-ce qu’il y a dans ta ville, dans ton quartier ?',
      en: 'Montreal, Kinshasa, Paris, Casablanca… Where do you live? What’s in your city, in your neighbourhood?',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Une ville, des quartiers', en: 'A city, neighbourhoods' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Montréal est une ville francophone du Québec, au Canada. Comme beaucoup de grandes villes, elle a de nombreux quartiers. Dans cette unité, tu décris une ville avec il y a / il n’y a pas, tu parles de tes goûts, de ta journée et des transports.',
          en: 'Montreal is a French-speaking city in Quebec, Canada. Like many big cities, it has many neighbourhoods. In this unit you describe a city with il y a / il n’y a pas, talk about likes, your day, and transport.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'Vous habitez où ?', en: 'Where do you live?' },
          { fr: 'Qu’est-ce qu’il y a dans votre quartier ?', en: 'What’s in your neighbourhood?' },
          { fr: 'J’adore ma ville. Je n’aime pas ce quartier.', en: 'I love my city. I don’t like this neighbourhood.' },
        ],
      },
    ],
    activities: [
      {
        id: 'u3-open-quiz',
        type: 'quiz',
        title: { fr: 'Ta ville, ton quartier', en: 'Your city, your neighbourhood' },
        questions: [
          {
            id: 'o1',
            prompt: { fr: 'Montréal, c’est…', en: 'Montreal is…' },
            options: [
              { fr: 'une ville francophone du Québec', en: 'a French-speaking city in Quebec' },
              { fr: 'la capitale de la Belgique', en: 'the capital of Belgium' },
              { fr: 'un moyen de transport', en: 'a means of transport' },
            ],
            answer: 0,
            explanation: { fr: 'Montréal est au Québec, au Canada. Le français y est une langue officielle.', en: 'Montreal is in Quebec, Canada. French is an official language there.' },
          },
          {
            id: 'o2',
            prompt: { fr: 'Pour dire ce qui existe dans un lieu :', en: 'To say what exists in a place:' },
            options: [
              { fr: 'Il y a un parc.', en: 'There is a park.' },
              { fr: 'Je suis un parc.', en: 'I am a park.' },
              { fr: 'Ouvrez le parc seulement.', en: 'only Open the park.' },
            ],
            answer: 0,
            explanation: { fr: 'Il y a = il existe. Le contraire : il n’y a pas de…', en: 'Il y a = there is/are. The opposite: il n’y a pas de…' },
          },
          {
            id: 'o3',
            prompt: { fr: 'Dans cette unité, tu vas surtout…', en: 'In this unit you will mainly…' },
            options: [
              { fr: 'décrire des lieux et parler des transports', en: 'describe places and talk about transport' },
              { fr: 'apprendre seulement le passé composé', en: 'learn only the passé composé' },
              { fr: 'conjuguer avoir uniquement', en: 'only conjugate avoir' },
            ],
            answer: 0,
            explanation: { fr: 'Ville, quartier, goûts, journée, impératif, vélo / métro / bus.', en: 'City, neighbourhood, likes, daily routine, imperative, bike / metro / bus.' },
          },
        ],
      },
    ],
  },
  {
    id: 'villes-francophones',
    unitId: 3,
    number: 2,
    title: { fr: 'À la découverte des villes francophones', en: 'Discovering Francophone cities' },
    summary: {
      fr: 'Il y a, la négation, les lettres muettes, et quelques grandes villes : Kinshasa, Paris, Casablanca.',
      en: 'Il y a, negation, silent letters, and a few big cities: Kinshasa, Paris, Casablanca.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'De Kinshasa à Casablanca', en: 'From Kinshasa to Casablanca' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Kinshasa est la capitale de la République démocratique du Congo : au centre-ville, il y a des immeubles, un grand marché, des églises et des mosquées. Paris, capitale de la France, a des arrondissements, une mairie, des monuments. Casablanca, au Maroc, est une ville sur l’Atlantique : il y a des hôtels, des restaurants, des cafés, et une grande mosquée.',
          en: 'Kinshasa is the capital of the Democratic Republic of the Congo: downtown there are buildings, a big market, churches and mosques. Paris, capital of France, has arrondissements, a city hall, monuments. Casablanca, in Morocco, is a city on the Atlantic: there are hotels, restaurants, cafés, and a large mosque.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Il y a', en: 'Il y a' },
        text: {
          fr: 'Il y a = il existe. À Paris, il y a la tour Eiffel. Le contraire : il n’y a pas de / d’. Il y a un musée. → Il n’y a pas de musée.',
          en: 'Il y a = there is / there are. In Paris there is the Eiffel Tower. The opposite: il n’y a pas de / d’. There is a museum. → There is no museum.',
        },
      },
      {
        type: 'note',
        title: { fr: 'La négation', en: 'Negation' },
        text: {
          fr: 'Deux morceaux : ne (n’ devant voyelle ou h muet) + verbe + pas. J’aime mon quartier. → Je n’aime pas ce quartier. À la forme négative, un / une / des deviennent de / d’.',
          en: 'Two pieces: ne (n’ before a vowel or silent h) + verb + pas. I like my neighbourhood. → I don’t like this neighbourhood. In the negative, un / une / des become de / d’.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Les lettres muettes', en: 'Silent letters' },
        text: {
          fr: 'Beaucoup de lettres finales ne se prononcent pas : le s de Paris, le e de ville, souvent le t de restaurant. Lis à voix haute : Je viens de Bruxelles. Tu vas à Rabat ?',
          en: 'Many final letters are not pronounced: the s in Paris, the e in ville, often the t in restaurant. Read aloud: Je viens de Bruxelles. Tu vas à Rabat?',
        },
      },
    ],
    activities: [
      {
        id: 'u3-lieux-cards',
        type: 'flashcards',
        title: { fr: 'Les lieux de la ville', en: 'Places in the city' },
        items: [
          { id: 'mairie', fr: 'une mairie', en: 'a city hall' },
          { id: 'comm', fr: 'un commissariat', en: 'a police station' },
          { id: 'egl', fr: 'une église', en: 'a church' },
          { id: 'mos', fr: 'une mosquée', en: 'a mosque' },
          { id: 'mar', fr: 'un marché', en: 'a market' },
          { id: 'mon', fr: 'un monument', en: 'a monument' },
          { id: 'jar', fr: 'un jardin', en: 'a garden' },
          { id: 'imm', fr: 'un immeuble', en: 'a building' },
          { id: 'hot', fr: 'un hôtel', en: 'a hotel' },
          { id: 'caf', fr: 'un café', en: 'a café' },
        ],
      },
      {
        id: 'u3-villes-quiz',
        type: 'quiz',
        title: { fr: 'Il y a… dans cette ville ?', en: 'Is there… in this city?' },
        questions: [
          {
            id: 'v1',
            prompt: { fr: 'Kinshasa, c’est…', en: 'Kinshasa is…' },
            options: [
              { fr: 'la capitale de la RDC', en: 'the capital of the DRC' },
              { fr: 'un quartier de Bruxelles seulement', en: 'only a neighbourhood in Brussels' },
              { fr: 'un tramway', en: 'a tram' },
            ],
            answer: 0,
            explanation: { fr: 'Kinshasa est la capitale de la République démocratique du Congo.', en: 'Kinshasa is the capital of the Democratic Republic of the Congo.' },
          },
          {
            id: 'v2',
            prompt: { fr: 'À Paris, il y a…', en: 'In Paris there is…' },
            options: [
              { fr: 'des arrondissements et des monuments', en: 'arrondissements and monuments' },
              { fr: 'un océan au centre-ville', en: 'an ocean downtown' },
              { fr: 'la mosquée Hassan-II', en: 'the Hassan II Mosque' },
            ],
            answer: 0,
            explanation: { fr: 'Paris : mairie, commissariat, tour Eiffel, musées… La mosquée Hassan-II est à Casablanca.', en: 'Paris: city hall, police station, Eiffel Tower, museums… The Hassan II Mosque is in Casablanca.' },
          },
          {
            id: 'v3',
            prompt: { fr: 'Casablanca est…', en: 'Casablanca is…' },
            options: [
              { fr: 'une grande ville au Maroc, sur l’Atlantique', en: 'a large city in Morocco, on the Atlantic' },
              { fr: 'la capitale du Canada', en: 'the capital of Canada' },
              { fr: 'un jardin à Kinshasa', en: 'a garden in Kinshasa' },
            ],
            answer: 0,
            explanation: { fr: 'Ville marocaine : hôtels, restaurants, cafés, une grande mosquée.', en: 'A Moroccan city: hotels, restaurants, cafés, a large mosque.' },
          },
          {
            id: 'v4',
            prompt: { fr: '« Dans ma ville, il y a des églises et un hôtel de glace. » Quelle ville ?', en: '“In my city there are churches and an ice hotel.” Which city?' },
            options: [
              { fr: 'Québec (devinette possible)', en: 'Quebec City (a possible riddle)' },
              { fr: 'Casablanca', en: 'Casablanca' },
              { fr: 'un métro', en: 'a metro' },
            ],
            answer: 0,
            explanation: { fr: 'On décrit avec il y a, puis on fait deviner le nom.', en: 'You describe with il y a, then people guess the name.' },
          },
        ],
      },
      {
        id: 'u3-negation-quiz',
        type: 'quiz',
        title: { fr: 'Le contraire : ne … pas', en: 'The opposite: ne … pas' },
        questions: [
          {
            id: 'n1',
            prompt: { fr: 'Elle est au centre-ville. →', en: 'She is downtown. →' },
            options: [
              { fr: 'Elle n’est pas au centre-ville.', en: 'She is not downtown.' },
              { fr: 'Elle ne pas est au centre-ville.', en: 'Elle ne pas est au centre-ville.' },
              { fr: 'Elle est ne pas centre.', en: 'Elle est ne pas centre.' },
            ],
            answer: 0,
            explanation: { fr: 'ne + verbe + pas. Devant voyelle : n’est.', en: 'ne + verb + pas. Before a vowel: n’est.' },
          },
          {
            id: 'n2',
            prompt: { fr: 'Il y a un musée. →', en: 'There is a museum. →' },
            options: [
              { fr: 'Il n’y a pas de musée.', en: 'There is no museum.' },
              { fr: 'Il n’y a pas un musée. (moins naturel ici)', en: 'Il n’y a pas un musée (less natural here)' },
              { fr: 'Il y a ne pas musée.', en: 'Il y a ne pas musée.' },
            ],
            answer: 0,
            explanation: { fr: 'un / une / des → de / d’ à la négation : pas de musée.', en: 'un / une / des → de / d’ in the negative: pas de musée.' },
          },
          {
            id: 'n3',
            prompt: { fr: 'J’aime ce quartier. →', en: 'I like this neighbourhood. →' },
            options: [
              { fr: 'Je n’aime pas ce quartier.', en: 'I don’t like this neighbourhood.' },
              { fr: 'Je ne aime pas ce quartier.', en: 'Je ne aime pas ce quartier.' },
              { fr: 'J’aime ne pas quartier.', en: 'J’aime ne pas quartier.' },
            ],
            answer: 0,
            explanation: { fr: 'Devant voyelle : n’aime. Adorer = aimer beaucoup. Ne pas aimer = le contraire.', en: 'Before a vowel: n’aime. Adorer = like a lot. Ne pas aimer = the opposite.' },
          },
          {
            id: 'n4',
            prompt: { fr: 'Combien de parties dans la négation ?', en: 'How many parts in the negation?' },
            options: [
              { fr: 'deux : ne (n’) et pas', en: 'two: ne (n’) and pas' },
              { fr: 'une seulement : pas', en: 'only one: pas' },
              { fr: 'quatre toujours', en: 'always four' },
            ],
            answer: 0,
            explanation: { fr: 'À l’écrit : ne … pas. À l’oral, ne disparaît souvent : J’aime pas cette ville.', en: 'In writing: ne … pas. In speech, ne often drops: J’aime pas cette ville.' },
          },
        ],
      },
      {
        id: 'u3-muettes-listen',
        type: 'listen',
        title: { fr: 'Lettres muettes', en: 'Silent letters' },
        intro: {
          fr: 'Écoute et répète. Ne prononce pas le s de Paris, le e final de ville, souvent le t de restaurant.',
          en: 'Listen and repeat. Do not pronounce the s in Paris, the final e in ville, often the t in restaurant.',
        },
        items: [
          { id: 'm1', fr: 'Paris', en: 'silent s' },
          { id: 'm2', fr: 'ville', en: 'silent e' },
          { id: 'm3', fr: 'Bruxelles', en: 'silent letters at the end' },
          { id: 'm4', fr: 'Strasbourg', en: 'final letters often quiet' },
          { id: 'm5', fr: 'Je viens de Bruxelles. Tu vas à Rabat ?', en: 'read the whole sentence' },
        ],
      },
      {
        id: 'u3-affiche-match',
        type: 'matching',
        title: { fr: 'Quelle ville ?', en: 'Which city?' },
        pairs: [
          { id: 'c1', left: 'capitale de la France, tour Eiffel', right: 'Paris' },
          { id: 'c2', left: 'capitale de la RDC, grand marché', right: 'Kinshasa' },
          { id: 'c3', left: 'Maroc, Atlantique, grande mosquée', right: 'Casablanca' },
          { id: 'c4', left: 'Québec, Canada, beaucoup de quartiers', right: 'Montréal' },
          { id: 'c5', left: 'Belgique, quartiers, frites et bandes dessinées', right: 'Bruxelles' },
        ],
      },
    ],
  },
  {
    id: 'vie-de-quartier',
    unitId: 3,
    number: 3,
    title: { fr: 'Vie de quartier', en: 'Neighbourhood life' },
    summary: {
      fr: 'Commerces et transports, aimer / adorer, qu’est-ce que c’est ?, ici et là.',
      en: 'Shops and transport, aimer / adorer, qu’est-ce que c’est?, ici and là.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Ici, c’est la gare', en: 'Here, this is the station' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Dans un quartier, il y a souvent des commerces (épicerie, marché, cafés, bars) et des services (poste, banque, école). Il y a aussi des transports : arrêt de bus, métro, gare. On classe : commerces d’un côté, transports de l’autre. Et on dit ce qu’on aime.',
          en: 'In a neighbourhood there are often shops (grocer, market, cafés, bars) and services (post office, bank, school). There is also transport: bus stop, metro, station. You sort: shops on one side, transport on the other. And you say what you like.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Aimer et adorer', en: 'Aimer and adorer' },
        text: {
          fr: 'Aimer = goûter positif. Adorer = aimer beaucoup. Le contraire : ne pas aimer. J’adore le cinéma. Je n’aime pas les musées. À l’oral : J’aime pas cette ville.',
          en: 'Aimer = like. Adorer = love / like a lot. The opposite: ne pas aimer. I love cinema. I don’t like museums. In speech: J’aime pas cette ville.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Qu’est-ce que c’est ? Ici et là', en: 'What is it? Here and there' },
        text: {
          fr: 'Question : Une église, qu’est-ce que c’est ? Réponse : Une église, c’est un monument. Ici = très près de la personne qui parle. Là = plus loin. J’habite ici. Tu habites là.',
          en: 'Question: A church, what is that? Answer: A church is a monument. Ici = very close to the speaker. Là = further away. I live here. You live there.',
        },
      },
    ],
    activities: [
      {
        id: 'u3-quartier-cards',
        type: 'flashcards',
        title: { fr: 'Le quartier au quotidien', en: 'The neighbourhood day to day' },
        items: [
          { id: 'epi', fr: 'une épicerie', en: 'a grocery shop' },
          { id: 'poste', fr: 'un bureau de poste', en: 'a post office' },
          { id: 'banq', fr: 'une banque', en: 'a bank' },
          { id: 'super', fr: 'un supermarché', en: 'a supermarket' },
          { id: 'biblio', fr: 'une bibliothèque', en: 'a library' },
          { id: 'media', fr: 'une médiathèque', en: 'a media library' },
          { id: 'ecole', fr: 'une école', en: 'a school' },
          { id: 'cine', fr: 'un cinéma', en: 'a cinema' },
          { id: 'gare', fr: 'une gare', en: 'a train station' },
          { id: 'arret', fr: 'un arrêt de bus', en: 'a bus stop' },
        ],
      },
      {
        id: 'u3-classes-match',
        type: 'matching',
        title: { fr: 'Commerces ou transports ?', en: 'Shops or transport?' },
        pairs: [
          { id: 'cl1', left: 'une épicerie', right: 'un commerce' },
          { id: 'cl2', left: 'un café', right: 'un commerce' },
          { id: 'cl3', left: 'un supermarché', right: 'un commerce' },
          { id: 'cl4', left: 'un arrêt de bus', right: 'un transport' },
          { id: 'cl5', left: 'une gare', right: 'un transport' },
          { id: 'cl6', left: 'un métro', right: 'un transport' },
        ],
      },
      {
        id: 'u3-logos-match',
        type: 'matching',
        title: { fr: 'Quel lieu ?', en: 'Which place?' },
        pairs: [
          { id: 'lo1', left: 'on envoie une lettre', right: 'un bureau de poste' },
          { id: 'lo2', left: 'on retire de l’argent', right: 'une banque' },
          { id: 'lo3', left: 'on fait les courses', right: 'un supermarché' },
          { id: 'lo4', left: 'on étudie', right: 'une université' },
          { id: 'lo5', left: 'on signale un problème', right: 'un commissariat' },
        ],
      },
      {
        id: 'u3-cest-quiz',
        type: 'quiz',
        title: { fr: 'Qu’est-ce que c’est ? Ici ou là ?', en: 'What is it? Here or there?' },
        questions: [
          {
            id: 'q1',
            prompt: { fr: 'Ici, on prend le train. →', en: 'Here, you take the train. →' },
            options: [
              { fr: 'Une gare, qu’est-ce que c’est ?', en: 'A station, what is that?' },
              { fr: 'Une épicerie, qu’est-ce que c’est ?', en: 'A grocer’s, what is that?' },
              { fr: 'Une mosquée seulement', en: 'only a mosque' },
            ],
            answer: 0,
            explanation: { fr: 'On prend le train à la gare.', en: 'You take the train at the station.' },
          },
          {
            id: 'q2',
            prompt: { fr: 'Ici, on achète à manger.', en: 'Here, you buy food.' },
            options: [
              { fr: 'Une épicerie, qu’est-ce que c’est ?', en: 'A grocer’s, what is that?' },
              { fr: 'Une gare, qu’est-ce que c’est ?', en: 'A station, what is that?' },
              { fr: 'Un jardin botanique', en: 'A botanical garden' },
            ],
            answer: 0,
            explanation: { fr: 'Épicerie, marché, supermarché : on achète à manger.', en: 'Grocer, market, supermarket: you buy food.' },
          },
          {
            id: 'q3',
            prompt: { fr: 'Ici, on poste une lettre.', en: 'Here, you post a letter.' },
            options: [
              { fr: 'Un bureau de poste', en: 'A post office' },
              { fr: 'Un cinéma', en: 'A cinema' },
              { fr: 'Un tramway', en: 'A tram' },
            ],
            answer: 0,
            explanation: { fr: 'La poste : on envoie le courrier.', en: 'The post office: you send mail.' },
          },
          {
            id: 'q4',
            prompt: { fr: 'Le lieu tout près de toi, tu dis…', en: 'The place right next to you, you say…' },
            options: [
              { fr: 'ici', en: 'ici' },
              { fr: 'là (plus loin)', en: 'là (further)' },
              { fr: 'quand', en: 'quand' },
            ],
            answer: 0,
            explanation: { fr: 'Ici = proche. Là = plus loin. — Qu’est-ce que c’est ? — Ici, c’est la mairie. Et là ? — Là, c’est la gare.', en: 'Ici = close. Là = further. — What is that? — Here, that’s city hall. And there? — There, that’s the station.' },
          },
          {
            id: 'q5',
            prompt: { fr: 'Pour une petite annonce de quartier, tu peux écrire :', en: 'For a short neighbourhood ad, you can write:' },
            options: [
              { fr: 'Il y a des magasins. J’adore l’épicerie. Il n’y a pas de bus.', en: 'There are shops. I love the grocer’s. There is no bus.' },
              { fr: 'Je suis 53 ans le bus.', en: 'I am 53 years the bus.' },
              { fr: 'Pourriez-vous épeler le métro ?', en: 'Could you spell the metro?' },
            ],
            answer: 0,
            explanation: { fr: 'Il y a / il n’y a pas + un goût (j’adore / je n’aime pas).', en: 'Il y a / il n’y a pas + a like (j’adore / je n’aime pas).' },
          },
        ],
      },
      {
        id: 'u3-gouts-dialogue',
        type: 'dialogue',
        title: { fr: 'J’adore mon quartier', en: 'I love my neighbourhood' },
        dialogue: {
          id: 'quartier',
          title: { fr: 'Pour et contre', en: 'For and against' },
          context: {
            fr: 'Deux voisines parlent de leur quartier. Écoute les goûts, puis remets les répliques dans l’ordre.',
            en: 'Two neighbours talk about their area. Listen for likes and dislikes, then put the lines in order.',
          },
          lines: [
            { speaker: 'Nadia', fr: 'J’adore ce quartier. Il y a un marché et des cafés.', en: 'I love this neighbourhood. There is a market and cafés.' },
            { speaker: 'Inès', fr: 'Moi, je n’aime pas trop. Il n’y a pas de parc, et il y a beaucoup de voitures.', en: 'Me, I don’t really like it. There is no park, and there are a lot of cars.' },
            { speaker: 'Nadia', fr: 'Oui, mais il y a une médiathèque. J’adore lire ici.', en: 'Yes, but there is a media library. I love reading here.' },
            { speaker: 'Inès', fr: 'D’accord. Et là, c’est la gare, non ?', en: 'Fair enough. And there, that’s the station, right?' },
            { speaker: 'Nadia', fr: 'Ici, c’est la poste. Là, c’est la gare.', en: 'Here, that’s the post office. There, that’s the station.' },
          ],
        },
      },
    ],
  },
  {
    id: 'journee-en-ville',
    unitId: 3,
    number: 4,
    title: { fr: 'Une journée en ville', en: 'A day in town' },
    summary: {
      fr: 'Faire, aller, prendre ; les prépositions de lieu ; les voyelles [y], [u], [o], [i].',
      en: 'Faire, aller, prendre; place prepositions; the vowels [y], [u], [o], [i].',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Il va au cinéma', en: 'He’s going to the cinema' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Dans une journée : on va au cinéma, on fait les courses, on prend les transports, on fait du sport, on dîne avec des amis. Trois verbes irréguliers reviennent tout le temps : faire, aller, prendre.',
          en: 'In a day: you go to the cinema, you do the shopping, you take public transport, you work out, you have dinner with friends. Three irregular verbs come back all the time: faire, aller, prendre.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Faire, aller, prendre', en: 'Faire, aller, prendre' },
        text: {
          fr: 'Faire : je fais, tu fais, il/elle/on fait, nous faisons, vous faites, ils/elles font. Aller : je vais, tu vas, il va, nous allons, vous allez, ils vont. Prendre : je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent.',
          en: 'Faire: je fais, tu fais, il/elle/on fait, nous faisons, vous faites, ils/elles font. Aller: je vais, tu vas, il va, nous allons, vous allez, ils vont. Prendre: je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Les prépositions de lieu', en: 'Place prepositions' },
        text: {
          fr: 'dans, sur, sous, devant, derrière, entre, à côté de, en face de, loin de, près de. Je suis à côté de la fenêtre. Le magasin est entre la banque et le café. L’université se trouve près du parc.',
          en: 'dans, sur, sous, devant, derrière, entre, à côté de, en face de, loin de, près de. I’m next to the window. The shop is between the bank and the café. The university is near the park.',
        },
      },
    ],
    activities: [
      {
        id: 'u3-verbes-cards',
        type: 'flashcards',
        title: { fr: 'Faire, aller, prendre', en: 'Faire, aller, prendre' },
        items: [
          { id: 'f1', fr: 'faire les courses', en: 'to do the shopping' },
          { id: 'f2', fr: 'faire du sport', en: 'to work out / play sport' },
          { id: 'f3', fr: 'faire de la musique', en: 'to play music' },
          { id: 'a1', fr: 'aller au cinéma', en: 'to go to the cinema' },
          { id: 'a2', fr: 'aller à l’université', en: 'to go to university' },
          { id: 'p1', fr: 'prendre les transports', en: 'to take public transport' },
          { id: 'p2', fr: 'prendre un café', en: 'to have a coffee' },
          { id: 'd1', fr: 'dîner avec des amis', en: 'to have dinner with friends' },
        ],
      },
      {
        id: 'u3-fap-quiz',
        type: 'quiz',
        title: { fr: 'Tu fais, tu vas, tu prends', en: 'You do, you go, you take' },
        questions: [
          {
            id: 'fap1',
            prompt: { fr: 'Tu ___ les courses.', en: 'You ___ the shopping.' },
            options: [
              { fr: 'fais', en: 'fais' },
              { fr: 'vas', en: 'vas' },
              { fr: 'prends', en: 'prends' },
            ],
            answer: 0,
            explanation: { fr: 'faire les courses.', en: 'faire les courses.' },
          },
          {
            id: 'fap2',
            prompt: { fr: 'Nous ___ à l’université.', en: 'We ___ to university.' },
            options: [
              { fr: 'allons', en: 'allons' },
              { fr: 'faisons', en: 'faisons' },
              { fr: 'prenons', en: 'prenons' },
            ],
            answer: 0,
            explanation: { fr: 'aller à + lieu.', en: 'aller à + place.' },
          },
          {
            id: 'fap3',
            prompt: { fr: 'Je ___ au cinéma.', en: 'I ___ to the cinema.' },
            options: [
              { fr: 'vais', en: 'vais' },
              { fr: 'fais', en: 'fais' },
              { fr: 'prends', en: 'prends' },
            ],
            answer: 0,
            explanation: { fr: 'je vais (aller).', en: 'je vais (aller).' },
          },
          {
            id: 'fap4',
            prompt: { fr: 'Tu ___ un café avec nous ?', en: '___ you ___ a coffee with us?' },
            options: [
              { fr: 'prends', en: 'prends' },
              { fr: 'vas', en: 'vas' },
              { fr: 'faites', en: 'faites' },
            ],
            answer: 0,
            explanation: { fr: 'prendre un café.', en: 'prendre un café.' },
          },
          {
            id: 'fap5',
            prompt: { fr: 'Vous ___ du sport après les cours.', en: 'You ___ sport after class.' },
            options: [
              { fr: 'faites', en: 'faites' },
              { fr: 'allez', en: 'allez' },
              { fr: 'prenez', en: 'prenez' },
            ],
            answer: 0,
            explanation: { fr: 'vous faites (attention à la forme).', en: 'vous faites (watch the form).' },
          },
        ],
      },
      {
        id: 'u3-blog-dialogue',
        type: 'dialogue',
        title: { fr: 'Un message sur le blog', en: 'A blog post' },
        dialogue: {
          id: 'blog',
          title: { fr: 'Ma journée à Genève', en: 'My day in Geneva' },
          context: {
            fr: 'Lina présente son quotidien. Écoute où elle habite et ce qu’elle fait, puis remets dans l’ordre.',
            en: 'Lina presents her day. Listen to where she lives and what she does, then put the lines in order.',
          },
          lines: [
            { speaker: 'Lina', fr: 'Bonjour ! Je m’appelle Lina. J’habite à Genève.', en: 'Hello! My name is Lina. I live in Geneva.' },
            { speaker: 'Lina', fr: 'Le matin, je vais à l’université. Après les cours, je fais les courses.', en: 'In the morning I go to university. After class I do the shopping.' },
            { speaker: 'Lina', fr: 'Le soir, je prends un café avec des amis. Je fais du sport deux fois par semaine.', en: 'In the evening I have a coffee with friends. I work out twice a week.' },
            { speaker: 'Lina', fr: 'J’adore ça. Et vous ?', en: 'I love it. And you?' },
          ],
        },
      },
      {
        id: 'u3-prep-match',
        type: 'matching',
        title: { fr: 'Dans, sur, à côté de…', en: 'In, on, next to…' },
        pairs: [
          { id: 'pr1', left: 'dans', right: 'à l’intérieur' },
          { id: 'pr2', left: 'sur', right: 'au-dessus, posé' },
          { id: 'pr3', left: 'sous', right: 'en dessous' },
          { id: 'pr4', left: 'devant', right: 'face à, plus près' },
          { id: 'pr5', left: 'derrière', right: 'à l’arrière' },
          { id: 'pr6', left: 'à côté de', right: 'juste à droite ou à gauche' },
          { id: 'pr7', left: 'en face de', right: 'de l’autre côté' },
          { id: 'pr8', left: 'près de / loin de', right: 'proche / pas proche' },
        ],
      },
      {
        id: 'u3-voisin-dialogue',
        type: 'dialogue',
        title: { fr: 'Rencontre dans la rue', en: 'Meeting in the street' },
        dialogue: {
          id: 'voisin',
          title: { fr: 'Où tu étudies ?', en: 'Where do you study?' },
          context: {
            fr: 'Deux voisins. Écoute les lieux (université, magasin, parc), puis remets les répliques dans l’ordre.',
            en: 'Two neighbours. Listen for the places (university, shop, park), then put the lines in order.',
          },
          lines: [
            { speaker: 'Léa', fr: 'Bonjour, je m’appelle Léa. Et toi ?', en: 'Hello, my name is Léa. And you?' },
            { speaker: 'Marc', fr: 'Moi, c’est Marc. Tu étudies où, Léa ?', en: 'I’m Marc. Where do you study, Léa?' },
            { speaker: 'Léa', fr: 'À l’université ! Elle se trouve près du parc. Et toi ?', en: 'At university! It’s near the park. And you?' },
            { speaker: 'Marc', fr: 'Moi, je travaille dans un magasin. Il est à côté de la banque, entre le café et la poste.', en: 'Me, I work in a shop. It’s next to the bank, between the café and the post office.' },
            { speaker: 'Léa', fr: 'Super ! Et tu fais de la musique ?', en: 'Nice! And do you play music?' },
            { speaker: 'Marc', fr: 'Oui, dans une école de musique, derrière l’université. À bientôt !', en: 'Yes, in a music school, behind the university. See you soon!' },
          ],
        },
      },
      {
        id: 'u3-voyelles-listen',
        type: 'listen',
        title: { fr: 'Voyelles [y], [u], [o], [i]', en: 'Vowels [y], [u], [o], [i]' },
        intro: {
          fr: 'Écoute et répète. [y] université · [u] course · [o] bureau · [i] dîner.',
          en: 'Listen and repeat. [y] université · [u] course · [o] bureau · [i] dîner.',
        },
        items: [
          { id: 'y1', fr: 'université', en: '[y]' },
          { id: 'u1', fr: 'course', en: '[u]' },
          { id: 'o1', fr: 'bureau', en: '[o]' },
          { id: 'i1', fr: 'dîner', en: '[i]' },
          { id: 'mix', fr: 'Tu vas à l’université après le dîner ?', en: 'mix the four vowels' },
        ],
      },
    ],
  },
  {
    id: 'ca-roule',
    unitId: 3,
    number: 5,
    title: { fr: 'Ça roule !', en: 'We’re rolling!' },
    summary: {
      fr: 'Métro, vélo, trottinette ; l’impératif ; une panne de voiture.',
      en: 'Metro, bike, scooter; the imperative; a car breakdown.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Métro, vélo ou trottinette ?', en: 'Metro, bike, or scooter?' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Pour se déplacer : un bus, un métro, un tramway, un vélo, une trottinette, un scooter. On donne des conseils à l’impératif : Prends le métro. Allons à l’université. N’attendez pas sur la route. Si la voiture ne démarre pas, on explique le problème.',
          en: 'To get around: a bus, a metro, a tram, a bike, a kick scooter, a motorbike scooter. You give advice in the imperative: Take the metro. Let’s go to university. Don’t wait on the road. If the car won’t start, you explain the problem.',
        },
      },
      {
        type: 'note',
        title: { fr: 'L’impératif', en: 'The imperative' },
        text: {
          fr: 'On utilise surtout tu, nous, vous. Dîner → dîne, dînons, dînez. Prendre → prends, prenons, prenez. Aller → va, allons, allez. Verbes en -er : pas de -s à la personne tu (dîne, pas dînes).',
          en: 'You mainly use tu, nous, vous. Dîner → dîne, dînons, dînez. Prendre → prends, prenons, prenez. Aller → va, allons, allez. -er verbs: no -s on tu (dîne, not dînes).',
        },
      },
    ],
    activities: [
      {
        id: 'u3-transports-cards',
        type: 'flashcards',
        title: { fr: 'Les transports', en: 'Transport' },
        items: [
          { id: 'bus', fr: 'un bus', en: 'a bus' },
          { id: 'metro', fr: 'un métro', en: 'a metro / subway' },
          { id: 'tram', fr: 'un tramway', en: 'a tram' },
          { id: 'velo', fr: 'un vélo', en: 'a bike' },
          { id: 'trot', fr: 'une trottinette', en: 'a kick scooter' },
          { id: 'scoot', fr: 'un scooter', en: 'a motor scooter' },
          { id: 'ticket', fr: 'un ticket / un titre de transport', en: 'a ticket' },
          { id: 'partage', fr: 'l’autopartage', en: 'car sharing' },
        ],
      },
      {
        id: 'u3-transports-match',
        type: 'matching',
        title: { fr: 'C’est quel transport ?', en: 'Which transport is it?' },
        pairs: [
          { id: 'tr1', left: 'il va sous la terre, en ville', right: 'un métro' },
          { id: 'tr2', left: 'il a deux roues, on pédale', right: 'un vélo' },
          { id: 'tr3', left: 'petite, électrique, on est debout', right: 'une trottinette' },
          { id: 'tr4', left: 'long, sur rails, en surface', right: 'un tramway' },
          { id: 'tr5', left: 'grand, beaucoup de places, arrêts dans la rue', right: 'un bus' },
        ],
      },
      {
        id: 'u3-imperatif-quiz',
        type: 'quiz',
        title: { fr: 'L’impératif', en: 'The imperative' },
        questions: [
          {
            id: 'im1',
            prompt: { fr: 'Paul aime le sport. Conseil : ___ un vélo.', en: 'Paul likes sport. Advice: ___ a bike.' },
            options: [
              { fr: 'Prends', en: 'Prends' },
              { fr: 'Prend', en: 'Prend' },
              { fr: 'Prennez', en: 'Prennez' },
            ],
            answer: 0,
            explanation: { fr: 'tu : prends (avec s, verbe prendre).', en: 'tu: prends (with s, verb prendre).' },
          },
          {
            id: 'im2',
            prompt: { fr: 'Ils vont au cinéma. Il n’y a pas de métro près du cinéma. → ___ le tramway.', en: 'They’re going to the cinema. There is no metro near it. → ___ the tram.' },
            options: [
              { fr: 'Prenez', en: 'Prenez' },
              { fr: 'Prends', en: 'Prends' },
              { fr: 'Prenons', en: 'Prenons' },
            ],
            answer: 0,
            explanation: { fr: 'On parle à plusieurs personnes → vous : prenez.', en: 'Speaking to more than one person → vous: prenez.' },
          },
          {
            id: 'im3',
            prompt: { fr: 'Meryem habite loin du bureau. → ___ le bus.', en: 'Meryem lives far from the office. → ___ the bus.' },
            options: [
              { fr: 'Prends', en: 'Prends' },
              { fr: 'Va les bus', en: 'Va les bus' },
              { fr: 'Fais le bureau', en: 'Fais le bureau' },
            ],
            answer: 0,
            explanation: { fr: 'Conseil à une personne : Prends le bus. Ou : Va au bureau en bus.', en: 'Advice to one person: Prends le bus. Or: Va au bureau en bus.' },
          },
          {
            id: 'im4',
            prompt: { fr: 'Nous sommes écolos. → ___ le métro !', en: 'We’re eco-friendly. → ___ the metro!' },
            options: [
              { fr: 'Prenons', en: 'Prenons' },
              { fr: 'Prends', en: 'Prends' },
              { fr: 'Allez', en: 'Allez' },
            ],
            answer: 0,
            explanation: { fr: 'nous : prenons (on s’inclut).', en: 'nous: prenons (including ourselves).' },
          },
          {
            id: 'im5',
            prompt: { fr: 'Verbe en -er à tu : dîner →', en: '-er verb with tu: dîner →' },
            options: [
              { fr: 'dîne (pas de -s)', en: 'dîne (no -s)' },
              { fr: 'dînes', en: 'dînes' },
              { fr: 'dînez seulement', en: 'only dînez' },
            ],
            answer: 0,
            explanation: { fr: 'À l’impératif, les -er perdent le -s du tu : dîne, parle, écoute.', en: 'In the imperative, -er verbs drop the tu -s: dîne, parle, écoute.' },
          },
          {
            id: 'im6',
            prompt: { fr: 'Sur un site d’autopartage, on lit souvent :', en: 'On a car-share site you often read:' },
            options: [
              { fr: 'Réservez. Utilisez. Économisez.', en: 'Book. Use. Save.' },
              { fr: 'Je suis un ticket.', en: 'I am a ticket.' },
              { fr: 'Il n’y a pas de je.', en: 'There is no I.' },
            ],
            answer: 0,
            explanation: { fr: 'L’impératif vous : consigne claire sur un bouton.', en: 'Vous imperative: a clear instruction on a button.' },
          },
        ],
      },
      {
        id: 'u3-panne-dialogue',
        type: 'dialogue',
        title: { fr: 'Une panne de voiture', en: 'A car breakdown' },
        dialogue: {
          id: 'panne',
          title: { fr: 'Le garage est fermé', en: 'The garage is closed' },
          context: {
            fr: 'La voiture ne démarre pas. Un voisin aide. Écoute le problème, puis remets dans l’ordre.',
            en: 'The car won’t start. A neighbour helps. Listen for the problem, then put the lines in order.',
          },
          lines: [
            { speaker: 'Samir', fr: 'Bonjour Madame Costa ! Ça ne va pas… Ma voiture est en panne.', en: 'Hello Mrs Costa! Things aren’t good… My car has broken down.' },
            { speaker: 'Costa', fr: 'Oh, qu’est-ce qu’elle a ?', en: 'Oh, what’s wrong with it?' },
            { speaker: 'Samir', fr: 'Elle ne démarre pas. Et le garage est fermé : fermeture exceptionnelle.', en: 'It won’t start. And the garage is closed: exceptional closure.' },
            { speaker: 'Costa', fr: 'Attendez, je regarde. Ce n’est peut-être pas grave.', en: 'Wait, I’ll have a look. It may not be serious.' },
            { speaker: 'Samir', fr: 'Merci. J’ai un rendez-vous important à vingt kilomètres…', en: 'Thanks. I have an important appointment twenty kilometres away…' },
            { speaker: 'Costa', fr: 'Prenez le métro avec moi. Il y a une station près d’ici.', en: 'Take the metro with me. There is a station near here.' },
          ],
        },
      },
      {
        id: 'u3-panne-quiz',
        type: 'quiz',
        title: { fr: 'Que faire en cas de panne ?', en: 'What to do if it breaks down?' },
        questions: [
          {
            id: 'pa1',
            prompt: { fr: '« Fermeture exceptionnelle, nous sommes bientôt de retour. » Le garage…', en: '“Exceptional closure, we’ll be back soon.” The garage…' },
            options: [
              { fr: 'est fermé aujourd’hui, pour une raison spéciale', en: 'is closed today, for a special reason' },
              { fr: 'est ouvert 24 h / 24', en: 'is open 24/7' },
              { fr: 'vend des vélos seulement', en: 'only sells bikes' },
            ],
            answer: 0,
            explanation: { fr: 'Exceptionnelle = pas le planning normal. On cherche une autre solution.', en: 'Exceptionnelle = not the usual hours. You look for another solution.' },
          },
          {
            id: 'pa2',
            prompt: { fr: 'La voiture ne démarre pas. Une solution possible :', en: 'The car won’t start. A possible solution:' },
            options: [
              { fr: 'prendre le métro, un bus, ou un covoiturage', en: 'take the metro, a bus, or a car share' },
              { fr: 'attendre le mois prochain sans bouger', en: 'wait until next month without moving' },
              { fr: 'conjuguer seulement adorer', en: 'only conjugate adorer' },
            ],
            answer: 0,
            explanation: { fr: 'On présente des transports de la ville : métro, bus, vélo, autopartage…', en: 'You suggest city transport: metro, bus, bike, car share…' },
          },
          {
            id: 'pa3',
            prompt: { fr: 'Pour donner un ordre poli à plusieurs personnes :', en: 'To give a polite order to several people:' },
            options: [
              { fr: 'Attendez sur le trottoir, s’il vous plaît.', en: 'Wait on the pavement, please.' },
              { fr: 'Attends sur le trottoir. (une seule personne)', en: 'Attends on the pavement (one person only)' },
              { fr: 'Il y a attendre.', en: 'There is to wait.' },
            ],
            answer: 0,
            explanation: { fr: 'vous : attendez. tu : attends. nous : attendons.', en: 'vous: attendez. tu: attends. nous: attendons.' },
          },
        ],
      },
    ],
  },
  {
    id: 'projet-quartier',
    unitId: 3,
    number: 6,
    title: { fr: 'Les lieux de notre quartier', en: 'Places in our neighbourhood' },
    summary: {
      fr: 'Un programme de visites, des goûts, un moyen de transport, puis un court message.',
      en: 'A visit programme, likes, a way to get there, then a short post.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Le projet : tu arrives dans un nouveau quartier. Il y a des journées portes ouvertes : musée, restaurant, cours de langue, monument. Tu choisis ce que tu aimes, tu décides comment y aller, puis tu partages : J’adore ! Il y a…',
          en: 'The project: you arrive in a new neighbourhood. There are open days: museum, restaurant, language class, monument. You pick what you like, decide how to get there, then you share: I love it! There is…',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'On mange au restaurant samedi soir ? — D’accord !', en: 'Shall we eat at the restaurant Saturday evening? — OK!' },
          { fr: 'On prend les vélos ?', en: 'Shall we take bikes?' },
          { fr: 'Explorer le musée aujourd’hui. J’adore !', en: 'Explore the museum today. Love it!' },
        ],
      },
    ],
    activities: [
      {
        id: 'u3-portes-quiz',
        type: 'quiz',
        title: { fr: 'Lire un programme', en: 'Read a programme' },
        questions: [
          {
            id: 'po1',
            prompt: { fr: '« Entrée : 5 $ (pour la journée). Transports : métro et autobus. » C’est…', en: '“Admission: $5 (for the day). Transport: metro and bus.” This is…' },
            options: [
              { fr: 'le prix et comment venir', en: 'the price and how to come' },
              { fr: 'un menu de restaurant seulement', en: 'only a restaurant menu' },
              { fr: 'une conjugaison de faire', en: 'a conjugation of faire' },
            ],
            answer: 0,
            explanation: { fr: 'Sur une affiche : quand, où, combien, comment y aller.', en: 'On a poster: when, where, how much, how to get there.' },
          },
          {
            id: 'po2',
            prompt: { fr: 'Le musée est ouvert, le restaurant aussi. Tu aimes l’art. Tu proposes :', en: 'The museum is open, the restaurant too. You like art. You suggest:' },
            options: [
              { fr: 'On visite le musée, puis on mange au restaurant ?', en: 'Shall we visit the museum, then eat at the restaurant?' },
              { fr: 'Il n’y a pas de je.', en: 'There is no I.' },
              { fr: 'Prends le silence.', en: 'Take the silence.' },
            ],
            answer: 0,
            explanation: { fr: 'On discute des goûts, puis on fait un mini-programme.', en: 'You discuss likes, then you make a mini programme.' },
          },
          {
            id: 'po3',
            prompt: { fr: 'Pour le transport, entre amis :', en: 'For transport, among friends:' },
            options: [
              { fr: 'On prend les vélos ? / On va en métro ?', en: 'Shall we take bikes? / Shall we go by metro?' },
              { fr: 'Vous êtes 53 ans ?', en: 'Are you 53?' },
              { fr: 'Épelez le commissariat.', en: 'Spell the police station.' },
            ],
            answer: 0,
            explanation: { fr: 'On + présent pour proposer. Ou l’impératif : Prenons le métro !', en: 'On + present to suggest. Or the imperative: Prenons le métro!' },
          },
        ],
      },
      {
        id: 'u3-projet-match',
        type: 'matching',
        title: { fr: 'Quoi faire ensemble ?', en: 'What shall we do together?' },
        pairs: [
          { id: 'pj1', left: 'tu aimes l’art', right: 'visiter un musée' },
          { id: 'pj2', left: 'tu aimes bouger', right: 'prendre les vélos' },
          { id: 'pj3', left: 'tu aimes manger', right: 'réserver un restaurant' },
          { id: 'pj4', left: 'tu aimes les langues', right: 'un cours de français' },
        ],
      },
      {
        id: 'u3-projet-dialogue',
        type: 'dialogue',
        title: { fr: 'On se retrouve samedi', en: 'Let’s meet on Saturday' },
        dialogue: {
          id: 'samedi',
          title: { fr: 'Choisir visites et transports', en: 'Choose visits and transport' },
          context: {
            fr: 'Deux amis organisent une journée. Écoute le lieu et le moyen de transport, puis remets dans l’ordre.',
            en: 'Two friends plan a day. Listen for the place and the transport, then put the lines in order.',
          },
          lines: [
            { speaker: 'Hugo', fr: 'On visite le musée samedi matin ?', en: 'Shall we visit the museum Saturday morning?' },
            { speaker: 'Mila', fr: 'D’accord ! J’adore ça. Après, on mange au restaurant du quartier ?', en: 'OK! I love that. Afterwards, shall we eat at the neighbourhood restaurant?' },
            { speaker: 'Hugo', fr: 'Oui. On prend les vélos ? Il n’y a pas de métro près du musée.', en: 'Yes. Shall we take bikes? There is no metro near the museum.' },
            { speaker: 'Mila', fr: 'Parfait. Prenons les vélos. À samedi !', en: 'Perfect. Let’s take the bikes. See you Saturday!' },
          ],
        },
      },
    ],
  },
  {
    id: 'bilan',
    unitId: 3,
    number: 7,
    title: { fr: 'Bilan', en: 'Checkpoint' },
    summary: {
      fr: 'Il y a / il n’y a pas, goûts, faire aller prendre, prépositions, impératif et transports.',
      en: 'Il y a / il n’y a pas, likes, faire aller prendre, prepositions, imperative and transport.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Coche dans ta tête : je peux présenter une ville, décrire un quartier, parler de mes goûts et de ma journée, interroger sur le lieu, donner une instruction. Si une question bloque, retourne à la leçon.',
          en: 'Check in your head: I can present a city, describe a neighbourhood, talk about likes and my day, ask about place, give an instruction. If a question sticks, go back to the lesson.',
        },
      },
    ],
    activities: [
      {
        id: 'u3-bilan-lieux',
        type: 'matching',
        title: { fr: 'C’est un/une…', en: 'It’s a…' },
        pairs: [
          { id: 'bl1', left: 'on projette un film', right: 'un cinéma' },
          { id: 'bl2', left: 'on étudie, il y a un tableau', right: 'une classe / une école' },
          { id: 'bl3', left: 'on achète pain, lait, fruits', right: 'un magasin / une épicerie' },
          { id: 'bl4', left: 'on s’assoit, on boit un café', right: 'un café' },
          { id: 'bl5', left: 'près de la poste, on court', right: 'une salle de sport' },
        ],
      },
      {
        id: 'u3-bilan-iya',
        type: 'quiz',
        title: { fr: 'Il y a, il n’y a pas', en: 'There is, there isn’t' },
        questions: [
          {
            id: 'iy1',
            prompt: { fr: 'Pour décrire : un parc, une épicerie, une poste. Tu dis…', en: 'To describe: a park, a grocer’s, a post office. You say…' },
            options: [
              { fr: 'Il y a un parc, une épicerie et une poste.', en: 'There is a park, a grocer’s and a post office.' },
              { fr: 'Je suis un parc.', en: 'I am a park.' },
              { fr: 'Prends le silence.', en: 'Take the silence.' },
            ],
            answer: 0,
            explanation: { fr: 'Il y a + liste. Le contraire : Il n’y a pas de salle de sport.', en: 'Il y a + a list. The opposite: There is no gym.' },
          },
          {
            id: 'iy2',
            prompt: { fr: 'Lettres souvent muettes à la fin, comme dans Paris, bus, sports :', en: 'Letters often silent at the end, as in Paris, bus, sports:' },
            options: [
              { fr: 's, t, d, x… selon le mot', en: 's, t, d, x… depending on the word' },
              { fr: 'toutes les voyelles', en: 'all the vowels' },
              { fr: 'uniquement le son [y]', en: 'only the sound [y]' },
            ],
            answer: 0,
            explanation: { fr: 'On ne prononce pas beaucoup de consonnes finales. Écoute le mot, ne te fie pas seulement à l’écrit.', en: 'Many final consonants are not pronounced. Listen to the word; don’t trust spelling alone.' },
          },
          {
            id: 'iy3',
            prompt: { fr: 'Un quartier animé, des bars, des parcs. Tu aimes. Tu dis…', en: 'A lively neighbourhood, bars, parks. You like it. You say…' },
            options: [
              { fr: 'J’adore ce quartier. Il y a des bars et des parcs.', en: 'I love this neighbourhood. There are bars and parks.' },
              { fr: 'Je n’aime pas. Il n’y a pas de je.', en: 'I don’t like it. There is no I.' },
              { fr: 'Va le quartier.', en: 'Go the neighbourhood.' },
            ],
            answer: 0,
            explanation: { fr: 'J’aime / j’adore + il y a. Pour comparer deux quartiers : ici… / là…', en: 'J’aime / j’adore + il y a. To compare two areas: ici… / là…' },
          },
        ],
      },
      {
        id: 'u3-bilan-prep',
        type: 'quiz',
        title: { fr: 'Prépositions et quotidien', en: 'Prepositions and daily life' },
        questions: [
          {
            id: 'pp1',
            prompt: { fr: 'La bibliothèque est ___ la poste. (proche)', en: 'The library is ___ the post office. (near)' },
            options: [
              { fr: 'près de', en: 'près de' },
              { fr: 'loin de', en: 'loin de' },
              { fr: 'sous', en: 'sous' },
            ],
            answer: 0,
            explanation: { fr: 'près de = close. loin de = far. en face de = opposite.', en: 'près de = close. loin de = far. en face de = opposite.' },
          },
          {
            id: 'pp2',
            prompt: { fr: 'L’épicerie est ___ la banque et le café.', en: 'The grocer’s is ___ the bank and the café.' },
            options: [
              { fr: 'entre', en: 'entre' },
              { fr: 'dans', en: 'dans' },
              { fr: 'sur', en: 'sur' },
            ],
            answer: 0,
            explanation: { fr: 'entre A et B.', en: 'entre A and B.' },
          },
          {
            id: 'pp3',
            prompt: { fr: 'Moshe ___ le métro, puis il ___ du sport, et le soir il ___ de la musique. (prendre / faire / faire)', en: 'Moshe ___ the metro, then he ___ sport, and in the evening he ___ music.' },
            options: [
              { fr: 'prend · fait · fait', en: 'prend · fait · fait' },
              { fr: 'va · prend · allons', en: 'va · prend · allons' },
              { fr: 'fais · vas · prends', en: 'fais · vas · prends' },
            ],
            answer: 0,
            explanation: { fr: 'prendre les transports, faire du sport, faire de la musique.', en: 'prendre for transport, faire du sport, faire de la musique.' },
          },
        ],
      },
      {
        id: 'u3-bilan-imp',
        type: 'quiz',
        title: { fr: 'Checkpoint unité 3', en: 'Unit 3 checkpoint' },
        questions: [
          {
            id: 'x1',
            prompt: { fr: '1re personne du pluriel + transport :', en: '1st person plural + transport:' },
            options: [
              { fr: 'Prenons le métro !', en: 'Let’s take the metro!' },
              { fr: 'Prends le métro !', en: 'Take the metro!' },
              { fr: 'Vous faites le métro.', en: 'You do the metro.' },
            ],
            answer: 0,
            explanation: { fr: 'nous : prenons. tu : prends. vous : prenez / faites (selon le verbe).', en: 'nous: prenons. tu: prends. vous: prenez / faites (depending on the verb).' },
          },
          {
            id: 'x2',
            prompt: { fr: '2e personne du singulier + transport :', en: '2nd person singular + transport:' },
            options: [
              { fr: 'Prends une trottinette !', en: 'Take a scooter!' },
              { fr: 'Prenons une trottinette !', en: 'Let’s take a scooter!' },
              { fr: 'Ils prennent une trottinette.', en: 'They take a scooter.' },
            ],
            answer: 0,
            explanation: { fr: 'tu impératif de prendre : prends.', en: 'tu imperative of prendre: prends.' },
          },
          {
            id: 'x3',
            prompt: { fr: 'Paris est la capitale de la France. Cette phrase, c’est…', en: 'Paris is the capital of France. This sentence is…' },
            options: [
              { fr: 'présenter une ville', en: 'presenting a city' },
              { fr: 'un impératif', en: 'an imperative' },
              { fr: 'une panne seulement', en: 'only a breakdown' },
            ],
            answer: 0,
            explanation: { fr: 'Présenter : nom + il y a + un goût. Décrire un quartier : ici / là.', en: 'Present: name + il y a + a like. Describe a neighbourhood: ici / là.' },
          },
          {
            id: 'x4',
            prompt: { fr: '« L’université se trouve derrière le parc. » Tu…', en: '“The university is behind the park.” You…' },
            options: [
              { fr: 'interroges / indiques le lieu', en: 'ask about / give the place' },
              { fr: 'conjugues seulement adorer', en: 'only conjugate adorer' },
              { fr: 'épelles un prénom', en: 'spell a first name' },
            ],
            answer: 0,
            explanation: { fr: 'se trouver + préposition. Où se trouve… ?', en: 'se trouver + preposition. Where is…?' },
          },
          {
            id: 'x5',
            prompt: { fr: 'Maintenant je peux parler de mes déplacements :', en: 'Now I can talk about getting around:' },
            options: [
              { fr: 'J’ai un scooter. Je prends le métro.', en: 'I have a scooter. I take the metro.' },
              { fr: 'Je suis un commissariat.', en: 'I am a police station.' },
              { fr: 'Il y a 53 ans le bus.', en: 'There is 53 years the bus.' },
            ],
            answer: 0,
            explanation: { fr: 'Avoir un moyen + prendre / aller en + transport.', en: 'Have a vehicle + prendre / aller en + transport.' },
          },
        ],
      },
    ],
  },
]
