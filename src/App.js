import React from "react";
import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import NoData from "./NoData"; 
import Data from "./data/Test.json";

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
        {course ? (
          <Component1 course={course} />
        ) : (
          <NoData message="No course data available" />
        )}
      </div>
      <div className="right-side">
        {assessment ? (
          <Component2 assessment={assessment} />
        ) : (
          <NoData message="No assessment data available" />
        )}
        {attendance ? (
          <Component3 attendance={attendance} />
        ) : (
          <NoData message="No attendance data available" />
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <Layout
      course={Data.course}
      assessment={Data.assessment}
      attendance={Data.attendance}
    />
  );
}

export default App;
