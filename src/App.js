import './App.css';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

// Registering the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);


function Layout({ course, assessment, attendance }) {
  return (
    <div className="container">
      <div className="left-side">
        <Component1 course={course} />
      </div>
      <div className="right-side">
        <Component2 assessment={assessment} />
        <Component3 attendance={attendance} />
      </div>
    </div>
  );
}


const data = {
  course: {
    code: "BA3102",
    name: "Quantitative Techniques",
    type: "Program Elective",
    period: "Semester - I",
    credits: 4,
    courseOutcomes: ["CO2", "CO4", "CO5", "CO7", "CO13", "CO14"],
    mappedPOs: ["PO7", "PO10", "PO12", "PO8"]
  },
  assessment: {
    totalStudents: 102,
    averageMark: 85,
    progress: {
      assignments: { pending: 20, completed: 80 },
      quiz: { pending: 30, completed: 70 },
      presentation: { pending: 40, completed: 60 },
      lab: { pending: 25, completed: 75 }
    }
  },
  attendance: [
    { week: "1/7", attendance: 75 },
    { week: "15/7", attendance: 80 },
    { week: "22/7", attendance: 85 },
    { week: "29/7", attendance: 60 }
  ]
};

function App() {
  return (
<Layout 
  course={data.course} 
  assessment={data.assessment} 
  attendance={data.attendance} 
/>

  );
}

export default App;


