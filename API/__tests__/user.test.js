// userController.test.js
const request = require('supertest');
const {app,server } = require('../app'); // Import your Express app
const mongoose = require('mongoose');

describe('POST /users', () => {
    jest.setTimeout(30000);
  it('should create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        age: 25,
        country: 'USA',
        mobile: '1234567890',
      });

    expect(response.statusCode).toBe(201);
    // expect(response.body).toHaveProperty('id');
  });

  // Add more test cases for other scenarios
});


// afterAll(async () => {
//     // Close the server
//     await new Promise(resolve => app.close(resolve));
//     // Close the MongoDB connection
//     await mongoose.connection.close();
//   });
afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 10000)); // avoid jest open handle error
  }); // Disconnect from MongoDB after all tests have run