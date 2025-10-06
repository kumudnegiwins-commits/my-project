import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const units = ["Days", "Hours", "Minutes", "Seconds"]; // Title Case labels

  return (
    <div className="mb-6 flex flex-col lg:flex-row items-center gap-18">
      {/* Flash Sale Heading */}
      <h2 className="text-[48px] font-semibold text-black">Flash Sales</h2>

      {/* Timer */}
      <div className="flex items-end gap-2">
        {units.map((unit, index) => {
          // Convert unit to lowercase key to access timeLeft
          const key = unit.toLowerCase();
          return (
            <React.Fragment key={unit}>
              <div className="flex flex-col items-center">
                <span className="text-[12px] font-semibold text-black mb-1">
                  {unit}
                </span>
                <span className="text-[32px] font-bold text-black">
                  {timeLeft[key] < 10 ? `0${timeLeft[key]}` : timeLeft[key]}
                </span>
              </div>

              {/* Colon between numbers, except after last unit */}
              {index < units.length - 1 && (
                <span className="text-[#E07575] text-[32px] font-semibold self-end">
                  :
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CountdownTimer;
