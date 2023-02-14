const express = require('express');
const app = express();
const path = require('path');
const BodyParser = require('body-parser');
// const { getRecipe, getAllRecipes, createNewRecipes, createNewUser,login} = require('./db/CRUD');
// const CreateDB = require('./db/CreateDB');
const port = 3000;

app.use(express.static(path.join(__dirname)));
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.set('view engine', 'pug');

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

// // routes for creating the DB
// app.all('/CreateTables', CreateDB.createTables);
// app.all('/DropTables', CreateDB.dropTables);
// app.all('/InsertDataToTables', CreateDB.InsertData2DB);

// app.get('/:recepieName', getRecipe);
// app.post('/addRecipe', createNewRecipes);
// app.post('/login', login);
// app.post('/signIn', createNewUser);

app.listen(port, () => {
  console.log('server is running on port ', port);
});