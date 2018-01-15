const express = require( 'express' );
const app = express(); // creates an instance of an express application




app.listen(3000, () => {
	console.log('twitter server is listening on port 3000...')
})

app.use((req, res, next) => {
  console.log(req.method, req.url,req.statusCode);
  next();
})

app.get('/', (req, res, next) => {
	res.send('Hello is it Twitter yet?')
})