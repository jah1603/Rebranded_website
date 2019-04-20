import nuv from './nuv-6.png';
import findasaur from './findasaur2.png';
import w2walk from './wtowalk.png';
import w2wed from './wtowed.png';
import fixpal from './Zfix.png';
import InvStory from './InvStory.png';
import reach from './reachdating.png';
import james from './james_site.png';
import findasaurVid from './findasaur2.mp4';
import w2bbqVid from './W2BBQ.mp4';
import nuvweb from './nuvphoto.png';

const projects = [
	{
		name: 'NüV',
		description: "This 'VegTech' project was a joint venture between David Pears, Stephen Rooney and I. We built the mobile app in React Native with a Heroku-hosted backend made in Ruby on Rails. NüV allows users to share, view and rate recipes, venues, brands and media items, and also offers a barcode scanner, commenting and real-time chat.",
		description_part_two: 'NüV features action cable web sockets, JSON web token authentication, image hosting via Cloudinary, a responsive cross-platform design, more than 50 React components/containers, and also boasts a growing user base. The mobile app is available for download from both the iOS and Android stores as of the end of February 2019.',
		image: nuv,
		url: "https://play.google.com/store/apps/details?id=com.levelapps.nuv",
		apple_url: "https://itunes.apple.com/us/app/n%C3%BCv/id1455339660?ls=1&mt=8",
		apple: true,
		mobile: true,
		icons: [{name: "React Native", class: 'devicon-react-plain colored'}, {name: "Ruby on Rails", class: 'devicon-rails-plain-wordmark colored'}, {name: "PostgreSQL", class: 'devicon-postgresql-plain-wordmark colored'}, {name: "Heroku", class: 'devicon-heroku-plain-wordmark colored'}]
	},
	{
		name: 'NüV - web version',
		description: "A 'VegTech' project which emerged out of a joint venture between David Pears, Stephen Rooney and I. We are building the website in React.js with a Heroku-hosted backend made in Ruby on Rails. The NüV website allows users to share, view and rate recipes, venues, brands and media items, with many of the features accessible even without creating a NüV account.",
		description_part_two: 'NüV features action cable web sockets, JSON web token authentication, image hosting via Cloudinary, a responsive cross-platform design, more than 50 React components/containers, and also boasts a growing user base. The website is currently under construction and is scheduled to be finished by the end of April 2019.',
		image: nuvweb,
		see_more: false,
		icons: [{name: "React.js", class: 'devicon-react-plain-wordmark colored'}, {name: "Ruby on Rails", class: 'devicon-rails-plain-wordmark colored'}, {name: "PostgreSQL", class: 'devicon-postgresql-plain-wordmark colored'}, {name: "CSS3", class: 'devicon-css3-plain-wordmark colored'}]
	},
	{
		name: 'Findasaur',
		description: "Findasaur, designed to educate inquisitive young minds via a digital exhibition featuring hundreds of dinosaurs and thousands of mapped fossils, is built around a sleek and elegant front end designed to be minimalist and engaging. Three APIs (Wikipedia, The Paleobiology Database and Google Maps) are used to fetch dinosaur data.",
		description_part_two: "Findasaur also offers a full exhibition of fossils which are plotted on an interactive map, allowing users to discover where the paleontological hotspots are located. As a final feature, the app makes use of a predictive search bar. Findasaur sourced additional data for 270 dinosaurs from the Natural History Museum website via scraping methods in Python.",
		image: findasaur,
		url: "https://play.google.com/store/apps/details?id=com.levelapps.findasaur",
		apple_url: "https://itunes.apple.com/gb/app/findasaur/id1455369288?mt=8",
		apple: true,
		mobile: true,
		video: findasaurVid,
		icons: [{name: "React Native", class: 'devicon-react-plain colored'}, {name: "Python", class: 'devicon-python-plain-wordmark colored'}, {name: "Android", class: 'devicon-android-plain colored'}, {name: "Apple", class: 'devicon-apple-original white'}]
	},
	{
		name: 'Reach',
		description: "I took on this project with two colleagues based on our vision of a networking app for social influencers. We set up a ReactJS frontend to consume the Python backend using Axios. Reach is a full-stack dating platform that measures users' social reach and lets them find other users according to various preferences.",
		description_part_two: "Featuring JSON web token authentication, a Django REST API, geolocation, swipeable cards and email activation, Reach calculates a user's total social reach by scraping their follower count on three major social media platforms.",
		image: reach,
		mobile: true,
		url: "https://github.com/jah1603/Reach--",
		icons: [{name: "Python", class: 'devicon-python-plain-wordmark colored'}, {name: "Django", class: 'devicon-django-plain-wordmark colored'}, {name: "React.js", class: 'devicon-react-plain colored'},  {name: "PostgreSQL", class: 'devicon-postgresql-plain-wordmark colored'}]
	},
	{
		name: 'Weather2...',
		description: 'My motivation to do this project stemmed from a desire to hone my front-end development skills and create something visually stimulating and pleasing to the eye. Users can choose from Weather2Walk, Weather2BBQ, Weather2Fish, Weather2Golf and Weather2Wed.',
		description_part_two: "The apps use four APIs (DarkSky, Geograph, FourSquare and Google Maps) to fetch relevant data. Weather data is presented in the form of historical averages obtained through a number of sequential requests, and prospective venues for the searched location are presented on an interactive map. Weather2Walk benefits from a fuzzy search, meaning highly specific place names (waterfalls, forests or small hills) can be searched, while Weather2Golf offers hourly weather snapshots, helping golfers to come to an informed decision on their tee-off time.",
		image: w2walk,
		url: "https://play.google.com/store/apps/details?id=com.weather2.weather2walk",
		mobile: true,
		video: w2bbqVid,
		icons: [{name: "React Native", class: 'devicon-react-plain colored'}, {name: "Android", class: 'devicon-android-plain colored'}, {name: "Heroku", class: 'devicon-heroku-plain-wordmark colored'}]
	},
	{
		name: 'Website for a Developer',
		description: 'This is my former personal website, which I designed and built entirely from scratch using no plug-ins whatsoever. Originally it was intended as a portfolio website where I would be able to document all my projects and showcase what I considered to be my best work.',
		description_part_two: "I used React.js and jQuery to make the site, which features a bespoke image carousel which is responsive enough to work on mobile devices. Although I would ultimately abandon the site in favour of the more modern design seen here, it still lives on as a legacy piece.",
		image: james,
		url: "https://jamesahenderson.netlify.com/",
		see_more: false,
		icons: [{name: "React.js", class: 'devicon-react-plain colored'}, {name: "jQuery", class: 'devicon-jquery-plain-wordmark colored'}]
	},
	{
		name: 'Weather2Wed',
		description: 'Another self-penned brief, this CodeClan group project aimed to inform and entertain in a novel and engaging way. Weather2Wed, built in line with the publish-subscribe pattern, presents historical weather snapshots for potential wedding locations throughout Britain and Ireland.',
		description_part_two: "Weather data was sourced from DarkSky via coordinates from Geograph, while FourSquare and Leaflet were used to map suggested hotels and venues in and around the prospective wedding location. Weather2Wed also predicts whether the wedding date falls on a full moon, via astronomy calculations.",
		image: w2wed,
		url: "http://weather2wed.herokuapp.com/",
		heroku: true,
		icons: [{name: "JavaScript", class: 'devicon-javascript-plain colored'}, {name: "Node", class: 'devicon-nodejs-plain-wordmark colored'}, {name: "Trello", class: 'devicon-trello-plain-wordmark colored'}]
	},
	{
		name: 'Fixture Pal',
		description: 'This project dates back to my time at CodeClan, where I created a custom brief along with two colleagues. The end product - FixturePal - can generate the entire match schedule for a sports season (including alternating home and away games for each team) using a round-robin algorithm.',
		description_part_two: 'As well as being able to create a league of teams and enter match scores, users can keep track of team performance in a given league courtesy of a league table filtered by points, goal difference and goals scored. An option for logging match events in short match reports also exists, thereby enabling users to take note of goalscorers and disciplinary records.',
		image: fixpal,
		url: "https://github.com/jah1603/FixturePal",
		icons: [{name: "Java", class: 'devicon-java-plain-wordmark colored'}, {name: "PSQL", class: 'devicon-postgresql-plain-wordmark colored'}, {name: "Trello", class: 'devicon-trello-plain-wordmark colored'}]
	},
	{
		name: 'Invent.Story',
		description: 'An application which enables a bookseller to monitor stock levels, profit, publishers and genres. A PSQL database was used for data persistence, allowing the user to create, edit and delete books and publishers as desired. It is also possible to browse stock by genre and record stock sales/replenishment at the click of a button.',
		image: InvStory,
		url: "http://invent-story.herokuapp.com",
		heroku: true,
		icons: [{name: "Ruby", class: 'devicon-ruby-plain colored'}, {name: "PostgreSQL", class: 'devicon-postgresql-plain-wordmark colored'}, {name: "Trello", class: 'devicon-trello-plain-wordmark colored'}]
	},
]

export default projects;
