import type { Lesson } from '@/types/course'

export const unit4Lessons: Lesson[] = [
  {
    id: 'ouverture',
    unitId: 4,
    number: 1,
    title: { fr: 'Nous tous', en: 'All of us' },
    summary: {
      fr: 'Comment est ta famille ? Parents, enfants, frères, sœurs… et les fêtes qui les rassemblent.',
      en: 'What’s your family like? Parents, children, brothers, sisters… and the celebrations that bring them together.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Des familles, des histoires', en: 'Families, stories' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Dans cette unité, tu parles des personnes : qui est-ce ?, mon frère, sa mère, ils se ressemblent. Tu décris le physique et les vêtements, tu racontes un événement récent avec venir de, et tu réagis à un anniversaire ou à un mariage : félicitations, cadeau, d’accord / pas d’accord.',
          en: 'In this unit you talk about people: who is that?, my brother, her mother, they look alike. You describe looks and clothes, tell a recent event with venir de, and react to a birthday or a wedding: congratulations, a present, agree / disagree.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'Comment est votre famille ?', en: 'What’s your family like?' },
          { fr: 'C’est ma sœur. Elle s’appelle Inès.', en: 'This is my sister. Her name is Inès.' },
          { fr: 'Ils ont deux enfants et un chien.', en: 'They have two children and a dog.' },
        ],
      },
    ],
    activities: [
      {
        id: 'u4-open-quiz',
        type: 'quiz',
        title: { fr: 'Parler de sa famille', en: 'Talking about your family' },
        questions: [
          {
            id: 'o1',
            prompt: { fr: 'Pour demander qui est une personne :', en: 'To ask who someone is:' },
            options: [
              { fr: 'Qui est-ce ?', en: 'Who is that?' },
              { fr: 'Qu’est-ce que c’est ? (un objet / un lieu)', en: 'What is that? (an object / a place)' },
              { fr: 'Il y a un métro ?', en: 'Is there a metro?' },
            ],
            answer: 0,
            explanation: { fr: 'Qui est-ce ? pour une personne. Qu’est-ce que c’est ? pour une chose.', en: 'Qui est-ce? for a person. Qu’est-ce que c’est? for a thing.' },
          },
          {
            id: 'o2',
            prompt: { fr: 'Une famille « spéciale », ça peut être…', en: 'A “special” family can be…' },
            options: [
              { fr: 'une famille différente, originale, ou très unie', en: 'a different, original, or very close family' },
              { fr: 'un moyen de transport', en: 'a means of transport' },
              { fr: 'un article défini seulement', en: 'only a definite article' },
            ],
            answer: 0,
            explanation: { fr: 'Toutes les familles sont différentes : parents, enfants, amis proches…', en: 'Every family is different: parents, children, close friends…' },
          },
          {
            id: 'o3',
            prompt: { fr: 'Dans cette unité, tu vas surtout…', en: 'In this unit you will mainly…' },
            options: [
              { fr: 'décrire des personnes et réagir à une fête', en: 'describe people and react at a celebration' },
              { fr: 'apprendre seulement le passé composé', en: 'learn only the passé composé' },
              { fr: 'louer une voiture', en: 'rent a car' },
            ],
            answer: 0,
            explanation: { fr: 'Famille, physique, vêtements, meubles, cadeau, mariage.', en: 'Family, looks, clothes, furniture, gifts, weddings.' },
          },
        ],
      },
    ],
  },
  {
    id: 'quelle-famille',
    unitId: 4,
    number: 2,
    title: { fr: 'Quelle famille !', en: 'What a family!' },
    summary: {
      fr: 'L’arbre généalogique, qui est-ce ?, et les déterminants possessifs : mon, ta, ses, notre…',
      en: 'The family tree, qui est-ce?, and possessive adjectives: mon, ta, ses, notre…',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Les Morel, une famille', en: 'The Morels, a family' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Hélène et Paul sont les grands-parents. Karim et Sofia sont les parents. Ils ont trois enfants : Lina, Noah et Inès. Pour demander : Marianne, qui est-ce ? — C’est la mère de Noah. Pour la possession : mon père, ma mère, mes parents. Devant une voyelle : mon amie (pas *ma amie).',
          en: 'Hélène and Paul are the grandparents. Karim and Sofia are the parents. They have three children: Lina, Noah and Inès. To ask: Marianne, who is that? — She’s Noah’s mother. For possession: mon père, ma mère, mes parents. Before a vowel: mon amie (not *ma amie).',
        },
      },
      {
        type: 'note',
        title: { fr: 'Qui est-ce ?', en: 'Qui est-ce?' },
        text: {
          fr: 'Question sur l’identité d’une personne. — Qui est-ce ? — C’est le fils, Noah. — Et là, qui est-ce ? — C’est le frère de Lina.',
          en: 'A question about a person’s identity. — Who is that? — That’s the son, Noah. — And there, who is that? — That’s Lina’s brother.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Les déterminants possessifs', en: 'Possessive adjectives' },
        text: {
          fr: 'Un possesseur : je → mon / ma / mes · tu → ton / ta / tes · il/elle → son / sa / ses. Plusieurs : nous → notre / nos · vous → votre / vos · ils/elles → leur / leurs. Accord avec le nom possédé, pas avec le possesseur : il a sa mère, elle a son père.',
          en: 'One owner: je → mon / ma / mes · tu → ton / ta / tes · il/elle → son / sa / ses. More than one: nous → notre / nos · vous → votre / vos · ils/elles → leur / leurs. It agrees with the thing owned, not the owner: he has sa mère, she has son père.',
        },
      },
    ],
    activities: [
      {
        id: 'u4-famille-cards',
        type: 'flashcards',
        title: { fr: 'La famille', en: 'The family' },
        items: [
          { id: 'gm', fr: 'la grand-mère / le grand-père', en: 'grandmother / grandfather' },
          { id: 'per', fr: 'le père / la mère', en: 'father / mother' },
          { id: 'par', fr: 'les parents', en: 'parents' },
          { id: 'fil', fr: 'le fils / la fille', en: 'son / daughter' },
          { id: 'fr', fr: 'le frère / la sœur', en: 'brother / sister' },
          { id: 'mar', fr: 'le mari / la femme', en: 'husband / wife' },
          { id: 'cop', fr: 'le copain / la copine', en: 'boyfriend / girlfriend (also: pal)' },
          { id: 'ami', fr: 'un ami / une amie', en: 'a friend' },
        ],
      },
      {
        id: 'u4-arbre-quiz',
        type: 'quiz',
        title: { fr: 'L’arbre des Morel', en: 'The Morel family tree' },
        questions: [
          {
            id: 'a1',
            prompt: { fr: 'Hélène, qui est-ce ?', en: 'Hélène, who is that?' },
            options: [
              { fr: 'C’est la grand-mère de Lina.', en: 'She’s Lina’s grandmother.' },
              { fr: 'C’est le fils de Noah.', en: 'He’s Noah’s son.' },
              { fr: 'C’est un métro.', en: 'It’s a metro.' },
            ],
            answer: 0,
            explanation: { fr: 'Hélène et Paul = les grands-parents.', en: 'Hélène and Paul = the grandparents.' },
          },
          {
            id: 'a2',
            prompt: { fr: 'Karim et Sofia sont…', en: 'Karim and Sofia are…' },
            options: [
              { fr: 'les parents de Noah, Lina et Inès', en: 'the parents of Noah, Lina and Inès' },
              { fr: 'les enfants de Noah', en: 'Noah’s children' },
              { fr: 'un commissariat', en: 'a police station' },
            ],
            answer: 0,
            explanation: { fr: 'La génération du milieu : le père et la mère.', en: 'The middle generation: father and mother.' },
          },
          {
            id: 'a3',
            prompt: { fr: 'Noah est le ___ de Lina.', en: 'Noah is Lina’s ___.' },
            options: [
              { fr: 'frère', en: 'brother' },
              { fr: 'père', en: 'father' },
              { fr: 'mari', en: 'husband' },
            ],
            answer: 0,
            explanation: { fr: 'Même génération, mêmes parents → frère / sœur.', en: 'Same generation, same parents → brother / sister.' },
          },
          {
            id: 'a4',
            prompt: { fr: 'Sofia est la femme de Karim et la mère de…', en: 'Sofia is Karim’s wife and the mother of…' },
            options: [
              { fr: 'Lina, Noah et Inès', en: 'Lina, Noah and Inès' },
              { fr: 'Hélène seulement', en: 'only Hélène' },
              { fr: 'Paul', en: 'Paul' },
            ],
            answer: 0,
            explanation: { fr: 'C’est la femme de… et la mère de…', en: 'She’s the wife of… and the mother of…' },
          },
          {
            id: 'a5',
            prompt: { fr: 'Combien d’enfants ont Karim et Sofia ?', en: 'How many children do Karim and Sofia have?' },
            options: [
              { fr: 'trois', en: 'three' },
              { fr: 'un', en: 'one' },
              { fr: 'zéro', en: 'zero' },
            ],
            answer: 0,
            explanation: { fr: 'Lina, Noah, Inès.', en: 'Lina, Noah, Inès.' },
          },
        ],
      },
      {
        id: 'u4-poss-match',
        type: 'matching',
        title: { fr: 'Possesseur et déterminant', en: 'Owner and possessive' },
        pairs: [
          { id: 'p1', left: 'je', right: 'mon / ma / mes' },
          { id: 'p2', left: 'tu', right: 'ton / ta / tes' },
          { id: 'p3', left: 'il / elle', right: 'son / sa / ses' },
          { id: 'p4', left: 'nous', right: 'notre / nos' },
          { id: 'p5', left: 'vous', right: 'votre / vos' },
          { id: 'p6', left: 'ils / elles', right: 'leur / leurs' },
        ],
      },
      {
        id: 'u4-poss-quiz',
        type: 'quiz',
        title: { fr: 'Mon, ma, mes…', en: 'Mon, ma, mes…' },
        questions: [
          {
            id: 'po1',
            prompt: { fr: 'Dans ma famille, il y a ___ parents, ___ frère et ___ sœur. (je)', en: 'In my family there are ___ parents, ___ brother and ___ sister. (I)' },
            options: [
              { fr: 'mes · mon · ma', en: 'mes · mon · ma' },
              { fr: 'mon · ma · mes', en: 'mon · ma · mes' },
              { fr: 'son · sa · ses', en: 'son · sa · ses' },
            ],
            answer: 0,
            explanation: { fr: 'parents = pluriel → mes. frère = masculin → mon. sœur = féminin → ma.', en: 'parents = plural → mes. frère = masculine → mon. sœur = feminine → ma.' },
          },
          {
            id: 'po2',
            prompt: { fr: 'Camille aime beaucoup ___ amie Julie. (elle)', en: 'Camille really likes ___ friend Julie. (she)' },
            options: [
              { fr: 'son', en: 'son' },
              { fr: 'sa', en: 'sa' },
              { fr: 'ses', en: 'ses' },
            ],
            answer: 0,
            explanation: { fr: 'amie commence par une voyelle → son (pas sa).', en: 'amie starts with a vowel → son (not sa).' },
          },
          {
            id: 'po3',
            prompt: { fr: 'Lina et Noah voyagent avec ___ parents. (ils)', en: 'Lina and Noah travel with ___ parents. (they)' },
            options: [
              { fr: 'leurs', en: 'leurs' },
              { fr: 'leur', en: 'leur' },
              { fr: 'nos', en: 'nos' },
            ],
            answer: 0,
            explanation: { fr: 'ils + nom pluriel → leurs parents.', en: 'ils + plural noun → leurs parents.' },
          },
          {
            id: 'po4',
            prompt: { fr: 'Lina parle de ___ famille et de ___ amies. (elle)', en: 'Lina talks about ___ family and ___ friends. (she)' },
            options: [
              { fr: 'sa · ses', en: 'sa · ses' },
              { fr: 'son · son', en: 'son · son' },
              { fr: 'mes · ma', en: 'mes · ma' },
            ],
            answer: 0,
            explanation: { fr: 'famille = féminin singulier → sa. amies = pluriel → ses.', en: 'famille = feminine singular → sa. amies = plural → ses.' },
          },
        ],
      },
      {
        id: 'u4-presenter-dialogue',
        type: 'dialogue',
        title: { fr: 'Présenter sa famille', en: 'Introduce your family' },
        dialogue: {
          id: 'photo',
          title: { fr: 'Devant une photo', en: 'In front of a photo' },
          context: {
            fr: 'On montre une photo. Écoute qui est qui, puis remets les répliques dans l’ordre.',
            en: 'Someone shows a photo. Listen to who is who, then put the lines in order.',
          },
          lines: [
            { speaker: 'Noah', fr: 'Qui est-ce ?', en: 'Who is that?' },
            { speaker: 'Lina', fr: 'C’est mes parents. Ils s’appellent Karim et Sofia.', en: 'Those are my parents. Their names are Karim and Sofia.' },
            { speaker: 'Noah', fr: 'Et là ?', en: 'And there?' },
            { speaker: 'Lina', fr: 'C’est ma sœur. Elle s’appelle Inès.', en: 'That’s my sister. Her name is Inès.' },
            { speaker: 'Noah', fr: 'Et lui, avec la barbe ?', en: 'And him, with the beard?' },
            { speaker: 'Lina', fr: 'C’est mon grand-père, Paul. Il est le mari d’Hélène.', en: 'That’s my grandfather, Paul. He’s Hélène’s husband.' },
          ],
        },
      },
    ],
  },
  {
    id: 'famille-etats',
    unitId: 4,
    number: 3,
    title: { fr: 'La famille dans tous ses états', en: 'Family in every mood' },
    summary: {
      fr: 'Venir de + infinitif, les relations, la description physique, le féminin et le pluriel des adjectifs.',
      en: 'Venir de + infinitive, relationships, physical description, feminine and plural adjectives.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Fratrie, quand tu nous tiens', en: 'Siblings, for better or worse' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'Les familles s’amusent, se disputent, s’aiment, parfois se séparent. Pour un événement tout proche : venir de + infinitif. Jean vient d’arriver. Ils viennent de se marier. Attention : de devient d’ devant une voyelle : je viens d’envoyer une carte.',
          en: 'Families have fun, argue, love each other, sometimes separate. For something just now: venir de + infinitive. Jean has just arrived. They have just got married. Watch: de becomes d’ before a vowel: je viens d’envoyer une carte.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Le passé récent', en: 'The recent past' },
        text: {
          fr: 'je viens, tu viens, il/elle/on vient, nous venons, vous venez, ils/elles viennent + de / d’ + infinitif. Ma sœur vient d’avoir un bébé. Ils viennent de s’installer.',
          en: 'je viens, tu viens, il/elle/on vient, nous venons, vous venez, ils/elles viennent + de / d’ + infinitive. My sister has just had a baby. They have just moved in.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Adjectifs : féminin et pluriel', en: 'Adjectives: feminine and plural' },
        text: {
          fr: 'Souvent + -e au féminin : blond → blonde. Certains doublent la consonne : gros → grosse. Pluriel + -s : brun → bruns. Au féminin, la consonne avant -e se prononce : Il est blond. / Elle est blonde.',
          en: 'Often add -e in the feminine: blond → blonde. Some double the consonant: gros → grosse. Plural add -s: brun → bruns. In the feminine, the consonant before -e is pronounced: Il est blond. / Elle est blonde.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'être grand(e) / petit(e), de taille moyenne', en: 'to be tall / short / medium height' },
          { fr: 'avoir les cheveux blonds, bruns, longs, courts', en: 'to have blond, brown, long, short hair' },
          { fr: 'avoir les yeux verts, bleus, marron, noirs', en: 'to have green, blue, brown, black eyes' },
        ],
      },
    ],
    activities: [
      {
        id: 'u4-relations-cards',
        type: 'flashcards',
        title: { fr: 'Relations et événements', en: 'Relationships and events' },
        items: [
          { id: 'am', fr: 's’amuser', en: 'to have fun' },
          { id: 'pl', fr: 'plaisanter', en: 'to joke' },
          { id: 'res', fr: 'se ressembler', en: 'to look alike' },
          { id: 'dis', fr: 'se disputer', en: 'to argue' },
          { id: 'aim', fr: 's’aimer', en: 'to love each other' },
          { id: 'sep', fr: 'se séparer', en: 'to separate / split up' },
          { id: 'mar2', fr: 'se marier', en: 'to get married' },
          { id: 'acc', fr: 'être d’accord / ne pas être d’accord', en: 'to agree / disagree' },
        ],
      },
      {
        id: 'u4-venirde-quiz',
        type: 'quiz',
        title: { fr: 'Je viens de…', en: 'I have just…' },
        questions: [
          {
            id: 'vd1',
            prompt: { fr: 'C’est l’anniversaire de mariage de mes grands-parents. (envoyer une carte) →', en: 'It’s my grandparents’ wedding anniversary. (send a card) →' },
            options: [
              { fr: 'Je viens d’envoyer une carte.', en: 'I have just sent a card.' },
              { fr: 'Je viens de envoyer une carte.', en: 'Je viens de envoyer une carte.' },
              { fr: 'J’envoyer viens une carte.', en: 'J’envoyer viens une carte.' },
            ],
            answer: 0,
            explanation: { fr: 'venir de + infinitif. Devant voyelle : d’envoyer.', en: 'venir de + infinitive. Before a vowel: d’envoyer.' },
          },
          {
            id: 'vd2',
            prompt: { fr: 'Ma sœur est maman ! (féliciter, envoyer des fleurs)', en: 'My sister is a mum! (congratulate, send flowers)' },
            options: [
              { fr: 'Je viens de féliciter ma sœur. Je viens d’envoyer des fleurs.', en: 'I have just congratulated my sister. I have just sent flowers.' },
              { fr: 'Je suis une fleur.', en: 'I am a flower.' },
              { fr: 'Prends le silence.', en: 'Take the silence.' },
            ],
            answer: 0,
            explanation: { fr: 'Deux actions récentes : venir de + verbe, deux fois.', en: 'Two recent actions: venir de + verb, twice.' },
          },
          {
            id: 'vd3',
            prompt: { fr: 'Bonjour, vous ___ arriver ? — Oui, je ___ le frère de la mariée.', en: 'Hello, have you ___ arrive? — Yes, I ___ the bride’s brother.' },
            options: [
              { fr: 'venez d’ · suis', en: 'venez d’ · suis' },
              { fr: 'allez · avez', en: 'allez · avez' },
              { fr: 'prenez · faites', en: 'prenez · faites' },
            ],
            answer: 0,
            explanation: { fr: 'Vous venez d’arriver ? Présentation : je suis le frère de…', en: 'Have you just arrived? Introduction: I’m the brother of…' },
          },
          {
            id: 'vd4',
            prompt: { fr: 'Ma sœur ___ se marier ! Quelle bonne nouvelle.', en: 'My sister ___ get married! What good news.' },
            options: [
              { fr: 'vient de', en: 'vient de' },
              { fr: 'va de', en: 'va de' },
              { fr: 'est de', en: 'est de' },
            ],
            answer: 0,
            explanation: { fr: 'elle vient de se marier = c’est tout récent.', en: 'elle vient de se marier = it just happened.' },
          },
        ],
      },
      {
        id: 'u4-physique-cards',
        type: 'flashcards',
        title: { fr: 'La description physique', en: 'Physical description' },
        items: [
          { id: 'gr', fr: 'grand(e) / petit(e)', en: 'tall / short' },
          { id: 'ch', fr: 'les cheveux longs / courts', en: 'long / short hair' },
          { id: 'bl', fr: 'blond(e) / brun(e) / roux / rousse', en: 'blond / brown-haired / red-haired' },
          { id: 'ye', fr: 'les yeux bleus / verts / marron', en: 'blue / green / brown eyes' },
          { id: 'bar', fr: 'une barbe / une moustache', en: 'a beard / a moustache' },
          { id: 'min', fr: 'mince / gros(se)', en: 'slim / stout' },
          { id: 'gen', fr: 'gentil / gentille', en: 'kind' },
          { id: 'am2', fr: 'amoureux / amoureuse', en: 'in love' },
        ],
      },
      {
        id: 'u4-adj-quiz',
        type: 'quiz',
        title: { fr: 'Féminin, pluriel, ressemblance', en: 'Feminine, plural, looking alike' },
        questions: [
          {
            id: 'ad1',
            prompt: { fr: 'Il est joli. Elle est ___.', en: 'He is good-looking. She is ___.' },
            options: [
              { fr: 'jolie', en: 'jolie' },
              { fr: 'joli', en: 'joli' },
              { fr: 'jolis', en: 'jolis' },
            ],
            answer: 0,
            explanation: { fr: 'Féminin : + e. On entend le son [i] plus clairement avec -ie.', en: 'Feminine: + e. You hear [i] more clearly with -ie.' },
          },
          {
            id: 'ad2',
            prompt: { fr: 'Il a les cheveux ___. (brun)', en: 'He has ___ hair. (brun)' },
            options: [
              { fr: 'bruns', en: 'bruns' },
              { fr: 'brune', en: 'brune' },
              { fr: 'brun', en: 'brun' },
            ],
            answer: 0,
            explanation: { fr: 'cheveux = masculin pluriel → bruns.', en: 'cheveux = masculine plural → bruns.' },
          },
          {
            id: 'ad3',
            prompt: { fr: 'Elle a les yeux ___. (bleu)', en: 'She has ___ eyes. (bleu)' },
            options: [
              { fr: 'bleus', en: 'bleus' },
              { fr: 'bleue', en: 'bleue' },
              { fr: 'bleu', en: 'bleu' },
            ],
            answer: 0,
            explanation: { fr: 'yeux = masculin pluriel → bleus. marron est invariable.', en: 'yeux = masculine plural → bleus. marron does not change.' },
          },
          {
            id: 'ad4',
            prompt: { fr: 'Il est gros. Elle est ___.', en: 'He is stout. She is ___.' },
            options: [
              { fr: 'grosse', en: 'grosse' },
              { fr: 'grose', en: 'grose' },
              { fr: 'gros', en: 'gros' },
            ],
            answer: 0,
            explanation: { fr: 'On double le s : gros → grosse.', en: 'Double the s: gros → grosse.' },
          },
          {
            id: 'ad5',
            prompt: { fr: 'Adam et son frère sont blonds. On dit : ils ___ .', en: 'Adam and his brother are blond. We say: they ___.' },
            options: [
              { fr: 'se ressemblent', en: 'look alike' },
              { fr: 'se ressemble', en: 'se ressemble' },
              { fr: 'est ressemblant le métro', en: 'is resembling the metro' },
            ],
            answer: 0,
            explanation: { fr: 'ils/elles se ressemblent. gentil / gentille, petit / petite : au féminin on entend la consonne.', en: 'ils/elles se ressemblent. gentil / gentille, petit / petite: in the feminine you hear the consonant.' },
          },
        ],
      },
      {
        id: 'u4-feminin-listen',
        type: 'listen',
        title: { fr: 'Marques orales du féminin', en: 'How feminine endings sound' },
        intro: {
          fr: 'Au masculin, la consonne finale est souvent muette. Au féminin, on l’entend : petit / petite, gentil / gentille.',
          en: 'In the masculine, the final consonant is often silent. In the feminine, you hear it: petit / petite, gentil / gentille.',
        },
        items: [
          { id: 'f1', fr: 'petit / petite', en: 'hear the t in petite' },
          { id: 'f2', fr: 'grand / grande', en: 'hear the d in grande' },
          { id: 'f3', fr: 'gentil / gentille', en: 'hear [j] in gentille' },
          { id: 'f4', fr: 'blond / blonde', en: 'hear the d in blonde' },
          { id: 'f5', fr: 'amoureux / amoureuse', en: 'extra syllable in the feminine' },
        ],
      },
    ],
  },
  {
    id: 'evenements',
    unitId: 4,
    number: 4,
    title: { fr: 'Les grands événements de la vie', en: 'Big life events' },
    summary: {
      fr: 'Mariage, compliments, vêtements, place de l’adjectif, et les meubles.',
      en: 'Weddings, compliments, clothes, adjective position, and furniture.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'Tous mes vœux de bonheur !', en: 'All my best wishes!' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'À un mariage, on félicite, on souhaite, on fait des compliments : Comme elle est mignonne ! Quelle élégance ! On décrit les vêtements : une robe longue, un beau costume, un petit sac. L’adjectif se place souvent après le nom. Mais bon, beau, belle, petit, grand se placent souvent avant : une belle veste, un grand chapeau.',
          en: 'At a wedding you congratulate, wish, and pay compliments: How cute she is! What elegance! You describe clothes: a long dress, a handsome suit, a small bag. The adjective often comes after the noun. But bon, beau, belle, petit, grand often come before: une belle veste, un grand chapeau.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Féliciter et souhaiter', en: 'Congratulate and wish' },
        text: {
          fr: 'Félicitations ! / Toutes mes félicitations ! Je te / vous félicite. Bravo ! Tous mes vœux de bonheur ! Joyeux anniversaire !',
          en: 'Congratulations! I congratulate you. Well done! All my best wishes! Happy birthday!',
        },
      },
    ],
    activities: [
      {
        id: 'u4-vetements-cards',
        type: 'flashcards',
        title: { fr: 'Vêtements et accessoires', en: 'Clothes and accessories' },
        items: [
          { id: 'ro', fr: 'une robe', en: 'a dress' },
          { id: 've', fr: 'une veste', en: 'a jacket' },
          { id: 'co', fr: 'un costume', en: 'a suit' },
          { id: 'ch2', fr: 'une chemise', en: 'a shirt' },
          { id: 'hat', fr: 'un chapeau', en: 'a hat' },
          { id: 'sac', fr: 'un sac', en: 'a bag' },
          { id: 'col', fr: 'un collier', en: 'a necklace' },
          { id: 'cei', fr: 'une ceinture', en: 'a belt' },
          { id: 'cra', fr: 'une cravate', en: 'a tie' },
          { id: 'jea', fr: 'un jean', en: 'jeans' },
        ],
      },
      {
        id: 'u4-place-quiz',
        type: 'quiz',
        title: { fr: 'Avant ou après le nom ?', en: 'Before or after the noun?' },
        questions: [
          {
            id: 'pl1',
            prompt: { fr: '(belle) Quelle ___ chemise… !', en: '(belle) What a ___ shirt…!' },
            options: [
              { fr: 'Quelle belle chemise !', en: 'What a lovely shirt!' },
              { fr: 'Quelle chemise belle !', en: 'Quelle chemise belle!' },
              { fr: 'Quel beau chemise !', en: 'Quel beau chemise!' },
            ],
            answer: 0,
            explanation: { fr: 'beau / belle souvent avant le nom. chemise = féminin → belle.', en: 'beau / belle often before the noun. chemise = feminine → belle.' },
          },
          {
            id: 'pl2',
            prompt: { fr: '(grand) C’est un ___ sac.', en: '(grand) It’s a ___ bag.' },
            options: [
              { fr: 'grand sac', en: 'grand sac' },
              { fr: 'sac grand', en: 'sac grand' },
              { fr: 'grande sac', en: 'grande sac' },
            ],
            answer: 0,
            explanation: { fr: 'grand souvent avant. sac = masculin.', en: 'grand often before. sac = masculine.' },
          },
          {
            id: 'pl3',
            prompt: { fr: '(longue) La ___ robe ___ est ma préférée.', en: '(longue) The ___ dress ___ is my favourite.' },
            options: [
              { fr: 'La robe longue', en: 'The long dress' },
              { fr: 'La longue robe (possible, mais ici on entraîne après)', en: 'La longue robe (possible, but here we train after)' },
              { fr: 'Le robe long', en: 'Le robe long' },
            ],
            answer: 0,
            explanation: { fr: 'longue se place souvent après : une robe longue.', en: 'longue often comes after: une robe longue.' },
          },
          {
            id: 'pl4',
            prompt: { fr: '(beau) Elle a un ___ collier.', en: '(beau) She has a ___ necklace.' },
            options: [
              { fr: 'beau collier', en: 'beau collier' },
              { fr: 'belle collier', en: 'belle collier' },
              { fr: 'collier beau', en: 'collier beau' },
            ],
            answer: 0,
            explanation: { fr: 'collier = masculin → un beau collier (beau avant).', en: 'collier = masculine → un beau collier (beau before).' },
          },
          {
            id: 'pl5',
            prompt: { fr: 'Compliment : « Comme elle est mignonne ! » La ponctuation, c’est…', en: 'Compliment: “How cute she is!” The punctuation is…' },
            options: [
              { fr: 'le point d’exclamation', en: 'the exclamation mark' },
              { fr: 'un point d’interrogation seulement', en: 'only a question mark' },
              { fr: 'rien', en: 'nothing' },
            ],
            answer: 0,
            explanation: { fr: 'Compliment = émotion → ! Comme il est beau ! Quelle élégance !', en: 'A compliment = emotion → ! How handsome he is! What elegance!' },
          },
        ],
      },
      {
        id: 'u4-meubles-match',
        type: 'matching',
        title: { fr: 'Les meubles', en: 'Furniture' },
        pairs: [
          { id: 'me1', left: 'on s’assoit, confortable, salon', right: 'le fauteuil / le canapé' },
          { id: 'me2', left: 'on dort', right: 'le lit' },
          { id: 'me3', left: 'on mange, on pose les assiettes', right: 'la table' },
          { id: 'me4', left: 'on s’assoit à table', right: 'la chaise' },
          { id: 'me5', left: 'ça éclaire', right: 'la lampe' },
          { id: 'me6', left: 'on range les vêtements', right: 'la commode' },
        ],
      },
      {
        id: 'u4-meubles-quiz',
        type: 'quiz',
        title: { fr: 'On s’installe', en: 'Moving in' },
        questions: [
          {
            id: 'mq1',
            prompt: { fr: 'Ali et Lisa viennent de s’installer. Ils ont un lit et une table. Ils n’ont pas encore…', en: 'Ali and Lisa have just moved in. They have a bed and a table. They don’t yet have…' },
            options: [
              { fr: 'de canapé, par exemple', en: 'a sofa, for example' },
              { fr: 'de parents comme meuble', en: 'parents as furniture' },
              { fr: 'de qui est-ce', en: 'a who is that' },
            ],
            answer: 0,
            explanation: { fr: 'venir de s’installer + il y a / il n’y a pas de + meuble.', en: 'have just moved in + there is / there isn’t + furniture.' },
          },
          {
            id: 'mq2',
            prompt: { fr: 'Un designer transforme le métal en meubles colorés. Ses créations sont…', en: 'A designer turns metal into colourful furniture. His pieces are…' },
            options: [
              { fr: 'des chaises, des lits, des lampes originales', en: 'original chairs, beds, lamps' },
              { fr: 'des nationalités', en: 'nationalities' },
              { fr: 'des verbes en -er seulement', en: 'only -er verbs' },
            ],
            answer: 0,
            explanation: { fr: 'On décrit les objets : couleur, matière, forme. Moi, je choisis la lampe et la commode.', en: 'You describe objects: colour, material, shape. Me, I choose the lamp and the chest of drawers.' },
          },
          {
            id: 'mq3',
            prompt: { fr: 'La lampe va en face du fauteuil. Le lit est à côté de la commode. Tu…', en: 'The lamp is opposite the armchair. The bed is next to the chest. You…' },
            options: [
              { fr: 'places les meubles avec les prépositions de l’unité 3', en: 'place furniture with unit 3 prepositions' },
              { fr: 'conjugues seulement avoir l’âge', en: 'only conjugate age with avoir' },
              { fr: 'épelles un tramway', en: 'spell a tram' },
            ],
            answer: 0,
            explanation: { fr: 'en face de, à côté de, entre, dans le salon…', en: 'opposite, next to, between, in the living room…' },
          },
        ],
      },
      {
        id: 'u4-mariage-dialogue',
        type: 'dialogue',
        title: { fr: 'Compliments aux mariés', en: 'Compliments to the couple' },
        dialogue: {
          id: 'mariage',
          title: { fr: 'Quelle élégance !', en: 'What elegance!' },
          context: {
            fr: 'À une cérémonie. Écoute les compliments, puis remets dans l’ordre.',
            en: 'At a ceremony. Listen to the compliments, then put them in order.',
          },
          lines: [
            { speaker: 'Léa', fr: 'Félicitations aux mariés ! Ah, comme Mamie est mignonne avec sa robe cocktail !', en: 'Congratulations to the couple! Ah, Grandma looks so cute in her cocktail dress!' },
            { speaker: 'Hugo', fr: 'Et Papi est bien chic avec sa chemise bleue. C’est un beau costume.', en: 'And Grandpa looks really smart in his blue shirt. That’s a handsome suit.' },
            { speaker: 'Léa', fr: 'La mariée est sublime. Quelle élégance !', en: 'The bride is stunning. What elegance!' },
            { speaker: 'Hugo', fr: 'Tous mes vœux de bonheur !', en: 'All my best wishes!' },
          ],
        },
      },
    ],
  },
  {
    id: 'joyeux-anniversaire',
    unitId: 4,
    number: 5,
    title: { fr: 'Joyeux anniversaire !', en: 'Happy birthday!' },
    summary: {
      fr: 'Choisir un cadeau, mais et et, je suis d’accord, les voyelles [ɛ] [œ] [ø], et la fête.',
      en: 'Choose a present, mais and et, I agree, the vowels [ɛ] [œ] [ø], and the party.',
    },
    blocks: [
      {
        type: 'heading',
        title: { fr: 'On cherche un cadeau', en: 'We’re looking for a present' },
      },
      {
        type: 'paragraph',
        text: {
          fr: 'On organise une fête. Quel cadeau on offre ? J’aime les vêtements, mais je ne suis pas d’accord : elle préfère les BD. Et relie deux idées. Mais montre une opposition. À la fête : on aborde une personne, on souhaite, on remercie, on plaisante.',
          en: 'You’re organising a party. What present shall we give? I like clothes, but I disagree: she prefers comics. Et links two ideas. Mais shows a contrast. At the party: you introduce yourself, wish someone well, say thank you, joke.',
        },
      },
      {
        type: 'note',
        title: { fr: 'Mais et et', en: 'Mais and et' },
        text: {
          fr: 'et = addition : Elle fête avec sa famille et ses amis. mais = opposition : Il est marié, mais il n’a pas d’enfants. Je suis sportive, mais je n’aime pas les sports extrêmes.',
          en: 'et = addition: She celebrates with her family and her friends. mais = contrast: He is married, but he has no children. I’m sporty, but I don’t like extreme sports.',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'Je suis d’accord. ≠ Je ne suis pas d’accord.', en: 'I agree. ≠ I don’t agree.' },
          { fr: 'C’est vrai. / Plutôt un roman ?', en: 'That’s true. / Rather a novel?' },
          { fr: 'Un casque, c’est beau, mais c’est cher.', en: 'A helmet is nice, but it’s expensive.' },
        ],
      },
    ],
    activities: [
      {
        id: 'u4-mais-quiz',
        type: 'quiz',
        title: { fr: 'Mais ou et ?', en: 'Mais or et?' },
        questions: [
          {
            id: 'me1',
            prompt: { fr: 'Je suis sportive, ___ je n’aime pas les sports extrêmes.', en: 'I’m sporty, ___ I don’t like extreme sports.' },
            options: [
              { fr: 'mais', en: 'mais' },
              { fr: 'et', en: 'et' },
              { fr: 'qui', en: 'qui' },
            ],
            answer: 0,
            explanation: { fr: 'Opposition → mais.', en: 'Contrast → mais.' },
          },
          {
            id: 'me2',
            prompt: { fr: 'Je lis des romans ___ des bandes dessinées.', en: 'I read novels ___ comics.' },
            options: [
              { fr: 'et', en: 'et' },
              { fr: 'mais', en: 'mais' },
              { fr: 'où', en: 'où' },
            ],
            answer: 0,
            explanation: { fr: 'Deux goûts ensemble → et.', en: 'Two likes together → et.' },
          },
          {
            id: 'me3',
            prompt: { fr: 'Je suis sociable, ___ je n’aime pas les sports d’équipe.', en: 'I’m sociable, ___ I don’t like team sports.' },
            options: [
              { fr: 'mais', en: 'mais' },
              { fr: 'et', en: 'et' },
              { fr: 'de', en: 'de' },
            ],
            answer: 0,
            explanation: { fr: 'Idée contraire → mais.', en: 'Opposite idea → mais.' },
          },
          {
            id: 'me4',
            prompt: { fr: 'On achète des vêtements à Lina. Maya n’est pas d’accord : Lina préfère les BD. Tu dis…', en: 'We’re buying Lina clothes. Maya disagrees: Lina prefers comics. You say…' },
            options: [
              { fr: 'Je ne suis pas d’accord. Je vais à la librairie.', en: 'I don’t agree. I’m going to the bookshop.' },
              { fr: 'Je suis un bus.', en: 'I am a bus.' },
              { fr: 'Il y a 53 ans.', en: 'There is 53 years.' },
            ],
            answer: 0,
            explanation: { fr: 'Exprimer le désaccord, puis proposer autre chose.', en: 'Disagree, then suggest something else.' },
          },
        ],
      },
      {
        id: 'u4-cadeau-dialogue',
        type: 'dialogue',
        title: { fr: 'Quel cadeau on offre ?', en: 'What present shall we give?' },
        dialogue: {
          id: 'cadeau',
          title: { fr: 'D’accord, pas d’accord', en: 'Agree, disagree' },
          context: {
            fr: 'Trois amis choisissent un cadeau. Écoute qui est d’accord, puis remets dans l’ordre.',
            en: 'Three friends choose a present. Listen to who agrees, then put the lines in order.',
          },
          lines: [
            { speaker: 'Tom', fr: 'Salut, on organise une fête pour les 30 ans de Noa.', en: 'Hi, we’re organising a party for Noa’s 30th.' },
            { speaker: 'Maya', fr: 'Quel cadeau on offre ?', en: 'What present shall we give?' },
            { speaker: 'Tom', fr: 'Il aime les vêtements.', en: 'He likes clothes.' },
            { speaker: 'Inès', fr: 'Une carte-cadeau, alors ?', en: 'A gift card, then?' },
            { speaker: 'Maya', fr: 'Moi, je ne suis pas d’accord. Noa préfère les BD.', en: 'I don’t agree. Noa prefers comics.' },
            { speaker: 'Inès', fr: 'D’accord. Je vais à la librairie. Je cherche une bonne BD !', en: 'OK. I’m going to the bookshop. I’ll look for a good comic!' },
          ],
        },
      },
      {
        id: 'u4-fete-match',
        type: 'matching',
        title: { fr: 'À la fête, on dit…', en: 'At the party, you say…' },
        pairs: [
          { id: 'fe1', left: 'souhaiter l’anniversaire', right: 'Bon anniversaire !' },
          { id: 'fe2', left: 'complimenter le cadeau', right: 'C’est un beau cadeau !' },
          { id: 'fe3', left: 'aborder une personne inconnue', right: 'On ne se connaît pas. Enchanté(e).' },
          { id: 'fe4', left: 'remercier d’un cadeau', right: 'Mille mercis ! C’est trop gentil.' },
        ],
      },
      {
        id: 'u4-fete-dialogue',
        type: 'dialogue',
        title: { fr: 'On ne se connaît pas', en: 'We haven’t met' },
        dialogue: {
          id: 'inconnus',
          title: { fr: 'Chez Mamie Odette', en: 'At Grandma Odette’s' },
          context: {
            fr: 'Tu arrives à une fête. Écoute les présentations, puis remets dans l’ordre.',
            en: 'You arrive at a party. Listen to the introductions, then put the lines in order.',
          },
          lines: [
            { speaker: 'Nina', fr: 'Bonjour, on ne se connaît pas. Je suis Nina, la petite-fille d’Odette.', en: 'Hello, we haven’t met. I’m Nina, Odette’s granddaughter.' },
            { speaker: 'Clara', fr: 'Ah, c’est vous, Nina ! Moi, c’est Clara. Je suis la voisine de votre grand-mère. Enchantée de faire votre connaissance.', en: 'Ah, it’s you, Nina! I’m Clara. I’m your grandmother’s neighbour. Pleased to meet you.' },
            { speaker: 'Nina', fr: 'Enchantée. Bon anniversaire, Mamie !', en: 'Pleased to meet you. Happy birthday, Grandma!' },
            { speaker: 'Odette', fr: 'Merci, ma chérie. Quel cadeau ! C’est trop gentil.', en: 'Thank you, darling. What a present! That’s so kind.' },
          ],
        },
      },
      {
        id: 'u4-voyelles-listen',
        type: 'listen',
        title: { fr: 'Voyelles [ɛ], [œ], [ø]', en: 'Vowels [ɛ], [œ], [ø]' },
        intro: {
          fr: 'Écoute et répète. [ø] / [œ] : cheveux, sœur, yeux, jeune, bleu. [ɛ] : père, mère, frère, mais, lunettes, vêtements.',
          en: 'Listen and repeat. [ø] / [œ]: cheveux, sœur, yeux, jeune, bleu. [ɛ]: père, mère, frère, mais, lunettes, vêtements.',
        },
        items: [
          { id: 'oe1', fr: 'cheveux', en: '[ø] / [œ]' },
          { id: 'oe2', fr: 'sœur', en: '[œ]' },
          { id: 'oe3', fr: 'yeux', en: '[ø]' },
          { id: 'e1', fr: 'père', en: '[ɛ]' },
          { id: 'e2', fr: 'frère', en: '[ɛ]' },
          { id: 'e3', fr: 'vêtements', en: '[ɛ]' },
        ],
      },
    ],
  },
  {
    id: 'projet-mariage',
    unitId: 4,
    number: 6,
    title: { fr: 'Un montage pour les mariés', en: 'A montage for the couple' },
    summary: {
      fr: 'Répondre à une invitation, féliciter, souhaiter, puis présenter les mariés en quelques phrases.',
      en: 'Reply to an invitation, congratulate, wish, then present the couple in a few sentences.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Le projet : tes amis se marient. Tu réponds au faire-part (oui, avec grand plaisir / non, malheureusement). Tu prépares un court montage : qui ils sont, ce qu’ils aiment, ce qu’ils font ensemble, comment ils sont. Puis tu présentes : Ils sont mariés, et ils ont…',
          en: 'The project: your friends are getting married. You reply to the invitation (yes, with great pleasure / no, unfortunately). You prepare a short montage: who they are, what they like, what they do together, what they’re like. Then you present: They are married, and they have…',
        },
      },
      {
        type: 'examples',
        items: [
          { fr: 'Félicitations ! Toutes mes félicitations !', en: 'Congratulations!' },
          { fr: 'Je te / vous félicite. Bravo !', en: 'I congratulate you. Well done!' },
          { fr: 'Tous mes vœux de bonheur !', en: 'All my best wishes!' },
        ],
      },
    ],
    activities: [
      {
        id: 'u4-invitation-quiz',
        type: 'quiz',
        title: { fr: 'Le faire-part', en: 'The invitation' },
        questions: [
          {
            id: 'in1',
            prompt: { fr: '« Vous êtes invités à célébrer notre mariage, le 20 juillet, à 15 heures, au château. » Tu notes…', en: '“You are invited to celebrate our wedding, 20 July, 3 p.m., at the château.” You note…' },
            options: [
              { fr: 'la date, l’heure et le lieu', en: 'the date, time and place' },
              { fr: 'seulement un numéro de métro', en: 'only a metro number' },
              { fr: 'un verbe avoir l’âge', en: 'a verb for age' },
            ],
            answer: 0,
            explanation: { fr: 'Un faire-part : qui, quand, où, parfois un cocktail après la cérémonie.', en: 'An invitation: who, when, where, sometimes drinks after the ceremony.' },
          },
          {
            id: 'in2',
            prompt: { fr: 'Pour accepter :', en: 'To accept:' },
            options: [
              { fr: 'Oui, avec grand plaisir !', en: 'Yes, with great pleasure!' },
              { fr: 'Non, malheureusement.', en: 'No, unfortunately.' },
              { fr: 'Je suis un chapeau.', en: 'I am a hat.' },
            ],
            answer: 0,
            explanation: { fr: 'On indique aussi le nombre d’adultes et d’enfants.', en: 'You also give the number of adults and children.' },
          },
          {
            id: 'in3',
            prompt: { fr: 'Pour le montage, tu parles de…', en: 'For the montage, you talk about…' },
            options: [
              { fr: 'identité, goûts, activités, caractère, relation', en: 'identity, likes, activities, character, relationship' },
              { fr: 'seulement le passé composé du verbe être', en: 'only the passé composé of être' },
              { fr: 'un ticket de tram', en: 'a tram ticket' },
            ],
            answer: 0,
            explanation: { fr: 'Ils s’appellent… Ils aiment… Ils font… Ils sont drôles, gentils… C’est un ami d’enfance.', en: 'Their names are… They like… They do… They’re funny, kind… He’s a childhood friend.' },
          },
        ],
      },
      {
        id: 'u4-projet-match',
        type: 'matching',
        title: { fr: 'Comment féliciter, comment souhaiter', en: 'How to congratulate, how to wish' },
        pairs: [
          { id: 'fs1', left: 'Félicitations !', right: 'un mariage, un succès, un bébé' },
          { id: 'fs2', left: 'Joyeux anniversaire !', right: 'un anniversaire' },
          { id: 'fs3', left: 'Tous mes vœux de bonheur !', right: 'les mariés' },
          { id: 'fs4', left: 'Bravo !', right: 'un succès, un beau geste' },
        ],
      },
      {
        id: 'u4-projet-dialogue',
        type: 'dialogue',
        title: { fr: 'Présenter les mariés', en: 'Present the couple' },
        dialogue: {
          id: 'mont',
          title: { fr: 'Notre petit film', en: 'Our little film' },
          context: {
            fr: 'Tu présentes un montage. Écoute les infos, puis remets dans l’ordre.',
            en: 'You present a montage. Listen to the facts, then put the lines in order.',
          },
          lines: [
            { speaker: 'Mila', fr: 'Voici Inès et Karim. Ils se marient samedi.', en: 'Here are Inès and Karim. They’re getting married on Saturday.' },
            { speaker: 'Hugo', fr: 'Ils s’aiment depuis longtemps. Ils sont gentils, et un peu drôles.', en: 'They’ve loved each other for a long time. They’re kind, and a bit funny.' },
            { speaker: 'Mila', fr: 'Ils adorent la musique et les voyages. Ils n’aiment pas rester à la maison !', en: 'They love music and trips. They don’t like staying at home!' },
            { speaker: 'Hugo', fr: 'Tous nos vœux de bonheur !', en: 'All our best wishes!' },
          ],
        },
      },
    ],
  },
  {
    id: 'bilan',
    unitId: 4,
    number: 7,
    title: { fr: 'Bilan', en: 'Checkpoint' },
    summary: {
      fr: 'Qui est-ce, possessifs, description, venir de, mais / et, d’accord, compliments.',
      en: 'Who is that, possessives, description, venir de, mais / et, agreeing, compliments.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Coche dans ta tête : je m’informe sur les personnes, je décris, je raconte un événement récent, je félicite, je dis d’accord ou pas. Si une question bloque, retourne à la leçon.',
          en: 'Check in your head: I can ask about people, describe, tell a recent event, congratulate, agree or disagree. If a question sticks, go back to the lesson.',
        },
      },
    ],
    activities: [
      {
        id: 'u4-bilan-qui',
        type: 'quiz',
        title: { fr: 'Qui est-ce ? Possessifs', en: 'Who is that? Possessives' },
        questions: [
          {
            id: 'b1',
            prompt: { fr: 'C’est Sofia. C’est la femme de Karim et la mère de Lina. Question :', en: 'This is Sofia. She’s Karim’s wife and Lina’s mother. Question:' },
            options: [
              { fr: 'Qui est-ce ?', en: 'Who is that?' },
              { fr: 'Qu’est-ce que c’est ?', en: 'What is that?' },
              { fr: 'Il y a un bus ?', en: 'Is there a bus?' },
            ],
            answer: 0,
            explanation: { fr: 'Personne → qui est-ce ? Réponse : C’est…, la femme de…, la mère de…', en: 'Person → qui est-ce? Answer: That’s…, the wife of…, the mother of…' },
          },
          {
            id: 'b2',
            prompt: { fr: 'Inès n’est pas très ___ / ___. Elle a les cheveux ___ / ___.', en: 'Inès is not very ___ / ___. She has ___ / ___ hair.' },
            options: [
              { fr: 'grande · courts', en: 'grande · courts' },
              { fr: 'grand · court', en: 'grand · court' },
              { fr: 'gros · bleu', en: 'gros · bleu' },
            ],
            answer: 0,
            explanation: { fr: 'Elle → grande. cheveux → courts (pluriel). gentille, amoureuse : féminin.', en: 'Elle → grande. cheveux → courts (plural). gentille, amoureuse: feminine.' },
          },
          {
            id: 'b3',
            prompt: { fr: 'Tu sais quoi ? — Quoi ? — Ma sœur vient d’avoir un bébé. Tes parents…', en: 'Guess what? — What? — My sister has just had a baby. Your parents…' },
            options: [
              { fr: 'sont heureux. Ils adorent leurs petits-enfants.', en: 'are happy. They love their grandchildren.' },
              { fr: 'prennent le silence.', en: 'take the silence.' },
              { fr: 'sont un canapé.', en: 'are a sofa.' },
            ],
            answer: 0,
            explanation: { fr: 'venir de + nouvelle. leurs = ils + pluriel.', en: 'venir de + news. leurs = they + plural.' },
          },
        ],
      },
      {
        id: 'u4-bilan-fete',
        type: 'matching',
        title: { fr: 'Situation et réaction', en: 'Situation and reaction' },
        pairs: [
          { id: 'si1', left: 'votre frère a 18 ans', right: 'j’organise une fête / j’envoie une invitation' },
          { id: 'si2', left: 'anniversaire d’un ami', right: 'j’offre un cadeau / des fleurs' },
          { id: 'si3', left: 'vous vous mariez', right: 'on porte un costume / une belle robe' },
          { id: 'si4', left: 'vous êtes à un mariage', right: 'félicitations, tous mes vœux' },
        ],
      },
      {
        id: 'u4-bilan-quiz',
        type: 'quiz',
        title: { fr: 'Checkpoint unité 4', en: 'Unit 4 checkpoint' },
        questions: [
          {
            id: 'x1',
            prompt: { fr: 'Je suis d’accord avec toi, ___ j’invite la famille ___ ses amis.', en: 'I agree with you, ___ I invite the family ___ their friends.' },
            options: [
              { fr: 'mais · et', en: 'mais · et' },
              { fr: 'et · mais', en: 'et · mais' },
              { fr: 'de · de', en: 'de · de' },
            ],
            answer: 0,
            explanation: { fr: 'Opposition puis addition, selon le sens. Ici : d’accord, mais j’invite A et B.', en: 'Contrast then addition, depending on meaning. Here: I agree, but I invite A and B.' },
          },
          {
            id: 'x2',
            prompt: { fr: 'Lettre d’anniversaire : Cher Papi, je te souhaite…, je t’embrasse. L’ordre naturel :', en: 'Birthday letter: Dear Grandpa, I wish you…, love. Natural order:' },
            options: [
              { fr: 'appel + vœu + formule de fin', en: 'greeting + wish + closing' },
              { fr: 'seulement un ticket de métro', en: 'only a metro ticket' },
              { fr: 'un impératif de prendre', en: 'an imperative of prendre' },
            ],
            answer: 0,
            explanation: { fr: 'Cher… / C’est un cadeau d’avoir un papi comme toi. / Je te souhaite un très joyeux anniversaire. / Je t’embrasse.', en: 'Dear… / It’s a gift to have a grandpa like you. / I wish you a very happy birthday. / Love.' },
          },
          {
            id: 'x3',
            prompt: { fr: 'Elle a les cheveux blonds et courts. Il porte un costume chic. Dans son salon, il y a une belle lampe. Tu…', en: 'She has short blond hair. He is wearing a smart suit. In his living room there is a lovely lamp. You…' },
            options: [
              { fr: 'décris les personnes, les vêtements et les meubles', en: 'describe people, clothes and furniture' },
              { fr: 'conjugues seulement il y a un bus', en: 'only conjugate there is a bus' },
              { fr: 'épelles Kinshasa', en: 'spell Kinshasa' },
            ],
            answer: 0,
            explanation: { fr: 'Physique + vêtements + intérieur : les trois descriptions de l’unité.', en: 'Looks + clothes + interior: the unit’s three descriptions.' },
          },
          {
            id: 'x4',
            prompt: { fr: 'Mon frère est en voyage de noces. Il vient de se marier. C’est…', en: 'My brother is on honeymoon. He has just got married. This is…' },
            options: [
              { fr: 'relater un événement récent', en: 'telling a recent event' },
              { fr: 'un article indéfini seulement', en: 'only an indefinite article' },
              { fr: 'l’impératif aller', en: 'the imperative of aller' },
            ],
            answer: 0,
            explanation: { fr: 'venir de + infinitif pour le tout proche passé.', en: 'venir de + infinitive for the very recent past.' },
          },
          {
            id: 'x5',
            prompt: { fr: 'Comme il est beau ! Joyeux anniversaire ! Tu…', en: 'How handsome he is! Happy birthday! You…' },
            options: [
              { fr: 'félicites / souhaites / fais un compliment', en: 'congratulate / wish / pay a compliment' },
              { fr: 'loues une voiture', en: 'rent a car' },
              { fr: 'comptes jusqu’à quatre-vingts seulement', en: 'only count to eighty' },
            ],
            answer: 0,
            explanation: { fr: 'Exclamation + vœu. C’est trop gentil. Mille mercis.', en: 'Exclamation + wish. That’s so kind. A thousand thanks.' },
          },
        ],
      },
    ],
  },
  {
    id: 'delf-a1',
    unitId: 4,
    number: 8,
    title: { fr: 'Entraînement DELF A1', en: 'DELF A1 practice' },
    summary: {
      fr: 'Lire une petite page tourisme, comprendre un message, remplir un formulaire : le geste de l’examen, avec des textes originaux.',
      en: 'Read a short tourist page, understand a message, fill in a form: exam-style tasks, with original texts.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Après l’unité 4, tu t’entraînes comme au DELF : compréhension écrite, compréhension orale (ici, un message écrit à écouter dans ta tête ou avec le bouton Écouter), production écrite d’un formulaire. Ce ne sont pas les sujets du livre : mêmes compétences, textes nouveaux.',
          en: 'After unit 4 you practise DELF-style tasks: reading, listening (here, a written message to hear in your head or with Listen), and a form. These are not the book’s papers: same skills, new texts.',
        },
      },
    ],
    activities: [
      {
        id: 'u4-delf-lire',
        type: 'quiz',
        title: { fr: 'Lire : que faire à Lyon ?', en: 'Reading: what to do in Lyon?' },
        intro: {
          fr: 'En été, allez au parc le matin et, le soir, dans le Vieux-Lyon : bars et restaurants. En automne, visitez un musée et allez au cinéma. En hiver, sortez : faites du patin à glace dans un parc. Pour les restos du centre, voyez le site de l’office de tourisme.',
          en: 'In summer, go to the park in the morning and, in the evening, to Old Lyon: bars and restaurants. In autumn, visit a museum and go to the cinema. In winter, go out: ice-skate in a park. For city-centre restaurants, see the tourist-office site.',
        },
        questions: [
          {
            id: 'd1',
            prompt: { fr: 'L’été, on propose surtout…', en: 'In summer, the text mainly suggests…' },
            options: [
              { fr: 'parc le jour, sorties le soir (bars, restos)', en: 'park by day, going out in the evening (bars, restaurants)' },
              { fr: 'rester à l’hôtel uniquement', en: 'only staying in the hotel' },
              { fr: 'un mariage à 15 heures', en: 'a wedding at 3 p.m.' },
            ],
            answer: 0,
            explanation: { fr: 'On relie la saison et l’activité.', en: 'Match the season and the activity.' },
          },
          {
            id: 'd2',
            prompt: { fr: 'En automne, qu’est-ce qu’on fait ?', en: 'In autumn, what do people do?' },
            options: [
              { fr: 'musée et cinéma', en: 'museum and cinema' },
              { fr: 'patin à glace seulement', en: 'only ice skating' },
              { fr: 'rien', en: 'nothing' },
            ],
            answer: 0,
            explanation: { fr: 'Deux activités culturelles.', en: 'Two cultural activities.' },
          },
          {
            id: 'd3',
            prompt: { fr: 'En hiver, dans les parcs, vous faites…', en: 'In winter, in the parks, you…' },
            options: [
              { fr: 'du sport (patin)', en: 'sport (skating)' },
              { fr: 'des visites de gratte-ciel', en: 'skyscraper visits' },
              { fr: 'du métro sous la mer', en: 'metro under the sea' },
            ],
            answer: 0,
            explanation: { fr: 'Patin à glace = sport en plein air.', en: 'Ice skating = outdoor sport.' },
          },
          {
            id: 'd4',
            prompt: { fr: 'Dans le Vieux-Lyon, il y a…', en: 'In Old Lyon there are…' },
            options: [
              { fr: 'des restaurants (et des bars)', en: 'restaurants (and bars)' },
              { fr: 'un océan', en: 'an ocean' },
              { fr: 'la capitale du Togo', en: 'the capital of Togo' },
            ],
            answer: 0,
            explanation: { fr: 'Le texte parle de bars et restaurants, pas d’un métro inventé.', en: 'The text talks about bars and restaurants, not an invented metro.' },
          },
          {
            id: 'd5',
            prompt: { fr: 'Vous allez dîner. Vous visitez…', en: 'You are going out for dinner. You check…' },
            options: [
              { fr: 'le site de l’office de tourisme', en: 'the tourist-office website' },
              { fr: 'un formulaire de club de sport seulement', en: 'only a sports-club form' },
              { fr: 'l’arbre des Morel', en: 'the Morel family tree' },
            ],
            answer: 0,
            explanation: { fr: 'On cherche la liste des restaurants sur le site indiqué.', en: 'You look up the restaurant list on the site given.' },
          },
        ],
      },
      {
        id: 'u4-delf-oral',
        type: 'quiz',
        title: { fr: 'Comprendre un message', en: 'Understand a message' },
        intro: {
          fr: 'Message de Sophie : « Salut, je suis au cinéma, pas à la salle de sport. Le film commence à 20 heures. Le cinéma est à côté de la station de métro, en face de la bibliothèque. Bisous ! » Radio : « Cours de français pour adultes, 23 avenue de la République. Portes ouvertes samedi et dimanche. »',
          en: 'Message from Sophie: “Hi, I’m at the cinema, not the gym. The film starts at 8 p.m. The cinema is next to the metro station, opposite the library. Kisses!” Radio: “French classes for adults, 23 avenue de la République. Open days Saturday and Sunday.”',
        },
        questions: [
          {
            id: 'l1',
            prompt: { fr: 'Où est Sophie ?', en: 'Where is Sophie?' },
            options: [
              { fr: 'au cinéma', en: 'at the cinema' },
              { fr: 'à la salle de sport', en: 'at the gym' },
              { fr: 'chez elle', en: 'at home' },
            ],
            answer: 0,
            explanation: { fr: 'Elle dit clairement : au cinéma, pas à la salle de sport.', en: 'She says clearly: at the cinema, not the gym.' },
          },
          {
            id: 'l2',
            prompt: { fr: 'Le film commence à…', en: 'The film starts at…' },
            options: [
              { fr: '20 h 00', en: '8:00 p.m.' },
              { fr: '7 h 30', en: '7:30 a.m.' },
              { fr: '8 h 30 du matin', en: '8:30 a.m.' },
            ],
            answer: 0,
            explanation: { fr: '20 heures = 8 h du soir.', en: '20 hours = 8 p.m.' },
          },
          {
            id: 'l3',
            prompt: { fr: 'Le cinéma est…', en: 'The cinema is…' },
            options: [
              { fr: 'à côté du métro, en face de la bibliothèque', en: 'next to the metro, opposite the library' },
              { fr: 'dans un parc à Kinshasa', en: 'in a park in Kinshasa' },
              { fr: 'sur un bateau', en: 'on a boat' },
            ],
            answer: 0,
            explanation: { fr: 'Deux repères : métro + bibliothèque.', en: 'Two landmarks: metro + library.' },
          },
          {
            id: 'l4',
            prompt: { fr: 'À l’université, on propose…', en: 'At the university they offer…' },
            options: [
              { fr: 'des cours de français', en: 'French classes' },
              { fr: 'des cours de hockey seulement', en: 'only hockey classes' },
              { fr: 'des cours d’anglais uniquement', en: 'only English classes' },
            ],
            answer: 0,
            explanation: { fr: 'Le message radio parle de français pour adultes.', en: 'The radio message is about French for adults.' },
          },
          {
            id: 'l5',
            prompt: { fr: 'Qui peut aller à l’université (d’après la radio) ?', en: 'Who can go to the university (according to the radio)?' },
            options: [
              { fr: 'les adultes', en: 'adults' },
              { fr: 'seulement les enfants de 5 ans', en: 'only 5-year-olds' },
              { fr: 'les gorilles', en: 'gorillas' },
            ],
            answer: 0,
            explanation: { fr: 'Cours pour adultes.', en: 'Classes for adults.' },
          },
          {
            id: 'l6',
            prompt: { fr: 'Adresse :', en: 'Address:' },
            options: [
              { fr: '23, avenue de la République', en: '23, avenue de la République' },
              { fr: '33, rue de la République', en: '33, rue de la République' },
              { fr: '23, rue de la République', en: '23, rue de la République' },
            ],
            answer: 0,
            explanation: { fr: 'On distingue rue et avenue, 23 et 33.', en: 'You distinguish street and avenue, 23 and 33.' },
          },
          {
            id: 'l7',
            prompt: { fr: 'Les journées portes ouvertes sont…', en: 'The open days are…' },
            options: [
              { fr: 'samedi et dimanche', en: 'Saturday and Sunday' },
              { fr: 'lundi seulement', en: 'Monday only' },
              { fr: 'jeudi et vendredi', en: 'Thursday and Friday' },
            ],
            answer: 0,
            explanation: { fr: 'Week-end.', en: 'Weekend.' },
          },
        ],
      },
      {
        id: 'u4-delf-formulaire',
        type: 'matching',
        title: { fr: 'Formulaire : club de sport', en: 'Form: sports club' },
        pairs: [
          { id: 'fo1', left: 'Nom', right: 'le nom de famille' },
          { id: 'fo2', left: 'Prénom', right: 'le prénom' },
          { id: 'fo3', left: 'Adresse', right: 'où vous habitez' },
          { id: 'fo4', left: 'N° de téléphone / courriel', right: 'comment vous joindre' },
          { id: 'fo5', left: 'Âge', right: 'vous avez combien d’années' },
          { id: 'fo6', left: 'Sports préférés', right: 'ce que vous aimez faire' },
        ],
      },
    ],
  },
]
