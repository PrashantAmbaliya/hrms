import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast'

function Clock() {
  const [existingTimeLog, setExistingTimeLog] = useState(null);
  const [clockedIn, setClockedIn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [workTime, setWorkTIme] = useState();

  useEffect(() => {
    const getClockData = async () => {
      try {
        const currentDate = new Date().toISOString().split('T')[0];
        const response = await axios.post('http://localhost:8080/timelog/getClockData', { currentDate });
        if (response.data) {
          setExistingTimeLog(response.data);
          setClockedIn(true);
          startTimer(response.data.clockIn);
        }
      } catch (error) {
        toast.error(error.response.data.error)
        console.error(error.response.data.error);
      }
    };

    getClockData();

    return () => {
      clearInterval(workTime);
    };
  }, []);

  const startTimer = (startTime) => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString([], { hour12: false });
      const formattedTime = new Date((new Date(`1970-01-01T${currentTime}`) - new Date(`1970-01-01T${startTime}`))).toISOString().slice(11, 19);
      setWorkTIme(formattedTime);
    }, 1000);
  };

  const handleClockInOut = async () => {
    if (!clockedIn) {
      try {
        const response = await axios.post('/api/clockIn', { currentDate: new Date() });
        setExistingTimeLog(response.data.existingTimeLog);
        setClockedIn(true);
        startTimer(response.data.existingTimeLog.clockIn);
      } catch (error) {
        toast.error(error.response.data.error)
        console.error(error.response.data.error);
      }
    } else {
      clearInterval(workTime);
      setClockedIn(false);
      setExistingTimeLog(null);
    }
  };

  const handleBreak = async () => {
    if (!onBreak) {
      // Start break logic
      setOnBreak(true);
      // Show stop break button
    } else {
      // End break logic
      // Update break end time in time log
      setOnBreak(false);
      // Hide stop break button
    }
  };

  return (
    <>
        <img className="w-20 h-20 p-1 rounded-full ring-gray-300 shadow-xl" src="/profilepic.jpg" alt="Bordered avatar" />
        <div className='flex items-center justify-center w-full gap-2'>
          <button className={`py-2 w-1/2 rounded-sm font-semibold text-xs ${clockedIn ? 'border-2 bg-[#007aff] border-[#007aff] text-white' : 'border-2 border-[#258be5] text-[#258be5]'}`} disabled={onBreak} style={{ opacity: onBreak ? 0.5 : 1 }} onClick={handleClockInOut}>
            {clockedIn ? 'CLOCK OUT' : 'CLOCK IN'}
          </button>
          {clockedIn && <button className={`py-2 w-1/2 rounded-sm font-semibold text-xs ${!onBreak ? 'border-2 bg-[#ff6961] border-[#ff6961] text-white' : 'border-2 border-[#ff6961] text-[#ff6961'}`} onClick={handleBreak}>{onBreak ? 'STOP BREAK' : 'BREAK'}</button>}
        </div>

        <div className='flex items-center w-full border border-[#ffce70]'>

          <div className='flex flex-col gap-1 items-center justify-center w-1/2 py-2'>
            <span className='font-bold text-sm text-green-600'>
              Working Time
            </span>
            <span className='font-bold'>
              {workTime ? workTime : "00:00:00"}
            </span>
          </div>

          <div className='flex flex-col gap-1 items-center justify-center w-1/2 py-2'>
            <span className='font-bold text-sm text-red-600'>
              Break Time
            </span>
            <span className='font-bold'>
              {workTime ? workTime : "00:00:00"}
            </span>
          </div>

        </div>
    </>
  );
}

export default Clock;
