
import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center mb-8">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
        Limited Time Offer Expiring July 12th
      </h2>
      <div className="flex justify-center gap-4 md:gap-8">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="text-4xl md:text-6xl font-bold text-white mb-2">
              {String(value).padStart(2, '0')}
            </div>
            <div className="text-gray-300 text-sm md:text-base capitalize">
              {unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
