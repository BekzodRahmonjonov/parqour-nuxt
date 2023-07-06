import {ISingleData, ISinglePhoto} from '~/types'

interface IAnalysis {
  id: number
  title: string
  text: string
  bg: string
}

export const analysisData = <IAnalysis[]>[
  {
    id: 1,
    title: 'analysis',
    text: 'analysiscardtext1',
    bg: '/images/analysis/card1.png',
  },
  {
    id: 2,
    title: 'society',
    text: 'analysiscardtext2',
    bg: '/images/analysis/card2.png',
  },
  {
    id: 3,
    title: 'society',
    text: 'analysiscardtext3',
    bg: '/images/analysis/card3.png',
  },
  {
    id: 4,
    title: 'business',
    text: 'analysiscardtext4',
    bg: '/images/analysis/card4.png',
  },
]
export const singleData: ISingleData = {
  title: 'Что такое  UI/UX дизайн?',
  created_at: new Date(),
  image: 'https://picsum.photos/seed/picsum/200/300',
  youtube_video: 'https://youtu.be/KJwYBJMSbPI',
  views_count: 223,
  author: 'Джасурбек Нарзуллаев',
  text: 'Кандидат в президенты Шавкат Мирзиёев отреагировал на предложение Алишера Кадырова о том, что мигранты, работающие за рубежом, должны платить налоги.',
  content: `<div>Спустя почти 70 лет после победы над фашистским злом и самим богом войны Диана Принс (Галь Гадот) ходит на работу в Смитсоновский институт, где разбирается с археологическими древностями, а в свободное время спасает детей в торговом центре и, возможно, помогает старушкам перейти дорогу. Жизнь мисс Принс печальна и одинока: потеряв на великой войне своего первого и единственного возлюбленного, летчика Стива (Крис Пайн), она так никого и не смогла полюбить — ужинает одна, все друзья и подруги остались в прошлом, интересных занятий у нее просто нет. <br />
    И тут в жизнь Дианы врываются перемены: на работу в институт устраивается неловкая, но бесконечно милая Барбара (Кристен Уиг), а среди археологических находок встречается странный камень, похожий на подделку, но оказывается, что он исполняет желания. <br />  <br />
    Своих желаний, как известно, надо бояться: Диана мечтает о том, чтобы воскресить Стива, Барбара мечтает быть хотя бы немного такой же сексапильной и притягательной, как Диана, а трампоподобный нефтяной недомагнат Макс Лорд (Педро Паскаль) мечтает о том, чтобы всего в его жизни было побольше: власти, влияния, денег. <br />
    Одному богу известно, зачем Пэтти Дженкинс и двоих сосценаристов понесло в мировую политику — все трое сели в глубокую лужу, сочиняя агитку про «лево» и «право». Стоило лишь слегка докрутить легкую историю о супергероине-красотке, верящей в добро, — но нет, куда же без войны на Ближнем Востоке, советских мундиров, красных кнопок, экологической катастрофы и обезумевшей толпы. <br />  <br />
    Последние полчаса с мясорубкой военной техники и «та-да-да!» обязательного в таких случаях Ханса Циммера — самый фальшивый полет голубя мира для людей в 2021 году. Жирный сиквел, критикующий потребительскую позицию «больше!», стоит гораздо больше первого фильма: следующая, уже запланированная часть «Чудо-женщины» еще за пару сотен миллионов, скорее всего, тоже будет учить нас, как быть скромнее в наших желаниях</div>
    <figure>
      <img src="https://www.kinopoisk.ru/images/film_big/1007450.jpg" alt="image">
      <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
    </figure>
    <div>
      Одному богу известно, зачем Пэтти Дженкинс и двоих сосценаристов понесло в мировую политику — все трое сели в глубокую лужу, сочиняя агитку про «лево» и «право». Стоило лишь слегка докрутить легкую историю о супергероине-красотке, верящей в добро, — но нет, куда же без войны на Ближнем Востоке, советских мундиров, красных кнопок, экологической катастрофы и обезумевшей толпы. <br />  <br />
      Последние полчаса с мясорубкой военной техники и «та-да-да!» обязательного в таких случаях Ханса Циммера — самый фальшивый полет голубя мира для людей в 2021 году. Жирный сиквел, критикующий потребительскую позицию «больше!», стоит гораздо больше первого фильма: следующая, уже запланированная часть «Чудо-женщины» еще за пару сотен миллионов, скорее всего, тоже будет учить нас, как быть скромнее в наших желаниях
    </div>
    <blockquote cite="http://www.worldwildlife.org/who/index.html">
        For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.
    </blockquote>
`,
}


