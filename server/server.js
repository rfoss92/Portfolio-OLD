// config
require('dotenv').config();
const http = require('http');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const useragent = require('express-useragent');
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

// settings
app.listen(port, () => console.log(`Server is up on ${port}`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(useragent.express());
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
		title: 'Ryan Foss Software Developer Portfolio',
		description: 'Front-End and Back End Software Developer and Javascript Specialist Portfolio for Ryan Foss',
		Keywords: 'Ryan Foss, Web Developer, Web Designer, Front End, Back End, HTML, CSS, JavaScript, Express, MongoDB, Node, React',
		css: 'Index'
	});
});

app.get('/Welcome', (req, res) => {
	res.render('Welcome.hbs', {
		title: 'Welcome',
		Description: 'Your Welcome Page',
		Keywords: 'Ryan Foss, Welcome',
		css: 'Welcome'
	});
});

app.get('/AlanWatts', (req, res) => {
	res.render('AlanWatts.hbs', {
		title: 'Alan Watts Tribute',
		Description: 'A Tribute to Alan Watts',
		Keywords: 'Ryan Foss, Tribute, Alan Watts, Philosophy',
		css: 'AlanWatts'
	});
});

app.get('/SimonGame', (req, res) => {
	res.render('SimonGame.hbs', {
		title: 'Simon Game',
		Description: 'A Simon Game using Javascript',
		Keywords: 'Ryan Foss, Simon Game',
		css: 'SimonGame'
	});
});

app.get('/Pomodoro', (req, res) => {
	res.render('Pomodoro.hbs', {
		title: 'Pomodoro',
		Description: 'A Pomodoro clock for productivity',
		Keywords: 'Ryan Foss, Pomodoro, Clock, Productivity',
		css: 'Pomodoro'
	});
});

app.get('/TwitchStreamers', (req, res) => {
	res.render('TwitchStreamers.hbs', {
		title: 'Twitch Streamers',
		Description: 'A list of Twitch Streamers and their status',
		Keywords: 'Ryan Foss, Twitch, Streamers',
		css: 'TwitchStreamers'
	});
});

app.get('/Calculator', (req, res) => {
	res.render('Calculator.hbs', {
		title: 'Calculator',
		Description: 'A Calculator',
		Keywords: 'Ryan Foss, Calculator',
		css: 'Calculator'
	});
});