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
	res.render('index.hbs', {
		title: 'ryanmfoss - Ryan Foss Web Developer Portfolio',
		description: 'Front-End and Back-End Web Developer and Javascript Specialist Portfolio for Ryan Foss',
		Keywords: 'ryanmfoss, Ryan Foss, Software Developer, Web Developer, Web Designer, Front-End, Back-End, HTML, CSS, JavaScript, Node.js, React.js',
		css: 'Index'
	});
});