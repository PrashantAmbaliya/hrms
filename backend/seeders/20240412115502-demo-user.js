'use strict';

/** @type {import('sequelize-cli').Migration} */

const usersToInsert = [
  { name: 'Admin', email: 'admin@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: true, employeeRole: 'Admin', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Liam Wilson', email: 'liam@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Software Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Olivia Johnson', email: 'olivia@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Intern', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Noah Smith', email: 'noah@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Junior Software Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Emma Brown', email: 'emma@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Senior Software Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Ava Garcia', email: 'ava@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Business Development Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'William Davis', email: 'william@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Project Manager', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Sophia Hernandez', email: 'sophia@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Human Resource', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Logan Martinez', email: 'logan@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Software Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Amelia Wilson', email: 'amelia@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Junior Software Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'James Johnson', email: 'james@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Intern', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Oliver Brown', email: 'oliver@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Senior Software Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Charlotte Lee', email: 'charlotte@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Business Development Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Elijah Davis', email: 'elijah@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Project Manager', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Isabella Wilson', email: 'isabella@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Human Resource', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Mason Taylor', email: 'mason@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Software Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Ethan Lee', email: 'ethan@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Intern', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Harper Harris', email: 'harper@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Junior Software Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Evelyn Hernandez', email: 'evelyn@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Senior Software Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Benjamin Martinez', email: 'benjamin@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Business Development Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Luna Davis', email: 'luna@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Project Manager', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Emma Thompson', email: 'emma.thompson@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Software Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Jack White', email: 'jack.white@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Intern', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Sophia Johnson', email: 'sophia.johnson@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Junior Software Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Alexander Lee', email: 'alexander.lee@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Senior Software Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Olivia Harris', email: 'olivia.harris@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Business Development Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Ethan Martinez', email: 'ethan.martinez@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Project Manager', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Ava Davis', email: 'ava.davis@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Human Resource', createdAt: new Date(), updatedAt: new Date() },
  { name: 'James Brown', email: 'james.brown@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Software Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Charlotte Garcia', email: 'charlotte.garcia@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Junior Software Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Noah Wilson', email: 'noah.wilson@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Intern', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Isabella Miller', email: 'isabella.miller@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Senior Software Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Michael Smith', email: 'michael.smith@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Business Development Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Emily Brown', email: 'emily.brown@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Project Manager', createdAt: new Date(), updatedAt: new Date() },
  { name: 'William Johnson', email: 'william.johnson@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Human Resource', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Sophia Anderson', email: 'sophia.anderson@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Software Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Jacob Davis', email: 'jacob.davis@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Intern', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Emma Martinez', email: 'emma.martinez@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Junior Software Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Ethan Brown', email: 'ethan.brown@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Senior Software Engineer', createdAt: new Date(), updatedAt: new Date() },
  { name: 'Olivia Taylor', email: 'olivia.taylor@example.com', password: '$2b$10$6slSdktmPYjn0qVZD1sEh.p0zjYwqi3VgLtBI8tpYaTcN6zGiGcUy', isAdmin: false, employeeRole: 'Business Development Engineer', createdAt: new Date(), updatedAt: new Date() }
];

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('Users', usersToInsert, {});
    } catch (error) {
      console.error('Error seeding Users:', error);
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkDelete('Users', null, {});
    } catch (error) {
      console.error('Error reverting seed data:', error);
    }
  }
};

