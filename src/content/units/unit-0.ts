import type { Lesson } from '@/types/course'

const alphabetLetters = [
  { letter: 'A', example: 'ami', exampleEn: 'friend' },
  { letter: 'B', example: 'bonjour', exampleEn: 'hello' },
  { letter: 'C', example: 'café', exampleEn: 'coffee' },
  { letter: 'D', example: 'dimanche', exampleEn: 'Sunday' },
  { letter: 'E', example: 'école', exampleEn: 'school' },
  { letter: 'F', example: 'français', exampleEn: 'French' },
  { letter: 'G', example: 'gare', exampleEn: 'station' },
  { letter: 'H', example: 'Haïti', exampleEn: 'Haiti' },
  { letter: 'I', example: 'ici', exampleEn: 'here' },
  { letter: 'J', example: 'jeudi', exampleEn: 'Thursday' },
  { letter: 'K', example: 'kilo', exampleEn: 'kilo' },
  { letter: 'L', example: 'livre', exampleEn: 'book' },
  { letter: 'M', example: 'merci', exampleEn: 'thank you' },
  { letter: 'N', example: 'non', exampleEn: 'no' },
  { letter: 'O', example: 'Ontario', exampleEn: 'Ontario' },
  { letter: 'P', example: 'Paris', exampleEn: 'Paris' },
  { letter: 'Q', example: 'Québec', exampleEn: 'Quebec' },
  { letter: 'R', example: 'rue', exampleEn: 'street' },
  { letter: 'S', example: 'salut', exampleEn: 'hi' },
  { letter: 'T', example: 'taxi', exampleEn: 'taxi' },
  { letter: 'U', example: 'université', exampleEn: 'university' },
  { letter: 'V', example: 'Vietnam', exampleEn: 'Vietnam' },
  { letter: 'W', example: 'wagon', exampleEn: 'carriage' },
  { letter: 'X', example: 'extra', exampleEn: 'extra' },
  { letter: 'Y', example: 'yoga', exampleEn: 'yoga' },
  { letter: 'Z', example: 'zéro', exampleEn: 'zero' },
]

