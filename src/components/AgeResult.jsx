import React from 'react';
import { differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';
import { useAppStore } from '../stores/AppStores';

const AgeResult = (props) => {
  const { AgeResultBodyStyle, AgeResultContentStyle, AgeResultStyle } = props;
  const { days, months, years, currentYear } = useAppStore();

  const currentDate = new Date();
  const selectedDate = new Date(years, months - 1, days);

  const diffInDays = differenceInDays(currentDate, selectedDate);
  const diffInMonths = differenceInMonths(currentDate, selectedDate);
  const diffInYears = differenceInYears(currentDate, selectedDate);

  return (
    <div className={AgeResultBodyStyle}>
      <div className={AgeResultContentStyle}>
        <div className={AgeResultStyle}>{years === '' || years > currentYear ? '--' : diffInYears}</div>
        Years
      </div>
      <div className={AgeResultContentStyle}>
        <div className={AgeResultStyle}>{months === '' || months > 12 ? '--' : diffInMonths}</div>
        Months
      </div>
      <div className={AgeResultContentStyle}>
        <div className={AgeResultStyle}>{days === '' || days > 31 ? '--' : diffInDays}</div>
        Days
      </div>
    </div>
  );
};

export default AgeResult;
