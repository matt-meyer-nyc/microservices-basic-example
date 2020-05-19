const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const axios = require( 'axios' );
// const { randomBytes } = require( 'crypto' );
// const cors = require( 'cors' );

const app = express();
app.use( bodyParser.json() );
// app.use( cors() );

const posts = {};

// app.get( '/posts', ( req, res ) => {
// 	res.send( posts );
// } );

app.post( '/events', ( req, res ) => {
	const { title } = req.body;

	axios.post( 'http://localhost:4000/events', event );
	axios.post( 'http://localhost:4001/events', event );
	axios.post( 'http://localhost:4002/events', event );

	res.send( { status: 'OK' } );
} );

app.listen( 4005, () => {

	console.log( 'Listening on 4005' );


} );