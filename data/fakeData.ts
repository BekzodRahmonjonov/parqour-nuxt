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
