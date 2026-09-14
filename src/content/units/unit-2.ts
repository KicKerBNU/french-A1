import type { Lesson } from '@/types/course'

export const unit2Lessons: Lesson[] = [
  {
    id: 'ouverture',
    unitId: 2,
    number: 1,
    title: { fr: 'Des métiers de rêve ?', en: 'Dream jobs?' },
    summary: {
      fr: 'Réalisateur, éco-guide, styliste… Des métiers typiques, d’autres plus insolites. Et toi, tu rêves d’un métier ?',
      en: 'Film director, eco-guide, fashion designer… Some jobs feel typical, others unusual. And you: is there a job you dream of?',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Il y a beaucoup de métiers', en: 'There are many jobs' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Dans cette unité, tu parles du travail : le cinéma, la nature, la mode, puis un premier jour au bureau et le téléphone. Tu apprends aussi avoir, les verbes en -er, le / la / les, et les nombres.',
          en: 'In this unit you talk about work: cinema, nature, fashion, then a first day at the office and the phone. You also learn avoir, -er verbs, le / la / les, and numbers.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'un réalisateur, une actrice, un photographe', en: 'a director, an actress, a photographer' },
          { fr: 'un éco-guide, un conservateur de parc', en: 'an eco-guide, a park ranger' },
          { fr: 'un/une styliste, un mannequin', en: 'a fashion designer, a model' },
        ],
      },
    ],
    activities: [
      {
        id: 'u2-open-quiz',
        type: 'quiz',
        title: { fr: 'Typique ou insolite ?', en: 'Typical or unusual?' },
        questions: [
          {
            id: 'o1',
            prompt: { fr: 'Un métier « de rêve », c’est souvent…', en: 'A “dream job” is often…' },
            options: [
              { fr: 'un métier que tu aimes beaucoup', en: 'a job you really like' },
              { fr: 'un jour de la semaine', en: 'a day of the week' },
              { fr: 'un pays seulement', en: 'only a country' },
            ],
            answer: 0,
            explanation: { fr: 'Rêver d’un métier = imaginer le travail que tu aimes.', en: 'To dream of a job = imagine the work you love.' },
          },
          {
            id: 'o2',
            prompt: { fr: 'Réalisateur, c’est un métier du…', en: 'Réalisateur is a job in…' },
            options: [
              { fr: 'cinéma', en: 'cinema' },
              { fr: 'plomberie', en: 'plumbing' },
              { fr: 'train', en: 'the train' },
            ],
            answer: 0,
            explanation: { fr: 'Le réalisateur dirige un film.', en: 'The director runs a film.' },
          },
          {
            id: 'o3',
            prompt: { fr: 'Pour dire le métier dont tu rêves :', en: 'To say the job you dream of:' },
            options: [
              { fr: 'Je rêve d’être photographe.', en: 'I dream of being a photographer.' },
              { fr: 'Je suis lundi.', en: 'I am Monday.' },
              { fr: 'Ouvrez le métier.', en: 'Open the job.' },
            ],
            answer: 0,
            explanation: { fr: 'Je rêve d’être + métier. Ou : Je voudrais être…', en: 'Je rêve d’être + job. Or: Je voudrais être…' },
          },
        ],
      },
    ],
  },
  {
    id: 'silence-on-tourne',
    unitId: 2,
    number: 2,
    title: { fr: 'Silence, on tourne', en: 'Quiet on set' },
    summary: {
      fr: 'Le cinéma : avoir au présent, les verbes en -er, et demander poliment avec pourriez-vous.',
      en: 'Cinema: avoir in the present, -er verbs, and asking politely with pourriez-vous.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Sur un plateau de cinéma', en: 'On a film set' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Autour d’un réalisateur, il y a une équipe : photographe, ingénieur du son, acteur, actrice, journaliste. On donne des infos personnelles : âge, études, nationalité. Et on conjugue avoir : j’ai 40 ans, elle a beaucoup de talent.',
          en: 'Around a director there is a crew: photographer, sound engineer, actor, actress, journalist. You give personal information: age, studies, nationality. And you conjugate avoir: j’ai 40 ans, elle a beaucoup de talent.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Avoir au présent', en: 'Avoir in the present' },
        text: {
          fr: 'j’ai, tu as, il/elle/on a, nous avons, vous avez, ils/elles ont. J’ai 28 ans. Ils ont trois enfants. Il a beaucoup d’expérience.',
          en: 'j’ai, tu as, il/elle/on a, nous avons, vous avez, ils/elles ont. I am 28. They have three children. He has a lot of experience.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Les verbes en -er', en: '-er verbs' },
        text: {
          fr: 'travailler → je travaille, tu travailles, il travaille, nous travaillons, vous travaillez, ils travaillent. Attention : nous corrigeons (pas *corregeons). nous appelons (un seul l à nous/vous).',
          en: 'travailler → je travaille, tu travailles, il travaille, nous travaillons, vous travaillez, ils travaillent. Watch: nous corrigeons (not *corregeons). nous appelons (one l with nous/vous).',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'Pourriez-vous répéter, s’il vous plaît ?', en: 'Could you repeat, please?' },
          { fr: 'Pourriez-vous épeler votre nom ?', en: 'Could you spell your name?' },
          { fr: 'Pourriez-vous parler plus lentement ?', en: 'Could you speak more slowly?' },
        ],
      },
    ],
    activities: [
      {
        id: 'u2-cinema-cards',
        type: 'flashcards',
        title: { fr: 'Le monde du cinéma', en: 'The world of cinema' },
        items: [
          { id: 'real', fr: 'un réalisateur / une réalisatrice', en: 'a film director' },
          { id: 'act', fr: 'un acteur / une actrice', en: 'an actor / an actress' },
          { id: 'photo', fr: 'un/une photographe', en: 'a photographer' },
          { id: 'son', fr: 'un ingénieur du son', en: 'a sound engineer' },
          { id: 'scen', fr: 'un/une scénariste', en: 'a screenwriter' },
          { id: 'jour', fr: 'un/une journaliste', en: 'a journalist' },
          { id: 'role', fr: 'un rôle', en: 'a role' },
          { id: 'plateau', fr: 'un plateau', en: 'a film set' },
          { id: 'talent', fr: 'avoir du talent', en: 'to have talent' },
          { id: 'exp', fr: 'avoir de l’expérience', en: 'to have experience' },
        ],
      },
      {
        id: 'u2-set-match',
        type: 'matching',
        title: { fr: 'Qui fait quoi ?', en: 'Who does what?' },
        pairs: [
          { id: 's1', left: 'le réalisateur', right: 'explique le scénario' },
          { id: 's2', left: 'le photographe', right: 'prend des images' },
          { id: 's3', left: 'l’ingénieur du son', right: 'écoute avec un casque' },
          { id: 's4', left: 'l’actrice', right: 'joue un rôle' },
          { id: 's5', left: 'le journaliste', right: 'pose des questions' },
        ],
      },
      {
        id: 'u2-avoir-quiz',
        type: 'quiz',
        title: { fr: 'Avoir au présent', en: 'Avoir in the present' },
        questions: [
          {
            id: 'av1',
            prompt: { fr: 'Denis ___ 53 ans.', en: 'Denis ___ 53 years old.' },
            options: [
              { fr: 'a', en: 'a' },
              { fr: 'est', en: 'est' },
              { fr: 'ont', en: 'ont' },
            ],
            answer: 0,
            explanation: { fr: 'Il/elle a + âge. Être n’introduit pas l’âge en français.', en: 'Il/elle a + age. French does not use être for age.' },
          },
          {
            id: 'av2',
            prompt: { fr: 'Nous ___ une équipe formidable.', en: 'We ___ a great team.' },
            options: [
              { fr: 'avons', en: 'avons' },
              { fr: 'avez', en: 'avez' },
              { fr: 'sont', en: 'sont' },
            ],
            answer: 0,
            explanation: { fr: 'nous avons.', en: 'nous avons.' },
          },
          {
            id: 'av3',
            prompt: { fr: 'Ils ___ trois enfants.', en: 'They ___ three children.' },
            options: [
              { fr: 'ont', en: 'ont' },
              { fr: 'avons', en: 'avons' },
              { fr: 'est', en: 'est' },
            ],
            answer: 0,
            explanation: { fr: 'ils/elles ont.', en: 'ils/elles ont.' },
          },
          {
            id: 'av4',
            prompt: { fr: 'Vous ___ quel âge ?', en: 'How old ___ you?' },
            options: [
              { fr: 'avez', en: 'avez' },
              { fr: 'avons', en: 'avons' },
              { fr: 'êtes', en: 'êtes' },
            ],
            answer: 0,
            explanation: { fr: 'Vous avez quel âge ?', en: 'Vous avez quel âge?' },
          },
          {
            id: 'av5',
            prompt: { fr: '« Je suis réalisateur » utilise…', en: '“Je suis réalisateur” uses…' },
            options: [
              { fr: 'être (identité / métier)', en: 'être (identity / job)' },
              { fr: 'avoir seulement', en: 'only avoir' },
              { fr: 'un nombre', en: 'a number' },
            ],
            answer: 0,
            explanation: { fr: 'Métier et nationalité : être. Âge et possession : avoir.', en: 'Job and nationality: être. Age and possession: avoir.' },
          },
        ],
      },
      {
        id: 'u2-er-quiz',
        type: 'quiz',
        title: { fr: 'Les verbes en -er', en: '-er verbs' },
        questions: [
          {
            id: 'er1',
            prompt: { fr: 'Elle ___ le film à l’acteur. (expliquer)', en: 'She ___ the film to the actor. (expliquer)' },
            options: [
              { fr: 'explique', en: 'explique' },
              { fr: 'expliquons', en: 'expliquons' },
              { fr: 'expliquent', en: 'expliquent' },
            ],
            answer: 0,
            explanation: { fr: 'il/elle explique.', en: 'il/elle explique.' },
          },
          {
            id: 'er2',
            prompt: { fr: 'Ensuite elle ___ avec le photographe. (travailler)', en: 'Then she ___ with the photographer. (travailler)' },
            options: [
              { fr: 'travaille', en: 'travaille' },
              { fr: 'travaillez', en: 'travaillez' },
              { fr: 'travaillons', en: 'travaillons' },
            ],
            answer: 0,
            explanation: { fr: 'elle travaille.', en: 'elle travaille.' },
          },
          {
            id: 'er3',
            prompt: { fr: 'Nous ___ le scénario. (corriger)', en: 'We ___ the script. (corriger)' },
            options: [
              { fr: 'corrigeons', en: 'corrigeons' },
              { fr: 'corregeons', en: 'corregeons' },
              { fr: 'corrige', en: 'corrige' },
            ],
            answer: 0,
            explanation: { fr: 'Devant o, g → ge : nous corrigeons.', en: 'Before o, g → ge: nous corrigeons.' },
          },
          {
            id: 'er4',
            prompt: { fr: 'Elle ___ un nouveau film. (préparer)', en: 'She ___ a new film. (préparer)' },
            options: [
              { fr: 'prépare', en: 'prépare' },
              { fr: 'préparons', en: 'préparons' },
              { fr: 'préparent', en: 'préparent' },
            ],
            answer: 0,
            explanation: { fr: 'elle prépare.', en: 'elle prépare.' },
          },
        ],
      },
      {
        id: 'u2-interview-dialogue',
        type: 'dialogue',
        title: { fr: 'Une interview sur le plateau', en: 'An interview on set' },
        dialogue: {
          id: 'interview',
          title: { fr: 'Questions à un réalisateur', en: 'Questions to a director' },
          context: {
            fr: 'Une journaliste parle avec un réalisateur québécois. Écoute l’âge, le talent, l’équipe. Puis remets les répliques dans l’ordre.',
            en: 'A journalist talks with a Quebec director. Listen for age, talent, the crew. Then put the lines in order.',
          },
          lines: [
            { speaker: 'Inès', fr: 'Vous travaillez avec une grande équipe ?', en: 'Do you work with a large crew?' },
            { speaker: 'Marc', fr: 'Oui, nous travaillons ensemble. Le photographe a beaucoup de talent.', en: 'Yes, we work together. The photographer has a lot of talent.' },
            { speaker: 'Inès', fr: 'Et vous, vous avez quel âge ?', en: 'And you, how old are you?' },
            { speaker: 'Marc', fr: 'J’ai 46 ans. J’ai deux enfants, et j’habite à Montréal.', en: 'I’m 46. I have two children, and I live in Montreal.' },
            { speaker: 'Inès', fr: 'Merci beaucoup, et bon film !', en: 'Thank you very much, and have a good shoot!' },
          ],
        },
      },
      {
        id: 'u2-politesse-match',
        type: 'matching',
        title: { fr: 'Pourriez-vous… ?', en: 'Could you…?' },
        pairs: [
          { id: 'p1', left: 'Pourriez-vous répéter ?', right: 'vous n’entendez pas bien' },
          { id: 'p2', left: 'Pourriez-vous épeler ?', right: 'un nom difficile' },
          { id: 'p3', left: 'Pourriez-vous parler plus lentement ?', right: 'la personne parle trop vite' },
          { id: 'p4', left: 'Pourriez-vous confirmer le numéro ?', right: 'vous vérifiez une information' },
        ],
      },
      {
        id: 'u2-audition-dialogue',
        type: 'dialogue',
        title: { fr: 'À l’audition', en: 'At the audition' },
        dialogue: {
          id: 'audition',
          title: { fr: 'Questions personnelles', en: 'Personal questions' },
          context: {
            fr: 'On te pose des questions. Écoute, puis remets dans l’ordre. Ensuite, joue la scène : nom, âge, pourriez-vous épeler…',
            en: 'They ask you questions. Listen, then put them in order. Then play the scene: name, age, could you spell…',
          },
          lines: [
            { speaker: 'Studio', fr: 'Bonjour ! Quel est votre nom ?', en: 'Hello! What is your name?' },
            { speaker: 'Lina', fr: 'Je m’appelle Lina Kaboré.', en: 'My name is Lina Kaboré.' },
            { speaker: 'Studio', fr: 'Pourriez-vous épeler votre nom, s’il vous plaît ?', en: 'Could you spell your name, please?' },
            { speaker: 'Lina', fr: 'K, A, B, O, R, E. J’ai vingt-neuf ans.', en: 'K, A, B, O, R, E. I’m twenty-nine.' },
            { speaker: 'Studio', fr: 'Parfait. Merci et bonne journée !', en: 'Perfect. Thank you and have a good day!' },
          ],
        },
      },
    ],
  },
  {
    id: 'passion-nature',
    unitId: 2,
    number: 3,
    title: { fr: 'Passion nature', en: 'A passion for nature' },
    summary: {
      fr: 'Un éco-guide, les animaux, le / la / l’ / les, le pluriel des noms, et un rendez-vous pour une visite.',
      en: 'An eco-guide, animals, le / la / l’ / les, plural nouns, and booking a visit.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Au cœur de la savane et de la forêt', en: 'In the savannah and the forest' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Awa est éco-guide. Elle accompagne les visiteurs. Les adultes et les enfants observent les gorilles, les éléphants, les singes. Le gorille est dans la forêt. La panthère est très secrète. Après aimer, adorer, préférer, détester : on met souvent l’article défini.',
          en: 'Awa is an eco-guide. She goes with visitors. Adults and children watch gorillas, elephants, monkeys. The gorilla is in the forest. The panther is very secretive. After aimer, adorer, préférer, détester: you often use the definite article.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Les articles définis', en: 'Definite articles' },
        text: {
          fr: 'Masculin : le. Féminin : la. Voyelle ou h muet : l’ (l’éléphant, l’homme). Pluriel : les. Les enfants adorent les gorilles.',
          en: 'Masculine: le. Feminine: la. Vowel or silent h: l’ (l’éléphant, l’homme). Plural: les. Les enfants adorent les gorilles.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Le pluriel des noms', en: 'Plural of nouns' },
        text: {
          fr: 'En général on ajoute -s : le touriste → les touristes. Attention : le pays → les pays, l’animal → les animaux.',
          en: 'Usually add -s: le touriste → les touristes. Watch: le pays → les pays, l’animal → les animaux.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Phonétique : [ə], [a], [e]', en: 'Phonetics: [ə], [a], [e]' },
        text: {
          fr: 'Dans les articles, tu entends souvent le [lə], la [la], les [le]. Lis à voix haute : le gorille, la forêt, les éléphants.',
          en: 'In the articles you often hear le [lə], la [la], les [le]. Read aloud: le gorille, la forêt, les éléphants.',
        },
      },
    ],
    activities: [
      {
        id: 'u2-animaux-cards',
        type: 'flashcards',
        title: { fr: 'Les animaux', en: 'Animals' },
        items: [
          { id: 'gor', fr: 'le gorille / les gorilles', en: 'gorilla / gorillas' },
          { id: 'ele', fr: 'l’éléphant / les éléphants', en: 'elephant / elephants' },
          { id: 'pan', fr: 'la panthère / les panthères', en: 'panther / panthers' },
          { id: 'sin', fr: 'le singe / les singes', en: 'monkey / monkeys' },
          { id: 'buf', fr: 'le buffle / les buffles', en: 'buffalo / buffaloes' },
          { id: 'per', fr: 'le perroquet / les perroquets', en: 'parrot / parrots' },
          { id: 'for', fr: 'la forêt', en: 'the forest' },
          { id: 'sav', fr: 'la savane', en: 'the savannah' },
        ],
      },
      {
        id: 'u2-animaux-match',
        type: 'matching',
        title: { fr: 'Qui est cet animal ?', en: 'Which animal is this?' },
        pairs: [
          { id: 'an1', left: 'Ils ont une trompe.', right: 'les éléphants' },
          { id: 'an2', left: 'Elles sont noires. Elles aiment la forêt.', right: 'les panthères' },
          { id: 'an3', left: 'Ils ressemblent à l’homme. Ils vivent dans la forêt.', right: 'les gorilles' },
          { id: 'an4', left: 'Ils volent. Ils ont un bec et des plumes.', right: 'les perroquets' },
          { id: 'an5', left: 'Ils sont dans la savane. Ils ont des cornes.', right: 'les buffles' },
        ],
      },
      {
        id: 'u2-articles-quiz',
        type: 'quiz',
        title: { fr: 'Le, la, l’ ou les', en: 'Le, la, l’, or les' },
        questions: [
          {
            id: 'd1',
            prompt: { fr: '___ panthère noire préfère ___ forêt.', en: '___ black panther prefers ___ forest.' },
            options: [
              { fr: 'La · la', en: 'La · la' },
              { fr: 'Le · les', en: 'Le · les' },
              { fr: 'Les · le', en: 'Les · le' },
            ],
            answer: 0,
            explanation: { fr: 'panthère et forêt = féminin singulier → la.', en: 'panthère and forêt = feminine singular → la.' },
          },
          {
            id: 'd2',
            prompt: { fr: '___ éléphants aiment ___ savane.', en: '___ elephants like ___ savannah.' },
            options: [
              { fr: 'Les · la', en: 'Les · la' },
              { fr: 'Le · les', en: 'Le · les' },
              { fr: 'La · le', en: 'La · le' },
            ],
            answer: 0,
            explanation: { fr: 'éléphants = pluriel → les. savane = féminin → la.', en: 'éléphants = plural → les. savane = feminine → la.' },
          },
          {
            id: 'd3',
            prompt: { fr: '___ gorille est dans ___ forêt.', en: '___ gorilla is in ___ forest.' },
            options: [
              { fr: 'Le · la', en: 'Le · la' },
              { fr: 'La · le', en: 'La · le' },
              { fr: 'Les · les', en: 'Les · les' },
            ],
            answer: 0,
            explanation: { fr: 'gorille = masculin → le. forêt = féminin → la.', en: 'gorille = masculine → le. forêt = feminine → la.' },
          },
          {
            id: 'd4',
            prompt: { fr: '___ chauffeur accompagne ___ visiteurs.', en: '___ driver goes with ___ visitors.' },
            options: [
              { fr: 'Le · les', en: 'Le · les' },
              { fr: 'La · le', en: 'La · le' },
              { fr: 'Les · la', en: 'Les · la' },
            ],
            answer: 0,
            explanation: { fr: 'chauffeur = masculin singulier → le. visiteurs = pluriel → les.', en: 'chauffeur = masculine singular → le. visiteurs = plural → les.' },
          },
          {
            id: 'd5',
            prompt: { fr: 'Devant une voyelle : ___ éléphant.', en: 'Before a vowel: ___ elephant.' },
            options: [
              { fr: 'l’', en: 'l’' },
              { fr: 'le', en: 'le' },
              { fr: 'la', en: 'la' },
            ],
            answer: 0,
            explanation: { fr: 'l’éléphant (voyelle).', en: 'l’éléphant (vowel).' },
          },
        ],
      },
      {
        id: 'u2-pluriel-quiz',
        type: 'quiz',
        title: { fr: 'Singulier ou pluriel ?', en: 'Singular or plural?' },
        questions: [
          {
            id: 'pl1',
            prompt: { fr: 'le gorille →', en: 'le gorille →' },
            options: [
              { fr: 'les gorilles', en: 'les gorilles' },
              { fr: 'les gorille', en: 'les gorille' },
              { fr: 'le gorilles', en: 'le gorilles' },
            ],
            answer: 0,
            explanation: { fr: 'On ajoute -s : les gorilles.', en: 'Add -s: les gorilles.' },
          },
          {
            id: 'pl2',
            prompt: { fr: 'l’animal →', en: 'l’animal →' },
            options: [
              { fr: 'les animaux', en: 'les animaux' },
              { fr: 'les animals', en: 'les animals' },
              { fr: 'les animale', en: 'les animale' },
            ],
            answer: 0,
            explanation: { fr: 'al → aux : animal / animaux.', en: 'al → aux: animal / animaux.' },
          },
          {
            id: 'pl3',
            prompt: { fr: 'le pays →', en: 'le pays →' },
            options: [
              { fr: 'les pays (invariable)', en: 'les pays (no change)' },
              { fr: 'les payss', en: 'les payss' },
              { fr: 'les payes', en: 'les payes' },
            ],
            answer: 0,
            explanation: { fr: 'pays ne change pas à l’écrit.', en: 'pays does not change in writing.' },
          },
          {
            id: 'pl4',
            prompt: { fr: 'la voix →', en: 'la voix →' },
            options: [
              { fr: 'les voix', en: 'les voix' },
              { fr: 'les voixes', en: 'les voixes' },
              { fr: 'les voixs', en: 'les voixs' },
            ],
            answer: 0,
            explanation: { fr: 'voix est invariable à l’écrit.', en: 'voix does not change in writing.' },
          },
        ],
      },
      {
        id: 'u2-voyelles-listen',
        type: 'listen',
        title: { fr: 'Le, la, les à voix haute', en: 'Le, la, les out loud' },
        intro: {
          fr: 'Écoute et répète. Sens [ə] dans le, [a] dans la, [e] dans les.',
          en: 'Listen and repeat. Feel [ə] in le, [a] in la, [e] in les.',
        },
        items: [
          { id: 'v1', fr: 'le gorille', en: '[lə] — masculine article' },
          { id: 'v2', fr: 'la forêt', en: '[la] — feminine article' },
          { id: 'v3', fr: 'les éléphants', en: '[le] — plural article' },
          { id: 'v4', fr: 'l’éléphant', en: 'l’ before a vowel' },
          { id: 'v5', fr: 'les enfants adorent les gorilles', en: 'definite article after adorer' },
        ],
      },
      {
        id: 'u2-parc-dialogue',
        type: 'dialogue',
        title: { fr: 'Réserver une visite', en: 'Book a visit' },
        dialogue: {
          id: 'parc',
          title: { fr: 'Au téléphone avec l’éco-guide', en: 'On the phone with the eco-guide' },
          context: {
            fr: 'Une visiteuse appelle pour organiser une journée au parc. Écoute les animaux et le jour, puis remets dans l’ordre.',
            en: 'A visitor calls to organise a day at the park. Listen for the animals and the day, then put the lines in order.',
          },
          lines: [
            { speaker: 'Claire', fr: 'Bonjour, je voudrais visiter le parc mercredi.', en: 'Hello, I would like to visit the park on Wednesday.' },
            { speaker: 'Awa', fr: 'Bonjour. Mercredi, c’est l’observation des oiseaux. Les gorilles, c’est vendredi.', en: 'Hello. Wednesday is birdwatching. Gorillas are on Friday.' },
            { speaker: 'Claire', fr: 'D’accord. Et les éléphants ?', en: 'All right. And the elephants?' },
            { speaker: 'Awa', fr: 'Les éléphants, toute la semaine, en safari voiture.', en: 'Elephants all week, on a jeep safari.' },
            { speaker: 'Claire', fr: 'Parfait. On confirme vendredi, alors. Merci !', en: 'Perfect. We’ll confirm Friday, then. Thank you!' },
          ],
        },
      },
    ],
  },
  {
    id: 'styliste-en-vogue',
    unitId: 2,
    number: 4,
    title: { fr: 'Styliste en vogue', en: 'A designer in fashion' },
    summary: {
      fr: 'La mode, les pronoms toniques, les préférences, quand ?, et les nombres jusqu’à 100.',
      en: 'Fashion, stressed pronouns, preferences, quand?, and numbers up to 100.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Moi, je préfère…', en: 'Me, I prefer…' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Pour insister, on utilise un pronom tonique : moi, toi, lui, elle, nous, vous, eux, elles. Et toi, tu aimes la collection d’hiver ? Moi, je préfère l’été. Il fait beau, il y a du soleil.',
          en: 'To insist, you use a stressed pronoun: moi, toi, lui, elle, nous, vous, eux, elles. And you, do you like the winter collection? Me, I prefer summer. The weather is nice, there is sun.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Les pronoms toniques', en: 'Stressed pronouns' },
        text: {
          fr: 'je → moi · tu → toi · il → lui · elle → elle · nous → nous · vous → vous · ils → eux · elles → elles. Et toi ? Et vous ?',
          en: 'je → moi · tu → toi · il → lui · elle → elle · nous → nous · vous → vous · ils → eux · elles → elles. And you?',
        },
      },
      {
        type: 'note',
        title: { fr: 'Quand ?', en: 'Quand?' },
        text: {
          fr: 'Pour le moment d’un événement : Quand est-ce que vous travaillez ? — À 8 h. Le samedi 9 novembre. À 21 heures.',
          en: 'For the time of an event: When do you work? — At 8. Saturday 9 November. At 9 p.m.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: '70 soixante-dix · 71 soixante et onze · 80 quatre-vingts', en: '70 · 71 · 80' },
          { fr: '90 quatre-vingt-dix · 91 quatre-vingt-onze · 100 cent', en: '90 · 91 · 100' },
          { fr: 'Il mesure 1 m 80. Elle pèse 65 kilos.', en: 'He is 1.80 m tall. She weighs 65 kilos.' },
        ],
      },
    ],
    activities: [
      {
        id: 'u2-mode-cards',
        type: 'flashcards',
        title: { fr: 'Mode et météo', en: 'Fashion and weather' },
        items: [
          { id: 'sty', fr: 'un/une styliste', en: 'a fashion designer' },
          { id: 'man', fr: 'un/une mannequin', en: 'a model' },
          { id: 'col', fr: 'une collection', en: 'a collection' },
          { id: 'def', fr: 'un défilé', en: 'a fashion show' },
          { id: 'hiv', fr: 'la collection d’hiver', en: 'the winter collection' },
          { id: 'ete', fr: 'la collection d’été', en: 'the summer collection' },
          { id: 'beau', fr: 'Il fait beau.', en: 'The weather is nice.' },
          { id: 'sol', fr: 'Il y a du soleil.', en: 'There is sun.' },
        ],
      },
      {
        id: 'u2-toniques-quiz',
        type: 'quiz',
        title: { fr: 'Les pronoms toniques', en: 'Stressed pronouns' },
        questions: [
          {
            id: 't1',
            prompt: { fr: 'Je m’appelle Steven et je suis photographe. Et ___ ?', en: 'My name is Steven and I’m a photographer. And ___?' },
            options: [
              { fr: 'toi', en: 'toi' },
              { fr: 'tu', en: 'tu' },
              { fr: 'te', en: 'te' },
            ],
            answer: 0,
            explanation: { fr: 'Et toi ? (pronom tonique, pas tu).', en: 'Et toi? (stressed pronoun, not tu).' },
          },
          {
            id: 't2',
            prompt: { fr: 'Je vais bien, monsieur. Et ___ ?', en: 'I’m fine, sir. And ___?' },
            options: [
              { fr: 'vous', en: 'vous' },
              { fr: 'toi', en: 'toi' },
              { fr: 'tu', en: 'tu' },
            ],
            answer: 0,
            explanation: { fr: 'Forme polie : Et vous ?', en: 'Polite: Et vous?' },
          },
          {
            id: 't3',
            prompt: { fr: '___ , ils sont très célèbres.', en: '___ , they are very famous.' },
            options: [
              { fr: 'Eux', en: 'Eux' },
              { fr: 'Ils', en: 'Ils' },
              { fr: 'Leur', en: 'Leur' },
            ],
            answer: 0,
            explanation: { fr: 'Pour insister au masculin pluriel : eux.', en: 'To insist in masculine plural: eux.' },
          },
          {
            id: 't4',
            prompt: { fr: 'Moi, je préfère Instagram. Et toi ? — Moi, je préfère…', en: 'I prefer Instagram. And you? — I prefer…' },
            options: [
              { fr: 'les magazines', en: 'magazines' },
              { fr: 'tu magazines', en: 'tu magazines' },
              { fr: 'être lundi', en: 'to be Monday' },
            ],
            answer: 0,
            explanation: { fr: 'Moi, je préfère + nom. On répète moi pour insister.', en: 'Moi, je préfère + noun. Repeat moi for emphasis.' },
          },
        ],
      },
      {
        id: 'u2-vitrine-dialogue',
        type: 'dialogue',
        title: { fr: 'Devant la vitrine', en: 'In front of the window' },
        dialogue: {
          id: 'vitrine',
          title: { fr: 'Quatre amies regardent une collection', en: 'Four friends look at a collection' },
          context: {
            fr: 'Préférences et pronoms toniques. Écoute qui aime quoi, puis remets les répliques dans l’ordre.',
            en: 'Preferences and stressed pronouns. Listen to who likes what, then put the lines in order.',
          },
          lines: [
            { speaker: 'Nora', fr: 'Oh, regarde ! C’est la collection d’hiver.', en: 'Oh, look! It’s the winter collection.' },
            { speaker: 'Inès', fr: 'Moi, j’adore cette veste. Et toi ?', en: 'Me, I love this jacket. And you?' },
            { speaker: 'Sara', fr: 'Moi, je préfère les robes d’été. Il fait beau aujourd’hui.', en: 'Me, I prefer the summer dresses. The weather is nice today.' },
            { speaker: 'Léa', fr: 'Nous, on aime ce style. Venez, on regarde les nouveautés !', en: 'We like this style. Come on, let’s look at the new pieces!' },
          ],
        },
      },
      {
        id: 'u2-nombres-cards',
        type: 'flashcards',
        title: { fr: 'Les nombres utiles', en: 'Useful numbers' },
        items: [
          { id: 'n11', fr: 'onze, douze, treize, quatorze, quinze', en: '11–15' },
          { id: 'n16', fr: 'seize, dix-sept, dix-huit, dix-neuf, vingt', en: '16–20' },
          { id: 'n21', fr: 'vingt et un', en: '21' },
          { id: 'n70', fr: 'soixante-dix', en: '70' },
          { id: 'n71', fr: 'soixante et onze', en: '71' },
          { id: 'n80', fr: 'quatre-vingts', en: '80' },
          { id: 'n90', fr: 'quatre-vingt-dix', en: '90' },
          { id: 'n91', fr: 'quatre-vingt-onze', en: '91' },
          { id: 'n100', fr: 'cent', en: '100' },
        ],
      },
      {
        id: 'u2-quand-quiz',
        type: 'quiz',
        title: { fr: 'Quand ? Nombres et mesures', en: 'When? Numbers and measurements' },
        questions: [
          {
            id: 'q1',
            prompt: { fr: 'Quand commence le défilé ? — ___ 21 heures.', en: 'When does the show start? — ___ 9 p.m.' },
            options: [
              { fr: 'À', en: 'À' },
              { fr: 'Le', en: 'Le' },
              { fr: 'En', en: 'En' },
            ],
            answer: 0,
            explanation: { fr: 'À + heure.', en: 'À + clock time.' },
          },
          {
            id: 'q2',
            prompt: { fr: 'La soirée a lieu ___ samedi 9 novembre.', en: 'The evening is ___ Saturday 9 November.' },
            options: [
              { fr: 'le', en: 'le' },
              { fr: 'à', en: 'à' },
              { fr: 'en', en: 'en' },
            ],
            answer: 0,
            explanation: { fr: 'le + jour / date.', en: 'le + day / date.' },
          },
          {
            id: 'q3',
            prompt: { fr: '71 s’écrit…', en: '71 is written…' },
            options: [
              { fr: 'soixante et onze', en: 'soixante et onze' },
              { fr: 'soixante-onze', en: 'soixante-onze' },
              { fr: 'quatre-vingt-onze', en: 'quatre-vingt-onze' },
            ],
            answer: 0,
            explanation: { fr: '21, 31, 41, 51, 61, 71 : et un / et onze.', en: '21, 31, 41, 51, 61, 71: et un / et onze.' },
          },
          {
            id: 'q4',
            prompt: { fr: '80 s’écrit…', en: '80 is written…' },
            options: [
              { fr: 'quatre-vingts', en: 'quatre-vingts' },
              { fr: 'huitante', en: 'huitante' },
              { fr: 'soixante-vingt', en: 'soixante-vingt' },
            ],
            answer: 0,
            explanation: { fr: 'En France : quatre-vingts (avec -s). En Suisse, on entend aussi huitante.', en: 'In France: quatre-vingts (with -s). In Switzerland you also hear huitante.' },
          },
          {
            id: 'q5',
            prompt: { fr: 'Elle mesure 1 m 70. Elle ___ 58 kilos.', en: 'She is 1.70 m tall. She ___ 58 kilos.' },
            options: [
              { fr: 'pèse', en: 'pèse' },
              { fr: 'mesure aussi', en: 'also measures' },
              { fr: 'a beau', en: 'has nice weather' },
            ],
            answer: 0,
            explanation: { fr: 'mesurer = taille. peser = poids.', en: 'mesurer = height. peser = weight.' },
          },
        ],
      },
      {
        id: 'u2-nombres-listen',
        type: 'listen',
        title: { fr: 'Dire les nombres', en: 'Say the numbers' },
        intro: {
          fr: 'Écoute et répète. Attention à soixante-dix, quatre-vingts, quatre-vingt-dix.',
          en: 'Listen and repeat. Watch soixante-dix, quatre-vingts, quatre-vingt-dix.',
        },
        items: [
          { id: 'nb1', fr: 'dix-sept', en: '17' },
          { id: 'nb2', fr: 'vingt et un', en: '21' },
          { id: 'nb3', fr: 'soixante et onze', en: '71' },
          { id: 'nb4', fr: 'quatre-vingts', en: '80' },
          { id: 'nb5', fr: 'quatre-vingt-onze', en: '91' },
        ],
      },
    ],
  },
  {
    id: 'cest-tout-nouveau',
    unitId: 2,
    number: 5,
    title: { fr: 'C’est tout nouveau !', en: 'It’s all new!' },
    summary: {
      fr: 'Premier jour au travail, le répondeur, trois appels, les enchaînements, et l’alphabet au téléphone.',
      en: 'First day at work, voicemail, three calls, linking sounds, and the telephone alphabet.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Allô, j’écoute ?', en: 'Hello, I’m listening?' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Au bureau, on se présente, on déjeune parfois ensemble, on dit quand on ne comprend pas. Au téléphone : Allô, c’est moi. Vous êtes à l’appareil ? On laisse un message sur le répondeur. Pour épeler, l’agent utilise l’alphabet téléphonique : A comme Anatole, R comme Raoul…',
          en: 'At the office you introduce yourself, sometimes have lunch together, and say when you don’t understand. On the phone: Allô, c’est moi. Are you on the line? You leave a voicemail. To spell, the agent uses the telephone alphabet: A as in Anatole, R as in Raoul…',
        },
      },
      {
        type: 'note',
        title: { fr: 'Les enchaînements', en: 'Linking sounds' },
        text: {
          fr: 'À l’oral, on ne fait pas de pause entre la fin d’un mot et le début du suivant : Tu es au travail ? Il est où votre bureau ? Pas de « trou » entre les voyelles ou entre consonne et voyelle.',
          en: 'In speech you do not pause between the end of one word and the start of the next: Tu es au travail? Il est où votre bureau? No gap between vowels, or between consonant and vowel.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'Bonjour, vous êtes sur le répondeur de…', en: 'Hello, you’ve reached the voicemail of…' },
          { fr: 'Je ne peux pas répondre. Merci de laisser un message.', en: 'I can’t take your call. Please leave a message.' },
          { fr: 'On se voit lundi ? — Oui, c’est okay pour moi. À lundi !', en: 'See you Monday? — Yes, that works for me. See you Monday!' },
        ],
      },
    ],
    activities: [
      {
        id: 'u2-bureau-cards',
        type: 'flashcards',
        title: { fr: 'Au travail et au téléphone', en: 'At work and on the phone' },
        items: [
          { id: 'all', fr: 'Allô ?', en: 'Hello? (phone)' },
          { id: 'app', fr: 'être à l’appareil', en: 'to be on the line' },
          { id: 'rep', fr: 'un répondeur', en: 'voicemail / answering machine' },
          { id: 'msg', fr: 'laisser un message', en: 'to leave a message' },
          { id: 'rdv', fr: 'un rendez-vous', en: 'an appointment' },
          { id: 'conf', fr: 'confirmer un rendez-vous', en: 'to confirm an appointment' },
          { id: 'ann', fr: 'annuler un rendez-vous', en: 'to cancel an appointment' },
          { id: 'rep2', fr: 'reporter un rendez-vous', en: 'to postpone an appointment' },
          { id: 'deso', fr: 'Désolé(e), je ne comprends pas.', en: 'Sorry, I don’t understand.' },
        ],
      },
      {
        id: 'u2-premier-jour-dialogue',
        type: 'dialogue',
        title: { fr: 'Premier jour au bureau', en: 'First day at the office' },
        dialogue: {
          id: 'jour1',
          title: { fr: 'Se présenter à l’équipe', en: 'Introduce yourself to the team' },
          context: {
            fr: 'Noah arrive. Formules du premier jour. Écoute, puis remets dans l’ordre.',
            en: 'Noah arrives. First-day phrases. Listen, then put the lines in order.',
          },
          lines: [
            { speaker: 'Noah', fr: 'Bonjour, je m’appelle Noah. Je suis nouveau ici.', en: 'Hello, my name is Noah. I’m new here.' },
            { speaker: 'Hélène', fr: 'Enchantée, Noah. Moi, c’est Hélène. Bienvenue dans l’équipe.', en: 'Nice to meet you, Noah. I’m Hélène. Welcome to the team.' },
            { speaker: 'Hélène', fr: 'Tu déjeunes avec nous à midi ?', en: 'Are you having lunch with us at noon?' },
            { speaker: 'Noah', fr: 'Excusez-moi… Vous pouvez répéter, s’il vous plaît ? Je ne comprends pas bien.', en: 'Excuse me… Could you repeat, please? I don’t quite understand.' },
            { speaker: 'Hélène', fr: 'On mange ensemble à midi. D’accord ?', en: 'We’re eating together at noon. Okay?' },
            { speaker: 'Noah', fr: 'Ah oui, d’accord. Merci !', en: 'Ah yes, okay. Thank you!' },
          ],
        },
      },
      {
        id: 'u2-appels-quiz',
        type: 'quiz',
        title: { fr: 'Trois appels', en: 'Three calls' },
        questions: [
          {
            id: 'ap1',
            prompt: { fr: 'Un nouveau demande un ordinateur. On lui dit : il est au 3e étage. C’est…', en: 'A new colleague asks for a computer. They tell him: it’s on the 3rd floor. This is…' },
            options: [
              { fr: 'un appel au travail, plutôt formel', en: 'a work call, rather formal' },
              { fr: 'maman au téléphone', en: 'mum on the phone' },
              { fr: 'un rendez-vous entre amis seulement', en: 'only a friends’ appointment' },
            ],
            answer: 0,
            explanation: { fr: 'Pourriez-vous… ? bureau, étage : contexte professionnel.', en: 'Pourriez-vous…? office, floor: professional context.' },
          },
          {
            id: 'ap2',
            prompt: { fr: '« Allô, c’est moi… Tu es au travail ? » C’est…', en: '“Allô, c’est moi… Are you at work?” This is…' },
            options: [
              { fr: 'un appel informel (famille)', en: 'an informal call (family)' },
              { fr: 'un service officiel seulement', en: 'only an official service' },
              { fr: 'un défilé de mode', en: 'a fashion show' },
            ],
            answer: 0,
            explanation: { fr: 'c’est moi + tu : proche, souvent la famille.', en: 'c’est moi + tu: close, often family.' },
          },
          {
            id: 'ap3',
            prompt: { fr: 'On confirme un rendez-vous lundi. On dit souvent :', en: 'You confirm a Monday appointment. You often say:' },
            options: [
              { fr: 'C’est okay pour moi. À lundi !', en: 'That works for me. See you Monday!' },
              { fr: 'Je suis un éléphant.', en: 'I am an elephant.' },
              { fr: 'Ouvrez le gorille.', en: 'Open the gorilla.' },
            ],
            answer: 0,
            explanation: { fr: 'Confirmer = dire oui + le jour. Annuler = dire non.', en: 'Confirm = say yes + the day. Cancel = say no.' },
          },
        ],
      },
      {
        id: 'u2-tel-dialogue',
        type: 'dialogue',
        title: { fr: 'Un ordinateur, s’il vous plaît', en: 'A computer, please' },
        dialogue: {
          id: 'ordi',
          title: { fr: 'Appel interne', en: 'Internal call' },
          context: {
            fr: 'Yann est nouveau. Il demande du matériel. Écoute l’étage, puis remets dans l’ordre.',
            en: 'Yann is new. He asks for equipment. Listen for the floor, then put the lines in order.',
          },
          lines: [
            { speaker: 'Yann', fr: 'Allô, je m’appelle Yann. Je suis nouveau ici. Pourriez-vous m’apporter un ordinateur ?', en: 'Hello, my name is Yann. I’m new here. Could you bring me a computer?' },
            { speaker: 'Service', fr: 'Oui, j’ai un ordinateur pour vous. Il est où, votre bureau ?', en: 'Yes, I have a computer for you. Where is your office?' },
            { speaker: 'Yann', fr: 'Je suis au deuxième étage.', en: 'I’m on the second floor.' },
            { speaker: 'Service', fr: 'D’accord, on arrive !', en: 'All right, we’re on our way!' },
          ],
        },
      },
      {
        id: 'u2-repondeur-quiz',
        type: 'quiz',
        title: { fr: 'Le message sur le répondeur', en: 'The voicemail message' },
        questions: [
          {
            id: 'r1',
            prompt: { fr: 'Sur un répondeur, on commence souvent par…', en: 'On voicemail you often start with…' },
            options: [
              { fr: 'Bonjour, vous êtes sur le répondeur de…', en: 'Hello, you’ve reached the voicemail of…' },
              { fr: 'Au revoir et merci d’avance seulement', en: 'only goodbye and thanks in advance' },
              { fr: 'Je mesure 1 m 80.', en: 'I am 1.80 m tall.' },
            ],
            answer: 0,
            explanation: { fr: 'On dit qui parle, puis on invite à laisser un message.', en: 'You say who is speaking, then invite a message.' },
          },
          {
            id: 'r2',
            prompt: { fr: '« Je suis absente. Merci de me laisser un message. » Le mot manquant du départ :', en: '“I’m away. Please leave me a message.” The missing opening word:' },
            options: [
              { fr: 'Bonjour / Allô', en: 'Bonjour / Allô' },
              { fr: 'Gorille', en: 'Gorilla' },
              { fr: 'Soixante', en: 'Sixty' },
            ],
            answer: 0,
            explanation: { fr: 'Formule type : salut + identité + excuse + merci de laisser un message.', en: 'Typical formula: greeting + identity + excuse + please leave a message.' },
          },
          {
            id: 'r3',
            prompt: { fr: 'Un médecin laisse un message : confirmer le rendez-vous, mardi 14 h. Vous devez arriver…', en: 'A doctor leaves a message: confirm the appointment, Tuesday 2 p.m. You should arrive…' },
            options: [
              { fr: 'un peu avant l’heure, par exemple 15 minutes avant', en: 'a little before the time, for example 15 minutes before' },
              { fr: 'le mois prochain seulement', en: 'only next month' },
              { fr: 'sans numéro de téléphone', en: 'with no phone number' },
            ],
            answer: 0,
            explanation: { fr: 'On note : raison de l’appel, date, heure, quand arriver, numéro à rappeler.', en: 'Note: reason for the call, date, time, when to arrive, number to call back.' },
          },
        ],
      },
      {
        id: 'u2-enchain-listen',
        type: 'listen',
        title: { fr: 'Les enchaînements', en: 'Linking sounds' },
        intro: {
          fr: 'Pas de pause entre les mots. Enchaîne : tu_es, il_est_où, vous_êtes.',
          en: 'No pause between words. Link: tu_es, il_est_où, vous_êtes.',
        },
        items: [
          { id: 'e1', fr: 'Tu es au travail ?', en: 'no gap after tu' },
          { id: 'e2', fr: 'Il est où votre bureau ?', en: 'il est où — keep the flow' },
          { id: 'e3', fr: 'Vous êtes à l’appareil ?', en: 'vous_êtes' },
          { id: 'e4', fr: 'On arrive !', en: 'smooth on + arrive' },
        ],
      },
      {
        id: 'u2-alphabet-tel',
        type: 'matching',
        title: { fr: 'Alphabet téléphonique', en: 'Telephone alphabet' },
        pairs: [
          { id: 'al1', left: 'A comme…', right: 'Anatole' },
          { id: 'al2', left: 'R comme…', right: 'Raoul' },
          { id: 'al3', left: 'U comme…', right: 'Ursule' },
          { id: 'al4', left: 'I comme…', right: 'Irma' },
          { id: 'al5', left: 'L comme…', right: 'Louis' },
        ],
      },
      {
        id: 'u2-epeler-spell',
        type: 'spell',
        title: { fr: 'Épeler un nom au téléphone', en: 'Spell a name on the phone' },
        intro: {
          fr: 'Épelle comme au téléphone. Les espaces et les accents ne comptent pas ici.',
          en: 'Spell as you would on the phone. Spaces and accents do not count here.',
        },
        spellNames: [
          { id: 'rui', name: 'Rui', hint: { fr: 'un prénom court, trois lettres', en: 'a short first name, three letters' } },
          { id: 'lina', name: 'Lina', hint: { fr: 'prénom de l’audition', en: 'the audition first name' } },
          { id: 'yann', name: 'Yann', hint: { fr: 'le nouveau du bureau', en: 'the new person at the office' } },
          { id: 'awa', name: 'Awa', hint: { fr: 'l’éco-guide', en: 'the eco-guide' } },
        ],
      },
    ],
  },
  {
    id: 'projet-metier-ideal',
    unitId: 2,
    number: 6,
    title: { fr: 'Trouver son métier idéal', en: 'Find your ideal job' },
    summary: {
      fr: 'Un profil, une personnalité, des métiers possibles. Puis tu te présentes comme dans un speed-meeting.',
      en: 'A profile, a personality, possible jobs. Then you introduce yourself as in a speed meeting.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Le projet de l’unité : relier une personnalité à des métiers. Tu es sociable ? Peut-être journaliste. Calme ? Peut-être professeur. Ensuite tu poses les questions : Comment vous vous appelez ? Vous êtes né(e) quand ? Quel est votre métier idéal ?',
          en: 'The unit project: connect a personality to jobs. Are you sociable? Maybe a journalist. Calm? Maybe a teacher. Then you ask: What’s your name? When were you born? What’s your ideal job?',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'sociable → journaliste, acteur', en: 'sociable → journalist, actor' },
          { fr: 'créatif → styliste, photographe', en: 'creative → designer, photographer' },
          { fr: 'calme → professeur, médecin', en: 'calm → teacher, doctor' },
        ],
      },
    ],
    activities: [
      {
        id: 'u2-profil-match',
        type: 'matching',
        title: { fr: 'Personnalité et métier', en: 'Personality and job' },
        pairs: [
          { id: 'pr1', left: 'sociable', right: 'journaliste, acteur' },
          { id: 'pr2', left: 'créatif', right: 'styliste, photographe' },
          { id: 'pr3', left: 'calme', right: 'professeur, médecin' },
          { id: 'pr4', left: 'courageux', right: 'pompier, pilote' },
          { id: 'pr5', left: 'prudent', right: 'informaticien, ingénieur' },
        ],
      },
      {
        id: 'u2-projet-quiz',
        type: 'quiz',
        title: { fr: 'Questions pour un voisin', en: 'Questions for a classmate' },
        questions: [
          {
            id: 'pj1',
            prompt: { fr: 'Pour le prénom et le nom :', en: 'For first and last name:' },
            options: [
              { fr: 'Comment vous vous appelez ?', en: 'What’s your name?' },
              { fr: 'Vous pèse combien ?', en: 'You weighs how much?' },
              { fr: 'C’est un buffle ?', en: 'Is it a buffalo?' },
            ],
            answer: 0,
            explanation: { fr: 'Comment tu t’appelles ? / Comment vous vous appelez ?', en: 'Comment tu t’appelles? / Comment vous vous appelez?' },
          },
          {
            id: 'pj2',
            prompt: { fr: 'Pour la date de naissance :', en: 'For date of birth:' },
            options: [
              { fr: 'Vous êtes né(e) quand ?', en: 'When were you born?' },
              { fr: 'Vous habitez un gorille ?', en: 'Do you live a gorilla?' },
              { fr: 'Il fait beau le nom ?', en: 'Is the name sunny?' },
            ],
            answer: 0,
            explanation: { fr: 'Quand + être né(e). Tu peux aussi dire : Quelle est ta date de naissance ?', en: 'Quand + être né(e). You can also say: What’s your date of birth?' },
          },
          {
            id: 'pj3',
            prompt: { fr: 'Pour finir le projet, tu présentes…', en: 'To finish the project, you present…' },
            options: [
              { fr: 'ton nom, ta personnalité, tes métiers idéaux', en: 'your name, your personality, your ideal jobs' },
              { fr: 'seulement un numéro de bingo', en: 'only a bingo number' },
              { fr: 'le passé composé entier', en: 'the whole passé composé' },
            ],
            answer: 0,
            explanation: { fr: 'Une mini-affiche orale : qui tu es + ce que tu aimes faire.', en: 'A short oral poster: who you are + what you like doing.' },
          },
        ],
      },
      {
        id: 'u2-projet-dialogue',
        type: 'dialogue',
        title: { fr: 'Speed-meeting métiers', en: 'Jobs speed meeting' },
        dialogue: {
          id: 'speed',
          title: { fr: 'Se présenter en une minute', en: 'Introduce yourself in one minute' },
          context: {
            fr: 'Tu t’entraînes à l’oral. Écoute le modèle, puis remets dans l’ordre et joue la scène.',
            en: 'You practise speaking. Listen to the model, then put it in order and play the scene.',
          },
          lines: [
            { speaker: 'Hugo', fr: 'Bonjour, je m’appelle Hugo. Je suis né en 1998.', en: 'Hello, my name is Hugo. I was born in 1998.' },
            { speaker: 'Mila', fr: 'Enchantée. Moi, c’est Mila. Je suis créative : je rêve d’être styliste.', en: 'Nice to meet you. I’m Mila. I’m creative: I dream of being a designer.' },
            { speaker: 'Hugo', fr: 'Moi, je suis plutôt calme. Mon métier idéal ? Professeur, je pense.', en: 'Me, I’m rather calm. My ideal job? A teacher, I think.' },
            { speaker: 'Mila', fr: 'Super. Et toi, tu travailles quand, en ce moment ?', en: 'Great. And you, when do you work, at the moment?' },
            { speaker: 'Hugo', fr: 'Le matin, de 9 heures à midi. Et toi ?', en: 'In the morning, from 9 to noon. And you?' },
          ],
        },
      },
    ],
  },
  {
    id: 'bilan',
    unitId: 2,
    number: 7,
    title: { fr: 'Bilan', en: 'Checkpoint' },
    summary: {
      fr: 'Avoir ou être, métiers, animaux, articles, pronoms toniques, téléphone et pourriez-vous.',
      en: 'Avoir or être, jobs, animals, articles, stressed pronouns, the phone, and pourriez-vous.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Coche dans ta tête : je peux donner des infos personnelles, demander poliment, interagir au téléphone, confirmer un rendez-vous, choisir le / la / les. Si une question bloque, retourne à la leçon.',
          en: 'Check in your head: I can give personal information, ask politely, talk on the phone, confirm an appointment, choose le / la / les. If a question sticks, go back to the lesson.',
        },
      },
    ],
    activities: [
      {
        id: 'u2-bilan-verbes',
        type: 'quiz',
        title: { fr: 'Avoir ou être ?', en: 'Avoir or être?' },
        questions: [
          {
            id: 'b1',
            prompt: { fr: '___ 21 ans.', en: '___ 21 years old.' },
            options: [
              { fr: 'J’ai', en: 'J’ai' },
              { fr: 'Je suis', en: 'Je suis' },
              { fr: 'Nous sommes', en: 'Nous sommes' },
            ],
            answer: 0,
            explanation: { fr: 'Âge = avoir.', en: 'Age = avoir.' },
          },
          {
            id: 'b2',
            prompt: { fr: 'Nous ___ françaises.', en: 'We ___ French.' },
            options: [
              { fr: 'sommes', en: 'sommes' },
              { fr: 'avons', en: 'avons' },
              { fr: 'ont', en: 'ont' },
            ],
            answer: 0,
            explanation: { fr: 'Nationalité = être.', en: 'Nationality = être.' },
          },
          {
            id: 'b3',
            prompt: { fr: 'Ils ___ acteurs.', en: 'They ___ actors.' },
            options: [
              { fr: 'sont', en: 'sont' },
              { fr: 'ont', en: 'ont' },
              { fr: 'avez', en: 'avez' },
            ],
            answer: 0,
            explanation: { fr: 'Métier = être.', en: 'Job = être.' },
          },
          {
            id: 'b4',
            prompt: { fr: 'Vous ___ marié ou célibataire ?', en: '___ you married or single?' },
            options: [
              { fr: 'êtes', en: 'êtes' },
              { fr: 'avez', en: 'avez' },
              { fr: 'sommes', en: 'sommes' },
            ],
            answer: 0,
            explanation: { fr: 'État civil = être.', en: 'Marital status = être.' },
          },
        ],
      },
      {
        id: 'u2-bilan-metiers',
        type: 'matching',
        title: { fr: 'Les métiers', en: 'Jobs' },
        pairs: [
          { id: 'm1', left: 'un/une photographe', right: 'prend des photos' },
          { id: 'm2', left: 'un réalisateur / une réalisatrice', right: 'dirige un film' },
          { id: 'm3', left: 'un/une mannequin', right: 'porte les vêtements' },
          { id: 'm4', left: 'un éco-guide', right: 'accompagne les visiteurs' },
          { id: 'm5', left: 'un/une styliste', right: 'crée une collection' },
        ],
      },
      {
        id: 'u2-bilan-pref',
        type: 'quiz',
        title: { fr: 'Je préfère… + article', en: 'Je préfère… + article' },
        questions: [
          {
            id: 'pf1',
            prompt: { fr: 'Je préfère ___ ordinateur portable.', en: 'I prefer ___ laptop.' },
            options: [
              { fr: 'l’', en: 'l’' },
              { fr: 'la', en: 'la' },
              { fr: 'des', en: 'des' },
            ],
            answer: 0,
            explanation: { fr: 'ordinateur commence par une voyelle → l’.', en: 'ordinateur starts with a vowel → l’.' },
          },
          {
            id: 'pf2',
            prompt: { fr: 'Je préfère ___ courriel.', en: 'I prefer ___ email.' },
            options: [
              { fr: 'le', en: 'le' },
              { fr: 'la', en: 'la' },
              { fr: 'les', en: 'les' },
            ],
            answer: 0,
            explanation: { fr: 'courriel = masculin → le.', en: 'courriel = masculine → le.' },
          },
          {
            id: 'pf3',
            prompt: { fr: 'Wow, moi ? Un prix ? Merci à vous… Ici, moi et vous sont…', en: 'Wow, me? A prize? Thank you… Here moi and vous are…' },
            options: [
              { fr: 'des pronoms toniques', en: 'stressed pronouns' },
              { fr: 'des articles définis', en: 'definite articles' },
              { fr: 'des nombres', en: 'numbers' },
            ],
            answer: 0,
            explanation: { fr: 'On insiste : moi, toi, vous, eux.', en: 'You insist: moi, toi, vous, eux.' },
          },
        ],
      },
      {
        id: 'u2-bilan-phone',
        type: 'matching',
        title: { fr: 'Pourriez-vous… au bon moment', en: 'Pourriez-vous… at the right time' },
        pairs: [
          { id: 'pv1', left: 'Pourriez-vous répéter ?', right: 'vous n’entendez pas' },
          { id: 'pv2', left: 'Pourriez-vous épeler ?', right: 'un mot nouveau' },
          { id: 'pv3', left: 'Pourriez-vous parler plus lentement ?', right: 'la personne parle vite' },
          { id: 'pv4', left: 'Pourriez-vous confirmer votre numéro ?', right: 'vous vérifiez une info' },
        ],
      },
      {
        id: 'u2-bilan-quiz',
        type: 'quiz',
        title: { fr: 'Checkpoint unité 2', en: 'Unit 2 checkpoint' },
        questions: [
          {
            id: 'x1',
            prompt: { fr: 'Romain appelle pour une formation. Il demande : vous êtes disponible quand ? C’est…', en: 'Romain calls about training. He asks: when are you free? This is…' },
            options: [
              { fr: 'prendre / confirmer un rendez-vous', en: 'making / confirming an appointment' },
              { fr: 'louer une voiture seulement', en: 'only renting a car' },
              { fr: 'conjuguer le passé composé', en: 'conjugating the passé composé' },
            ],
            answer: 0,
            explanation: { fr: 'Disponible + jour + heure = organisation d’un rendez-vous.', en: 'Available + day + time = arranging an appointment.' },
          },
          {
            id: 'x2',
            prompt: { fr: 'Pour dire que tu n’es pas libre :', en: 'To say you are not free:' },
            options: [
              { fr: 'Je ne suis pas disponible. On peut reporter ?', en: 'I’m not available. Can we postpone?' },
              { fr: 'J’ai un éléphant, merci.', en: 'I have an elephant, thanks.' },
              { fr: 'Les gorilles adorent lundi.', en: 'Gorillas love Monday.' },
            ],
            answer: 0,
            explanation: { fr: 'annuler, reporter, confirmer : trois verbes utiles au téléphone.', en: 'cancel, postpone, confirm: three useful phone verbs.' },
          },
          {
            id: 'x3',
            prompt: { fr: 'Enchaînement dans…', en: 'Linking in…' },
            options: [
              { fr: 'Tu es au travail ?', en: 'Tu es au travail?' },
              { fr: 'le badge', en: 'le badge' },
              { fr: 'carte bleue', en: 'carte bleue' },
            ],
            answer: 0,
            explanation: { fr: 'tu_es : pas de pause entre les deux voyelles.', en: 'tu_es: no pause between the two vowels.' },
          },
          {
            id: 'x4',
            prompt: { fr: '« Moi, je préfère le cinéma. Et toi ? » Ici toi, c’est…', en: '“Me, I prefer cinema. And you?” Here toi is…' },
            options: [
              { fr: 'un pronom tonique', en: 'a stressed pronoun' },
              { fr: 'un article défini', en: 'a definite article' },
              { fr: 'un verbe en -er', en: 'an -er verb' },
            ],
            answer: 0,
            explanation: { fr: 'Et toi ? Et vous ? pour relancer.', en: 'Et toi? Et vous? to bounce the question back.' },
          },
          {
            id: 'x5',
            prompt: { fr: 'Maintenant je peux : demander mon âge, épeler, dire Allô. C’est le but de…', en: 'Now I can: ask my age, spell, say Allô. That is the goal of…' },
            options: [
              { fr: 'cette unité', en: 'this unit' },
              { fr: 'le pluriel des buffles seulement', en: 'only the plural of buffaloes' },
              { fr: 'l’unité 8 uniquement', en: 'only unit 8' },
            ],
            answer: 0,
            explanation: { fr: 'Infos perso, politesse, téléphone, articles, nombres.', en: 'Personal info, politeness, phone, articles, numbers.' },
          },
        ],
      },
    ],
  },
]
