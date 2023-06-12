interface IAnalysis {
  id: number
  title: string
  text: string
}

export const analysisData = <IAnalysis[]>[
  {
    id: 1,
    title: 'Разбор',
    text: 'Как идет ваша торговля на сайтах объявлений',
  },
  {
    id: 2,
    title: 'обЩество',
    text: 'Так много интересных и так мало рабочих теорий!',
  },
  {
    id: 3,
    title: 'обЩество',
    text: 'Ищем жизнеутверждающие истории',
  },
  {
    id: 4,
    title: 'Бизнес',
    text: 'Коронавирусный кризис - тупик для начинающего специалиста?',
  },
]
