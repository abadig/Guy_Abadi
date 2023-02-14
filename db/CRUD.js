const connection = require('./db');
const path = require('path');


//User Function

//Add new User
const createNewUser = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: 'Content can not be empty!',
      });
    }
  
    const newUser = {
      UserID: req?.body?.UserID,
      UserEmail: req?.body?.UserEmail,
      UserPassword: req?.body?.UserPassword,
      UserProfile: req?.body?.UserProfile
    };
    
    connection.query('INSERT INTO users SET ?', newUser, (err, mysqlres) => {
      if (err) {
        console.log('error: ', err);
        res.status(400).send({ message: 'error in creating user: ' + err });
        return;
      }
      console.log('user created: ', { id: mysqlres.insertId, ...newUser });
      res.redirect('http://localhost:3000/Login.html');
    });
  };

  const loginUser = (req, res) => {
    const { UserID, UserPassword } = req.body;
    
    connection.query('SELECT * FROM users WHERE UserID = ? AND UserPassword = ?', [UserID, UserPassword], (err, results) => {
      if (err) {
        console.log('error: ', err);
        res.status(400).send({ message: 'error in login: ' + err });
        return;
      }
      
      if (results.length === 0) {
        // no user found
        res.redirect('/Login.html?loginFailed=true');
        return;
      }
      
      // user found, set user details in session and redirect to home page
      const user = results[0];
      req.session.userID = user.UserID;
      req.session.fullName = user.FullName;
      req.session.profile = user.Profile;
      res.redirect('/HomePage.html');
    });
  };
  
  

//Admin Function


function populateTable(table) {
    // Query the database to get all the data from the "trainings" table
    connection.query('SELECT * FROM trainings', (error, results, fields) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(results);
      // Loop through the results and add a row to the table for each one
      results.forEach((row) => {
        const tr = document.createElement('tr');
  
        const time = document.createElement('td');
        time.textContent = row.start_time;
        tr.appendChild(time);
  
        const date = document.createElement('td');
        date.textContent = row.start_date;
        tr.appendChild(date);
  
        const profile = document.createElement('td');
        profile.textContent = row.profile;
        tr.appendChild(profile);
  
        const fullName = document.createElement('td');
        fullName.textContent = row.full_name;
        tr.appendChild(fullName);
  
        const idNumber = document.createElement('td');
        idNumber.textContent = row.id_number;
        tr.appendChild(idNumber);
  
        table.appendChild(tr);
      });
    });
  }
  
  

 const startTraining =  (req, res) => {
    const { userID, fullName, profile, dateStamp, timeStamp } = req.body;
    const sessionData = req.session;
  
    // Check if user is logged in
    if (!sessionData.userID) {
      res.status(401).send('Unauthorized');
      return;
    }
  
    // Insert the form data into the database
    connection.query('INSERT INTO trainings (userID, FullName, UserProfile, StartDate, StartTime) VALUES (?, ?, ?, ?, ?)', [userID, fullName, profile, dateStamp, timeStamp], (err, results) => {
      if (err) {
        console.log('error: ', err);
        res.status(400).send({ message: 'error in training: ' + err });
        return;
      }
  
      res.redirect('/HomePage.html');
    });
};

const deleteUser = (req, res) => {
    const { userId } = req.params;
    const sql = 'DELETE FROM users WHERE userID = ?';
    connection.query(sql, userId, (error) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting user' });
      } else {
        res.json({ message: 'המשתמש נמחק בהצלחה' });
      }
    });
  };
  

module.exports = { createNewUser, loginUser, populateTable, startTraining, deleteUser};


