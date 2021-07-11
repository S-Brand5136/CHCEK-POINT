import React from 'react';

import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Current', 'Dropped', 'Backlog', 'Completed'],
  datasets: [
    {
      label: 'Games in Collection',
      data: [2, 1, 6, 2],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Total Hours',
      data: [600, 50, 25, 200],
      backgroundColor: 'rgb(54, 162, 235)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};

const StackedChart = () => {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default StackedChart;
