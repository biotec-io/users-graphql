// Fake data generator
const faker = require('faker');

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = () => {
  const data = { users: [] };

  // Create 1000 users
  for (let i = 0; i < 1000; i++) {
    data.users.push({
      id: i,
      firstName: faker.name.firstName(),
      age: getRandomInt(18, 60)
    });
  }
  return data;
};
