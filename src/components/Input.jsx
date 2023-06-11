import React from 'react';
import { useAppStore } from '../stores/AppStore';

const Input = (props) => {
  const { inputStyle, inputStyleWarning, inputBodyStyle, inputContentStyle, inputTitleStyle, title1, title2, title3 } = props;

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
          <h1 className={days > 31 ? 'font-bold text-md text-warning uppercase align-center ' : inputTitleStyle}>{title1}</h1>
          <input className={days > 31 ? inputStyleWarning : inputStyle} type="number" id="day" name="day" value={days} placeholder="DD" min={1} max={31} onChange={handleDays} />
          {days > 31 && <small className="text-warning">Must be a valid day</small>}
        </div>

        <div className={inputContentStyle}>
          <h1 className={months > 12 ? 'font-bold text-md text-warning uppercase align-center ' : inputTitleStyle}>{title2}</h1>
          <input className={months > 12 ? inputStyleWarning : inputStyle} type="number" id="month" name="month" value={months} placeholder="MM" min={1} max={12} onChange={handleMonths} />
          {months > 12 && <small className="text-warning">Must be a valid month</small>}
        </div>

        <div className={inputContentStyle}>
          <h1 className={years > currentYear ? 'font-bold text-md text-warning uppercase align-center ' : inputTitleStyle}>{title3}</h1>
          <input className={years > currentYear ? inputStyleWarning : inputStyle} type="number" id="year" name="year" value={years} placeholder="YYYY" min={1} max={currentYear} onChange={handleYears} />
          {years > currentYear && <small className="text-warning">Must be a valid year</small>}
        </div>
      </form>
    </>
  );
};

export default Input;
