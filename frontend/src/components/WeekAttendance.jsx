import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function WeeklyAttendanceTable() {
  const [weekAttendance, setWeekAttendance] = useState([]);
  const [highlightedRow, setHighlightedRow] = useState('');

  useEffect(() => {
    const getWeekAttendance = async () => {
      try {
        const currentDate = new Date().toISOString().split('T')[0];
        const response = await axios.post('http://localhost:8080/timelog/getWeekAttendance', { currentDate });
        if (response.data) {
          console.log("getWeekAttendance ~ response.data:", response.data);
          setWeekAttendance(response.data);
        }
      } catch (error) {
        toast.error(error.response.data.error);
        console.error(error.response.data.error);
      }
    };

    getWeekAttendance();
  }, []);

  const getWeekDates = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - dayOfWeek);
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekDates = getWeekDates();

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 md:col-span-3 md:row-span-3 bg-white rounded-sm shadow-sm border relative overflow-x-auto shadow-md sm:rounded-lg">
      <caption className="p-5 text-sm font-bold text-left rtl:text-right text-gray-900 bg-white">
        Week Attendance
      </caption>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-2">Date</th>
          <th scope="col" className="px-6 py-2">Day</th>
          <th scope="col" className="px-6 py-2">Clock In</th>
          <th scope="col" className="px-6 py-2">Clock Out</th>
          <th scope="col" className="px-6 py-2">Total Hours</th>
        </tr>
      </thead>
      <tbody>
        {weekDates.map((date, index) => {
          const dayOfWeek = daysOfWeek[index];
          const formattedDate = date.toISOString().split('T')[0];
          const attendance = weekAttendance.find(entry => entry.date === formattedDate);
          const isToday = formattedDate === new Date().toISOString().split('T')[0];
          const rowClass = isToday ? 'bg-gray-100' : 'bg-white';
          return (
            <tr
              key={formattedDate}
              className={`${rowClass} border-b hover:bg-gray-50 cursor-pointer`}
              onClick={() => setHighlightedRow(formattedDate)}
            >
              <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">{formattedDate}</td>
              <td className="px-6 py-2">{dayOfWeek}</td>
              <td className="px-6 py-2 text-green-600">{attendance ? (attendance.clockIn !== '00:00:00' ? attendance.clockIn : '-') : '-'}</td>
              <td className="px-6 py-2 text-red-600">{attendance ? (attendance.clockOut !== '00:00:00' ? attendance.clockOut : '-') : '-'}</td>
              <td className="px-6 py-2">{attendance ? (attendance.totalHours !== '00:00:00' ? attendance.totalHours : '-') : '-'}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default WeeklyAttendanceTable;
