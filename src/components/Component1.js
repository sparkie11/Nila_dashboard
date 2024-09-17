import React from "react";

function Component1({ course }) {
  const creditsEntries = Object.entries(course.credits);
  const totalCredits = creditsEntries.length;
  return (
    <div className="dashboard">
      <div className="course-details">
        <div className="course-section">
          <h3 className="section-title">Course Code</h3>
          <p className="section-text">{course.code}</p>
          <hr className="section-divider" />
          <h3 className="section-title">Course Name</h3>
          <p className="section-text">{course.name}</p>
          <hr className="section-divider" />
          <h3 className="section-title">Course Type</h3>
          <p className="section-text">{course.type}</p>
          <hr className="section-divider mobile" />
        </div>

        <div className="course-section">
          <h3 className="section-title">Course Period</h3>

          <p className="section-text">{course.period}</p>
          <hr className="section-divider" />
          <h3 className="section-title">Credits ( {totalCredits} )</h3>
          <ul>
            {creditsEntries.map(([label, points], index) => (
              <li key={index}>
                <span className="credit-label">{label}</span>
                <span className="credit-separator"> - </span>
                <span className="credit-points"> {points}</span>
              </li>
            ))}
          </ul>
          <hr className="section-divider mobile" />
        </div>
      </div>
      <div>
      <hr className="section-divider no-mobile" />

        <div className="outcome-section">
          <h5 className="sub-section-title">Course Outcomes (COs)</h5>
          <div className="outcomes">
            {course.courseOutcomes.map((co, index) => (
              <span className="badge outcome-badge" key={index}>
                {co}
              </span>
            ))}
          </div>
        </div>


        <hr className="section-divider" />
        <div className="mapped-po-section">
          <h5 className="sub-section-title">Mapped to this Course</h5>
          <div className="po-mapping">
            {course.mappedPOs.map((po, index) => (
              <span className="badge po-badge" key={index}>
                {po}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Component1;
