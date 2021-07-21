import React from 'react';

import { Bar } from 'react-chartjs-2';

const TopLists = ({ lists }) => {
  let data = {};
  if (lists) {
    data = {
      labels: lists.map((item) => item.list_title),
      datasets: [
        {
          label: 'Runtime',
          data: lists.map((item) => item.count),
          backgroundColor: 'rgba(47, 164, 46, 0.4)',
          borderColor: 'rgba(47, 164, 46, 1)',
          borderWidth: 3,
        },
      ],
    };
  }

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

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default TopLists;
