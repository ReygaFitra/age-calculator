import React from 'react';

const Input = (props) => {
  const { inputStyle, inputBodyStyle, inputContentStyle, inputTitleStyle, title1, title2, title3 } = props;

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={inputBodyStyle}>
        <div className={inputContentStyle}>
          <h1 className={inputTitleStyle}>{title1}</h1>
          <input className={inputStyle} type="number" id="day" name="day" min={1} max={31} />
        </div>
        <div className={inputContentStyle}>
          <h1 className={inputTitleStyle}>{title2}</h1>
          <input className={inputStyle} type="number" id="month" name="month" min={1} max={12} />
        </div>
        <div className={inputContentStyle}>
          <h1 className={inputTitleStyle}>{title3}</h1>
          <input className={inputStyle} type="number" id="year" name="year" min={1} max={currentYear} />
        </div>
      </div>
    </>
  );
};

export default Input;
