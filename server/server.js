// config
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

// settings
app.listen(port, () => console.log(`Server is up on ${port}`));
hbs.registerPartials(__dirname + '/../views/partials');
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '../views')));

// helpers
hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
});

// routes
app.get('/', (req, res) => {
	res.redirect('/Web-Developer');
});

// routes
app.get('/Web-Developer', (req, res) => {
	res.render('index.hbs', {
		title: 'Ryan Foss - Quick, Clean Web Development',
		description: 'Web Developer that specializing in Javascript to create responsive, clean websites',
		Keywords: 'ryanmfoss, Ryan Foss, Web Developer, Web Designer, JavaScript Specialist, Node.js Specialist, React.js Specialist',
		css: 'Index'
	});
});