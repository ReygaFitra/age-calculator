import React from 'react';
import { useAppStore } from '../stores/AppStore';

const Input = (props) => {
  const { inputStyle, inputBodyStyle, inputContentStyle, inputTitleStyle, title1, title2, title3 } = props;

  const { days, months, years, currentYear, setDays, setMonths, setYears } = useAppStore();

  const handleDays = (event) => {
    setDays(event.target.value);
  };
  const handleMonths = (event) => {
    setMonths(event.target.value);
  };
  const handleYears = (event) => {
    setYears(event.target.value);
  };

  return (
    <>
      <form className={inputBodyStyle}>
        <div className={inputContentStyle}>
          <h1 className={inputTitleStyle}>{title1}</h1>
          <input className={inputStyle} type="number" id="day" name="day" value={days} placeholder="DD" min={1} max={31} onChange={handleDays} />
        </div>
        <div className={inputContentStyle}>
          <h1 className={inputTitleStyle}>{title2}</h1>
          <input className={inputStyle} type="number" id="month" name="month" value={months} placeholder="MM" min={1} max={12} onChange={handleMonths} />
        </div>
        <div className={inputContentStyle}>
          <h1 className={inputTitleStyle}>{title3}</h1>
          <input className={inputStyle} type="number" id="year" name="year" value={years} placeholder="YYYY" min={1} max={currentYear} onChange={handleYears} />
        </div>
      </form>
    </>
  );
};

export default Input;
