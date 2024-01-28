# nadSoft API


This is a simple RESTful API for managing user information using Node.js, Express.js, and Mongoose.

## Setup Instructions

### Prerequisites

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

### Clone the Repository

```bash
git clone https://github.com/MahmoudAlabady/nadSoft.git
cd  nadSoft


#### Install Dependencies
npm install



##### Start the MongoDB Server
Ensure that your MongoDB server is running. If not, start it using the following command:
mongod

######Run the Application

npm start

######## The API server will be running at http://localhost:3000.

API Endpoints
GET /users - Get all users
GET /users/:id - Get a user by ID
POST /users - Add a new user
PUT /users/:id - Update a user by ID
DELETE /users/:id - Delete a user by ID

######## Testing
Run tests using:

npm test

### Author
MAhmoud Alabady

