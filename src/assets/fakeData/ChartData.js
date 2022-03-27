export const Chart1 = [20, 80];


const ChartInfo = [
  {
    data: [20, 80],
    title: 'Business Strategy'
  },
  {
    data: [10, 90],
    title: 'Financial Planing'
  },
  {
    data: [63, 27],
    title: 'Marketing Startegy'
  },
  {
    data: [35, 60],
    title: 'Relationship Buildup'
  },
];

export const ChartListNumber = ChartInfo.map((item, index) => {

  return {
    data: {
      labels: [],
      datasets: [
        {
          label: [],
          data: item.data,
          backgroundColor: ['#ff4a17', '#e8e8e8']
        },
      ]
    },
    title: item.title
  }
})