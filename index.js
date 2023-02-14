const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const BodyParser = require('body-parser');
const CreateDB = require('./db/CreateDB');
const { createNewUser, loginUser, populateTable, startTraining, deleteUser} = require('./db/CRUD');
const port = 3000;

app.use(express.static(path.join(__dirname)));
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use(session({
  secret: '12345678',
  resave: false,
  saveUninitialized: true,
}));


// ** Static pages ** //
// Home page
app.get('/', (req, res) => {
  res.redirect('/HomePage.html');
});
app.get('/HomePage.html', (req, res) => {
  res.sendFile(__dirname + '/views/HomePage.html');
});
app.get('/LoadMeter.html', (req, res) => {
  res.sendFile(__dirname + '/views/LoadMeter.html');
});
app.get('/History.html', (req, res) => {
  res.sendFile(__dirname + '/views/History.html');
});
app.get('/Login.html', (req, res) => {
  res.sendFile(__dirname + '/views/Login.html');
});

//Does not work, SO THE TABLE IS FILLED WITH FAKE HISTORY
app.get('/Admin.html', (req, res) => {
  res.sendFile(__dirname + '/views/Admin.html');

});
app.get('/SignUp.html', (req, res) => {
  res.sendFile(__dirname + '/views/SignUp.html');
});



// // Recipes list
// app.get('/recipes', getAllRecipes);
// // Add recipe
// app.get('/addrecipe', (req, res) => {
//   res.sendFile(__dirname + '/views/addrecipe.html');
// });

// routes for creating the DB
app.all('/CreateTables', CreateDB.createTables);
app.all('/DropTables', CreateDB.dropTables);
app.all('/InsertDataToTables', CreateDB.InsertData2DB);

//DB actions
app.post('/create-user', createNewUser);
app.post('/loginUser', loginUser);
// Handle POST request from client-side form
// app.post('/training', startTraining);
app.delete('/deleteUser/:userId', deleteUser);



app.listen(port, () => {
  console.log('server is running on port ', port);
});