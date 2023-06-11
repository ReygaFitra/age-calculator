import React from 'react';

const AgeResult = (props) => {
  const { AgeResultBodyStyle, AgeResultContentStyle, AgeResultStyle } = props;
  return (
    <div className={AgeResultBodyStyle}>
      <div className={AgeResultContentStyle}>
        <div className={AgeResultStyle}>--</div>
        Years
      </div>
      <div className={AgeResultContentStyle}>
        <div className={AgeResultStyle}>--</div>
        Months
      </div>
      <div className={AgeResultContentStyle}>
        <div className={AgeResultStyle}>--</div>
        Days
      </div>
    </div>
  );
};

export default AgeResult;
