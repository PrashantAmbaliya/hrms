import React, { useEffect, useState } from 'react';
import Goal from '../components/Goal';
import WeeklyAttendanceTable from '../components/WeekAttendance';
import Clock from '../components/Clock';

function Dashboard() {

  return (
    <div className="grid md:grid-cols-3 gap-4 h-full">
      <div className="md:col-span-2 md:row-span-1 flex flex-col justify-between bg-white rounded-sm shadow-sm border p-4 ">
        <Goal />
      </div>
      <div className="md:col-span-1 md:row-span-1 bg-white rounded-sm shadow-sm border p-4 flex flex-col justify-center items-center gap-4">
        <Clock />
      </div>
      <WeeklyAttendanceTable />
    </div>
  );
}

export default Dashboard;
