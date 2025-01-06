export const scenes = {
  "0": {
    start: {
      text: 'Ева, три предложения — это просто шикарно! Я даже немного завидую. Но что думаешь?',
      music: '/sound/background-music3.mp3',
  person: 'Анна',
  evaImg: '/assets/EVA__NORMAL.png',
  personImg: '/assets/Anna__Happy.png',
    background: '/assets/background0.png',
    backgrounddialog: '/assets/bakground_dialog0.png',
      options: [
        { text: 'Корпорация звучит заманчиво, там стабильность и деньги.', nextScene: 'corp' },
        { text: 'Семейная компания выглядит уютно, но что, если я не смогу там развиваться?', nextScene: 'famely' },
        { text: 'Некомерческая организация вдохновляет, но что я буду есть?', nextScene: 'no_com' },
      ],
    },
    corp: {
      text: ' Мне нравится идея стабильности. И зарплата там отличная. Только вот боюсь, что меня может "затянуть" рутина.',
      music: '/sound/background-music3.mp3',
      person: 'Ева',
      evaImg: '/assets/EVA__NORMAL.png',
      personImg: '/assets/Anna__Happy.png',
        background: '/assets/background0.png', 
        backgrounddialog: '/assets/bakground_dialog0.png',         
      options: [
        { text: 'дальше', nextScene: 'next_corp' },
      ],
    },
    famely: {
      text: 'Там всё так дружелюбно. Но вдруг я застряну на месте?',
      music: '/sound/background-music3.mp3',
      person: 'Ева',
      evaImg: '/assets/EVA__NORMAL.png',
      personImg: '/assets/Anna__Happy.png',
          background: '/assets/background0.png', 
          backgrounddialog: '/assets/bakground_dialog0.png',      
      options: [
        { text: 'дальше', nextScene: 'next_famely' },
      ],
    },
    no_com: {
      text: 'Хочется делать что-то значимое, но не знаю, смогу ли я позволить себе такую работу.',
      music: '/sound/background-music3.mp3',
      person: 'Ева',
      evaImg: '/assets/EVA__NORMAL.png',
  personImg: '/assets/Anna__Happy.png',
         background: '/assets/background0.png', 
         backgrounddialog: '/assets/bakground_dialog0.png',       
      options: [
        { text: 'дальше', nextScene: 'next_no_com' },
      ],
    },
        next_corp: {
        text: 'Да, стабильность важна, но там ты точно сможешь вырасти, если захочешь.',
        music: '/sound/background-music3.mp3',
        evaImg: '/assets/EVA__NORMAL.png',
        personImg: '/assets/Anna__Happy.png',
        background: '/assets/background0.png', 
        backgrounddialog: '/assets/bakground_dialog0.png',        
        person: 'Анна',
        options: [
            { text: 'Семейная компания выглядит уютно, но что, если я не смогу там развиваться?', nextScene: 'famely' },
            { text: 'Некомерческая организация вдохновляет, но что я буду есть?', nextScene: 'no_com' },
            { text: 'Ладно пора готовится я пойду  ', nextScene: 'end' },
        ],
        },
        next_famely: {
            text: 'Это правда. Но иногда уют и поддержка важнее, чем карьерная гонка.',
            music: '/sound/background-music3.mp3',
            person: 'Анна',
                 evaImg: '/assets/EVA__HEPPI .png',
                 personImg: '/assets/Anna__Happy.png',
                  background: '/assets/background0.png', 
                  backgrounddialog: '/assets/bakground_dialog0.png',                                      
            options: [
                { text: 'Корпорация звучит заманчиво, там стабильность и деньги.', nextScene: 'corp' },
                { text: 'Некомерческая организация вдохновляет, но что я буду есть?', nextScene: 'no_com' },
                { text: 'Ладно пора готовится я пойду  ', nextScene: 'end' },
            ],
            },
        next_no_com: {
            text: ' Понимаю. Но иногда душевное удовлетворение важнее денег.',
            music: '/sound/background-music3.mp3',
            person: 'Анна',
            evaImg: '/assets/EVA__NORMAL.png',
            personImg: '/assets/Anna__Happy.png', 
              background: '/assets/background0.png',  
              backgrounddialog: '/assets/bakground_dialog0.png',                         
            options: [
                { text: 'Корпорация звучит заманчиво, там стабильность и деньги.', nextScene: 'corp' },
                { text: 'Семейная компания выглядит уютно, но что, если я не смогу там развиваться?', nextScene: 'famely' },
                { text: 'Ладно пора готовится я пойду  ', nextScene: 'end' },
            ],
        },
        
        end:  {
          text: 'Ладно пора готовится я пойду  ',
          music: '/sound/background-music3.mp3',
          person: 'Ева',
            background: '/assets/background0.png',
            backgrounddialog: '/assets/bakground_dialog0.png',            
              evaImg: '/assets/EVA__NORMAL.png',
              personImg: '/assets/Anna__Happy.png',        
          options: [{text: '*уйти*', nextScene: 'nextChapter'}]
        },
      },
"1": {
    start: {
      text: 'Куда мне пойти сначала?',
      music: '/sound/background-music3.mp3',
      person: 'Ева',
      evaImg: '/assets/EVA__NORMAL.png',
      music: '/sound/background-music2.mp3',
         background: '/assets/background1_0.png',   
         backgrounddialog: '/assets/bakground_dialog1_0.png',     
      options: [
        { text: 'Корпорация', nextScene: 'corp' },
        { text: 'Семейная компания', nextScene: 'famely' },
        { text: 'Некомерческая', nextScene: 'no_com' },
      ],
    },
    corp: {
      text: 'здравствуйте я на собеседование ',
      music: '/sound/background-music3.mp3',
      person: 'Ева',
      evaImg: '/assets/EVA__NORMAL.png',
      personImg: '/assets/Anna__Happy.png', 

         background: '/assets/background1_0.png',   
         backgrounddialog: '/assets/bakground_dialog1_0.png',     
      options: [
        { text: 'дальше', nextScene: 'corp1_0' },
      ],
    },
    corp1_0: {
      text: 'Добрый день, Ева. Рад вас видеть. Судя по вашему резюме, вы только что закончили университет. Почему вы выбрали нашу компанию для начала карьеры?',
      music: '/sound/background-music3.mp3',
      person: 'Марк',
      evaImg: '/assets/EVA__NORMAL.png',
      personImg: '/assets/corp_boss.png', 
      options: [
      { text: '(Уверенно) «Я считаю, что ваша компания — это место, где я смогу учиться и быстро расти как профессионал»', nextScene: 'corp1_1', isCorrect: true },
      { text: '(Скромно) «Ваша компания известна своими инновациями, и я хотела бы стать частью такого динамичного коллектива»', nextScene: 'corp1_1' ,  isCorrect: false },
      { text: '(Лично) «Ваши ценности и миссия резонируют с моими. Мне кажется, это отличное место для начала пути».', nextScene: 'corp1_1' ,  isCorrect: false },
    ],
    },
    corp1_1: {
      text: 'Добрый день, Ева. Рад вас видеть. Судя по вашему резюме, вы только что закончили университет. Почему вы выбрали нашу компанию для начала карьеры?',
      music: '/sound/background-music3.mp3',
      person: 'Марк',
      evaImg: '/assets/EVA__NORMAL.png',
      personImg: '/assets/corp_boss.png', 
      options: [
      { text: '(Уверенно) «Я считаю, что ваша компания — это место, где я смогу учиться и быстро расти как профессионал»', nextScene: 'corp1_1', isCorrect: true },
      { text: '(Скромно) «Ваша компания известна своими инновациями, и я хотела бы стать частью такого динамичного коллектива»', nextScene: 'corp1_1' ,  isCorrect: false },
      { text: '(Лично) «Ваши ценности и миссия резонируют с моими. Мне кажется, это отличное место для начала пути».', nextScene: 'corp1_1' ,  isCorrect: false },
    ],
    },
    corp1_2: {
      text: 'Добрый день, Ева. Рад вас видеть. Судя по вашему резюме, вы только что закончили университет. Почему вы выбрали нашу компанию для начала карьеры?',
      music: '/sound/background-music3.mp3',
      person: 'Марк',
      evaImg: '/assets/EVA__NORMAL.png',
      personImg: '/assets/corp_boss.png', 
      options: [
      { text: '(Уверенно) «Я считаю, что ваша компания — это место, где я смогу учиться и быстро расти как профессионал»', nextScene: 'corp1_1', isCorrect: true },
      { text: '(Скромно) «Ваша компания известна своими инновациями, и я хотела бы стать частью такого динамичного коллектива»', nextScene: 'corp1_1' ,  isCorrect: false },
      { text: '(Лично) «Ваши ценности и миссия резонируют с моими. Мне кажется, это отличное место для начала пути».', nextScene: 'corp1_1' ,  isCorrect: false },
    ],
    },
    corp1_3: {
      text: 'Добрый день, Ева. Рад вас видеть. Судя по вашему резюме, вы только что закончили университет. Почему вы выбрали нашу компанию для начала карьеры?',
      music: '/sound/background-music3.mp3',
      person: 'Марк',
      evaImg: '/assets/EVA__NORMAL.png',
      personImg: '/assets/corp_boss.png', 
      options: [
      { text: '(Уверенно) «Я считаю, что ваша компания — это место, где я смогу учиться и быстро расти как профессионал»', nextScene: 'corp1_1', isCorrect: true },
      { text: '(Скромно) «Ваша компания известна своими инновациями, и я хотела бы стать частью такого динамичного коллектива»', nextScene: 'corp1_1' ,  isCorrect: false },
      { text: '(Лично) «Ваши ценности и миссия резонируют с моими. Мне кажется, это отличное место для начала пути».', nextScene: 'corp1_1' ,  isCorrect: false },
    ],
    },
      },
        

      }
      

 