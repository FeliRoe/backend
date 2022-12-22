const express = require('express');
const cors = require('cors');

const sequelize = require('./util/database');
const User = require('./models/inserate');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET','POST','PUT','DELETE');
  next();
})

//app.use('/dev', require('./routes/dev'));
app.use('/inserate', require('./routes/inserate'));
app.use('/users', require('./routes/users'));
app.use('/intressenten', require('./routes/intressenten'));

(async () =>{
  try {
    await sequelize.sync(
      {force: false}
    );
    console.log("test");
    app.listen(process.env.EXTERNAL_PORT || 3001);
  } catch (error) {
    console.error(error);
  }
})()