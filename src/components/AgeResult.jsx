import React from 'react';
import { differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';
import { useAppStore } from '../stores/AppStore';

const AgeResult = (props) => {
  const { AgeResultBodyStyle, AgeResultContentStyle, AgeResultStyle } = props;
  const { days, months, years } = useAppStore();

  const diffInDays = differenceInDays(new Date(years, months, 31), new Date(years, months, days));
  const diffInMonths = differenceInMonths(new Date(years, 12, 31), new Date(years, months, days));
  const diffInYears = differenceInYears(new Date(), new Date(years, months, days));

  return (
    <div className={AgeResultBodyStyle}>
      <div className={AgeResultContentStyle}>
        <div className={AgeResultStyle}>{years === '' ? '--' : diffInYears}</div>
        Years
      </div>
      <div className={AgeResultContentStyle}>
        <div className={AgeResultStyle}>{months === '' ? '--' : diffInMonths}</div>
        Months
      </div>
      <div className={AgeResultContentStyle}>
        <div className={AgeResultStyle}>{days === '' ? '--' : diffInDays}</div>
        Days
      </div>
    </div>
  );
};

export default AgeResult;
