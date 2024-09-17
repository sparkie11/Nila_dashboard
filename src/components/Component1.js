import React from 'react';

function Component1({ course }) {
  return (
    <div className="course-details">
        <div className='course-section'>
      <h3 className="section-title">Course Code</h3>
      <p className="section-text">{course.code}</p>
      <hr className="section-divider"/>
      <h3 className="section-title">Course Name</h3>
      <p className="section-text">{course.name}</p>
      <hr className="section-divider"/>
      <h3 className="section-title">Course Type</h3>
      <p className="section-text">{course.type}</p>
      <hr className="section-divider"/>
      <h3 className="section-title">Course Period</h3>
      <p className="section-text">{course.period}</p>
      <hr className="section-divider"/>

      </div>

      <div className='course-section'>
      <h3 className="section-title">Credits</h3>
      <p className="section-text">{course.credits}</p>
      <hr className="section-divider"/>

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
      <hr className="section-divider"/>
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
