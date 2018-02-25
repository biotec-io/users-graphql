// Fake data generator
const faker = require('faker');

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = () => {
  const data = {
    users: [],
    companies: []
  };

  // Create 1000 users
  for (let i = 1; i <= 1000; i++) {
    data.users.push({
      id: i,
      firstName: faker.name.firstName(),
      age: getRandomInt(18, 60),
      // Associate company with user
      companyId: getRandomInt(1, 50)
    });
  }

  // Create 50 companies
  for (let i = 1; i <= 50; i++) {
    data.companies.push({
      id: i,
      name: faker.company.companyName(),
      description: faker.company.catchPhrase()
    });
  }

  return data;
};
