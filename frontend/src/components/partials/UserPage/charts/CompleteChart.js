import React from 'react';

import { Bar } from 'react-chartjs-2';

const CompleteChart = ({ speedRun }) => {
  let data = {};
  if (speedRun) {
    console.log(speedRun);
    data = {
      labels: speedRun.speedRuns.map((item) => item.name),
      datasets: [
        {
          label: 'Runtime',
          data: speedRun.speedRuns.map((item) => item.num_hours_played),
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

export default CompleteChart;
