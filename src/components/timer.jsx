import { useState, useEffect } from 'react';

const countdownTargets = {
  submission: new Date('2024-12-01T23:59:59'),
  registration: new Date('2025-01-01T23:59:59'),
  conference: new Date('2025-01-22T09:00:00'),
};

const getTimeLeft = (targetDate) => {
  const diff = +targetDate - +new Date();
  return {
    days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((diff / 1000 / 60) % 60)),
  };
};

const CountdownBox = ({ title, time, color }) => {
    const glow = `drop-shadow(0 0 10px ${color})`;


  return (
    <div className="flex flex-col items-center">
      <div className="text-xl font-bold mb-3" style={{ color }}>{title}</div>
      <div className="flex gap-4">
        {['days', 'hours', 'minutes'].map((unit) => (
          <div
            key={unit}
            className="w-20 h-20 rounded-md border-2 flex flex-col items-center justify-center"
            style={{
              borderColor: color,
              color: color,
              filter: glow,
            }}
          >
            <div className="text-3xl font-mono font-bold">
              {String(time[unit]).padStart(2, '0')}
            </div>
            <div className="text-sm font-medium uppercase">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TripleCountdown = () => {
  const [times, setTimes] = useState({
    submission: getTimeLeft(countdownTargets.submission),
    registration: getTimeLeft(countdownTargets.registration),
    conference: getTimeLeft(countdownTargets.conference),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimes({
        submission: getTimeLeft(countdownTargets.submission),
        registration: getTimeLeft(countdownTargets.registration),
        conference: getTimeLeft(countdownTargets.conference),
      });
    }, 60000); // update every 60s
    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" py-10 px-4 w-full text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around gap-10">
        <CountdownBox
          title="Paper Submission"
          time={times.submission}
          color="#00ffff"
        />
        <CountdownBox
          title="Registration"
          time={times.registration}
          color="#ffa500"
        />
        <CountdownBox
          title="Conference"
          time={times.conference}
          color="#00ff66"
        />
      </div>
    </div>
  );
};

export default TripleCountdown;