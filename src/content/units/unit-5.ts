import type { Lesson } from '@/types/course'

export const unit5Lessons: Lesson[] = [
  {
    id: 'ouverture',
    unitId: 5,
    number: 1,
    title: { fr: 'Une vie trépidante', en: 'A busy life' },
    summary: {
      fr: 'Le quotidien se répète… puis un événement spécial casse la routine. Comment est ta journée ? Tu sors, tu t’invites, tu refuses ?',
      en: 'Daily life repeats… then a special event breaks the routine. What’s your day like? Do you go out, invite, refuse?',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Jour après jour', en: 'Day after day' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'On se lève, on se prépare, on travaille, on se couche. Les villes s’animent aussi : une fête, une course, un concert. Dans cette unité tu parles de tes habitudes, de tes goûts, tu invites, tu acceptes ou tu refuses, tu dis ce qu’il faut faire — et si tu es fatigué.',
          en: 'You get up, get ready, work, go to bed. Cities also come alive: a festival, a race, a concert. In this unit you talk about habits and likes, you invite, accept or refuse, you say what you must do — and if you’re tired.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'Comment est votre quotidien ?', en: 'What’s your daily life like?' },
          { fr: 'Est-ce que vous participez à des événements spéciaux ?', en: 'Do you take part in special events?' },
          { fr: 'Ça te dit de sortir samedi ?', en: 'Do you fancy going out on Saturday?' },
        ],
      },
    ],
    activities: [
      {
        id: 'u5-open-quiz',
        type: 'quiz',
        title: { fr: 'Routine ou événement ?', en: 'Routine or event?' },
        questions: [
          {
            id: 'o1',
            prompt: { fr: 'Une activité du quotidien, c’est souvent…', en: 'A daily activity is often…' },
            options: [
              { fr: 'se lever, se laver, prendre le train', en: 'getting up, washing, taking the train' },
              { fr: 'un mariage une fois dans la vie seulement', en: 'only a once-in-a-lifetime wedding' },
              { fr: 'un pays', en: 'a country' },
            ],
            answer: 0,
            explanation: { fr: 'Le quotidien se répète. Un événement spécial casse la routine.', en: 'Daily life repeats. A special event breaks the routine.' },
          },
          {
            id: 'o2',
            prompt: { fr: 'Pour proposer une sortie :', en: 'To suggest going out:' },
            options: [
              { fr: 'Ça te dit ? Tu veux venir avec moi ?', en: 'Do you fancy it? Do you want to come with me?' },
              { fr: 'Je suis un métro.', en: 'I am a metro.' },
              { fr: 'Qui est-ce, le lundi ?', en: 'Who is that, on Monday?' },
            ],
            answer: 0,
            explanation: { fr: 'Invitation courte. Ensuite : oui / non + une raison.', en: 'A short invite. Then: yes / no + a reason.' },
          },
          {
            id: 'o3',
            prompt: { fr: 'Dans cette unité, tu vas surtout…', en: 'In this unit you will mainly…' },
            options: [
              { fr: 'parler de tes journées, de tes loisirs, et inviter', en: 'talk about your days, free time, and invite someone' },
              { fr: 'apprendre seulement le passé composé', en: 'learn only the passé composé' },
              { fr: 'conjuguer avoir l’âge uniquement', en: 'only conjugate age with avoir' },
            ],
            answer: 0,
            explanation: { fr: 'Verbes pronominaux, futur proche, il faut, invitations.', en: 'Pronominal verbs, near future, il faut, invitations.' },
          },
        ],
      },
    ],
  },
  {
    id: 'je-me-leve',
    unitId: 5,
    number: 2,
    title: { fr: 'Demain, je me lève tôt', en: 'Tomorrow I get up early' },
    summary: {
      fr: 'Les verbes pronominaux, l’heure, les tâches ménagères, et un peu de culture : le 1er juillet au Québec.',
      en: 'Pronominal verbs, telling the time, housework, and a bit of culture: 1 July in Quebec.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Un quotidien', en: 'A daily routine' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Je me réveille, je me lève, je me lave, je me prépare, je me couche, je m’endors. À la forme pronominale, un pronom personnel change : je me, tu te, il/elle se, nous nous, vous vous, ils/elles se. Négation : je ne me réveille pas tôt. Devant une voyelle : je m’appelle, je m’endors.',
          en: 'I wake up, I get up, I wash, I get ready, I go to bed, I fall asleep. In the pronominal form a personal pronoun changes: je me, tu te, il/elle se, nous nous, vous vous, ils/elles se. Negative: je ne me réveille pas tôt. Before a vowel: je m’appelle, je m’endors.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Dire l’heure', en: 'Telling the time' },
        text: {
          fr: 'À 8 h du matin, à 8 h du soir, à 5 h de l’après-midi. Vers 8 h = pas l’heure exacte. 8 h 15 = huit heures et quart. 8 h 30 = huit heures et demie. 8 h 45 = neuf heures moins le quart.',
          en: 'At 8 a.m., at 8 p.m., at 5 p.m. Vers 8 h = not the exact time. 8:15 = et quart. 8:30 = et demie. 8:45 = moins le quart.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Le 1er juillet au Québec', en: '1 July in Quebec' },
        text: {
          fr: 'Au Québec, le 1er juillet est souvent le grand jour du déménagement. On nettoie, on ouvre les fenêtres, on range. C’est une tradition du quotidien, pas seulement une fête officielle.',
          en: 'In Quebec, 1 July is often the big moving day. People clean, open the windows, tidy up. It’s an everyday tradition, not only an official holiday.',
        },
      },
    ],
    activities: [
      {
        id: 'u5-pronom-cards',
        type: 'flashcards',
        title: { fr: 'Verbes pronominaux du matin', en: 'Morning pronominal verbs' },
        items: [
          { id: 'rev', fr: 'se réveiller', en: 'to wake up', exampleFr: 'Je me réveille à 7 h.', exampleEn: 'I wake up at 7.' },
          { id: 'lev', fr: 'se lever', en: 'to get up' },
          { id: 'lav', fr: 'se laver', en: 'to wash (oneself)' },
          { id: 'pre', fr: 'se préparer', en: 'to get ready' },
          { id: 'cou', fr: 'se coucher', en: 'to go to bed' },
          { id: 'end', fr: 's’endormir', en: 'to fall asleep' },
          { id: 'app', fr: 's’appeler', en: 'to be called' },
          { id: 'rep', fr: 'se reposer', en: 'to rest' },
        ],
      },
      {
        id: 'u5-pronom-quiz',
        type: 'quiz',
        title: { fr: 'Je me / tu te / il se', en: 'Je me / tu te / il se' },
        questions: [
          {
            id: 'p1',
            prompt: { fr: 'Le week-end, je ___ à 10 h. (se réveiller)', en: 'At the weekend I ___ at 10. (se réveiller)' },
            options: [
              { fr: 'me réveille', en: 'me réveille' },
              { fr: 'se réveille', en: 'se réveille' },
              { fr: 'réveille me', en: 'réveille me' },
            ],
            answer: 0,
            explanation: { fr: 'je me réveille.', en: 'je me réveille.' },
          },
          {
            id: 'p2',
            prompt: { fr: 'Nous ___ à minuit. (se coucher)', en: 'We ___ at midnight. (se coucher)' },
            options: [
              { fr: 'nous couchons', en: 'nous couchons' },
              { fr: 'nous se couchons', en: 'nous se couchons' },
              { fr: 'couchons nous', en: 'couchons nous' },
            ],
            answer: 0,
            explanation: { fr: 'nous nous couchons (deux fois nous).', en: 'nous nous couchons (nous twice).' },
          },
          {
            id: 'p3',
            prompt: { fr: 'Négation : Je ___ tôt.', en: 'Negative: I ___ early.' },
            options: [
              { fr: 'ne me réveille pas', en: 'ne me réveille pas' },
              { fr: 'me ne réveille pas', en: 'me ne réveille pas' },
              { fr: 'ne réveille me pas', en: 'ne réveille me pas' },
            ],
            answer: 0,
            explanation: { fr: 'ne + pronom + verbe + pas. Je ne me réveille pas tôt.', en: 'ne + pronoun + verb + pas.' },
          },
          {
            id: 'p4',
            prompt: { fr: 'Devant une voyelle : Je ___ à 23 h. (s’endormir)', en: 'Before a vowel: I ___ at 11 p.m. (s’endormir)' },
            options: [
              { fr: 'm’endors', en: 'm’endors' },
              { fr: 'me endors', en: 'me endors' },
              { fr: 's’endors', en: 's’endors' },
            ],
            answer: 0,
            explanation: { fr: 'me → m’ devant voyelle : je m’endors, je m’appelle.', en: 'me → m’ before a vowel.' },
          },
          {
            id: 'p5',
            prompt: { fr: '8 h 45, on dit aussi…', en: '8:45 is also…' },
            options: [
              { fr: 'neuf heures moins le quart', en: 'neuf heures moins le quart' },
              { fr: 'huit heures et quart', en: 'huit heures et quart' },
              { fr: 'huit heures et demie', en: 'huit heures et demie' },
            ],
            answer: 0,
            explanation: { fr: 'et quart = 15. et demie = 30. moins le quart = 45.', en: 'et quart = 15. et demie = 30. moins le quart = 45.' },
          },
        ],
      },
      {
        id: 'u5-taches-match',
        type: 'matching',
        title: { fr: 'Qui fait quoi à la maison ?', en: 'Who does what at home?' },
        pairs: [
          { id: 't1', left: 'se laver', right: 'sous la douche' },
          { id: 't2', left: 'laver le linge', right: 'le lave-linge' },
          { id: 't3', left: 'passer l’aspirateur', right: 'le sol, le tapis' },
          { id: 't4', left: 'faire la vaisselle', right: 'après le repas' },
          { id: 't5', left: 'faire les courses', right: 'le supermarché' },
          { id: 't6', left: 'bricoler', right: 'réparer, un tournevis' },
        ],
      },
      {
        id: 'u5-routine-dialogue',
        type: 'dialogue',
        title: { fr: 'Ma journée type', en: 'My typical day' },
        dialogue: {
          id: 'journee',
          title: { fr: 'Du réveil au bureau', en: 'From waking up to the office' },
          context: {
            fr: 'Lina raconte son matin. Écoute les heures, puis remets dans l’ordre.',
            en: 'Lina talks about her morning. Listen for the times, then put the lines in order.',
          },
          lines: [
            { speaker: 'Lina', fr: 'Je me réveille vers 6 h 45. Je ne me lève pas tout de suite.', en: 'I wake up around 6:45. I don’t get up straight away.' },
            { speaker: 'Noah', fr: 'Et après ?', en: 'And then?' },
            { speaker: 'Lina', fr: 'Je me lave, je me prépare, je prends un café. J’arrive au bureau à 8 h 30.', en: 'I wash, I get ready, I have a coffee. I get to the office at 8:30.' },
            { speaker: 'Noah', fr: 'Le soir, tu te couches à quelle heure ?', en: 'In the evening, what time do you go to bed?' },
            { speaker: 'Lina', fr: 'Vers 23 h. Le week-end, je me réveille à 10 h !', en: 'Around 11 p.m. At the weekend I wake up at 10!' },
          ],
        },
      },
      {
        id: 'u5-menage-quiz',
        type: 'quiz',
        title: { fr: 'Tâches et 1er juillet', en: 'Chores and 1 July' },
        questions: [
          {
            id: 'm1',
            prompt: { fr: 'Attendre le train, c’est plutôt…', en: 'Waiting for the train is more…' },
            options: [
              { fr: 'une activité du quotidien, pas un loisir', en: 'a daily activity, not a hobby' },
              { fr: 'un sport d’équipe', en: 'a team sport' },
              { fr: 'un meuble', en: 'a piece of furniture' },
            ],
            answer: 0,
            explanation: { fr: 'Se laver, laver le linge, passer l’aspirateur : ça prend du temps. Le foot à la télé, c’est un loisir.', en: 'Washing, laundry, vacuuming take time. Football on TV is leisure.' },
          },
          {
            id: 'm2',
            prompt: { fr: 'Au Québec, le 1er juillet, beaucoup de gens…', en: 'In Quebec, on 1 July, many people…' },
            options: [
              { fr: 'déménagent et font le grand ménage', en: 'move house and do a big clean' },
              { fr: 'vont uniquement à Kinshasa', en: 'only go to Kinshasa' },
              { fr: 'conjuguent le passé composé', en: 'conjugate the passé composé' },
            ],
            answer: 0,
            explanation: { fr: 'On nettoie, on ouvre les fenêtres, on range les armoires.', en: 'People clean, open the windows, tidy the cupboards.' },
          },
          {
            id: 'm3',
            prompt: { fr: 'Ranger la maison, repasser, laver les vitres, cuisiner : pour dire qui fait quoi…', en: 'Tidying, ironing, washing windows, cooking: to say who does what…' },
            options: [
              { fr: 'Moi, je range. Ma sœur cuisine. On partage.', en: 'I tidy. My sister cooks. We share.' },
              { fr: 'Je suis 8 h 15.', en: 'I am 8:15.' },
              { fr: 'Qui est-ce, l’aspirateur ?', en: 'Who is that, the vacuum?' },
            ],
            answer: 0,
            explanation: { fr: 'On compare : moi / ma famille. Certaines tâches sont partagées, d’autres non.', en: 'Compare: me / my family. Some chores are shared, others not.' },
          },
        ],
      },
    ],
  },
  {
    id: 'gouts-couleurs',
    unitId: 5,
    number: 3,
    title: { fr: 'Des goûts et des couleurs', en: 'Tastes and colours' },
    summary: {
      fr: 'Sports et loisirs, le futur proche, aimer / préférer, les prépositions de temps, l’intonation des questions.',
      en: 'Sports and leisure, the near future, aimer / préférer, time prepositions, question intonation.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Profil sport ou culture ?', en: 'Sport or culture profile?' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Je joue au foot. Je fais de la gym. Je préfère aller au cinéma. Pour les projets : aller au présent + infinitif. Demain, je vais jouer au tennis. Négation : je ne vais pas jouer au foot. Aimer, adorer, préférer + nom ou verbe à l’infinitif.',
          en: 'I play football. I do gym. I prefer going to the cinema. For plans: aller in the present + infinitive. Tomorrow I’m going to play tennis. Negative: je ne vais pas jouer au foot. Aimer, adorer, préférer + noun or infinitive.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Prépositions de temps', en: 'Time prepositions' },
        text: {
          fr: 'À quelle heure ? — À 20 h. De 18 h à 20 h. En novembre, en 2024. Exception : au printemps. Quand est-ce que tu travailles ? — Je travaille de 13 h à 21 h.',
          en: 'At what time? — At 8 p.m. From 6 p.m. to 8 p.m. In November, in 2024. Exception: au printemps. When do you work? — I work from 1 p.m. to 9 p.m.',
        },
      },
    ],
    activities: [
      {
        id: 'u5-loisirs-cards',
        type: 'flashcards',
        title: { fr: 'Sports et loisirs', en: 'Sports and leisure' },
        items: [
          { id: 'foot', fr: 'jouer au foot', en: 'to play football' },
          { id: 'ten', fr: 'jouer au tennis', en: 'to play tennis' },
          { id: 'jv', fr: 'jouer aux jeux vidéo', en: 'to play video games' },
          { id: 'gym', fr: 'faire de la gym / du yoga', en: 'to do gym / yoga' },
          { id: 'dan', fr: 'faire de la danse', en: 'to dance' },
          { id: 'pia', fr: 'faire du piano', en: 'to play the piano' },
          { id: 'ben', fr: 'faire du bénévolat', en: 'to volunteer' },
          { id: 'cin', fr: 'aller au cinéma', en: 'to go to the cinema' },
        ],
      },
      {
        id: 'u5-futur-quiz',
        type: 'quiz',
        title: { fr: 'Le futur proche', en: 'The near future' },
        questions: [
          {
            id: 'f1',
            prompt: { fr: 'Lundi soir, nous ___ jouer au volley.', en: 'Monday evening we ___ play volleyball.' },
            options: [
              { fr: 'allons', en: 'allons' },
              { fr: 'allez', en: 'allez' },
              { fr: 'vais', en: 'vais' },
            ],
            answer: 0,
            explanation: { fr: 'nous allons + infinitif.', en: 'nous allons + infinitive.' },
          },
          {
            id: 'f2',
            prompt: { fr: 'Ce week-end, Joana ___ faire du vélo.', en: 'This weekend Joana ___ cycle.' },
            options: [
              { fr: 'va', en: 'va' },
              { fr: 'vais', en: 'vais' },
              { fr: 'vont', en: 'vont' },
            ],
            answer: 0,
            explanation: { fr: 'elle va + infinitif.', en: 'elle va + infinitive.' },
          },
          {
            id: 'f3',
            prompt: { fr: 'Négation : Je ___ jouer au foot.', en: 'Negative: I ___ play football.' },
            options: [
              { fr: 'ne vais pas', en: 'ne vais pas' },
              { fr: 'vais ne pas', en: 'vais ne pas' },
              { fr: 'ne pas vais', en: 'ne pas vais' },
            ],
            answer: 0,
            explanation: { fr: 'je ne vais pas + infinitif.', en: 'je ne vais pas + infinitive.' },
          },
          {
            id: 'f4',
            prompt: { fr: 'Demain, je vais ___ du yoga.', en: 'Tomorrow I’m going to ___ yoga.' },
            options: [
              { fr: 'faire', en: 'faire' },
              { fr: 'jouer', en: 'jouer' },
              { fr: 'aller', en: 'aller' },
            ],
            answer: 0,
            explanation: { fr: 'faire du yoga. jouer au tennis. aller au cinéma.', en: 'faire du yoga. jouer au tennis. aller au cinéma.' },
          },
          {
            id: 'f5',
            prompt: { fr: 'Je n’aime pas le théâtre, je préfère ___ au cinéma.', en: 'I don’t like theatre, I prefer ___ to the cinema.' },
            options: [
              { fr: 'aller', en: 'aller' },
              { fr: 'vais', en: 'vais' },
              { fr: 'faire', en: 'faire' },
            ],
            answer: 0,
            explanation: { fr: 'préférer + infinitif (ou + nom).', en: 'préférer + infinitive (or + noun).' },
          },
        ],
      },
      {
        id: 'u5-prep-quiz',
        type: 'quiz',
        title: { fr: 'Du, de la, au, en…', en: 'Du, de la, au, en…' },
        questions: [
          {
            id: 'pr1',
            prompt: { fr: 'Je fais ___ yoga tous les jours. Je joue ___ foot le week-end.', en: 'I do ___ yoga every day. I play ___ football at the weekend.' },
            options: [
              { fr: 'du · au', en: 'du · au' },
              { fr: 'de la · de', en: 'de la · de' },
              { fr: 'au · du', en: 'au · du' },
            ],
            answer: 0,
            explanation: { fr: 'faire du yoga. jouer au foot. faire de la danse. jouer aux jeux vidéo.', en: 'faire du yoga. jouer au foot. faire de la danse. jouer aux jeux vidéo.' },
          },
          {
            id: 'pr2',
            prompt: { fr: 'Je travaille ___ 13 h ___ 21 h. Je fais le grand ménage ___ printemps.', en: 'I work ___ 1 p.m. ___ 9 p.m. I do the big clean ___ spring.' },
            options: [
              { fr: 'de · à · au', en: 'de · à · au' },
              { fr: 'à · de · en', en: 'à · de · en' },
              { fr: 'en · en · de', en: 'en · en · de' },
            ],
            answer: 0,
            explanation: { fr: 'de … à + heures. au printemps (exception). en novembre.', en: 'de … à + times. au printemps (exception). en novembre.' },
          },
          {
            id: 'pr3',
            prompt: { fr: 'Le journal télé, c’est ___ 20 h.', en: 'The TV news is ___ 8 p.m.' },
            options: [
              { fr: 'à', en: 'à' },
              { fr: 'en', en: 'en' },
              { fr: 'de', en: 'de' },
            ],
            answer: 0,
            explanation: { fr: 'à + heure.', en: 'à + clock time.' },
          },
        ],
      },
      {
        id: 'u5-profils-dialogue',
        type: 'dialogue',
        title: { fr: 'Deux profils', en: 'Two profiles' },
        dialogue: {
          id: 'profils',
          title: { fr: 'Sport ou écran ?', en: 'Sport or screen?' },
          context: {
            fr: 'Maya et Tom parlent de leurs goûts. Écoute ce qu’ils font, puis remets dans l’ordre.',
            en: 'Maya and Tom talk about their likes. Listen to what they do, then put the lines in order.',
          },
          lines: [
            { speaker: 'Maya', fr: 'Moi, j’ai 22 ans. Je fais de la gym le soir, de 18 h à 20 h. Le week-end, je danse.', en: 'I’m 22. I do gym in the evening, from 6 to 8. At the weekend I dance.' },
            { speaker: 'Tom', fr: 'Moi, je suis fan de jeux vidéo. En été, je passe mon week-end à la maison. Aller en boîte, ce n’est pas pour moi.', en: 'Me, I’m a video-game fan. In summer I spend the weekend at home. Clubbing isn’t for me.' },
            { speaker: 'Maya', fr: 'Qu’est-ce que tu aimes faire, alors ?', en: 'What do you like doing, then?' },
            { speaker: 'Tom', fr: 'Je préfère jouer aux jeux vidéo, mais j’aimerais faire du sport avec toi samedi.', en: 'I prefer video games, but I’d like to do sport with you on Saturday.' },
          ],
        },
      },
      {
        id: 'u5-questions-listen',
        type: 'listen',
        title: { fr: 'Intonation : comment, quand, combien', en: 'Intonation: comment, quand, combien' },
        intro: {
          fr: 'La voix monte au début de la question avec comment, combien, quand, puis redescend un peu. Écoute et répète.',
          en: 'The voice rises at the start of questions with comment, combien, quand, then comes down a little. Listen and repeat.',
        },
        items: [
          { id: 'q1', fr: 'Comment tu vas ?', en: 'rise then fall' },
          { id: 'q2', fr: 'Quand est-ce que tu travailles ?', en: 'question word first' },
          { id: 'q3', fr: 'Combien de fois par semaine ?', en: 'combien + rise' },
          { id: 'q4', fr: 'Tu es libre de 14 h à 16 h ?', en: 'yes/no can rise at the end' },
        ],
      },
    ],
  },
  {
    id: 'ca-te-dirait',
    unitId: 5,
    number: 4,
    title: { fr: 'Ça te dirait ?', en: 'Would you fancy it?' },
    summary: {
      fr: 'Inviter, accepter, refuser ; pouvoir, vouloir, devoir, savoir ; une course, un sac de sport.',
      en: 'Invite, accept, refuse; pouvoir, vouloir, devoir, savoir; a race, a sports bag.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Je ne peux pas, je dois travailler', en: 'I can’t, I have to work' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Ces verbes sont suivis de l’infinitif : Tu sais faire du ski ? Nous pouvons danser. Je dois travailler. Tu veux mon billet ? Pour inviter : Ça te dit ? Tu veux… ? Pour accepter : Oui, super ! Pourquoi pas. Pour refuser : Désolé(e), je ne peux pas. Je ne suis pas libre. Je dois étudier.',
          en: 'These verbs are followed by the infinitive: Can you ski? We can dance. I have to work. Do you want my ticket? To invite: Fancy it? Do you want…? To accept: Yes, great! Why not. To refuse: Sorry, I can’t. I’m not free. I have to study.',
        },
      },
      {
        type: 'note',
        title: { fr: '[ɔ̃] et [ɔn]', en: '[ɔ̃] and [ɔn]' },
        text: {
          fr: 'On entend [ɔ̃] avec -on à la fin d’un mot : un ballon, un bon sport, un marathon. On entend [ɔn] avec -on + voyelle : un bonnet de bain, un abonnement.',
          en: 'You hear [ɔ̃] with -on at the end of a word: un ballon, un bon sport, un marathon. You hear [ɔn] with -on + vowel: un bonnet de bain, un abonnement.',
        },
      },
    ],
    activities: [
      {
        id: 'u5-modaux-quiz',
        type: 'quiz',
        title: { fr: 'Pouvoir, vouloir, devoir, savoir', en: 'Pouvoir, vouloir, devoir, savoir' },
        questions: [
          {
            id: 'mo1',
            prompt: { fr: '— Tu sais faire du ski ? — Non, je ___ .', en: '— Can you ski? — No, I ___.' },
            options: [
              { fr: 'ne sais pas', en: 'ne sais pas' },
              { fr: 'dois pas ski', en: 'dois pas ski' },
              { fr: 'veux le ski est', en: 'veux le ski est' },
            ],
            answer: 0,
            explanation: { fr: 'savoir + infinitif. Je ne sais pas (faire du ski).', en: 'savoir + infinitive.' },
          },
          {
            id: 'mo2',
            prompt: { fr: 'On fait de la randonnée demain. Vous ___ venir avec nous ?', en: 'We’re hiking tomorrow. ___ you come with us?' },
            options: [
              { fr: 'pouvez', en: 'pouvez' },
              { fr: 'devez seulement', en: 'only devez' },
              { fr: 'êtes un billet', en: 'are a ticket' },
            ],
            answer: 0,
            explanation: { fr: 'pouvoir = être capable / avoir la possibilité.', en: 'pouvoir = be able / have the possibility.' },
          },
          {
            id: 'mo3',
            prompt: { fr: '— On va au ciné ? — Non, je ne peux pas. Je ___ étudier pour mon examen.', en: '— Cinema? — No, I can’t. I ___ study for my exam.' },
            options: [
              { fr: 'dois', en: 'dois' },
              { fr: 'sais', en: 'sais' },
              { fr: 'vais un examen', en: 'vais un examen' },
            ],
            answer: 0,
            explanation: { fr: 'devoir = obligation. Je dois étudier.', en: 'devoir = obligation.' },
          },
          {
            id: 'mo4',
            prompt: { fr: '— Tu veux mon billet ? — Merci, mais je ne ___ pas : je dois travailler.', en: '— Do you want my ticket? — Thanks, but I ___ not: I have to work.' },
            options: [
              { fr: 'peux', en: 'peux' },
              { fr: 'suis un billet', en: 'am a ticket' },
              { fr: 'sais le métro', en: 'sais le métro' },
            ],
            answer: 0,
            explanation: { fr: 'Refuser : je ne peux pas / je ne veux pas / je dois travailler.', en: 'Refuse: I can’t / I don’t want to / I have to work.' },
          },
          {
            id: 'mo5',
            prompt: { fr: 'Elle ___ bien parler français. Elle est bilingue.', en: 'She ___ speak French well. She’s bilingual.' },
            options: [
              { fr: 'sait', en: 'sait' },
              { fr: 'doit le silence', en: 'doit le silence' },
              { fr: 'est un ski', en: 'is a ski' },
            ],
            answer: 0,
            explanation: { fr: 'savoir = compétence.', en: 'savoir = a skill.' },
          },
        ],
      },
      {
        id: 'u5-invite-match',
        type: 'matching',
        title: { fr: 'Inviter, remercier, accepter, refuser', en: 'Invite, thank, accept, refuse' },
        pairs: [
          { id: 'i1', left: 'Ça te dit ? Tu veux… ?', right: 'inviter' },
          { id: 'i2', left: 'Merci de l’invitation !', right: 'remercier' },
          { id: 'i3', left: 'Oui, super ! Pourquoi pas.', right: 'accepter' },
          { id: 'i4', left: 'Désolé(e), je ne peux pas. Je dois étudier.', right: 'refuser' },
        ],
      },
      {
        id: 'u5-sortie-dialogue',
        type: 'dialogue',
        title: { fr: 'Samedi, ça te dit ?', en: 'Saturday, fancy it?' },
        dialogue: {
          id: 'samedi',
          title: { fr: 'Un billet et un plan B', en: 'A ticket and a plan B' },
          context: {
            fr: 'Noah ne peut pas. Maya propose autre chose. Écoute qui doit travailler, puis remets dans l’ordre.',
            en: 'Noah can’t. Maya suggests something else. Listen for who has to work, then put the lines in order.',
          },
          lines: [
            { speaker: 'Noah', fr: 'Maya, je ne peux pas aller au concert samedi. Je dois travailler.', en: 'Maya, I can’t go to the concert on Saturday. I have to work.' },
            { speaker: 'Maya', fr: 'Ah, dommage ! Tu peux proposer ton billet à Tom ?', en: 'Ah, shame! Can you offer your ticket to Tom?' },
            { speaker: 'Noah', fr: 'Bonne idée. Tom, ça te dit ? Tu veux mon billet ?', en: 'Good idea. Tom, fancy it? Do you want my ticket?' },
            { speaker: 'Tom', fr: 'Merci, mais je ne sais pas… On peut prendre un verre après, non ?', en: 'Thanks, but I’m not sure… We could have a drink afterwards, couldn’t we?' },
            { speaker: 'Maya', fr: 'Oui ! Il y a un DJ. Nous pouvons danser.', en: 'Yes! There’s a DJ. We can dance.' },
          ],
        },
      },
      {
        id: 'u5-course-quiz',
        type: 'quiz',
        title: { fr: 'Une course pour tous', en: 'A race for everyone' },
        questions: [
          {
            id: 'c1',
            prompt: { fr: 'Un semi-marathon, c’est…', en: 'A half-marathon is…' },
            options: [
              { fr: 'une course à pied (environ 21 km)', en: 'a running race (about 21 km)' },
              { fr: 'un film de James Bond', en: 'a James Bond film' },
              { fr: 'un meuble', en: 'a piece of furniture' },
            ],
            answer: 0,
            explanation: { fr: 'On court en ville, parfois dans des parcs. Souvent on a un dossard et un t-shirt.', en: 'You run in town, sometimes in parks. Often you get a race bib and a T-shirt.' },
          },
          {
            id: 'c2',
            prompt: { fr: 'Pour la piscine, dans le sac, tu as souvent…', en: 'For the pool, in the bag you often have…' },
            options: [
              { fr: 'un bonnet, un maillot, une serviette', en: 'a cap, a swimsuit, a towel' },
              { fr: 'un dossard de marathon seulement', en: 'only a marathon bib' },
              { fr: 'une cravate', en: 'a tie' },
            ],
            answer: 0,
            explanation: { fr: 'À chercher si ça manque : le bonnet de bain, les lunettes.', en: 'To fetch if missing: the swim cap, goggles.' },
          },
          {
            id: 'c3',
            prompt: { fr: 'Tu entends [ɔ̃] dans…', en: 'You hear [ɔ̃] in…' },
            options: [
              { fr: 'ballon, marathon', en: 'ballon, marathon' },
              { fr: 'bonnet, abonnement', en: 'bonnet, abonnement' },
              { fr: 'table, chaise', en: 'table, chaise' },
            ],
            answer: 0,
            explanation: { fr: '-on en fin de mot : [ɔ̃]. -on + voyelle : [ɔn] (bonnet).', en: '-on at the end: [ɔ̃]. -on + vowel: [ɔn] (bonnet).' },
          },
        ],
      },
      {
        id: 'u5-nasales-listen',
        type: 'listen',
        title: { fr: '[ɔ̃] ou [ɔn] ?', en: '[ɔ̃] or [ɔn]?' },
        intro: {
          fr: 'Répète. Nasale à la fin : bon, ballon. Consonne [n] avant voyelle : bonnet, abonnement.',
          en: 'Repeat. Nasal at the end: bon, ballon. Consonant [n] before a vowel: bonnet, abonnement.',
        },
        items: [
          { id: 'n1', fr: 'un ballon', en: '[ɔ̃]' },
          { id: 'n2', fr: 'un bon sport', en: '[ɔ̃]' },
          { id: 'n3', fr: 'un marathon', en: '[ɔ̃]' },
          { id: 'n4', fr: 'un bonnet de bain', en: '[ɔn]' },
          { id: 'n5', fr: 'un abonnement', en: '[ɔn]' },
        ],
      },
    ],
  },
  {
    id: 'trottoirs',
    unitId: 5,
    number: 5,
    title: { fr: 'Il ne faut pas rouler sur les trottoirs', en: 'You mustn’t ride on the pavement' },
    summary: {
      fr: 'La fréquence, il faut / il ne faut pas, l’équipement, et décrire un état physique.',
      en: 'Frequency, il faut / il ne faut pas, equipment, and describing how you feel.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Je m’ennuie… on sort ?', en: 'I’m bored… shall we go out?' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Une fois par jour, deux fois par semaine, une fois par mois, jamais. Ces mots vont souvent en fin de phrase : Je fais du roller une fois par semaine. Négation : Je ne roule jamais sur les trottoirs. Pour la nécessité : il faut + infinitif. Il faut un casque. Il ne faut pas s’amuser dans la rue.',
          en: 'Once a day, twice a week, once a month, never. These often go at the end: I roller-skate once a week. Negative: I never ride on the pavement. For necessity: il faut + infinitive. You need a helmet. You mustn’t fool around in the street.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'être fatigué(e) / stressé(e)', en: 'to be tired / stressed' },
          { fr: 'avoir mal à la tête, avoir soif, avoir faim', en: 'to have a headache, be thirsty, be hungry' },
          { fr: 'avoir froid / avoir chaud', en: 'to be cold / to be hot' },
        ],
      },
    ],
    activities: [
      {
        id: 'u5-freq-quiz',
        type: 'quiz',
        title: { fr: 'La fréquence', en: 'Frequency' },
        questions: [
          {
            id: 'fr1',
            prompt: { fr: 'Je fais du vélo deux ___ semaine en été.', en: 'I cycle twice ___ week in summer.' },
            options: [
              { fr: 'fois par', en: 'fois par' },
              { fr: 'jamais le', en: 'jamais le' },
              { fr: 'heure de', en: 'heure de' },
            ],
            answer: 0,
            explanation: { fr: 'une / deux fois par jour, par semaine, par mois.', en: 'once / twice a day, a week, a month.' },
          },
          {
            id: 'fr2',
            prompt: { fr: 'Combien de ___ par mois est-ce que tu vas au cinéma ?', en: 'How many ___ a month do you go to the cinema?' },
            options: [
              { fr: 'fois', en: 'fois' },
              { fr: 'casques', en: 'helmets' },
              { fr: 'trottoirs', en: 'pavements' },
            ],
            answer: 0,
            explanation: { fr: 'Combien de fois par… ?', en: 'How many times per…?' },
          },
          {
            id: 'fr3',
            prompt: { fr: 'Il ne faut ___ de gymnastique. Je préfère le foot. (fréquence zéro)', en: 'You must ___ gymnastics. I prefer football. (zero frequency)' },
            options: [
              { fr: 'jamais', en: 'jamais' },
              { fr: 'une fois', en: 'une fois' },
              { fr: 'toujours le silence', en: 'always the silence' },
            ],
            answer: 0,
            explanation: { fr: 'jamais remplace pas dans la négation : Je ne roule jamais… Il ne faut jamais…', en: 'jamais replaces pas: I never ride… You must never…' },
          },
          {
            id: 'fr4',
            prompt: { fr: 'Une balade en roller en ville, c’est souvent…', en: 'A city roller outing is often…' },
            options: [
              { fr: 'un week-end, un rendez-vous, une heure de départ', en: 'a weekend, a meeting point, a start time' },
              { fr: 'un possessif seulement', en: 'only a possessive' },
              { fr: 'un article partitif de fromage', en: 'a partitive article for cheese' },
            ],
            answer: 0,
            explanation: { fr: 'Quel jour ? Où on se retrouve ? À quelle heure ? Qui peut participer ?', en: 'Which day? Where do we meet? What time? Who can take part?' },
          },
        ],
      },
      {
        id: 'u5-faut-match',
        type: 'matching',
        title: { fr: 'Il faut / il ne faut pas', en: 'You must / you mustn’t' },
        pairs: [
          { id: 'fa1', left: 'Il faut un casque.', right: 'sécurité' },
          { id: 'fa2', left: 'Il ne faut pas rouler sur les trottoirs.', right: 'interdit' },
          { id: 'fa3', left: 'Il faut se préparer.', right: 'nécessité avant la sortie' },
          { id: 'fa4', left: 'Il ne faut pas pousser les voisins.', right: 'respect' },
        ],
      },
      {
        id: 'u5-equip-dialogue',
        type: 'dialogue',
        title: { fr: 'Je n’ai pas de casque', en: 'I haven’t got a helmet' },
        dialogue: {
          id: 'casque',
          title: { fr: 'Avant la balade', en: 'Before the ride' },
          context: {
            fr: 'Tom n’a pas l’équipement. Écoute ce qu’il faut, puis remets dans l’ordre.',
            en: 'Tom hasn’t got the gear. Listen for what he needs, then put the lines in order.',
          },
          lines: [
            { speaker: 'Maya', fr: 'Tu vas faire la balade comment ?', en: 'How are you doing the ride?' },
            { speaker: 'Tom', fr: 'Je ne sais pas encore. J’aime le roller, mais je préfère le skate. Et toi ?', en: 'I don’t know yet. I like rollerblading, but I prefer skateboarding. And you?' },
            { speaker: 'Maya', fr: 'Je sors avec mon vélo. Tu as un casque, j’espère ?', en: 'I’m going out on my bike. You’ve got a helmet, I hope?' },
            { speaker: 'Tom', fr: 'Euh… je n’ai pas de casque, et je n’ai pas de skate.', en: 'Er… I haven’t got a helmet, and I haven’t got a skateboard.' },
            { speaker: 'Maya', fr: 'Pas de problème. Il faut un casque : prends le mien. Et on loue un roller.', en: 'No problem. You need a helmet: take mine. And we’ll hire rollerblades.' },
          ],
        },
      },
      {
        id: 'u5-etat-quiz',
        type: 'quiz',
        title: { fr: 'État physique et conseils', en: 'How you feel and advice' },
        questions: [
          {
            id: 'e1',
            prompt: { fr: 'Votre ami(e) a soif. →', en: 'Your friend is thirsty. →' },
            options: [
              { fr: 'Bois de l’eau ! / Tu peux boire de l’eau.', en: 'Drink some water! / You can drink some water.' },
              { fr: 'Mets un pull.', en: 'Put a jumper on.' },
              { fr: 'Enlève la veste.', en: 'Take the jacket off.' },
            ],
            answer: 0,
            explanation: { fr: 'soif → boire. faim → manger. froid → un pull. chaud → enlever la veste. fatigué → une pause.', en: 'thirsty → drink. hungry → eat. cold → a jumper. hot → take the jacket off. tired → a break.' },
          },
          {
            id: 'e2',
            prompt: { fr: 'Je suis fatigué(e) ! Conseil :', en: 'I’m tired! Advice:' },
            options: [
              { fr: 'Tu peux faire une pause. / Fais une pause maintenant !', en: 'You can take a break. / Take a break now!' },
              { fr: 'Roule sur les trottoirs.', en: 'Ride on the pavement.' },
              { fr: 'Il faut pousser les voisins.', en: 'You must push the neighbours.' },
            ],
            answer: 0,
            explanation: { fr: 'pouvoir + infinitif, ou impératif. Il faut se reposer.', en: 'pouvoir + infinitive, or imperative. You need to rest.' },
          },
          {
            id: 'e3',
            prompt: { fr: 'J’ai mal à la tête. Il gèle. Tu es stressé. On dit aussi…', en: 'I’ve got a headache. It’s freezing. You’re stressed. We also say…' },
            options: [
              { fr: 'être mal / avoir froid / être stressé(e)', en: 'feel unwell / be cold / be stressed' },
              { fr: 'jouer au possessif', en: 'play the possessive' },
              { fr: 'conjuguer Kinshasa', en: 'conjugate Kinshasa' },
            ],
            answer: 0,
            explanation: { fr: 'être fatigué, stressé ; avoir mal à la tête, froid, chaud, soif, faim.', en: 'être tired, stressed; avoir a headache, cold, hot, thirsty, hungry.' },
          },
          {
            id: 'e4',
            prompt: { fr: 'Tu es malade, tu annules :', en: 'You’re ill, you cancel:' },
            options: [
              { fr: 'Je suis désolé(e), mais je suis malade. Je ne peux pas sortir. Vendredi, c’est possible ?', en: 'I’m sorry, but I’m ill. I can’t go out. Is Friday possible?' },
              { fr: 'Oui, super, à tout de suite sans casque.', en: 'Yes, great, see you now without a helmet.' },
              { fr: 'Il faut rouler sur les trottoirs.', en: 'You must ride on the pavement.' },
            ],
            answer: 0,
            explanation: { fr: 'S’excuser + raison + proposer une autre date.', en: 'Apologise + reason + suggest another date.' },
          },
        ],
      },
    ],
  },
  {
    id: 'projet-surprise',
    unitId: 5,
    number: 6,
    title: { fr: 'Une activité surprise', en: 'A surprise activity' },
    summary: {
      fr: 'Choisir une sortie, vérifier l’équipement, rédiger une invitation.',
      en: 'Choose an outing, check the gear, write an invitation.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Le projet : tu organises une surprise. Baignade, festival, patinage, feux d’artifice… Tu regardes les goûts de ton ami(e), le prix, l’heure, le lieu. Puis tu écris : Chut… C’est une surprise ! Je vous invite à la fête de… le… à… On va à… N’oubliez pas… Merci de confirmer.',
          en: 'The project: you organise a surprise. Swimming, a festival, skating, fireworks… You look at your friend’s likes, the price, the time, the place. Then you write: Shh… It’s a surprise! I invite you to the party of… on… at… We’re going to… Don’t forget… Please confirm.',
        },
      },
    ],
    activities: [
      {
        id: 'u5-surprise-match',
        type: 'matching',
        title: { fr: 'Goûts et surprises', en: 'Likes and surprises' },
        pairs: [
          { id: 's1', left: 'adore les sports nautiques', right: 'baignade / bateau' },
          { id: 's2', left: 'aime la musique live', right: 'festival' },
          { id: 's3', left: 'aime l’hiver', right: 'patinage' },
          { id: 's4', left: 'aime les spectacles le soir', right: 'feux d’artifice' },
        ],
      },
      {
        id: 'u5-invite-quiz',
        type: 'quiz',
        title: { fr: 'L’invitation surprise', en: 'The surprise invitation' },
        questions: [
          {
            id: 'inv1',
            prompt: { fr: 'Sur l’invitation, tu indiques surtout…', en: 'On the invitation you mainly give…' },
            options: [
              { fr: 'le nom, la date, l’heure, le lieu, quoi apporter', en: 'the name, date, time, place, what to bring' },
              { fr: 'uniquement le passé récent', en: 'only the recent past' },
              { fr: 'l’arbre généalogique', en: 'the family tree' },
            ],
            answer: 0,
            explanation: { fr: 'Et une date pour confirmer par courriel.', en: 'And a date to confirm by email.' },
          },
          {
            id: 'inv2',
            prompt: { fr: 'L’excursion en bateau, c’est cher ; on peut faire la baignade. Tu…', en: 'The boat trip is expensive; we can go swimming. You…' },
            options: [
              { fr: 'échanges des idées et vous décidez ensemble', en: 'swap ideas and decide together' },
              { fr: 'conjuguez seulement se laver', en: 'only conjugate se laver' },
              { fr: 'louez un commissariat', en: 'rent a police station' },
            ],
            answer: 0,
            explanation: { fr: 'Prix, équipement, où, quand, avec qui, combien ça coûte.', en: 'Price, gear, where, when, with whom, how much it costs.' },
          },
          {
            id: 'inv3',
            prompt: { fr: 'Pour le bénévolat d’août, on s’inscrit avant le 1er juin. C’est…', en: 'For August volunteering, you sign up before 1 June. That’s…' },
            options: [
              { fr: 'une date limite', en: 'a deadline' },
              { fr: 'une nationalité', en: 'a nationality' },
              { fr: 'un dossard rose', en: 'a pink bib' },
            ],
            answer: 0,
            explanation: { fr: 'Lire un programme : activités, public, date d’inscription.', en: 'Read a programme: activities, who it’s for, sign-up date.' },
          },
        ],
      },
      {
        id: 'u5-projet-dialogue',
        type: 'dialogue',
        title: { fr: 'On se retrouve où ?', en: 'Where shall we meet?' },
        dialogue: {
          id: 'rdv',
          title: { fr: 'Accepter et demander des détails', en: 'Accept and ask for details' },
          context: {
            fr: 'Maya accepte. Écoute le lieu et l’heure, puis remets dans l’ordre.',
            en: 'Maya accepts. Listen for the place and time, then put the lines in order.',
          },
          lines: [
            { speaker: 'Tom', fr: 'Ça te dit de venir à une surprise samedi ?', en: 'Fancy coming to a surprise on Saturday?' },
            { speaker: 'Maya', fr: 'Oui, super ! On se retrouve où ?', en: 'Yes, great! Where shall we meet?' },
            { speaker: 'Tom', fr: 'À 18 h, devant la gare. N’oublie pas un pull : il va faire froid.', en: 'At 6 p.m., in front of the station. Don’t forget a jumper: it’s going to be cold.' },
            { speaker: 'Maya', fr: 'D’accord. Merci de l’invitation !', en: 'OK. Thanks for the invitation!' },
          ],
        },
      },
    ],
  },
  {
    id: 'bilan',
    unitId: 5,
    number: 7,
    title: { fr: 'Bilan', en: 'Checkpoint' },
    summary: {
      fr: 'Routine, loisirs, invitations, il faut, état physique, dates et heures.',
      en: 'Routine, leisure, invitations, il faut, how you feel, dates and times.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Coche dans ta tête : je parle de mes habitudes, de mes goûts et de mes projets, j’invite, j’accepte ou je refuse, je décris si je suis fatigué. Si une question bloque, retourne à la leçon.',
          en: 'Check in your head: I can talk about habits, likes and plans, invite, accept or refuse, say if I’m tired. If a question sticks, go back to the lesson.',
        },
      },
    ],
    activities: [
      {
        id: 'u5-bilan-routine',
        type: 'quiz',
        title: { fr: 'Le matin et la maison', en: 'Morning and home' },
        questions: [
          {
            id: 'b1',
            prompt: { fr: 'Je ___ à 7 h, je ___ un café, je ___ au bureau à 8 h 30. (se réveiller / prendre / arriver)', en: 'I ___ at 7, I ___ a coffee, I ___ at the office at 8:30.' },
            options: [
              { fr: 'me réveille · prends · arrive', en: 'me réveille · prends · arrive' },
              { fr: 'réveille · vais · suis', en: 'réveille · vais · suis' },
              { fr: 'se lève · fait · es', en: 'se lève · fait · es' },
            ],
            answer: 0,
            explanation: { fr: 'Pronominal + verbes du quotidien. Remets ensuite les actions dans l’ordre du matin.', en: 'Pronominal + daily verbs. Then put the morning actions in order.' },
          },
          {
            id: 'b2',
            prompt: { fr: 'Quand est-ce que tu travailles ? — Je travaille de 8 h à 14 h le samedi. Tu…', en: 'When do you work? — I work from 8 to 2 on Saturday. You…' },
            options: [
              { fr: 'donnes des infos sur l’emploi du temps', en: 'give timetable information' },
              { fr: 'épelles un dossard', en: 'spell a bib' },
              { fr: 'conjugues seulement beau', en: 'only conjugate beau' },
            ],
            answer: 0,
            explanation: { fr: 'De … à + jour. Vers, et quart, et demie.', en: 'From … to + day. Around, quarter past, half past.' },
          },
        ],
      },
      {
        id: 'u5-bilan-gouts',
        type: 'matching',
        title: { fr: 'Maintenant je peux…', en: 'Now I can…' },
        pairs: [
          { id: 'n1', left: 'J’aime les sports d’équipe, mais je préfère la gym.', right: 'parler de mes goûts' },
          { id: 'n2', left: 'Samedi, je vais aller au cinéma.', right: 'parler de mes projets' },
          { id: 'n3', left: 'C’est mon anniversaire le samedi 15 juin.', right: 'indiquer une date' },
          { id: 'n4', left: 'Tu veux venir au théâtre avec moi ?', right: 'inviter' },
          { id: 'n5', left: 'Je suis fatigué(e) et j’ai mal à la tête.', right: 'décrire un état physique' },
        ],
      },
      {
        id: 'u5-bilan-quiz',
        type: 'quiz',
        title: { fr: 'Checkpoint unité 5', en: 'Unit 5 checkpoint' },
        questions: [
          {
            id: 'x1',
            prompt: { fr: '— Tu ___ venir à la piscine samedi matin ? — Désolée, je ne ___ pas. Je ___ de 9 h à 17 h.', en: '— ___ you come to the pool Saturday morning? — Sorry, I ___ not. I ___ from 9 to 5.' },
            options: [
              { fr: 'veux · peux · travaille', en: 'veux · peux · travaille' },
              { fr: 'dois · sais · es', en: 'dois · sais · es' },
              { fr: 'vas · es · as', en: 'vas · es · as' },
            ],
            answer: 0,
            explanation: { fr: 'Inviter avec vouloir. Refuser avec pouvoir. Expliquer avec l’emploi du temps.', en: 'Invite with vouloir. Refuse with pouvoir. Explain with the timetable.' },
          },
          {
            id: 'x2',
            prompt: { fr: 'On va faire du vélo demain ? — Je ne ___ pas faire de sport : je suis trop fatigué !', en: 'Shall we cycle tomorrow? — I ___ not do sport: I’m too tired!' },
            options: [
              { fr: 'peux', en: 'peux' },
              { fr: 'sais un vélo', en: 'sais un vélo' },
              { fr: 'dois le trottoir', en: 'dois le trottoir' },
            ],
            answer: 0,
            explanation: { fr: 'pouvoir + infinitif. Pourquoi pas ! On fait quoi ? pour accepter et relancer.', en: 'pouvoir + infinitive. Why not! What shall we do? to accept and bounce back.' },
          },
          {
            id: 'x3',
            prompt: { fr: 'Non, ça ne va pas, j’ai mal à la tête. Il gèle. Après le jogging, je…', en: 'No, I’m not well, I’ve got a headache. It’s freezing. After the run, I…' },
            options: [
              { fr: 'rentre, je mets un pull, je me repose', en: 'go home, put a jumper on, rest' },
              { fr: 'roule sur les trottoirs', en: 'ride on the pavement' },
              { fr: 'conjugue le grand-père', en: 'conjugate grandfather' },
            ],
            answer: 0,
            explanation: { fr: 'Conseil : Bois de l’eau. Mange. Il faut se reposer. Mets un pull.', en: 'Advice: Drink water. Eat. You need to rest. Put a jumper on.' },
          },
          {
            id: 'x4',
            prompt: { fr: 'On va se promener dimanche ? — Non, je n’aime pas marcher. Tu…', en: 'Shall we walk on Sunday? — No, I don’t like walking. You…' },
            options: [
              { fr: 'échanges des idées pour une autre sortie', en: 'swap ideas for another outing' },
              { fr: 'épelles uniquement ballon', en: 'only spell ballon' },
              { fr: 'fermes le livre pour toujours', en: 'close the book forever' },
            ],
            answer: 0,
            explanation: { fr: 'Proposer un plan B : cinéma, festival, bénévolat, course…', en: 'Suggest a plan B: cinema, festival, volunteering, a race…' },
          },
        ],
      },
    ],
  },
]
