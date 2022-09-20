//Loads the express module
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const hbs = exphbs.create({});

//Creates our express server
const app = express();
const PORT = process.env.PORT || 3001;

//Set handlebars as default template engine
app.engine('hbs', 'handlebars'({
    layoutsDir: '${__dirname}/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: '${__dirname}/views/partials',
}));
app.set('view engine', 'handlebars');

//Serves static files (we need it to import a css file)
app.use(express.static(path.join(__dirname, 'CSS')));

//Sets a basic route
app.get('/', (req, res) => res.send('index.js'));
//app.use(require('./controllers/dish-routes'));

//Makes the app listen to port 3000
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });//