import React from "react";
import { Line } from "react-chartjs-2";

function Component3({ attendance }) {
  const data = {
    labels: attendance.map((a) => a.week),
    datasets: [
      {
        label: "Attendance",
        data: attendance.map((a) => a.attendance),
        borderColor: "#8c3ffc",
        backgroundColor: "#e0d4f8",
        fill: false,
        pointRadius: 5,
        pointBackgroundColor: "#8c3ffc",
        pointBorderColor: "#8c3ffc",
      },
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
    <div className="student-attendance">
      <h5>Student Attendance</h5>
      <Line
        className="border-graph"
        data={data}
        options={options}
        // height={90}
      />
    </div>
  );
}

export default Component3;
