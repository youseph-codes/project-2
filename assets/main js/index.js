//Loads the express module
const express = require('express');

//Creates our express server
const app = express();
const port = 3000;

//Set handlebars as default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Serves static files (we need it to import a css file)
app.use(express.static('public'))

//Sets a basic route
app.get('/', (req, res) => res.send('My Note Taking App'));

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));