export const unit0Lessons: Lesson[] = [
  {
    id: 'salutations-monde',
    unitId: 0,
    number: 1,
    title: { fr: 'Salutations du monde', en: 'Greetings around the world' },
    summary: {
      fr: 'Le français se dit bonjour sur plusieurs continents. Écoute, répète, puis choisis la salutation selon le moment.',
      en: 'French says hello on several continents. Listen, repeat, then pick the greeting that fits the moment.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Un même mot, beaucoup de lieux', en: 'One language, many places' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Cette unité ouvre le cours comme une carte : Amérique, Afrique, Asie, Europe. Avant les phrases longues, tu as besoin de six salutations stables.',
          en: 'This unit opens the course like a map: the Americas, Africa, Asia, Europe. Before long sentences, you need six stable greetings.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'Bonjour', en: 'Hello (daytime, default)' },
          { fr: 'Salut', en: 'Hi (informal)' },
          { fr: 'Bonsoir', en: 'Good evening' },
          { fr: 'Au revoir', en: 'Goodbye' },
          { fr: 'À bientôt', en: 'See you soon' },
          { fr: 'À tout à l’heure', en: 'See you in a bit (same day)' },
        ],
      },
      {
        type: 'note',
        title: { fr: 'Le moment compte', en: 'Timing matters' },
        text: {
          fr: 'Bonjour pour la journée. Bonsoir quand la soirée commence. Au revoir pour partir. À tout à l’heure si on se revoit bientôt le même jour.',
          en: 'Bonjour for the daytime. Bonsoir when evening starts. Au revoir to leave. À tout à l’heure if you will meet again soon the same day.',
        },
      },
    ],
    activities: [
      {
        id: 'u0-world-map',
        type: 'greetings-map',
        title: { fr: 'La carte des salutations', en: 'The greeting map' },
        intro: {
          fr: 'Touche chaque bulle. Ce n’est pas un quiz de géographie : c’est pour entendre le français partout.',
          en: 'Tap each bubble. This is not a geography exam: it is to hear French everywhere.',
        },
        pins: [
          { id: 'na', greeting: 'Bonjour !', region: { fr: 'Amérique du Nord', en: 'North America' }, when: { fr: 'la journée', en: 'daytime' }, x: 95, y: 72 },
          { id: 'eu', greeting: 'À bientôt !', region: { fr: 'Europe', en: 'Europe' }, when: { fr: 'on se revoit bientôt', en: 'see you soon' }, x: 198, y: 58 },
          { id: 'asw', greeting: 'Bonsoir !', region: { fr: 'Asie de l’Ouest', en: 'West Asia' }, when: { fr: 'le soir', en: 'evening' }, x: 248, y: 78 },
          { id: 'afw', greeting: 'Au revoir !', region: { fr: 'Afrique de l’Ouest', en: 'West Africa' }, when: { fr: 'le moment de partir', en: 'time to leave' }, x: 168, y: 118 },
          { id: 'afe', greeting: 'Salut !', region: { fr: 'Afrique / océan Indien', en: 'Africa / Indian Ocean' }, when: { fr: 'entre amis', en: 'between friends' }, x: 248, y: 138 },
          { id: 'ase', greeting: 'À tout à l’heure !', region: { fr: 'Asie de l’Est', en: 'East Asia' }, when: { fr: 'on se revoit tout à l’heure', en: 'see you later today' }, x: 318, y: 92 },
        ],
      },
      {
        id: 'u0-greet-listen',
        type: 'listen',
        title: { fr: 'Écouter et répéter', en: 'Listen and repeat' },
        items: [
          { id: 'g1', fr: 'Salut !', en: 'Hi!' },
          { id: 'g2', fr: 'Bonjour !', en: 'Hello!' },
          { id: 'g3', fr: 'Bonsoir !', en: 'Good evening!' },
          { id: 'g4', fr: 'À bientôt !', en: 'See you soon!' },
          { id: 'g5', fr: 'À tout à l’heure !', en: 'See you in a bit!' },
          { id: 'g6', fr: 'Au revoir !', en: 'Goodbye!' },
        ],
      },
      {
        id: 'u0-greet-situation',
        type: 'quiz',
        title: { fr: 'Saluer selon le moment', en: 'Greet according to the moment' },
        intro: {
          fr: 'Choisis une salutation naturelle. Plusieurs réponses existent dans la vraie vie ; ici on vise la plus claire pour l’A1.',
          en: 'Pick a natural greeting. Real life allows more than one; here we aim at the clearest A1 choice.',
        },
        questions: [
          {
            id: 's1',
            prompt: { fr: 'C’est le soir. Tu arrives. Tu dis :', en: 'It is evening. You arrive. You say:' },
            options: [
              { fr: 'Bonsoir', en: 'Good evening' },
              { fr: 'Bonne nuit', en: 'Good night' },
              { fr: 'À tout à l’heure', en: 'See you in a bit' },
            ],
            answer: 0,
            explanation: {
              fr: 'Bonsoir pour arriver le soir. Bonne nuit, c’est pour se coucher.',
              en: 'Bonsoir when you arrive in the evening. Bonne nuit is for going to bed.',
            },
          },
          {
            id: 's2',
            prompt: { fr: 'C’est la journée. Tu salues quelqu’un que tu ne connais pas :', en: 'It is daytime. You greet someone you do not know:' },
            options: [
              { fr: 'Salut', en: 'Hi' },
              { fr: 'Bonjour', en: 'Hello' },
              { fr: 'Au revoir', en: 'Goodbye' },
            ],
            answer: 1,
            explanation: {
              fr: 'Bonjour est le salut par défaut. Salut est plus familier.',
              en: 'Bonjour is the default. Salut is more casual.',
            },
          },
          {
            id: 's3',
            prompt: { fr: 'C’est le moment de partir. Tu dis :', en: 'It is time to leave. You say:' },
            options: [
              { fr: 'Bonjour', en: 'Hello' },
              { fr: 'Au revoir', en: 'Goodbye' },
              { fr: 'Comment allez-vous ?', en: 'How are you?' },
            ],
            answer: 1,
            explanation: {
              fr: 'Au revoir clôt l’échange. À bientôt ou à tout à l’heure aussi, selon le prochain rendez-vous.',
              en: 'Au revoir closes the exchange. À bientôt or à tout à l’heure also work, depending on the next meeting.',
            },
          },
          {
            id: 's4',
            prompt: { fr: 'Vous vous revoyez dans une heure. Le plus juste :', en: 'You will meet again in an hour. The best fit:' },
            options: [
              { fr: 'À tout à l’heure', en: 'See you in a bit' },
              { fr: 'Bonne nuit', en: 'Good night' },
              { fr: 'Bonsoir', en: 'Good evening' },
            ],
            answer: 0,
            explanation: {
              fr: 'À tout à l’heure = plus tard, souvent le même jour.',
              en: 'À tout à l’heure = later, often the same day.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'afrique',
    unitId: 0,
    number: 2,
    title: { fr: 'Le français en Afrique', en: 'French in Africa' },
    summary: {
      fr: 'Une grande partie des francophones vit en Afrique. Tu écoutes des noms, tu les épelles, tu entres dans l’alphabet.',
      en: 'A large part of French speakers live in Africa. You hear names, spell them, and enter the alphabet.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Le français n’est pas seulement européen. En Afrique, c’est une langue de la vie publique, de la chanson, des institutions — avec d’autres langues à côté.',
          en: 'French is not only European. In Africa it is a language of public life, music, and institutions — alongside other languages.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'Tiken Jah Fakoly, chanteur ivoirien', en: 'Tiken Jah Fakoly, Ivorian singer' },
          { fr: 'Louise Mushikiwabo, personnalité politique rwandaise', en: 'Louise Mushikiwabo, Rwandan political figure' },
          { fr: 'Tahar Ben Jelloun, écrivain marocain', en: 'Tahar Ben Jelloun, Moroccan writer' },
        ],
      },
      {
        type: 'note',
        title: { fr: 'Épeler', en: 'Spelling' },
        text: {
          fr: 'Quand un nom est nouveau, on demande : Vous pouvez épeler, s’il vous plaît ? Puis on dit les lettres une par une.',
          en: 'When a name is new, you ask: Vous pouvez épeler, s’il vous plaît? Then you say the letters one by one.',
        },
      },
    ],
    activities: [
      {
        id: 'u0-africa-quiz',
        type: 'quiz',
        title: { fr: 'Le français, où ?', en: 'French, where?' },
        questions: [
          {
            id: 'a1',
            prompt: { fr: 'Francophone veut dire :', en: 'Francophone means:' },
            options: [
              { fr: 'qui parle français', en: 'French-speaking' },
              { fr: 'qui habite seulement à Paris', en: 'living only in Paris' },
              { fr: 'qui n’écrit jamais', en: 'never writing' },
            ],
            answer: 0,
            explanation: {
              fr: 'Une personne, une ville ou un pays francophone utilise le français.',
              en: 'A francophone person, city, or country uses French.',
            },
          },
          {
            id: 'a2',
            prompt: { fr: 'Aujourd’hui, beaucoup de francophones vivent…', en: 'Today, many French speakers live…' },
            options: [
              { fr: 'uniquement en Suisse', en: 'only in Switzerland' },
              { fr: 'aussi en Afrique', en: 'in Africa too' },
              { fr: 'seulement en Asie', en: 'only in Asia' },
            ],
            answer: 1,
            explanation: {
              fr: 'L’Afrique est un espace majeur du français contemporain.',
              en: 'Africa is a major space of contemporary French.',
            },
          },
          {
            id: 'a3',
            prompt: { fr: 'Pour un nom difficile, on dit :', en: 'For a difficult name, you say:' },
            options: [
              { fr: 'Vous pouvez épeler ?', en: 'Can you spell that?' },
              { fr: 'Bonne soirée', en: 'Have a good evening' },
              { fr: 'À tout à l’heure', en: 'See you in a bit' },
            ],
            answer: 0,
            explanation: { fr: 'Épeler = donner les lettres.', en: 'Épeler = give the letters.' },
          },
        ],
      },
      {
        id: 'u0-africa-spell',
        type: 'spell',
        title: { fr: 'Épeler des prénoms', en: 'Spell first names' },
        intro: {
          fr: 'Épelle avec le clavier. Les espaces et les accents ne comptent pas ici : on entraîne les lettres de base.',
          en: 'Spell with the keyboard. Spaces and accents do not count here: we train the basic letters.',
        },
        spellNames: [
          { id: 'tiken', name: 'Tiken', hint: { fr: 'prénom d’un chanteur ivoirien', en: 'first name of an Ivorian singer' } },
          { id: 'louise', name: 'Louise', hint: { fr: 'prénom francophone très courant', en: 'a very common Francophone first name' } },
          { id: 'tahar', name: 'Tahar', hint: { fr: 'prénom d’un écrivain marocain', en: 'first name of a Moroccan writer' } },
          { id: 'kim', name: 'Kim', hint: { fr: 'prénom d’une écrivaine née au Vietnam', en: 'first name of a writer born in Vietnam' } },
        ],
      },
      {
        id: 'u0-alphabet-board',
        type: 'alphabet',
        title: { fr: 'L’alphabet', en: 'The alphabet' },
        intro: {
          fr: 'Touche une lettre pour l’entendre, puis passe en quiz.',
          en: 'Tap a letter to hear it, then switch to the quiz.',
        },
        letters: alphabetLetters,
      },
    ],
  },
  {
    id: 'asie',
    unitId: 0,
    number: 3,
    title: { fr: 'Le français en Asie', en: 'French in Asia' },
    summary: {
      fr: 'Le français existe aussi au Cambodge, au Laos, au Vietnam. En librairie, tu t’entraînes à la politesse et à donner ton nom.',
      en: 'French also exists in Cambodia, Laos, and Vietnam. In a bookshop you practise politeness and giving your name.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'En Asie du Sud-Est, le français n’est pas la langue de tout le monde, mais il reste présent : études, livres, institutions. Une voix connue du Québec, Kim Thúy, est née au Vietnam et écrit en français.',
          en: 'In South-East Asia, French is not everyone’s language, but it is still present: studies, books, institutions. A well-known Quebec voice, Kim Thúy, was born in Vietnam and writes in French.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 's’il vous plaît', en: 'please (formal)' },
          { fr: 'merci / c’est très gentil', en: 'thank you / that’s very kind' },
          { fr: 'désolé(e) / pardon', en: 'sorry / excuse me' },
          { fr: 'je vous en prie', en: 'you’re welcome (formal)' },
        ],
      },
    ],
    activities: [
      {
        id: 'u0-polite-cards',
        type: 'flashcards',
        title: { fr: 'Politesse en librairie', en: 'Politeness in a bookshop' },
        items: [
          { id: 'svp', fr: 'S’il vous plaît', en: 'Please', exampleFr: 'Le livre, s’il vous plaît.', exampleEn: 'The book, please.' },
          { id: 'merci', fr: 'Merci', en: 'Thank you', exampleFr: 'Merci beaucoup.', exampleEn: 'Thank you very much.' },
          { id: 'gentil', fr: 'C’est très gentil', en: 'That’s very kind', exampleFr: 'C’est très gentil, merci.', exampleEn: 'That’s very kind, thank you.' },
          { id: 'desole', fr: 'Désolé(e)', en: 'Sorry', exampleFr: 'Désolé, je n’ai pas le livre.', exampleEn: 'Sorry, I don’t have the book.' },
          { id: 'pardon', fr: 'Pardon', en: 'Excuse me / sorry', exampleFr: 'Pardon, vous avez Ru ?', exampleEn: 'Excuse me, do you have Ru?' },
          { id: 'enprie', fr: 'Je vous en prie', en: 'You’re welcome', exampleFr: '— Merci. — Je vous en prie.', exampleEn: '— Thank you. — You’re welcome.' },
        ],
      },
      {
        id: 'u0-shop-audio',
        type: 'quiz',
        title: { fr: 'Écoute : à la librairie', en: 'Listen: at the bookshop' },
        intro: {
          fr: 'Écoute l’enregistrement, une ou deux fois. Puis réponds. Tu n’as pas besoin d’écrire le dialogue : écoute les formules de politesse et la situation.',
          en: 'Listen to the recording once or twice. Then answer. You do not need to write the dialogue: listen for polite phrases and the situation.',
        },
        audio: {
          src: '/audio/unit-0/u0-act4-librairie.mp3',
          title: { fr: 'Dialogue en librairie', en: 'Dialogue in a bookshop' },
          hint: {
            fr: 'Piste A1 · unité 0 · activité 4',
            en: 'Track A1 · unit 0 · activity 4',
          },
        },
        questions: [
          {
            id: 'aud1',
            prompt: { fr: 'La scène se passe…', en: 'The scene takes place…' },
            options: [
              { fr: 'dans une librairie', en: 'in a bookshop' },
              { fr: 'dans un train', en: 'on a train' },
              { fr: 'à la piscine', en: 'at the swimming pool' },
            ],
            answer: 0,
            explanation: {
              fr: 'On cherche un livre et on parle à quelqu’un du magasin.',
              en: 'Someone is looking for a book and talking to a shop assistant.',
            },
          },
          {
            id: 'aud2',
            prompt: { fr: 'Pour demander poliment, on entend surtout :', en: 'To ask politely, you mainly hear:' },
            options: [
              { fr: 's’il vous plaît', en: 'please' },
              { fr: 'à demain', en: 'see you tomorrow' },
              { fr: 'bonne nuit', en: 'good night' },
            ],
            answer: 0,
            explanation: {
              fr: 'S’il vous plaît accompagne une demande.',
              en: 'S’il vous plaît goes with a request.',
            },
          },
          {
            id: 'aud3',
            prompt: { fr: 'Si le livre n’est pas là, une réaction naturelle :', en: 'If the book is not there, a natural reaction is:' },
            options: [
              { fr: 'désolé / pardon', en: 'sorry / excuse me' },
              { fr: 'lundi', en: 'Monday' },
              { fr: 'ouvrez le livre', en: 'open the book' },
            ],
            answer: 0,
            explanation: {
              fr: 'Désolé ou pardon pour un petit problème.',
              en: 'Désolé or pardon for a small problem.',
            },
          },
          {
            id: 'aud4',
            prompt: { fr: 'On demande aussi le…', en: 'They also ask for the…' },
            options: [
              { fr: 'nom', en: 'name' },
              { fr: 'numéro de bus', en: 'bus number' },
              { fr: 'jour de la semaine', en: 'day of the week' },
            ],
            answer: 0,
            explanation: {
              fr: 'Pour une commande, on donne souvent son nom — et on peut l’épeler.',
              en: 'For an order, you often give your name — and you can spell it.',
            },
          },
          {
            id: 'aud5',
            prompt: { fr: 'Après merci, on peut entendre :', en: 'After thank you, you can hear:' },
            options: [
              { fr: 'je vous en prie', en: 'you’re welcome' },
              { fr: 'à tout à l’heure', en: 'see you later' },
              { fr: 'c’est lundi', en: 'it’s Monday' },
            ],
            answer: 0,
            explanation: {
              fr: 'Je vous en prie répond à merci.',
              en: 'Je vous en prie answers merci.',
            },
          },
        ],
      },
      {
        id: 'u0-shop-dialogue',
        type: 'dialogue',
        title: { fr: 'À la librairie', en: 'At the bookshop' },
        dialogue: {
          id: 'librairie',
          title: { fr: 'Commander un livre', en: 'Order a book' },
          context: {
            fr: 'Une cliente cherche un roman. Écoute, répète, puis remets les répliques dans l’ordre.',
            en: 'A customer is looking for a novel. Listen, repeat, then put the lines in order.',
          },
          lines: [
            { speaker: 'Inès', fr: 'Pardon, je cherche un roman, s’il vous plaît.', en: 'Excuse me, I’m looking for a novel, please.' },
            { speaker: 'Libraire', fr: 'Désolé, il n’est pas là aujourd’hui. Je peux le commander.', en: 'Sorry, it isn’t here today. I can order it.' },
            { speaker: 'Inès', fr: 'Oui, s’il vous plaît. C’est très gentil.', en: 'Yes, please. That’s very kind.' },
            { speaker: 'Libraire', fr: 'Donnez-moi votre nom.', en: 'Give me your name.' },
            { speaker: 'Inès', fr: 'Je m’appelle Inès Morel.', en: 'My name is Inès Morel.' },
            { speaker: 'Libraire', fr: 'Vous pouvez répéter ?', en: 'Can you repeat that?' },
            { speaker: 'Inès', fr: 'Inès Morel. I-N-E-S, M-O-R-E-L.', en: 'Inès Morel. I-N-E-S, M-O-R-E-L.' },
            { speaker: 'Libraire', fr: 'Merci.', en: 'Thank you.' },
            { speaker: 'Inès', fr: 'Je vous en prie.', en: 'You’re welcome.' },
          ],
        },
      },
      {
        id: 'u0-polite-quiz',
        type: 'quiz',
        title: { fr: 'Quelle formule ?', en: 'Which phrase?' },
        questions: [
          {
            id: 'p1',
            prompt: { fr: 'Tu demandes un service. Tu ajoutes :', en: 'You ask for something. You add:' },
            options: [
              { fr: 's’il vous plaît', en: 'please' },
              { fr: 'au revoir', en: 'goodbye' },
              { fr: 'à bientôt', en: 'see you soon' },
            ],
            answer: 0,
            explanation: { fr: 'S’il vous plaît accompagne une demande.', en: 'S’il vous plaît goes with a request.' },
          },
          {
            id: 'p2',
            prompt: { fr: 'On te remercie. Tu peux dire :', en: 'Someone thanks you. You can say:' },
            options: [
              { fr: 'Je vous en prie', en: 'You’re welcome' },
              { fr: 'Bonsoir', en: 'Good evening' },
              { fr: 'Écoutez', en: 'Listen' },
            ],
            answer: 0,
            explanation: { fr: 'Je vous en prie ou de rien.', en: 'Je vous en prie or de rien.' },
          },
          {
            id: 'p3',
            prompt: { fr: 'Le livre n’est pas là. Le vendeur dit souvent :', en: 'The book is not there. The seller often says:' },
            options: [
              { fr: 'Désolé', en: 'Sorry' },
              { fr: 'Salut', en: 'Hi' },
              { fr: 'À tout à l’heure', en: 'See you in a bit' },
            ],
            answer: 0,
            explanation: { fr: 'Désolé(e) pour un problème simple.', en: 'Désolé(e) for a simple problem.' },
          },
        ],
      },
    ],
  },
  {
    id: 'ameriques',
    unitId: 0,
    number: 4,
    title: { fr: 'Le français aux Amériques', en: 'French in the Americas' },
    summary: {
      fr: 'Au Canada et en Haïti, le français est une langue officielle. Tu entends allô, bienvenue, et tu te repères dans une ville.',
      en: 'In Canada and Haiti, French is an official language. You hear allô, bienvenue, and you find your way in a city.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'On parle français au Québec, en Ontario, au Nouveau-Brunswick, et en Haïti. Les mots de tous les jours peuvent changer un peu selon le lieu.',
          en: 'French is spoken in Quebec, Ontario, New Brunswick, and Haiti. Everyday words can shift a little according to the place.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Deux habitudes canadiennes', en: 'Two Canadian habits' },
        text: {
          fr: 'Entre amis ou collègues, allô peut remplacer salut. Et bienvenue peut répondre à merci, comme de rien.',
          en: 'Between friends or colleagues, allô can replace salut. And bienvenue can answer merci, like de rien.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'Allô !', en: 'Hi (Canada, informal)' },
          { fr: '— Merci ! — Bienvenue !', en: '— Thanks! — You’re welcome! (Canada)' },
          { fr: 'Port-au-Prince, Haïti', en: 'Port-au-Prince, Haiti' },
        ],
      },
    ],
    activities: [
      {
        id: 'u0-canada-quiz',
        type: 'quiz',
        title: { fr: 'Canada et Haïti', en: 'Canada and Haiti' },
        questions: [
          {
            id: 'c1',
            prompt: { fr: 'Au Canada, entre amis, on entend souvent :', en: 'In Canada, between friends, you often hear:' },
            options: [
              { fr: 'Allô', en: 'Allô' },
              { fr: 'Bonne nuit', en: 'Good night' },
              { fr: 'Ouvrez le livre', en: 'Open the book' },
            ],
            answer: 0,
            explanation: {
              fr: 'Allô fonctionne comme un salut informel, pas seulement au téléphone.',
              en: 'Allô works as an informal hello, not only on the phone.',
            },
          },
          {
            id: 'c2',
            prompt: { fr: 'Quelqu’un dit merci. Au Canada, on peut répondre :', en: 'Someone says thank you. In Canada you can reply:' },
            options: [
              { fr: 'Bienvenue', en: 'You’re welcome' },
              { fr: 'Au revoir', en: 'Goodbye' },
              { fr: 'Bonsoir', en: 'Good evening' },
            ],
            answer: 0,
            explanation: {
              fr: 'Bienvenue = you’re welcome, dans cet usage canadien.',
              en: 'Bienvenue = you’re welcome, in this Canadian use.',
            },
          },
          {
            id: 'c3',
            prompt: { fr: 'Le français est une langue officielle…', en: 'French is an official language…' },
            options: [
              { fr: 'au Canada et en Haïti', en: 'in Canada and Haiti' },
              { fr: 'seulement à Lyon', en: 'only in Lyon' },
              { fr: 'uniquement au Japon', en: 'only in Japan' },
            ],
            answer: 0,
            explanation: {
              fr: 'Ce sont deux pays des Amériques où le français a un statut officiel.',
              en: 'These are two countries in the Americas where French has official status.',
            },
          },
        ],
      },
      {
        id: 'u0-haiti-match',
        type: 'matching',
        title: { fr: 'Lieux de Port-au-Prince', en: 'Places in Port-au-Prince' },
        intro: {
          fr: 'Associe le lieu et ce que c’est. Ce sont de vrais points de repère de la capitale haïtienne.',
          en: 'Match the place and what it is. These are real landmarks of Haiti’s capital.',
        },
        pairs: [
          { id: 'h1', left: 'le marché', right: 'un lieu pour acheter' },
          { id: 'h2', left: 'la cathédrale', right: 'une grande église' },
          { id: 'h3', left: 'le palais', right: 'un bâtiment officiel' },
          { id: 'h4', left: 'la cascade', right: 'de l’eau qui tombe' },
          { id: 'h5', left: 'la statue', right: 'une sculpture en ville' },
          { id: 'h6', left: 'le plan', right: 'une carte de la ville' },
        ],
      },
      {
        id: 'u0-canada-listen',
        type: 'listen',
        title: { fr: 'Petits échanges', en: 'Short exchanges' },
        items: [
          { id: 'ca1', fr: 'Allô !', en: 'Hi!' },
          { id: 'ca2', fr: 'Où sont les toilettes ?', en: 'Where is the bathroom?' },
          { id: 'ca3', fr: 'Ici.', en: 'Here.' },
          { id: 'ca4', fr: 'Merci !', en: 'Thank you!' },
          { id: 'ca5', fr: 'Bienvenue !', en: 'You’re welcome!' },
        ],
      },
    ],
  },
  {
    id: 'europe',
    unitId: 0,
    number: 5,
    title: { fr: 'Le français en Europe', en: 'French in Europe' },
    summary: {
      fr: 'La France, mais aussi la Belgique, la Suisse, le Luxembourg, Monaco, Andorre. Associe les villes et les pays.',
      en: 'France, but also Belgium, Switzerland, Luxembourg, Monaco, Andorra. Match the cities and the countries.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'En Europe, le français est une langue nationale ou une langue de travail dans plusieurs pays. Les villes changent, le bonjour reste.',
          en: 'In Europe, French is a national language or a working language in several countries. The cities change; bonjour stays.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'Andorre-la-Vieille — Andorre', en: 'Andorra la Vella — Andorra' },
          { fr: 'Bruxelles — Belgique', en: 'Brussels — Belgium' },
          { fr: 'Monte-Carlo — Monaco', en: 'Monte Carlo — Monaco' },
          { fr: 'Lyon — France', en: 'Lyon — France' },
          { fr: 'Luxembourg — Luxembourg', en: 'Luxembourg — Luxembourg' },
          { fr: 'Genève — Suisse', en: 'Geneva — Switzerland' },
        ],
      },
    ],
    activities: [
      {
        id: 'u0-europe-match',
        type: 'matching',
        title: { fr: 'Ville et pays', en: 'City and country' },
        pairs: [
          { id: 'e1', left: 'Andorre-la-Vieille', right: 'Andorre' },
          { id: 'e2', left: 'Bruxelles', right: 'Belgique' },
          { id: 'e3', left: 'Monte-Carlo', right: 'Monaco' },
          { id: 'e4', left: 'Lyon', right: 'France' },
          { id: 'e5', left: 'Luxembourg', right: 'Luxembourg' },
          { id: 'e6', left: 'Genève', right: 'Suisse' },
        ],
      },
      {
        id: 'u0-europe-quiz',
        type: 'quiz',
        title: { fr: 'Villes francophones', en: 'Francophone cities' },
        questions: [
          {
            id: 'eu1',
            prompt: { fr: 'Bruxelles se trouve en…', en: 'Brussels is in…' },
            options: [
              { fr: 'Belgique', en: 'Belgium' },
              { fr: 'Haïti', en: 'Haiti' },
              { fr: 'Vietnam', en: 'Vietnam' },
            ],
            answer: 0,
            explanation: { fr: 'Bruxelles est la capitale de la Belgique.', en: 'Brussels is the capital of Belgium.' },
          },
          {
            id: 'eu2',
            prompt: { fr: 'Genève se trouve en…', en: 'Geneva is in…' },
            options: [
              { fr: 'Suisse', en: 'Switzerland' },
              { fr: 'Côte d’Ivoire', en: 'Côte d’Ivoire' },
              { fr: 'Canada', en: 'Canada' },
            ],
            answer: 0,
            explanation: { fr: 'Genève est une ville suisse francophone.', en: 'Geneva is a French-speaking Swiss city.' },
          },
          {
            id: 'eu3',
            prompt: { fr: 'Lyon, c’est…', en: 'Lyon is…' },
            options: [
              { fr: 'une ville de France', en: 'a city in France' },
              { fr: 'un pays', en: 'a country' },
              { fr: 'un mois', en: 'a month' },
            ],
            answer: 0,
            explanation: { fr: 'Lyon est une grande ville française.', en: 'Lyon is a large French city.' },
          },
          {
            id: 'eu4',
            prompt: { fr: 'Au Luxembourg, on parle notamment…', en: 'In Luxembourg, people speak notably…' },
            options: [
              { fr: 'luxembourgeois, français et allemand', en: 'Luxembourgish, French and German' },
              { fr: 'seulement le japonais', en: 'only Japanese' },
              { fr: 'aucune langue', en: 'no language' },
            ],
            answer: 0,
            explanation: {
              fr: 'C’est un pays où plusieurs langues coexistent, dont le français.',
              en: 'It is a country where several languages coexist, including French.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'classe',
    unitId: 0,
    number: 6,
    title: { fr: 'Cap sur la classe', en: 'Into the classroom' },
    summary: {
      fr: 'Les verbes de la leçon, un dialogue pour demander de l’aide, les jours, les mois, et se présenter.',
      en: 'Lesson verbs, a dialogue to ask for help, days, months, and introducing yourself.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'En classe, tu as besoin de verbes d’action et de phrases de secours : je ne comprends pas, vous pouvez répéter, je m’appelle…',
          en: 'In class you need action verbs and emergency sentences: I don’t understand, can you repeat, my name is…',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'parler, écouter, comprendre', en: 'speak, listen, understand' },
          { fr: 'écrire, lire, traduire', en: 'write, read, translate' },
          { fr: 'associer, répéter, répondre, ouvrir', en: 'match, repeat, answer, open' },
          { fr: 'Je suis né(e) en mars.', en: 'I was born in March.' },
        ],
      },
    ],
    activities: [
      {
        id: 'u0-verbs-match',
        type: 'matching',
        title: { fr: 'Verbes de la classe', en: 'Classroom verbs' },
        pairs: [
          { id: 'v1', left: 'parler', right: 'speak' },
          { id: 'v2', left: 'écouter', right: 'listen' },
          { id: 'v3', left: 'comprendre', right: 'understand' },
          { id: 'v4', left: 'écrire', right: 'write' },
          { id: 'v5', left: 'lire', right: 'read' },
          { id: 'v6', left: 'traduire', right: 'translate' },
          { id: 'v7', left: 'associer', right: 'match' },
          { id: 'v8', left: 'répéter', right: 'repeat' },
          { id: 'v9', left: 'répondre', right: 'answer' },
          { id: 'v10', left: 'ouvrir', right: 'open' },
        ],
      },
      {
        id: 'u0-class-audio',
        type: 'quiz',
        title: { fr: 'Écoute : consignes de classe', en: 'Listen: classroom instructions' },
        intro: {
          fr: 'Écoute l’enregistrement. Ce sont des consignes : tu dois imaginer l’action, pas seulement répéter.',
          en: 'Listen to the recording. These are instructions: imagine the action, don’t only repeat.',
        },
        audio: {
          src: '/audio/unit-0/u0-act2-consignes.mp3',
          title: { fr: 'Consignes en classe', en: 'Classroom instructions' },
          hint: {
            fr: 'Piste A1 · unité 0 · activité 2',
            en: 'Track A1 · unit 0 · activity 2',
          },
        },
        questions: [
          {
            id: 'cl1',
            prompt: { fr: 'La première consigne demande d’…', en: 'The first instruction asks you to…' },
            options: [
              { fr: 'ouvrir le livre', en: 'open the book' },
              { fr: 'fermer la fenêtre', en: 'close the window' },
              { fr: 'dire au revoir', en: 'say goodbye' },
            ],
            answer: 0,
            explanation: {
              fr: 'Ouvrez le livre (souvent à une page précise).',
              en: 'Open the book (often at a specific page).',
            },
          },
          {
            id: 'cl2',
            prompt: { fr: 'Ensuite, on te demande de…', en: 'Next, you are asked to…' },
            options: [
              { fr: 'lire le titre', en: 'read the title' },
              { fr: 'compter jusqu’à dix', en: 'count to ten' },
              { fr: 'partir', en: 'leave' },
            ],
            answer: 0,
            explanation: { fr: 'Lisez le titre de la leçon.', en: 'Read the title of the lesson.' },
          },
          {
            id: 'cl3',
            prompt: { fr: 'Le mot à répéter, c’est :', en: 'The word to repeat is:' },
            options: [
              { fr: 'Bonjour', en: 'Hello' },
              { fr: 'janvier', en: 'January' },
              { fr: 'Bruxelles', en: 'Brussels' },
            ],
            answer: 0,
            explanation: { fr: 'Répétez le mot « Bonjour ».', en: 'Repeat the word “Bonjour”.' },
          },
          {
            id: 'cl4',
            prompt: { fr: 'Le mot à écrire, c’est :', en: 'The word to write is:' },
            options: [
              { fr: 'Merci', en: 'Thank you' },
              { fr: 'Allô', en: 'Allô' },
              { fr: 'Lyon', en: 'Lyon' },
            ],
            answer: 0,
            explanation: { fr: 'Écrivez le mot « Merci ».', en: 'Write the word “Merci”.' },
          },
        ],
      },
      {
        id: 'u0-class-listen',
        type: 'listen',
        title: { fr: 'Consignes', en: 'Instructions' },
        items: [
          { id: 'i1', fr: 'Ouvrez le livre.', en: 'Open the book.' },
          { id: 'i2', fr: 'Lisez le titre.', en: 'Read the title.' },
          { id: 'i3', fr: 'Répétez le mot « Bonjour ».', en: 'Repeat the word “Bonjour”.' },
          { id: 'i4', fr: 'Écrivez le mot « Merci ».', en: 'Write the word “Merci”.' },
          { id: 'i5', fr: 'Je ne comprends pas.', en: 'I don’t understand.' },
          { id: 'i6', fr: 'Vous pouvez répéter, s’il vous plaît ?', en: 'Can you repeat, please?' },
        ],
      },
      {
        id: 'u0-class-dialogue',
        type: 'dialogue',
        title: { fr: 'Je ne comprends pas', en: 'I don’t understand' },
        dialogue: {
          id: 'classe1',
          title: { fr: 'Dans la salle', en: 'In the room' },
          context: {
            fr: 'Un étudiant demande de l’aide. Écoute, puis remets le dialogue dans l’ordre.',
            en: 'A student asks for help. Listen, then put the dialogue in order.',
          },
          lines: [
            { speaker: 'Yanis', fr: 'Excusez-moi, je ne comprends pas.', en: 'Excuse me, I don’t understand.' },
            { speaker: 'Prof', fr: 'Pas de problème. Ouvrez le cahier, s’il vous plaît.', en: 'No problem. Open the notebook, please.' },
            { speaker: 'Yanis', fr: 'Quelle page ?', en: 'Which page?' },
            { speaker: 'Prof', fr: 'La page 6. Écrivez le mot « Bonjour ».', en: 'Page 6. Write the word “Bonjour”.' },
            { speaker: 'Yanis', fr: 'Merci, c’est gentil.', en: 'Thank you, that’s kind.' },
            { speaker: 'Prof', fr: 'De rien. Travaillez en binôme.', en: 'You’re welcome. Work in pairs.' },
          ],
        },
      },
      {
        id: 'u0-days-cards',
        type: 'flashcards',
        title: { fr: 'Les jours', en: 'The days' },
        items: [
          { id: 'lun', fr: 'lundi', en: 'Monday' },
          { id: 'mar', fr: 'mardi', en: 'Tuesday' },
          { id: 'mer', fr: 'mercredi', en: 'Wednesday' },
          { id: 'jeu', fr: 'jeudi', en: 'Thursday' },
          { id: 'ven', fr: 'vendredi', en: 'Friday' },
          { id: 'sam', fr: 'samedi', en: 'Saturday' },
          { id: 'dim', fr: 'dimanche', en: 'Sunday' },
        ],
      },
      {
        id: 'u0-months-cards',
        type: 'flashcards',
        title: { fr: 'Les mois', en: 'The months' },
        items: [
          { id: 'jan', fr: 'janvier', en: 'January' },
          { id: 'fev', fr: 'février', en: 'February' },
          { id: 'mars', fr: 'mars', en: 'March' },
          { id: 'avr', fr: 'avril', en: 'April' },
          { id: 'mai', fr: 'mai', en: 'May' },
          { id: 'juin', fr: 'juin', en: 'June' },
          { id: 'juil', fr: 'juillet', en: 'July' },
          { id: 'aou', fr: 'août', en: 'August' },
          { id: 'sep', fr: 'septembre', en: 'September' },
          { id: 'oct', fr: 'octobre', en: 'October' },
          { id: 'nov', fr: 'novembre', en: 'November' },
          { id: 'dec', fr: 'décembre', en: 'December' },
        ],
      },
      {
        id: 'u0-week-match',
        type: 'matching',
        title: { fr: 'Une semaine d’étude', en: 'A study week' },
        intro: {
          fr: 'Associe le jour et une activité possible. Invente ensuite ta vraie semaine.',
          en: 'Match the day and a possible activity. Then invent your real week.',
        },
        pairs: [
          { id: 'w1', left: 'lundi matin', right: 'aller en classe de français' },
          { id: 'w2', left: 'mardi après-midi', right: 'apprendre dix mots' },
          { id: 'w3', left: 'mercredi', right: 'lire un article' },
          { id: 'w4', left: 'vendredi', right: 'écouter une chanson' },
          { id: 'w5', left: 'samedi', right: 'regarder une vidéo' },
          { id: 'w6', left: 'dimanche', right: 'répéter l’alphabet' },
        ],
      },
      {
        id: 'u0-present-quiz',
        type: 'quiz',
        title: { fr: 'Se présenter', en: 'Introduce yourself' },
        questions: [
          {
            id: 'pr1',
            prompt: { fr: 'Pour dire ton nom :', en: 'To say your name:' },
            options: [
              { fr: 'Je m’appelle…', en: 'My name is…' },
              { fr: 'Au revoir…', en: 'Goodbye…' },
              { fr: 'Ouvrez…', en: 'Open…' },
            ],
            answer: 0,
            explanation: { fr: 'Je m’appelle + prénom (+ nom).', en: 'Je m’appelle + first name (+ surname).' },
          },
          {
            id: 'pr2',
            prompt: { fr: 'Le mois de naissance, un modèle :', en: 'Birth month, one model:' },
            options: [
              { fr: 'Je suis né(e) en mars.', en: 'I was born in March.' },
              { fr: 'Je suis Lyon.', en: 'I am Lyon.' },
              { fr: 'Je suis lundi.', en: 'I am Monday.' },
            ],
            answer: 0,
            explanation: {
              fr: 'né au masculin, née au féminin. Puis en + mois.',
              en: 'né for masculine, née for feminine. Then en + month.',
            },
          },
          {
            id: 'pr3',
            prompt: { fr: 'Quand on te dit merci, tu peux répondre :', en: 'When someone says thank you, you can reply:' },
            options: [
              { fr: 'De rien', en: 'You’re welcome' },
              { fr: 'Lisez', en: 'Read' },
              { fr: 'janvier', en: 'January' },
            ],
            answer: 0,
            explanation: { fr: 'De rien, je vous en prie, ou bienvenue au Canada.', en: 'De rien, je vous en prie, or bienvenue in Canada.' },
          },
        ],
      },
    ],
  },
  {
    id: 'bilan',
    unitId: 0,
    number: 7,
    title: { fr: 'Bilan', en: 'Checkpoint' },
    summary: {
      fr: 'Salutations, politesse, monde francophone, alphabet, classe : un passage rapide avant l’unité 1.',
      en: 'Greetings, politeness, the French-speaking world, alphabet, class: a quick pass before Unit 1.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Si une question bloque, retourne à la leçon. L’A1 tient par la répétition courte.',
          en: 'If a question sticks, go back to the lesson. A1 holds through short repetition.',
        },
      },
    ],
    activities: [
      {
        id: 'u0-bilan-quiz',
        type: 'quiz',
        title: { fr: 'Checkpoint unité 0', en: 'Unit 0 checkpoint' },
        questions: [
          {
            id: 'b1',
            prompt: { fr: 'Le soir, pour arriver, tu dis :', en: 'In the evening, when you arrive, you say:' },
            options: [
              { fr: 'Bonsoir', en: 'Good evening' },
              { fr: 'Bonne nuit', en: 'Good night' },
              { fr: 'Ouvrez', en: 'Open' },
            ],
            answer: 0,
            explanation: { fr: 'Bonsoir pour arriver ; bonne nuit pour dormir.', en: 'Bonsoir to arrive; bonne nuit to sleep.' },
          },
          {
            id: 'b2',
            prompt: { fr: 'Pour partir, le plus simple :', en: 'To leave, the simplest:' },
            options: [
              { fr: 'Au revoir', en: 'Goodbye' },
              { fr: 'Bonjour', en: 'Hello' },
              { fr: 'Écoutez', en: 'Listen' },
            ],
            answer: 0,
            explanation: { fr: 'Au revoir, à bientôt, à tout à l’heure selon le cas.', en: 'Au revoir, à bientôt, à tout à l’heure depending on the case.' },
          },
          {
            id: 'b3',
            prompt: { fr: 'Pour demander poliment :', en: 'To ask politely:' },
            options: [
              { fr: 's’il vous plaît', en: 'please' },
              { fr: 'lundi', en: 'Monday' },
              { fr: 'Lyon', en: 'Lyon' },
            ],
            answer: 0,
            explanation: { fr: 'S’il vous plaît / s’il te plaît.', en: 'S’il vous plaît / s’il te plaît.' },
          },
          {
            id: 'b4',
            prompt: { fr: 'Bruxelles, c’est en…', en: 'Brussels is in…' },
            options: [
              { fr: 'Belgique', en: 'Belgium' },
              { fr: 'Haïti', en: 'Haiti' },
              { fr: 'Andorre', en: 'Andorra' },
            ],
            answer: 0,
            explanation: { fr: 'Capitale de la Belgique.', en: 'Capital of Belgium.' },
          },
          {
            id: 'b5',
            prompt: { fr: 'Tu ne comprends pas. Tu dis :', en: 'You don’t understand. You say:' },
            options: [
              { fr: 'Je ne comprends pas. Vous pouvez répéter ?', en: 'I don’t understand. Can you repeat?' },
              { fr: 'Je suis Lyon.', en: 'I am Lyon.' },
              { fr: 'C’est le soir.', en: 'It is evening.' },
            ],
            answer: 0,
            explanation: { fr: 'Tes deux phrases d’urgence A1.', en: 'Your two A1 emergency sentences.' },
          },
          {
            id: 'b6',
            prompt: { fr: 'Le premier mois de l’année :', en: 'The first month of the year:' },
            options: [
              { fr: 'janvier', en: 'January' },
              { fr: 'lundi', en: 'Monday' },
              { fr: 'Genève', en: 'Geneva' },
            ],
            answer: 0,
            explanation: { fr: 'janvier, février, mars…', en: 'January, February, March…' },
          },
        ],
      },
    ],
  },
]
