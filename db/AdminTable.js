const connection = require('./db.js');
const path = require('path');

//Admin Function
export default function populateTable(table) {
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
  