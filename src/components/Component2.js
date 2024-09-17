import React from 'react';
import { Bar } from 'react-chartjs-2';

function Component2({ assessment }) {
  const data = {
    labels: ['Assignment', 'Quiz', 'Presentation', 'Lab'],
    datasets: [
      {
        label: 'Pending',
        data: [assessment.progress.assignments.pending, assessment.progress.quiz.pending, assessment.progress.presentation.pending, assessment.progress.lab.pending],
        backgroundColor: '#e4e4e4',
        borderRadius: 5,
      },
      {
        label: 'Completed',
        data: [assessment.progress.assignments.completed, assessment.progress.quiz.completed, assessment.progress.presentation.completed, assessment.progress.lab.completed],
        backgroundColor: '#6cbf6c',
        borderRadius: 5,
      }
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="assessment-progress">
      <h5>Assessment Progress</h5>
      <Bar data={data} options={options}  height={90}/>
    </div>
  );
}


export default Component2;