export const singlePhoto: ISinglePhoto = {
  title: 'Что такое  UI/UX дизайн?',
  created_at: new Date(),
  image: 'https://picsum.photos/seed/picsum/200/300',
  views_count: 223,
  author: 'Джасурбек Нарзуллаев',
  text: 'Кандидат в президенты Шавкат Мирзиёев отреагировал на предложение Алишера Кадырова о том, что мигранты, работающие за рубежом, должны платить налоги.',
  content: `<div>Спустя почти 70 лет после победы над фашистским злом и самим богом войны Диана Принс (Галь Гадот) ходит на работу в Смитсоновский институт, где разбирается с археологическими древностями, а в свободное время спасает детей в торговом центре и, возможно, помогает старушкам перейти дорогу. Жизнь мисс Принс печальна и одинока: потеряв на великой войне своего первого и единственного возлюбленного, летчика Стива (Крис Пайн), она так никого и не смогла полюбить — ужинает одна, все друзья и подруги остались в прошлом, интересных занятий у нее просто нет. <br />
    И тут в жизнь Дианы врываются перемены: на работу в институт устраивается неловкая, но бесконечно милая Барбара (Кристен Уиг), а среди археологических находок встречается странный камень, похожий на подделку, но оказывается, что он исполняет желания. <br />  <br />
    Своих желаний, как известно, надо бояться: Диана мечтает о том, чтобы воскресить Стива, Барбара мечтает быть хотя бы немного такой же сексапильной и притягательной, как Диана, а трампоподобный нефтяной недомагнат Макс Лорд (Педро Паскаль) мечтает о том, чтобы всего в его жизни было побольше: власти, влияния, денег. <br />
    Одному богу известно, зачем Пэтти Дженкинс и двоих сосценаристов понесло в мировую политику — все трое сели в глубокую лужу, сочиняя агитку про «лево» и «право». Стоило лишь слегка докрутить легкую историю о супергероине-красотке, верящей в добро, — но нет, куда же без войны на Ближнем Востоке, советских мундиров, красных кнопок, экологической катастрофы и обезумевшей толпы. <br />  <br />
    Последние полчаса с мясорубкой военной техники и «та-да-да!» обязательного в таких случаях Ханса Циммера — самый фальшивый полет голубя мира для людей в 2021 году. Жирный сиквел, критикующий потребительскую позицию «больше!», стоит гораздо больше первого фильма: следующая, уже запланированная часть «Чудо-женщины» еще за пару сотен миллионов, скорее всего, тоже будет учить нас, как быть скромнее в наших желаниях</div>
    <figure>
      <img src="https://www.kinopoisk.ru/images/film_big/1007450.jpg" alt="image">
      <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
    </figure>
    <div>
      Одному богу известно, зачем Пэтти Дженкинс и двоих сосценаристов понесло в мировую политику — все трое сели в глубокую лужу, сочиняя агитку про «лево» и «право». Стоило лишь слегка докрутить легкую историю о супергероине-красотке, верящей в добро, — но нет, куда же без войны на Ближнем Востоке, советских мундиров, красных кнопок, экологической катастрофы и обезумевшей толпы. <br />  <br />
      Последние полчаса с мясорубкой военной техники и «та-да-да!» обязательного в таких случаях Ханса Циммера — самый фальшивый полет голубя мира для людей в 2021 году. Жирный сиквел, критикующий потребительскую позицию «больше!», стоит гораздо больше первого фильма: следующая, уже запланированная часть «Чудо-женщины» еще за пару сотен миллионов, скорее всего, тоже будет учить нас, как быть скромнее в наших желаниях
    </div>
    <blockquote cite="http://www.worldwildlife.org/who/index.html">
        For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.
    </blockquote>
`,
}

export const authorsData = [
  {
    name: 'Шахзод Юлдошбоев',
    img: '/images/face.png',
    about: 'Корреспондент',
  },
  {
    name: 'Шахзод Юлдошбоев',
    img: '/images/face.png',
    about: 'Корреспондент',
  },
  {
    name: 'Шахзод Юлдошбоев',
    img: '/images/face.png',
    about: 'Корреспондент',
  },
  {
    name: 'Шахзод Юлдошбоев',
    img: '/images/face.png',
    about: 'Корреспондент',
  },
  {
    name: 'Шахзод Юлдошбоев',
    img: '/images/face.png',
    about: 'Корреспондент',
  },
  {
    name: 'Шахзод Юлдошбоев',
    img: '/images/face.png',
    about: 'Корреспондент',
  },
]

export const authorSideData = {
  img: '/images/face.png',
  name: 'Шахзод Юлдошбоев',
  aboutUser: 'Корреспондент',
  reads: '7.4M',
  articles: 14,
  fullInfo:
    'Родился 29 декабря 1979 года в Ургутском районе Самаркандской области. Окончил факультет журналистики Национального университета Узбекистана. Является автором сценариев ряда художественных, документальных и мультиплексных фильмов. ',
}

export const coverData = {
  id: 1,
  title: 'Министру цифровых технологий Узбекистана определили заместителей',
  date: new Date(),
  views: 9664,
  image: 'https://picsum.photos/1024/968',
  video: 'https://youtu.be/KJwYBJMSbPI',
}

export const fakeFotoData = {
  title: 'Министру цифровых технологий Узбекистана определили заместителей',
  image: 'https://picsum.photos/1024/968',
}
