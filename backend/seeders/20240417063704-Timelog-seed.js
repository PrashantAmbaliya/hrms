'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Sample data for time logs
    const timeLogsData = [
      {
        userId: 3,
        date: '2024-04-10',
        clockIn: '09:00:00',
        clockOut: '17:00:00',
        totalHours: '08:00:00',
        breakDuration: '01:00:00',
        onBreak: false,
        isApproved: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        date: '2024-04-11',
        clockIn: '09:15:00',
        clockOut: '18:00:00',
        totalHours: '08:45:00',
        breakDuration: '00:45:00',
        onBreak: false,
        isApproved: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        date: '2024-04-12',
        clockIn: '08:45:00',
        clockOut: '16:30:00',
        totalHours: '07:45:00',
        breakDuration: '00:45:00',
        onBreak: false,
        isApproved: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        date: '2024-04-13',
        clockIn: '10:00:00',
        clockOut: '17:30:00',
        totalHours: '07:30:00',
        breakDuration: '01:00:00',
        onBreak: false,
        isApproved: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        date: '2024-04-14',
        clockIn: '09:30:00',
        clockOut: '18:00:00',
        totalHours: '08:30:00',
        breakDuration: '00:30:00',
        onBreak: false,
        isApproved: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        date: '2024-04-15',
        clockIn: '08:00:00',
        clockOut: '17:00:00',
        totalHours: '09:00:00',
        breakDuration: '01:00:00',
        onBreak: false,
        isApproved: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        date: '2024-04-16',
        clockIn: '09:15:00',
        clockOut: '18:15:00',
        totalHours: '09:00:00',
        breakDuration: '00:45:00',
        onBreak: false,
        isApproved: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        date: '2024-04-17',
        clockIn: '08:30:00',
        clockOut: '17:30:00',
        totalHours: '09:00:00',
        breakDuration: '01:00:00',
        onBreak: false,
        isApproved: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        date: '2024-04-18',
        clockIn: '09:00:00',
        clockOut: '18:00:00',
        totalHours: '09:00:00',
        breakDuration: '00:30:00',
        onBreak: false,
        isApproved: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        date: '2024-04-19',
        clockIn: '08:45:00',
        clockOut: '17:45:00',
        totalHours: '09:00:00',
        breakDuration: '01:00:00',
        onBreak: false,
        isApproved: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert sample data into the TimeLog table
    await queryInterface.bulkInsert('TimeLogs', timeLogsData, {});

    console.log('Time log data seeded successfully.');
  },

  down: async (queryInterface, Sequelize) => {
    // Remove all data from the TimeLog table
    await queryInterface.bulkDelete('TimeLogs', null, {});

    console.log('Time log data removed.');
  }
};
