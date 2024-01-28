const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const userRouter = require('./routers/user');
const app = express();
const port = process.env.PORT || 3000;
const bcrypt= require('bcryptjs');

app.use(bodyParser.json());
app.use(cors());


require('./db/mongoose');



app.use(express.json())
app.use(cors())
app.use('/users',userRouter);



app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });








// Start the server
const server =app.listen(port, () => console.log(`Server listening on port ${port}`));
// ```

module.exports =  { app, server }; 
// // This code defines an Express.js app that listens on port 3000. It connects to a MongoDB database and defines two schemas: `Contact` and `User`. It also defines a middleware function `requireAuth` that checks for JWT authentication.

// // The API has several endpoints for creating, listing, editing, and deleting contacts. It also has endpoints for locking and unlocking contacts. Finally, it has an endpoint for authenticating users.

// // To run the server,
