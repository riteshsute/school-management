const express = require('express');
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const sequelize = require('./Util/db');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const school = require('./Models/school');
const schoolRoute = require('./Routes/schoolRoute');

app.use('/api', schoolRoute);
app.use('/api1', schoolRoute)

sequelize
  // .sync({ force: true })
  .sync() 
  .then((result) => {
    console.log("Database synced successfully");
    app.listen(6000);  
  })
  .catch((err) => {
    console.error("Error syncing database:", err); 
  }); 