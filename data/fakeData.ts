interface IAnalysis {
  id: number
  title: string
  text: string
  bg: string
}

export const analysisData = <IAnalysis[]>[
  {
    id: 1,
    title: 'Разбор',
    text: 'Как идет ваша торговля на сайтах объявлений',
    bg: 'https://picsum.photos/274/362',
  },
  {
    id: 2,
    title: 'обЩество',
    text: 'Так много интересных и так мало рабочих теорий!',
    bg: 'https://picsum.photos/274/362',
  },
  {
    id: 3,
    title: 'обЩество',
    text: 'Ищем жизнеутверждающие истории',
    bg: 'https://picsum.photos/274/362',
  },
  {
    id: 4,
    title: 'Бизнес',
    text: 'Коронавирусный кризис - тупик для начинающего специалиста?',
    bg: 'https://picsum.photos/274/362',
  },
]
