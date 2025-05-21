import { useState, useEffect } from 'react';

const countdownTargets = {
  submission: new Date('2025-08-15T23:59:59'),
  registration: new Date('2025-08-30T23:59:59'),
  conference: new Date('2025-12-07T09:00:00'),
  acceptance: new Date('2025-08-25T09:00:00'),
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
      <div className="text-l font-bold mb-3" style={{ color }}>{title}</div>
      <div className="flex gap-4">
        {['days', 'hours', 'minutes'].map((unit) => (
          <div
            key={unit}
            className="w-15 h-15 rounded-md border-2 flex flex-col items-center justify-center p-2"
            style={{
              borderColor: color,
              color: color,
              filter: glow,
            }}
          >
            <div className="text-xl font-mono font-bold">
              {String(time[unit]).padStart(2, '0')}
            </div>
            <div className="text-[10px] font-medium uppercase">{unit}</div>
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
    acceptance: getTimeLeft(countdownTargets.acceptance),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimes({
        submission: getTimeLeft(countdownTargets.submission),
        registration: getTimeLeft(countdownTargets.registration),
        conference: getTimeLeft(countdownTargets.conference),
        acceptance: getTimeLeft(countdownTargets.acceptance),
      });
    }, 60000); // update every 60s
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-4 text-white">
      <div className="mx-auto grid max-w-3xl grid-cols-1 sm:grid-cols-2 gap-5 p-4">
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
        <CountdownBox
          title="Acceptance"
          time={times.acceptance}
          color="#0066ff"
        />
      </div>
    </div>
  );
};

export default TripleCountdown;