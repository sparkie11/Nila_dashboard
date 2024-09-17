import React from "react";
import { Bar } from "react-chartjs-2";

function Component2({ assessment }) {
  const data = {
    labels: ["Assignment", "Quiz", "Presentation", "Lab"],
    datasets: [
      {
        label: "Pending",
        // data: [
        //   assessment.progress.assignments.pending1,

        //   assessment.progress.quiz.pending1,
        //   assessment.progress.presentation.pending1,
        //   assessment.progress.lab.pending1,
        // ],
        data: [
            assessment.progress.assignments.pending1,
            assessment.progress.quiz.pending1,
            assessment.progress.presentation.pending1,
            assessment.progress.lab.pending1,
            assessment.progress.assignments.pending2,
            assessment.progress.quiz.pending2,
            assessment.progress.presentation.pending2,
            assessment.progress.lab.pending2,
          ],
        backgroundColor: "#91b07c",
        borderRadius: 5,
      },
        {
          label: "",
          data: [
            assessment.progress.assignments.pending2,
            assessment.progress.quiz.pending2,
            assessment.progress.presentation.pending2,
            assessment.progress.lab.pending2,
          ],
          backgroundColor: "#91b07c",
          borderRadius: 5,
        },
        {
          label: "",
          data: [
            assessment.progress.assignments.pending3,
            assessment.progress.quiz.pending3,
            assessment.progress.presentation.pending3,
            assessment.progress.lab.pending3,
          ],
          backgroundColor: "#91b07c",
          borderRadius: 5,
        },
      {
        label: "Completed",
        data: [
          assessment.progress.assignments.completed,
          assessment.progress.quiz.completed,
          assessment.progress.presentation.completed,
          assessment.progress.lab.completed,
        ],
        backgroundColor: "#e4e4e4",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 90,
      },
    },
  };

  return (
    <div className="assessment-progress">
      <h5>Assessment Progress</h5>
      <Bar className="border-graph" data={data} options={options} />
    </div>
  );
}

export default Component2;
