// Require our dependencies
const http = require('http'); // dependencies from node
const path = require('path'); // dependencies from node
const express = require('express'); // dependencies from npm (package.json)
const ejs = require('ejs'); // dependencies from npm (package.json)
const ghAvatar = require('gh-avatar'); // dependencies from npm (package.json)

// Initialize our app
const app = express();

app.use(express.static(__dirname + '/public'));

//Set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Add a route to our app that renders our index view
// app.get('/', function(req, res, next) {
//   res.render('index.ejs', {greeting: 'Hello, from ejs!'});
// });

// Add a route to our app that renders our index view
app.get('/', function(req, res, next) {
  ghAvatar('jasonburks').then(avatar => {
    res.render('index.ejs', {
      ghAvatar: avatar,
      intro: 'Hi! My name is Jason Burks. I live in Austin, TX and am a hack Web Developer',
      skills: ['HTML', 'CSS', 'JavaScript', 'Node.js/Express.js', 'MongoDB/Mongoose.js', 'Backbone.js'],
      hobbies: ['Netflix', 'Coding', 'Boozing']
    });
  });
});

// Set up our server
const port = 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on: ${port}`);
