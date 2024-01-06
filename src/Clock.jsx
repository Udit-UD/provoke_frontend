import React, { useEffect, useState } from 'react'
import { format, differenceInMilliseconds } from 'date-fns';

export const Clock = ({textColor}) => {
    const targetDate = new Date("2024-02-01T00:00:00");
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    useEffect(() => {
        const handleTimeUpdate = () => {
          const remainingTime = differenceInMilliseconds(targetDate, new Date());
          if (remainingTime <= 0) {
            setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          } else {
            setTimeRemaining({
              days: Math.floor(remainingTime / (24 * 60 * 60 * 1000)),
              hours: Math.floor((remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)),
              minutes: Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000)),
              seconds: Math.floor((remainingTime % (60 * 1000)) / 1000),
            });
          }
        };
      
        handleTimeUpdate(); 
        const timeInterval = setInterval(handleTimeUpdate, 1000);
      
        return () => clearInterval(timeInterval);
      }, [targetDate]); 
  return (
    <div className="text-center flex gap-[10px]">
        <div className='flex gap-3'>
            <div className='flex flex-col'>
                <div className='text-white text-3xl font-semibold'>
                    <div className='relative h-10 w-10'>
                        <div className='w-full h-full absolute transition-all duration-200 '>
                        {timeRemaining.days} 
                        </div>
                    </div>
                </div>
                <div className={`text-[9px] font-medium text${textColor}`}>
                    Days
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='text-white text-3xl font-semibold'>
                    <div className='relative h-10 w-10'>
                        <div className='w-full h-full absolute transition-all duration-200 '>
                        {timeRemaining.hours} 
                        </div>
                    </div>
                </div>
                <div className={`text-[9px] font-medium text${textColor}`}>
                    Hours
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='text-white text-3xl font-semibold'>
                    <div className='relative h-10 w-10'>
                        <div className='w-full h-full absolute transition-all duration-200 '>
                        {timeRemaining.minutes} 
                        </div>
                    </div>
                </div>
                <div className={`text-[9px] font-medium text${textColor}`}>
                    Minutes
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='text-white text-3xl font-semibold'>
                    <div className='relative h-10 w-10'>
                        <div className='w-full h-full absolute transition-all duration-200 '>
                        {timeRemaining.seconds} 
                        </div>
                    </div>
                </div>
                <div className={`text-[9px] font-medium text${textColor}`}>
                    Seconds
                </div>
            </div>
        </div>
      </div>
  )
}
