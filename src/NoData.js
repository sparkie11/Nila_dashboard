import React from 'react';

function NoData({ message = "No data available" }) {
  return (
    <div className="no-data">
      <p>{message}</p>
    </div>
  );
}

export default NoData;
