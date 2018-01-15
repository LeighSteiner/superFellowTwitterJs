const express = require( 'express' );
const app = express(); // creates an instance of an express application

const routes = require('./routes')

const nunjucks = require('nunjucks');
// const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }) // point nunjucks to the proper directory for templates

app.use(express.static('public')); 

app.listen(3000, () => {
	console.log('twitter server is listening on port 3000...')
})

app.use((req, res, next) => { //logging middleware
  console.log(req.method, req.url,req.statusCode);
  next();
})

app.use('/', routes);


// app.get('/', (req, res, next) => {
// 	//res.send('Hello is it Twitter yet?')
// 	res.render( 'index', {title: 'Hall of Fame', people: people} );
// })

// in some file that is in the root directory of our application... how about app.js?
// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };
// nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });