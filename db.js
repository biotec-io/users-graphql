// Fake data generator
const faker = require('faker');
const fs = require('fs');

// Generate and save json file
fs.writeFile('db.json', JSON.stringify(generateJsonDB()));

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function generateJsonDB() {
  const data = {
    users: [],
    companies: []
  };

  // Create 1000 users
  for (let i = 1; i <= 10000; i++) {
    data.users.push({
      id: i,
      firstName: faker.name.firstName(),
      age: getRandomInt(18, 60),
      // Associate company with user
      companyId: getRandomInt(1, 5)
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
