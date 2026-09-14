import type { Lesson } from '@/types/course'

export const unit1Lessons: Lesson[] = [
  {
    id: 'ouverture',
    unitId: 1,
    number: 1,
    title: { fr: 'Bienvenue', en: 'Welcome' },
    summary: {
      fr: 'Une expérience francophone : se présenter, rencontrer, et choisir un pays qui t’intéresse.',
      en: 'A Francophone experience: introduce yourself, meet people, and pick a country that interests you.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Vers de nouvelles rencontres', en: 'Towards new meetings' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'L’unité 1 te fait entrer dans la vie quotidienne : l’aéroport, le travail, la fac, le train. Avant ça, une question simple : quel pays francophone t’intéresse ?',
          en: 'Unit 1 takes you into everyday life: the airport, work, university, the train. Before that, one simple question: which French-speaking country interests you?',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'la Belgique, la Suisse, le Canada', en: 'Belgium, Switzerland, Canada' },
          { fr: 'le Sénégal, le Maroc, Haïti', en: 'Senegal, Morocco, Haiti' },
          { fr: 'étudier, faire un stage, voyager', en: 'study, do an internship, travel' },
        ],
      },
    ],
    activities: [
      {
        id: 'u1-open-quiz',
        type: 'quiz',
        title: { fr: 'Pourquoi un pays francophone ?', en: 'Why a Francophone country?' },
        questions: [
          {
            id: 'o1',
            prompt: { fr: '« Faire un stage », c’est…', en: '« Faire un stage » means…' },
            options: [
              { fr: 'travailler un temps pour apprendre', en: 'work for a time in order to learn' },
              { fr: 'dire au revoir', en: 'say goodbye' },
              { fr: 'ouvrir un livre', en: 'open a book' },
            ],
            answer: 0,
            explanation: { fr: 'Un stage = une période en entreprise ou dans un service.', en: 'A stage is a period in a company or a service.' },
          },
          {
            id: 'o2',
            prompt: { fr: 'Pour dire le pays qui t’intéresse :', en: 'To say which country interests you:' },
            options: [
              { fr: 'Le Canada m’intéresse.', en: 'Canada interests me.' },
              { fr: 'Le Canada est lundi.', en: 'Canada is Monday.' },
              { fr: 'Ouvrez le Canada.', en: 'Open Canada.' },
            ],
            answer: 0,
            explanation: { fr: 'Pays + m’intéresse / je voudrais visiter…', en: 'Country + m’intéresse / I would like to visit…' },
          },
          {
            id: 'o3',
            prompt: { fr: 'Dans cette unité, tu vas surtout…', en: 'In this unit you will mainly…' },
            options: [
              { fr: 'te présenter et faire connaissance', en: 'introduce yourself and meet people' },
              { fr: 'écrire un roman', en: 'write a novel' },
              { fr: 'apprendre le passé composé seulement', en: 'learn only the passé composé' },
            ],
            answer: 0,
            explanation: { fr: 'Identité, nationalité, métiers, courriel, tu et vous.', en: 'Identity, nationality, jobs, email, tu and vous.' },
          },
        ],
      },
    ],
  },
  {
    id: 'destination-francophonie',
    unitId: 1,
    number: 2,
    title: { fr: 'Destination francophonie', en: 'Francophone destination' },
    summary: {
      fr: 'Pays, nationalités, le verbe être, et présenter quelqu’un. Tu et vous : le bon choix dès la première phrase.',
      en: 'Countries, nationalities, the verb être, and introducing someone. Tu and vous: the right choice from the first sentence.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Les adjectifs de nationalité', en: 'Nationality adjectives' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'En français, la nationalité s’accorde. Un -e au féminin : français → française. Si le masculin finit déjà par -e, le féminin ne change pas : belge, suisse, russe. Attention aux formes spéciales : canadien / canadienne, grec / grecque, turc / turque.',
          en: 'In French, nationality agrees. Add -e for the feminine: français → française. If the masculine already ends in -e, the feminine stays the same: belge, suisse, russe. Watch special forms: canadien / canadienne, grec / grecque, turc / turque.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'Je suis français. / Je suis française.', en: 'I am French (m. / f.).' },
          { fr: 'Il est canadien. / Elle est canadienne.', en: 'He is Canadian. / She is Canadian.' },
          { fr: 'Tu es belge. / Vous êtes belges.', en: 'You are Belgian (sg. / pl.).' },
        ],
      },
      {
        type: 'note',
        title: { fr: 'Être au présent', en: 'Être in the present' },
        text: {
          fr: 'je suis, tu es, il/elle/on est, nous sommes, vous êtes, ils/elles sont. Très souvent + adjectif : Je suis argentin, tu es congolaise.',
          en: 'je suis, tu es, il/elle/on est, nous sommes, vous êtes, ils/elles sont. Very often + adjective: Je suis argentin, tu es congolaise.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Tu ou vous ?', en: 'Tu or vous?' },
        text: {
          fr: 'Tu : une personne, situation informelle (amis). Vous : une personne en situation formelle, ou plusieurs personnes. À la frontière, avec un inconnu : vous.',
          en: 'Tu: one person, informal (friends). Vous: one person in a formal situation, or more than one person. At the border, with a stranger: vous.',
        },
      },
    ],
    activities: [
      {
        id: 'u1-nat-cards',
        type: 'flashcards',
        title: { fr: 'Pays et nationalités', en: 'Countries and nationalities' },
        items: [
          { id: 'fr', fr: 'la France → français / française', en: 'France → French' },
          { id: 'be', fr: 'la Belgique → belge', en: 'Belgium → Belgian' },
          { id: 'ch', fr: 'la Suisse → suisse', en: 'Switzerland → Swiss' },
          { id: 'ca', fr: 'le Canada → canadien / canadienne', en: 'Canada → Canadian' },
          { id: 'cn', fr: 'la Chine → chinois / chinoise', en: 'China → Chinese' },
          { id: 'jp', fr: 'le Japon → japonais / japonaise', en: 'Japan → Japanese' },
          { id: 'us', fr: 'les États-Unis → américain / américaine', en: 'the United States → American' },
          { id: 'br', fr: 'le Brésil → brésilien / brésilienne', en: 'Brazil → Brazilian' },
          { id: 'vn', fr: 'le Vietnam → vietnamien / vietnamienne', en: 'Vietnam → Vietnamese' },
          { id: 'au', fr: 'l’Australie → australien / australienne', en: 'Australia → Australian' },
          { id: 'it', fr: 'l’Italie → italien / italienne', en: 'Italy → Italian' },
          { id: 'de', fr: 'l’Allemagne → allemand / allemande', en: 'Germany → German' },
          { id: 'es', fr: 'l’Espagne → espagnol / espagnole', en: 'Spain → Spanish' },
          { id: 'gr', fr: 'la Grèce → grec / grecque', en: 'Greece → Greek' },
          { id: 'ma', fr: 'le Maroc → marocain / marocaine', en: 'Morocco → Moroccan' },
        ],
      },
      {
        id: 'u1-nat-match',
        type: 'matching',
        title: { fr: 'Associer', en: 'Match' },
        pairs: [
          { id: 'm1', left: 'la France', right: 'français / française' },
          { id: 'm2', left: 'le Canada', right: 'canadien / canadienne' },
          { id: 'm3', left: 'la Chine', right: 'chinois / chinoise' },
          { id: 'm4', left: 'la Suisse', right: 'suisse' },
          { id: 'm5', left: 'l’Allemagne', right: 'allemand / allemande' },
          { id: 'm6', left: 'l’Espagne', right: 'espagnol / espagnole' },
          { id: 'm7', left: 'les États-Unis', right: 'américain / américaine' },
          { id: 'm8', left: 'la Grèce', right: 'grec / grecque' },
        ],
      },
      {
        id: 'u1-nat-quiz',
        type: 'quiz',
        title: { fr: 'Masculin ou féminin ?', en: 'Masculine or feminine?' },
        questions: [
          {
            id: 'n1',
            prompt: { fr: 'Le féminin de chinois, c’est…', en: 'The feminine of chinois is…' },
            options: [
              { fr: 'chinoise', en: 'chinoise' },
              { fr: 'chinienne', en: 'chinienne' },
              { fr: 'chine', en: 'chine' },
            ],
            answer: 0,
            explanation: { fr: 'On ajoute -e : chinois → chinoise.', en: 'Add -e: chinois → chinoise.' },
          },
          {
            id: 'n2',
            prompt: { fr: 'Le masculin de américaine, c’est…', en: 'The masculine of américaine is…' },
            options: [
              { fr: 'américain', en: 'américain' },
              { fr: 'amer', en: 'amer' },
              { fr: 'américa', en: 'américa' },
            ],
            answer: 0,
            explanation: { fr: 'américain / américaine.', en: 'américain / américaine.' },
          },
          {
            id: 'n3',
            prompt: { fr: 'belge au féminin :', en: 'belge in the feminine:' },
            options: [
              { fr: 'belge (même forme)', en: 'belge (same form)' },
              { fr: 'belgese', en: 'belgese' },
              { fr: 'belgienne', en: 'belgienne' },
            ],
            answer: 0,
            explanation: { fr: 'Le masculin finit par -e : pas de changement.', en: 'The masculine already ends in -e: no change.' },
          },
          {
            id: 'n4',
            prompt: { fr: 'Le féminin de canadien :', en: 'The feminine of canadien:' },
            options: [
              { fr: 'canadienne', en: 'canadienne' },
              { fr: 'canadiene', en: 'canadiene' },
              { fr: 'canadien (identique)', en: 'canadien (unchanged)' },
            ],
            answer: 0,
            explanation: { fr: 'canadien → canadienne (comme italien → italienne).', en: 'canadien → canadienne (like italien → italienne).' },
          },
          {
            id: 'n5',
            prompt: { fr: 'Une marque japonaise : on dit…', en: 'A Japanese brand: you say…' },
            options: [
              { fr: 'La marque est japonaise.', en: 'The brand is Japanese.' },
              { fr: 'La marque est Japon.', en: 'The brand is Japan.' },
              { fr: 'La marque est lundi.', en: 'The brand is Monday.' },
            ],
            answer: 0,
            explanation: { fr: 'La marque est féminin → japonaise.', en: 'La marque is feminine → japonaise.' },
          },
        ],
      },
      {
        id: 'u1-etre-quiz',
        type: 'quiz',
        title: { fr: 'Être au présent', en: 'Être in the present' },
        questions: [
          {
            id: 'e1',
            prompt: { fr: 'Nous ___ brésiliens.', en: 'Nous ___ brésiliens.' },
            options: [
              { fr: 'sommes', en: 'sommes' },
              { fr: 'êtes', en: 'êtes' },
              { fr: 'sont', en: 'sont' },
            ],
            answer: 0,
            explanation: { fr: 'nous sommes.', en: 'nous sommes.' },
          },
          {
            id: 'e2',
            prompt: { fr: 'Elles ___ francophones.', en: 'Elles ___ francophones.' },
            options: [
              { fr: 'sont', en: 'sont' },
              { fr: 'est', en: 'est' },
              { fr: 'suis', en: 'suis' },
            ],
            answer: 0,
            explanation: { fr: 'ils/elles sont.', en: 'ils/elles sont.' },
          },
          {
            id: 'e3',
            prompt: { fr: 'Je ___ vietnamienne.', en: 'Je ___ vietnamienne.' },
            options: [
              { fr: 'suis', en: 'suis' },
              { fr: 'es', en: 'es' },
              { fr: 'sommes', en: 'sommes' },
            ],
            answer: 0,
            explanation: { fr: 'je suis.', en: 'je suis.' },
          },
          {
            id: 'e4',
            prompt: { fr: 'Il ___ australien.', en: 'Il ___ australien.' },
            options: [
              { fr: 'est', en: 'est' },
              { fr: 'êtes', en: 'êtes' },
              { fr: 'suis', en: 'suis' },
            ],
            answer: 0,
            explanation: { fr: 'il/elle/on est.', en: 'il/elle/on est.' },
          },
          {
            id: 'e5',
            prompt: { fr: 'Pour présenter Léa, française :', en: 'To introduce Léa, who is French:' },
            options: [
              { fr: 'C’est Léa. Elle est française.', en: 'This is Léa. She is French.' },
              { fr: 'C’est Léa. Il est français.', en: 'This is Léa. He is French.' },
              { fr: 'C’est Léa. Nous sommes Léa.', en: 'This is Léa. We are Léa.' },
            ],
            answer: 0,
            explanation: { fr: 'C’est + nom. Elle est + adjectif au féminin.', en: 'C’est + name. Elle est + feminine adjective.' },
          },
        ],
      },
      {
        id: 'u1-meet-dialogue',
        type: 'dialogue',
        title: { fr: 'On fait connaissance', en: 'Getting to know someone' },
        dialogue: {
          id: 'meet1',
          title: { fr: 'Entre étudiants', en: 'Between students' },
          context: {
            fr: 'Deux étudiants se rencontrent. Informal : tu. Écoute, puis remets dans l’ordre.',
            en: 'Two students meet. Informal: tu. Listen, then put the lines in order.',
          },
          lines: [
            { speaker: 'Inès', fr: 'Salut, comment tu t’appelles ?', en: 'Hi, what’s your name?' },
            { speaker: 'Noah', fr: 'Je m’appelle Noah. Et toi ?', en: 'My name is Noah. And you?' },
            { speaker: 'Inès', fr: 'Inès. Quelle est ta nationalité ?', en: 'Inès. What’s your nationality?' },
            { speaker: 'Noah', fr: 'Je suis italien. Et toi, tu es française ?', en: 'I’m Italian. And you, are you French?' },
            { speaker: 'Inès', fr: 'Oui, je suis française. Enchantée.', en: 'Yes, I’m French. Nice to meet you.' },
            { speaker: 'Noah', fr: 'Enchanté.', en: 'Nice to meet you.' },
          ],
        },
      },
      {
        id: 'u1-tu-vous-quiz',
        type: 'quiz',
        title: { fr: 'Tu ou vous ?', en: 'Tu or vous?' },
        questions: [
          {
            id: 'tv1',
            prompt: { fr: 'À un ami :', en: 'To a friend:' },
            options: [
              { fr: 'Tu es canadien ?', en: 'Are you Canadian? (tu)' },
              { fr: 'Vous êtes canadien ?', en: 'Are you Canadian? (vous)' },
              { fr: 'Ils sont canadien ?', en: 'They are Canadian?' },
            ],
            answer: 0,
            explanation: { fr: 'Une personne, informel → tu.', en: 'One person, informal → tu.' },
          },
          {
            id: 'tv2',
            prompt: { fr: 'À un agent, à la frontière :', en: 'To an officer at the border:' },
            options: [
              { fr: 'Vous êtes canadien ?', en: 'Are you Canadian? (vous)' },
              { fr: 'Tu es canadien ?', en: 'Are you Canadian? (tu)' },
              { fr: 'Je suis tu.', en: 'I am tu.' },
            ],
            answer: 0,
            explanation: { fr: 'Situation formelle → vous.', en: 'Formal situation → vous.' },
          },
          {
            id: 'tv3',
            prompt: { fr: 'Vous, parfois, c’est aussi…', en: 'Vous is sometimes also…' },
            options: [
              { fr: 'plusieurs personnes', en: 'more than one person' },
              { fr: 'un jour de la semaine', en: 'a day of the week' },
              { fr: 'un métier', en: 'a job' },
            ],
            answer: 0,
            explanation: { fr: 'Vous = formel au singulier, ou pluriel.', en: 'Vous = formal singular, or plural.' },
          },
        ],
      },
    ],
  },
  {
    id: 'bonjour-comment-ca-va',
    unitId: 1,
    number: 3,
    title: { fr: 'Bonjour, comment ça va ?', en: 'Hello, how are you?' },
    summary: {
      fr: 'Les métiers, un / une / des, venir de et habiter en/au. Premier jour au travail : se présenter avec des papiers.',
      en: 'Jobs, un / une / des, venir de and habiter en/au. First day at work: introduce yourself with ID.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'un médecin, une avocate, des pompiers : l’article indéfini présente une personne pour la première fois. Le métier s’accorde souvent : un coiffeur / une coiffeuse, un informaticien / une informaticienne.',
          en: 'un médecin, une avocate, des pompiers: the indefinite article introduces a person for the first time. The job often agrees: un coiffeur / une coiffeuse, un informaticien / une informaticienne.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'un avocat / une avocate', en: 'a lawyer' },
          { fr: 'un médecin', en: 'a doctor (often invariable)' },
          { fr: 'un plombier / une plombière', en: 'a plumber' },
          { fr: 'un pompier', en: 'a firefighter' },
          { fr: 'un coiffeur / une coiffeuse', en: 'a hairdresser' },
          { fr: 'un informaticien / une informaticienne', en: 'an IT specialist' },
          { fr: 'un policier / une policière', en: 'a police officer' },
          { fr: 'un professeur / une professeure', en: 'a teacher' },
        ],
      },
      {
        type: 'note',
        title: { fr: 'Venir de / du, habiter en / au', en: 'Venir de / du, habiter en / au' },
        text: {
          fr: 'Pays féminin : venir de Belgique, habiter en Belgique. Pays masculin : venir du Togo, habiter au Togo. Ville : habiter à Paris. États-Unis : des / aux États-Unis.',
          en: 'Feminine country: venir de Belgique, habiter en Belgique. Masculine country: venir du Togo, habiter au Togo. City: habiter à Paris. United States: des / aux États-Unis.',
        },
      },
    ],
    activities: [
      {
        id: 'u1-jobs-match',
        type: 'matching',
        title: { fr: 'Quel métier ?', en: 'Which job?' },
        pairs: [
          { id: 'j1', left: 'avocat / avocate', right: 'la justice, le droit' },
          { id: 'j2', left: 'pompier', right: 'le feu, les urgences' },
          { id: 'j3', left: 'coiffeur / coiffeuse', right: 'les cheveux' },
          { id: 'j4', left: 'informaticien / informaticienne', right: 'l’ordinateur' },
          { id: 'j5', left: 'policier / policière', right: 'l’ordre, la sécurité' },
          { id: 'j6', left: 'plombier / plombière', right: 'l’eau, les tuyaux' },
          { id: 'j7', left: 'médecin', right: 'la santé' },
          { id: 'j8', left: 'professeur / professeure', right: 'les cours' },
        ],
      },
      {
        id: 'u1-articles-quiz',
        type: 'quiz',
        title: { fr: 'Un, une, des', en: 'Un, une, des' },
        questions: [
          {
            id: 'a1',
            prompt: { fr: '___ professeure d’informatique.', en: '___ IT teacher.' },
            options: [
              { fr: 'une', en: 'une' },
              { fr: 'un', en: 'un' },
              { fr: 'des', en: 'des' },
            ],
            answer: 0,
            explanation: { fr: 'professeure = féminin singulier → une.', en: 'professeure = feminine singular → une.' },
          },
          {
            id: 'a2',
            prompt: { fr: '___ pompiers (plusieurs).', en: '___ firefighters (several).' },
            options: [
              { fr: 'des', en: 'des' },
              { fr: 'une', en: 'une' },
              { fr: 'le', en: 'le' },
            ],
            answer: 0,
            explanation: { fr: 'Pluriel → des.', en: 'Plural → des.' },
          },
          {
            id: 'a3',
            prompt: { fr: '___ policier. Il maintient l’ordre.', en: '___ police officer. He keeps order.' },
            options: [
              { fr: 'un', en: 'un' },
              { fr: 'une', en: 'une' },
              { fr: 'des', en: 'des' },
            ],
            answer: 0,
            explanation: { fr: 'Masculin singulier → un.', en: 'Masculine singular → un.' },
          },
          {
            id: 'a4',
            prompt: { fr: '« une coiffeuse » : c’est…', en: '« une coiffeuse » is…' },
            options: [
              { fr: 'féminin singulier', en: 'feminine singular' },
              { fr: 'masculin pluriel', en: 'masculine plural' },
              { fr: 'un pays', en: 'a country' },
            ],
            answer: 0,
            explanation: { fr: 'une + nom féminin.', en: 'une + feminine noun.' },
          },
          {
            id: 'a5',
            prompt: { fr: 'Pour un premier jour, on montre souvent…', en: 'On a first day, you often show…' },
            options: [
              { fr: 'une pièce d’identité et un badge', en: 'an ID document and a badge' },
              { fr: 'un dimanche', en: 'a Sunday' },
              { fr: 'une nationalité seulement', en: 'only a nationality' },
            ],
            answer: 0,
            explanation: { fr: 'Carte d’identité, passeport, permis, badge.', en: 'ID card, passport, licence, badge.' },
          },
        ],
      },
      {
        id: 'u1-work-dialogue',
        type: 'dialogue',
        title: { fr: 'Premier jour au bureau', en: 'First day at the office' },
        dialogue: {
          id: 'work1',
          title: { fr: 'À l’accueil', en: 'At reception' },
          context: {
            fr: 'Une nouvelle informaticienne arrive. Formules de politesse + papiers. Écoute, puis remets dans l’ordre.',
            en: 'A new IT specialist arrives. Polite phrases + documents. Listen, then put the lines in order.',
          },
          lines: [
            { speaker: 'Amira', fr: 'Bonjour, je suis Amira Benali, la nouvelle informaticienne.', en: 'Hello, I’m Amira Benali, the new IT specialist.' },
            { speaker: 'Accueil', fr: 'Bonjour Amira, bienvenue. Vous avez une pièce d’identité ?', en: 'Hello Amira, welcome. Do you have an ID document?' },
            { speaker: 'Amira', fr: 'Oui, voici ma carte d’identité. Et voici mon permis de conduire.', en: 'Yes, here is my ID card. And here is my driving licence.' },
            { speaker: 'Accueil', fr: 'Parfait. Et voici votre badge.', en: 'Perfect. And here is your badge.' },
            { speaker: 'Amira', fr: 'Merci beaucoup.', en: 'Thank you very much.' },
          ],
        },
      },
      {
        id: 'u1-venir-quiz',
        type: 'quiz',
        title: { fr: 'Venir de, habiter en / au', en: 'Venir de, habiter en / au' },
        questions: [
          {
            id: 'v1',
            prompt: { fr: 'Pays féminin : Je viens ___ Belgique.', en: 'Feminine country: Je viens ___ Belgique.' },
            options: [
              { fr: 'de', en: 'de' },
              { fr: 'du', en: 'du' },
              { fr: 'au', en: 'au' },
            ],
            answer: 0,
            explanation: { fr: 'venir de + pays féminin.', en: 'venir de + feminine country.' },
          },
          {
            id: 'v2',
            prompt: { fr: 'Pays masculin : Il vient ___ Togo.', en: 'Masculine country: Il vient ___ Togo.' },
            options: [
              { fr: 'du', en: 'du' },
              { fr: 'de', en: 'de' },
              { fr: 'en', en: 'en' },
            ],
            answer: 0,
            explanation: { fr: 'venir du + pays masculin.', en: 'venir du + masculine country.' },
          },
          {
            id: 'v3',
            prompt: { fr: 'J’habite ___ France.', en: 'J’habite ___ France.' },
            options: [
              { fr: 'en', en: 'en' },
              { fr: 'au', en: 'au' },
              { fr: 'du', en: 'du' },
            ],
            answer: 0,
            explanation: { fr: 'habiter en + pays féminin.', en: 'habiter en + feminine country.' },
          },
          {
            id: 'v4',
            prompt: { fr: 'J’habite ___ Canada.', en: 'J’habite ___ Canada.' },
            options: [
              { fr: 'au', en: 'au' },
              { fr: 'en', en: 'en' },
              { fr: 'de', en: 'de' },
            ],
            answer: 0,
            explanation: { fr: 'habiter au + pays masculin.', en: 'habiter au + masculine country.' },
          },
          {
            id: 'v5',
            prompt: { fr: 'Ville : J’habite ___ Luxembourg (la ville).', en: 'City: J’habite ___ Luxembourg (the city).' },
            options: [
              { fr: 'à', en: 'à' },
              { fr: 'en', en: 'en' },
              { fr: 'du', en: 'du' },
            ],
            answer: 0,
            explanation: { fr: 'habiter à + ville.', en: 'habiter à + city.' },
          },
        ],
      },
      {
        id: 'u1-colleagues-dialogue',
        type: 'dialogue',
        title: { fr: 'Le cocktail de bienvenue', en: 'The welcome drinks' },
        dialogue: {
          id: 'cocktail',
          title: { fr: 'Se présenter entre collègues', en: 'Introduce yourself among colleagues' },
          context: {
            fr: 'Trois collègues. Écoute d’où ils viennent et où ils habitent, puis remets les répliques dans l’ordre.',
            en: 'Three colleagues. Listen to where they come from and where they live, then put the lines in order.',
          },
          lines: [
            { speaker: 'Maya', fr: 'Bonjour, je suis Maya, avocate. Je viens du Canada et j’habite en France.', en: 'Hello, I’m Maya, a lawyer. I’m from Canada and I live in France.' },
            { speaker: 'Loïc', fr: 'Enchanté. Je viens de Belgique. J’habite maintenant à Lyon.', en: 'Nice to meet you. I’m from Belgium. I now live in Lyon.' },
            { speaker: 'Koffi', fr: 'Salut ! Je m’appelle Koffi, je viens du Togo. J’habite au Luxembourg pour le travail.', en: 'Hi! My name is Koffi, I’m from Togo. I live in Luxembourg for work.' },
            { speaker: 'Maya', fr: 'Ravie de vous rencontrer.', en: 'Glad to meet you.' },
          ],
        },
      },
      {
        id: 'u1-consonnes-listen',
        type: 'listen',
        title: { fr: 'Phonétique : consonnes', en: 'Phonetics: consonants' },
        intro: {
          fr: 'Écoute et répète. Le but : sentir b/v, s/ch, l.',
          en: 'Listen and repeat. The aim: feel b/v, s/ch, l.',
        },
        items: [
          { id: 'c1', fr: 'bonjour', en: '[b] — hello' },
          { id: 'c2', fr: 'vous', en: '[v] — you (formal/plural)' },
          { id: 'c3', fr: 'Lyon', en: '[l] — the city' },
          { id: 'c4', fr: 'chocolat', en: '[ʃ] — chocolate' },
          { id: 'c5', fr: 'suisse', en: '[s] — Swiss' },
        ],
      },
    ],
  },
  {
    id: 'premiers-pas-fac',
    unitId: 1,
    number: 4,
    title: { fr: 'Premiers pas à la fac', en: 'First steps at university' },
    summary: {
      fr: 'Un courriel formel, les liaisons, est-ce que c’est, et un café linguistique pour réviser les nationalités.',
      en: 'A formal email, liaisons, est-ce que c’est, and a language café to revise nationalities.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'À la fac, on écrit souvent un courriel : destinataire, expéditeur, pièce jointe. Un message à un service est formel : Bonjour Madame, Cordialement. Entre étudiants, on peut être plus simple.',
          en: 'At university you often write an email: recipient, sender, attachment. A message to an office is formal: Bonjour Madame, Cordialement. Between students you can be simpler.',
        },
      },
      {
        type: 'note',
        title: { fr: 'La liaison', en: 'Liaison' },
        text: {
          fr: 'On lie une consonne finale écrite si le mot suivant commence par une voyelle (ou un h muet) : vous_êtes, on_est, des_amis, un_homme.',
          en: 'You link a written final consonant if the next word starts with a vowel (or silent h): vous_êtes, on_est, des_amis, un_homme.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'est-ce que c’est la capitale ? — Oui, c’est la capitale.', en: 'Is this the capital? — Yes, it is the capital.' },
          { fr: '@ = arobase · . = point · - = tiret · _ = underscore', en: '@ = at · . = dot · - = hyphen · _ = underscore' },
        ],
      },
    ],
    activities: [
      {
        id: 'u1-mail-cards',
        type: 'flashcards',
        title: { fr: 'Le courriel', en: 'Email' },
        items: [
          { id: 'exp', fr: 'l’expéditeur', en: 'the sender', exampleFr: 'Qui est l’expéditeur ?', exampleEn: 'Who is the sender?' },
          { id: 'dest', fr: 'le destinataire', en: 'the recipient', exampleFr: 'Le destinataire, c’est le service étudiants.', exampleEn: 'The recipient is student services.' },
          { id: 'pj', fr: 'la pièce jointe', en: 'the attachment', exampleFr: 'Il y a une pièce jointe.', exampleEn: 'There is an attachment.' },
          { id: 'cours', fr: 'suivre des cours', en: 'to take classes' },
          { id: 'cord', fr: 'Cordialement', en: 'Yours sincerely (formal close)' },
          { id: 'etr', fr: 'un étudiant étranger', en: 'an international student' },
        ],
      },
      {
        id: 'u1-mail-match',
        type: 'matching',
        title: { fr: 'Formel ou pas ?', en: 'Formal or not?' },
        pairs: [
          { id: 'f1', left: 'Bonjour Madame,', right: 'ouverture formelle' },
          { id: 'f2', left: 'Cordialement,', right: 'fermeture formelle' },
          { id: 'f3', left: 'Salut !', right: 'ouverture informelle' },
          { id: 'f4', left: 'À plus', right: 'fermeture informelle' },
          { id: 'f5', left: 'l’expéditeur', right: 'la personne qui écrit' },
          { id: 'f6', left: 'le destinataire', right: 'la personne qui reçoit' },
        ],
      },
      {
        id: 'u1-liaison-quiz',
        type: 'quiz',
        title: { fr: 'Les liaisons', en: 'Liaisons' },
        questions: [
          {
            id: 'l1',
            prompt: { fr: 'On entend une liaison dans…', en: 'You hear a liaison in…' },
            options: [
              { fr: 'vous êtes', en: 'vous êtes' },
              { fr: 'bonjour Léa', en: 'bonjour Léa' },
              { fr: 'merci beaucoup', en: 'merci beaucoup' },
            ],
            answer: 0,
            explanation: { fr: 'vous + êtes : consonne + voyelle.', en: 'vous + êtes: consonant + vowel.' },
          },
          {
            id: 'l2',
            prompt: { fr: 'Autre liaison classique :', en: 'Another classic liaison:' },
            options: [
              { fr: 'des amis', en: 'des amis' },
              { fr: 'le livre', en: 'le livre' },
              { fr: 'au revoir', en: 'au revoir' },
            ],
            answer: 0,
            explanation: { fr: 'des_amis : s se prononce [z].', en: 'des_amis: the s is pronounced [z].' },
          },
          {
            id: 'l3',
            prompt: { fr: '« un homme » : liaison parce que…', en: '« un homme »: liaison because…' },
            options: [
              { fr: 'h est muet, le mot commence comme une voyelle', en: 'h is silent, the word starts like a vowel' },
              { fr: 'c’est un métier', en: 'it is a job' },
              { fr: 'c’est informel', en: 'it is informal' },
            ],
            answer: 0,
            explanation: { fr: 'un_homme, comme un_ami.', en: 'un_homme, like un_ami.' },
          },
          {
            id: 'l4',
            prompt: { fr: 'Dans une adresse, @ se dit…', en: 'In an address, @ is said…' },
            options: [
              { fr: 'arobase', en: 'arobase' },
              { fr: 'point', en: 'dot' },
              { fr: 'tiret', en: 'hyphen' },
            ],
            answer: 0,
            explanation: { fr: '. = point, - = tiret, _ = underscore.', en: '. = point, - = tiret, _ = underscore.' },
          },
        ],
      },
      {
        id: 'u1-estce-quiz',
        type: 'quiz',
        title: { fr: 'Est-ce que c’est ?', en: 'Est-ce que c’est?' },
        questions: [
          {
            id: 'q1',
            prompt: { fr: 'Est-ce que c’est une ville ou un pays ? — « l’Espagne »', en: 'Is it a city or a country? — “Spain”' },
            options: [
              { fr: 'C’est un pays.', en: 'It is a country.' },
              { fr: 'C’est une ville.', en: 'It is a city.' },
              { fr: 'C’est un métier.', en: 'It is a job.' },
            ],
            answer: 0,
            explanation: { fr: 'l’Espagne = un pays. Madrid = une ville.', en: 'Spain = a country. Madrid = a city.' },
          },
          {
            id: 'q2',
            prompt: { fr: '« Non, c’est une université. » On a demandé si c’était…', en: '“No, it’s a university.” Someone asked if it was…' },
            options: [
              { fr: 'une ville (par exemple)', en: 'a city (for example)' },
              { fr: 'un prénom', en: 'a first name' },
              { fr: 'un jour', en: 'a day' },
            ],
            answer: 0,
            explanation: { fr: 'Est-ce que c’est une ville ? — Non, c’est une université.', en: 'Is it a city? — No, it’s a university.' },
          },
          {
            id: 'q3',
            prompt: { fr: 'La forme de la question, c’est…', en: 'The question form is…' },
            options: [
              { fr: 'Est-ce que c’est… ?', en: 'Est-ce que c’est…?' },
              { fr: 'Au revoir… ?', en: 'Au revoir…?' },
              { fr: 'Des pompiers… ?', en: 'Des pompiers…?' },
            ],
            answer: 0,
            explanation: { fr: 'Est-ce que c’est + nom ? Oui / Non, c’est…', en: 'Est-ce que c’est + noun? Yes / No, c’est…' },
          },
        ],
      },
      {
        id: 'u1-cafe-dialogue',
        type: 'dialogue',
        title: { fr: 'Au café linguistique', en: 'At the language café' },
        dialogue: {
          id: 'cafe1',
          title: { fr: 'Deux étudiants', en: 'Two students' },
          context: {
            fr: 'On se rencontre pour parler. Écoute les nationalités, puis remets le dialogue dans l’ordre.',
            en: 'People meet to talk. Listen for nationalities, then put the dialogue in order.',
          },
          lines: [
            { speaker: 'Lucy', fr: 'Bonjour, je m’appelle Lucy. Je suis américaine.', en: 'Hello, my name is Lucy. I’m American.' },
            { speaker: 'Marco', fr: 'Moi, c’est Marco. Je suis cubain. Tu habites où ?', en: 'I’m Marco. I’m Cuban. Where do you live?' },
            { speaker: 'Lucy', fr: 'J’habite à Paris pour les études. Et toi ?', en: 'I live in Paris for my studies. And you?' },
            { speaker: 'Marco', fr: 'Moi aussi. C’est un café linguistique, ce soir ?', en: 'Me too. Is it a language café tonight?' },
            { speaker: 'Lucy', fr: 'Oui, c’est ça. On parle français et on fait connaissance.', en: 'Yes, that’s it. We speak French and we meet people.' },
          ],
        },
      },
    ],
  },
  {
    id: 'votre-billet',
    unitId: 1,
    number: 5,
    title: { fr: 'Votre billet s’il vous plaît', en: 'Your ticket, please' },
    summary: {
      fr: 'Dans le train et pour louer une voiture : tu/vous, Madame/Monsieur, et les pièces d’identité.',
      en: 'On the train and when renting a car: tu/vous, Madame/Monsieur, and ID documents.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Avec un inconnu dans le train, on commence souvent par vous. On peut passer au tu si l’autre le propose. Pour louer une voiture : passeport ou carte d’identité, permis de conduire, carte de crédit.',
          en: 'With a stranger on the train, you often start with vous. You can switch to tu if the other person suggests it. To rent a car: passport or ID card, driving licence, credit card.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'Madame, Monsieur', en: 'formal titles' },
          { fr: 'On peut se tutoyer ?', en: 'Shall we use tu?' },
          { fr: 'un passeport, une carte d’identité, un permis de conduire', en: 'passport, ID card, driving licence' },
        ],
      },
    ],
    activities: [
      {
        id: 'u1-train-dialogue',
        type: 'dialogue',
        title: { fr: 'Dans le train', en: 'On the train' },
        dialogue: {
          id: 'train1',
          title: { fr: 'Faire connaissance', en: 'Getting acquainted' },
          context: {
            fr: 'Deux voyageurs. D’abord vous, puis un passage possible au tu. Écoute, puis remets dans l’ordre.',
            en: 'Two travellers. First vous, then a possible switch to tu. Listen, then put the lines in order.',
          },
          lines: [
            { speaker: 'Awa', fr: 'Bonjour, Monsieur. C’est libre ?', en: 'Hello, sir. Is this seat free?' },
            { speaker: 'Léo', fr: 'Oui, je vous en prie. Vous allez où ?', en: 'Yes, please sit. Where are you going?' },
            { speaker: 'Awa', fr: 'À Lyon. Et vous ?', en: 'To Lyon. And you?' },
            { speaker: 'Léo', fr: 'Moi aussi. On peut se tutoyer, si tu veux.', en: 'Me too. We can use tu, if you like.' },
            { speaker: 'Awa', fr: 'Oui, d’accord. Je m’appelle Awa, je suis sénégalaise.', en: 'Yes, okay. My name is Awa, I’m Senegalese.' },
            { speaker: 'Léo', fr: 'Léo, français. Enchanté.', en: 'Léo, French. Nice to meet you.' },
          ],
        },
      },
      {
        id: 'u1-titles-quiz',
        type: 'quiz',
        title: { fr: 'Madame, Monsieur, tu, vous', en: 'Madame, Monsieur, tu, vous' },
        questions: [
          {
            id: 't1',
            prompt: { fr: 'À l’office du tourisme, avec une inconnue :', en: 'At the tourist office, with a woman you do not know:' },
            options: [
              { fr: 'vous + Madame', en: 'vous + Madame' },
              { fr: 'tu + Salut', en: 'tu + Hi' },
              { fr: 'ils + au revoir', en: 'ils + goodbye' },
            ],
            answer: 0,
            explanation: { fr: 'Situation formelle, une femme : Madame, vous.', en: 'Formal situation, a woman: Madame, vous.' },
          },
          {
            id: 't2',
            prompt: { fr: '« On peut se tutoyer » veut dire :', en: '« On peut se tutoyer » means:' },
            options: [
              { fr: 'on peut passer à tu', en: 'we can switch to tu' },
              { fr: 'on doit partir', en: 'we must leave' },
              { fr: 'on ouvre le livre', en: 'we open the book' },
            ],
            answer: 0,
            explanation: { fr: 'Tutoyer = utiliser tu. Vouvoyer = utiliser vous.', en: 'Tutoyer = use tu. Vouvoyer = use vous.' },
          },
          {
            id: 't3',
            prompt: { fr: 'Pour louer une voiture, on demande souvent…', en: 'To rent a car, people often ask for…' },
            options: [
              { fr: 'un permis de conduire et une pièce d’identité', en: 'a driving licence and an ID document' },
              { fr: 'un cahier', en: 'a notebook' },
              { fr: 'un café linguistique', en: 'a language café' },
            ],
            answer: 0,
            explanation: { fr: 'Passeport ou carte d’identité, permis, parfois une carte de crédit.', en: 'Passport or ID card, licence, sometimes a credit card.' },
          },
        ],
      },
      {
        id: 'u1-car-dialogue',
        type: 'dialogue',
        title: { fr: 'Louer une voiture', en: 'Rent a car' },
        dialogue: {
          id: 'car1',
          title: { fr: 'À l’agence', en: 'At the agency' },
          context: {
            fr: 'Un client loue une voiture. Écoute les papiers et les dates, puis remets les répliques dans l’ordre.',
            en: 'A customer rents a car. Listen for documents and dates, then put the lines in order.',
          },
          lines: [
            { speaker: 'Client', fr: 'Bonjour, c’est pour louer une voiture du 2 au 4 juillet.', en: 'Hello, I’d like to rent a car from 2 to 4 July.' },
            { speaker: 'Agent', fr: 'Très bien. Vous avez un passeport et un permis de conduire, s’il vous plaît ?', en: 'Very well. Do you have a passport and a driving licence, please?' },
            { speaker: 'Client', fr: 'Oui, voilà.', en: 'Yes, here they are.' },
            { speaker: 'Agent', fr: 'Merci. Il y a une garantie de 250 euros. Le kilométrage est illimité. Signez ici.', en: 'Thank you. There is a 250-euro deposit. Mileage is unlimited. Sign here.' },
            { speaker: 'Client', fr: 'Je vais à Saint-Denis. C’est loin ?', en: 'I’m going to Saint-Denis. Is it far?' },
            { speaker: 'Agent', fr: 'Environ une heure trente. Bonne route !', en: 'About an hour and a half. Have a good trip!' },
          ],
        },
      },
      {
        id: 'u1-id-match',
        type: 'matching',
        title: { fr: 'Les papiers', en: 'The documents' },
        pairs: [
          { id: 'd1', left: 'un passeport', right: 'un document pour voyager' },
          { id: 'd2', left: 'une carte d’identité', right: 'une pièce d’identité' },
          { id: 'd3', left: 'un permis de conduire', right: 'pour conduire' },
          { id: 'd4', left: 'une carte de crédit', right: 'pour payer' },
          { id: 'd5', left: 'un badge', right: 'pour entrer au bureau' },
          { id: 'd6', left: 'un billet', right: 'pour le train' },
        ],
      },
      {
        id: 'u1-signs-quiz',
        type: 'quiz',
        title: { fr: 'Panneaux (Suisse)', en: 'Road signs (Switzerland)' },
        intro: {
          fr: 'Trois panneaux fréquents. Ce n’est pas un test de code : c’est pour lire un pictogramme en voyage.',
          en: 'Three common signs. This is not a driving test: it is to read a pictogram when you travel.',
        },
        questions: [
          {
            id: 'sg1',
            prompt: { fr: 'Un losange jaune = souvent…', en: 'A yellow diamond often means…' },
            options: [
              { fr: 'route prioritaire', en: 'priority road' },
              { fr: 'café linguistique', en: 'language café' },
              { fr: 'gare fermée', en: 'station closed' },
            ],
            answer: 0,
            explanation: { fr: 'En Suisse et ailleurs en Europe, le losange jaune signale la priorité.', en: 'In Switzerland and elsewhere in Europe, the yellow diamond marks priority.' },
          },
          {
            id: 'sg2',
            prompt: { fr: 'Le même losange avec une barre noire :', en: 'The same diamond with a black bar:' },
            options: [
              { fr: 'fin de la route prioritaire', en: 'end of the priority road' },
              { fr: 'début de la fac', en: 'start of university' },
              { fr: 'nationalité belge', en: 'Belgian nationality' },
            ],
            answer: 0,
            explanation: { fr: 'La barre = la fin de la règle précédente.', en: 'The bar = the end of the previous rule.' },
          },
          {
            id: 'sg3',
            prompt: { fr: 'Flèche rouge vers le bas, flèche blanche vers le haut :', en: 'Red arrow down, white arrow up:' },
            options: [
              { fr: 'l’autre sens a la priorité', en: 'the other direction has priority' },
              { fr: 'tu dois tutoyer', en: 'you must use tu' },
              { fr: 'c’est un permis de conduire', en: 'it is a driving licence' },
            ],
            answer: 0,
            explanation: { fr: 'Tu cèdes la priorité aux véhicules en face.', en: 'You give way to oncoming vehicles.' },
          },
        ],
      },
    ],
  },
  {
    id: 'projet-salon',
    unitId: 1,
    number: 6,
    title: { fr: 'Projet : salon des métiers', en: 'Project: jobs fair' },
    summary: {
      fr: 'Lire une affiche, remplir un profil, te présenter en speed-meeting.',
      en: 'Read a poster, fill in a profile, introduce yourself at a speed-meeting.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Un salon des métiers, c’est un lieu pour rencontrer des professionnels. On lit : quoi, quand, où. Puis on se présente : prénom, nom, nationalité, métier.',
          en: 'A jobs fair is a place to meet professionals. You read: what, when, where. Then you introduce yourself: first name, surname, nationality, job.',
        },
      },
    ],
    activities: [
      {
        id: 'u1-salon-quiz',
        type: 'quiz',
        title: { fr: 'Lire une affiche', en: 'Read a poster' },
        questions: [
          {
            id: 'p1',
            prompt: { fr: '« Salon des métiers » : c’est surtout…', en: 'A “salon des métiers” is mainly…' },
            options: [
              { fr: 'un événement sur les professions', en: 'an event about jobs' },
              { fr: 'un train', en: 'a train' },
              { fr: 'un mois', en: 'a month' },
            ],
            answer: 0,
            explanation: { fr: 'On y parle de métiers, parfois avec un speed-meeting.', en: 'People talk about jobs there, sometimes with speed-meeting.' },
          },
          {
            id: 'p2',
            prompt: { fr: 'Pour une inscription, on donne souvent…', en: 'For registration, you often give…' },
            options: [
              { fr: 'nom, prénom, courriel, téléphone', en: 'surname, first name, email, phone' },
              { fr: 'seulement « au revoir »', en: 'only “goodbye”' },
              { fr: 'un losange jaune', en: 'a yellow diamond' },
            ],
            answer: 0,
            explanation: { fr: 'Un profil simple : identité + contact.', en: 'A simple profile: identity + contact.' },
          },
          {
            id: 'p3',
            prompt: { fr: 'En binôme, tu peux dire :', en: 'In pairs, you can say:' },
            options: [
              { fr: 'Bonjour, je m’appelle… Je suis… Je viens de…', en: 'Hello, my name is… I am… I come from…' },
              { fr: 'Ouvrez le losange.', en: 'Open the diamond.' },
              { fr: 'C’est un underscore.', en: 'It is an underscore.' },
            ],
            answer: 0,
            explanation: { fr: 'Saluer + se présenter : le cœur du projet.', en: 'Greet + introduce yourself: the heart of the project.' },
          },
        ],
      },
      {
        id: 'u1-present-listen',
        type: 'listen',
        title: { fr: 'Se présenter', en: 'Introduce yourself' },
        items: [
          { id: 'pr1', fr: 'Bonjour, je m’appelle Denise.', en: 'Hello, my name is Denise.' },
          { id: 'pr2', fr: 'Je suis brésilienne.', en: 'I am Brazilian.' },
          { id: 'pr3', fr: 'Je viens du Brésil et j’habite en France.', en: 'I’m from Brazil and I live in France.' },
          { id: 'pr4', fr: 'Je suis informaticienne.', en: 'I am an IT specialist.' },
          { id: 'pr5', fr: 'C’est Marion. Elle est française.', en: 'This is Marion. She is French.' },
          { id: 'pr6', fr: 'Vous êtes brésilien ? Tu es brésilienne ?', en: 'Are you Brazilian? (vous / tu)' },
        ],
      },
    ],
  },
  {
    id: 'bilan',
    unitId: 1,
    number: 7,
    title: { fr: 'Bilan', en: 'Checkpoint' },
    summary: {
      fr: 'Nationalités, métiers, articles, venir/habiter, courriel, liaisons, tu et vous.',
      en: 'Nationalities, jobs, articles, come/live, email, liaisons, tu and vous.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Coche dans ta tête : je peux me présenter, présenter quelqu’un, choisir tu ou vous, poser Est-ce que c’est… ? Si une question bloque, retourne à la leçon.',
          en: 'Check in your head: I can introduce myself, introduce someone, choose tu or vous, ask Est-ce que c’est…? If a question sticks, go back to the lesson.',
        },
      },
    ],
    activities: [
      {
        id: 'u1-bilan-nat',
        type: 'matching',
        title: { fr: 'Drapeaux et nationalités', en: 'Flags and nationalities' },
        pairs: [
          { id: 'b1', left: '🇨🇦 Canada', right: 'canadien / canadienne' },
          { id: 'b2', left: '🇫🇷 France', right: 'français / française' },
          { id: 'b3', left: '🇩🇪 Allemagne', right: 'allemand / allemande' },
          { id: 'b4', left: '🇺🇸 États-Unis', right: 'américain / américaine' },
          { id: 'b5', left: '🇪🇸 Espagne', right: 'espagnol / espagnole' },
          { id: 'b6', left: '🇬🇷 Grèce', right: 'grec / grecque' },
          { id: 'b7', left: '🇧🇪 Belgique', right: 'belge' },
          { id: 'b8', left: '🇨🇳 Chine', right: 'chinois / chinoise' },
        ],
      },
      {
        id: 'u1-bilan-jobs',
        type: 'matching',
        title: { fr: 'Qui utilise ça ?', en: 'Who uses this?' },
        pairs: [
          { id: 'w1', left: 'un ordinateur', right: 'un informaticien' },
          { id: 'w2', left: 'une clé, un tuyau', right: 'un plombier' },
          { id: 'w3', left: 'un casque, le feu', right: 'un pompier' },
          { id: 'w4', left: 'une voiture de police', right: 'un policier' },
        ],
      },
      {
        id: 'u1-bilan-quiz',
        type: 'quiz',
        title: { fr: 'Checkpoint unité 1', en: 'Unit 1 checkpoint' },
        questions: [
          {
            id: 'x1',
            prompt: { fr: 'travail, visa, passeports : avec « des » tu mets…', en: 'travail, visa, passeports: with “des” you put…' },
            options: [
              { fr: 'passeports (pluriel)', en: 'passeports (plural)' },
              { fr: 'travail seulement', en: 'only travail' },
              { fr: 'une capitale', en: 'a capital' },
            ],
            answer: 0,
            explanation: { fr: 'un travail, une capitale, une carte d’identité, des passeports, des villes, des pays.', en: 'un travail, une capitale, une carte d’identité, des passeports, des villes, des pays.' },
          },
          {
            id: 'x2',
            prompt: { fr: 'Il vient ___ Nice. Il habite ___ Nigéria. Il habite ___ États-Unis.', en: 'He comes ___ Nice. He lives ___ Nigeria. He lives ___ the United States.' },
            options: [
              { fr: 'de · au · aux', en: 'de · au · aux' },
              { fr: 'du · en · de', en: 'du · en · de' },
              { fr: 'à · de · un', en: 'à · de · un' },
            ],
            answer: 0,
            explanation: { fr: 'venir de + ville ; habiter au + pays masculin ; habiter aux États-Unis.', en: 'venir de + city; habiter au + masculine country; habiter aux États-Unis.' },
          },
          {
            id: 'x3',
            prompt: { fr: 'Liaison dans…', en: 'Liaison in…' },
            options: [
              { fr: 'vous êtes un homme', en: 'vous êtes un homme' },
              { fr: 'le badge', en: 'le badge' },
              { fr: 'carte bleue', en: 'carte bleue' },
            ],
            answer: 0,
            explanation: { fr: 'vous_êtes, un_homme.', en: 'vous_êtes, un_homme.' },
          },
          {
            id: 'x4',
            prompt: { fr: '« Oui, j’ai un passeport. » Question possible :', en: '“Yes, I have a passport.” A possible question:' },
            options: [
              { fr: 'Est-ce que vous avez un passeport ?', en: 'Do you have a passport?' },
              { fr: 'Quelle est ta nationalité ? seulement', en: 'only What’s your nationality?' },
              { fr: 'C’est lundi ?', en: 'Is it Monday?' },
            ],
            answer: 0,
            explanation: { fr: 'Est-ce que + sujet + verbe. Aussi : Vous allez où ?', en: 'Est-ce que + subject + verb. Also: Where are you going?' },
          },
          {
            id: 'x5',
            prompt: { fr: 'Deux collègues proches, café : plutôt…', en: 'Two close colleagues, café: rather…' },
            options: [
              { fr: 'tu', en: 'tu' },
              { fr: 'vous de frontière', en: 'border vous' },
              { fr: 'des', en: 'des' },
            ],
            answer: 0,
            explanation: { fr: 'Informel entre pairs → tu. Réunion officielle → vous.', en: 'Informal among peers → tu. Official meeting → vous.' },
          },
          {
            id: 'x6',
            prompt: { fr: 'Pour te présenter en 2 phrases :', en: 'To introduce yourself in 2 sentences:' },
            options: [
              { fr: 'Bonjour, je m’appelle… Je suis… et je viens de…', en: 'Hello, my name is… I am… and I come from…' },
              { fr: 'Ouvrez le livre.', en: 'Open the book.' },
              { fr: 'C’est un losange.', en: 'It is a diamond.' },
            ],
            answer: 0,
            explanation: { fr: 'Nom, nationalité ou métier, origine ou ville.', en: 'Name, nationality or job, origin or city.' },
          },
        ],
      },
    ],
  },
]
