import { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const targetDate = '2024-12-27T09:30:00';

        const difference = new Date(targetDate) - now;

        let timeLeft = {};

        if (difference >= 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),

            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        < span className='flex text-xs gap-0.5 h-[45px] '>
            <div className=' border-2 border-accent-500 rounded-md   p-0.75 w-10 text-center bg-slate-50'>
                <div className='font-bold text-sm'>{timeLeft.days.toLocaleString('en-US', { minimumIntegerDigits: 2 })} </div>
                <div> days</div>
            </div>
            
            <div className='border-2 rounded-md border-accent-500  p-0.75 w-10 bg-slate-50 text-center'>
                <div className='font-bold text-sm ' >{timeLeft.hours.toLocaleString('en-US', { minimumIntegerDigits: 2 })} </div>
                <div>hrs</div>
            </div>
            
            <div className='border-2 rounded-md border-accent-500  p-0.75 w-10 bg-slate-50 text-center'>
                <div className='font-bold text-sm'>{timeLeft.minutes.toLocaleString('en-US', { minimumIntegerDigits: 2 })}  </div>
                <div> mins</div>
            </div>

            <div className='border-2 rounded-md border-accent-500 p-0.75 w-10 bg-slate-50 text-center'>
                <div className='font-bold text-sm'>{timeLeft.seconds.toLocaleString('en-US', { minimumIntegerDigits: 2 })} </div>
                <div> sec</div>
            </div>

            
        </span>
    );
};

export default CountdownTimer;
