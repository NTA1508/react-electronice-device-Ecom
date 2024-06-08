import React, { useEffect, useState } from 'react';
import { endOfMonth, differenceInCalendarDays } from 'date-fns';

const DaysLeftInMonth = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const currentDate = new Date();

    const lastDayOfMonth = endOfMonth(currentDate);
    const daysLeftInMonth = differenceInCalendarDays(lastDayOfMonth, currentDate);

    setDaysLeft(daysLeftInMonth);
  }, []);

  return (<>
    <h1>The Promotion Of This Month: </h1> <span style={{marginLeft:"-650px", fontSize:"20px", color:"red"}}>{daysLeft} days left</span>
  </>
  );
};

export default DaysLeftInMonth;
