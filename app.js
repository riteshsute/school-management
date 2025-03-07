const express = require('express');
const app = express();
require('dotenv').config();

const sequelize = require('./Util/db');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

console.log(process.env.PORT);

const school = require('./Models/school');
const schoolRoute = require('./Routes/schoolRoute');

app.use('/api', schoolRoute);
// app.use('/api1', schoolRoute)

sequelize
  // .sync({ force: true })
  .sync() 
  .then((result) => {
    console.log("Database synced successfully");
    app.listen(process.env.PORT);  
  })
  .catch((err) => {
    console.error("Error syncing database:", err); 
  }); 