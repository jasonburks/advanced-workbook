const express = require('express'); // dependencies from npm (package.json)

// Initialize our router
const router = express.Router();

const names = ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'];

router.get('/', function(req, res, next) {
  res.render('names.ejs', { names: names });
});

router.post('/', function(req, res, next) {
  const name = req.body.name;
  names.push(name);
  res.redirect('/names');
});

module.exports = router;
