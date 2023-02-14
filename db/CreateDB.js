const connection = require('./db');
const csv = require('csv-parser');
const path = require('path');
const fs = require('fs');

//function theat create the table

const createTables = (req, res) => {
    const Q1 =
      'CREATE TABLE soldiers (UserID VARCHAR(255), FullName VARCHAR(255)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4';
    const Q2 =
      'CREATE TABLE users (UserID VARCHAR(255), UserEmail VARCHAR(255), UserPassword VARCHAR(255), UserProfile int) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4';
    const Q3 =
     'CREATE TABLE trainings (UserID VARCHAR(255), FullName VARCHAR(255), UserProfile int, StartDate DATE, StartTime TIME) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4';
      connection.query(Q1, (err, mysqlres) => {
      if (err) {
        console.log({ message: 'soldiers table not created', err });
        return;
      }
      console.log({ message: 'soldiers table created' });
    });
    connection.query(Q2, (err, mysqlres) => {
      if (err) {
        console.log({ message: 'users table not created', err });
        return;
      }
      console.log({ message: 'users table created' });
    });
    connection.query(Q3, (err, mysqlres) => {
        if (err) {
          console.log({ message: 'trainings table not created', err });
          return;
        }
        console.log({ message: 'trainings table created' });
      });
    res.send({ message: 'Done' });
  };
  
  const dropTables = (req, res) => {
    const Q1 = 'DROP TABLE soldiers';
    const Q2 = 'DROP TABLE users';
    const Q3 = 'DROP TABLE trainings';
    connection.query(Q1, (err, mysqlres) => {
      if (err) {
        console.log({ message: 'soldiers table not deleted', err });
        return;
      }
      console.log({ message: 'soldiers table deleted' });
    });
    connection.query(Q2, (err, mysqlres) => {
      if (err) {
        console.log({ message: 'users table not deleted', err });
        return;
      }
      console.log({ message: 'users table deleted' });
    });
    connection.query(Q3, (err, mysqlres) => {
        if (err) {
          console.log({ message: 'trainings table not deleted', err });
          return;
        }
        console.log({ message: 'trainings table deleted' });
      });
    res.send({ message: 'Done' });
  };




  
const InsertData2DB = (req, res) => {
const Q1 = 'INSERT INTO soldiers SET ?';
const soldierscsvFilePath = path.join(__dirname, 'Soldiers.csv');
const results = [];
fs.createReadStream(soldierscsvFilePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
    results.forEach((element) => {
        const NewEntry = {
        UserID: element.UserID,
        FullName: element.FullName,
        };
        connection.query(Q1, NewEntry, (err, mysqlres) => {
        if (err) {
            console.log('error in inserting soldiers data', err);
        }
        console.log('created row successfully');
        });
    });
    });

const Q2 = 'INSERT INTO users SET ?';
const usersCsvFilePath = path.join(__dirname, 'Users.csv');
const results2 = [];
fs.createReadStream(usersCsvFilePath)
    .pipe(csv())
    .on('data', (data) => results2.push(data))
    .on('end', () => {
    results2.forEach((element) => {
        const NewEntry = {
        UserID: element.UserID,
        UserEmail: element.UserEmail,
        UserPassword: element.UserPassword,
        UserProfile: element.UserProfile,
        };
        connection.query(Q2, NewEntry, (err, mysqlres) => {
        if (err) {
            console.log('error in inserting users data', err);
        }
        console.log('created row successfully');
        });
    });
    });

const Q3 = 'INSERT INTO trainings SET ?';
const trainingsCsvFilePath = path.join(__dirname, 'Trainings.csv');
const results3 = [];
fs.createReadStream(trainingsCsvFilePath)
    .pipe(csv())
    .on('data', (data) => results3.push(data))
    .on('end', () => {
    results3.forEach((element) => {
        const NewEntry = {
        UserID: element.UserID,
        FullName: element.FullName,
        UserProfile: element.UserProfile,
        StartDate: element.StartDate,
        StartTime: element.StartTime,
        };
        connection.query(Q3, NewEntry, (err, mysqlres) => {
        if (err) {
            console.log('error in inserting trainings data', err);
        }
        console.log('created row successfully');
        });
    });
    });

res.send('data inserted');
};
  


const showAll = (req,res)=>{
  const Q1 = "SELECT * FROM soldiers";
  connection.query(Q1, (err, mysqlres)=>{
      if (err) {
          console.log("error:", err);
          res.status(400).send({message: "error in selecting all soldiers " + err});
          return;
      };
      console.log("success in selecting all soldiers");
      res.send(mysqlres);
      return;
  })

  const Q2 = "SELECT * FROM users";
  connection.query(Q2, (err, mysqlres)=>{
      if (err) {
          console.log("error:", err);
          res.status(400).send({message: "error in selecting all users " + err});
          return;
      };
      console.log("success in selecting all users");
      res.send(mysqlres);
      return;
  })

  const Q3 = "SELECT * FROM trainings";
  connection.query(Q3, (err, mysqlres)=>{
      if (err) {
          console.log("error:", err);
          res.status(400).send({message: "error in selecting all trainings" + err});
          return;
      };
      console.log("success in selecting all trainings");
      res.send(mysqlres);
      return;
  })
};


module.exports = { createTables, dropTables, showAll, InsertData2DB};