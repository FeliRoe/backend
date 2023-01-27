const express = require('express');
const cors = require('cors');

const sequelize = require('./util/database'); // past 
const benutzer = require('./datenstruktur/show'); // ändern

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET','POST','PUT','DELETE');
  next();
})

//app.use('/dev', require('./routes/dev'))
app.use('/show', require('./routes/show'));
app.use('/benutzer', require('./routes/benutzer')); // ändern
app.use('/interessenten', require('./routes/interessenten')); // ändern

(async () =>{
  try {
    await sequelize.sync(
      {force: false}
    );
    console.log("lets go");
    app.listen(process.env.EXTERNAL_PORT || 6969);
  } catch (error) {
    console.error(error);
  }
})()