import React from 'react';

import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Fallout 3', 'Watch Dogs', 'Papers, Please'],
  datasets: [
    {
      label: 'Days until Completed',
      data: [47, 61, 23],
      backgroundColor: 'rgba(47, 164, 46, 0.4)',
      borderColor: 'rgba(47, 164, 46, 1)',
      borderWidth: 3,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const CompleteChart = () => {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default CompleteChart;
