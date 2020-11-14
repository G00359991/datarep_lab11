const express = require('express'); // allows web page/server to use the express code
const app = express(); // allows express to run on the app
const port = 4000; // the port in the url the server's information will be outputted to
const cors = require('cors'); // allows web page/server to use the cors code
const bodyParser = require("body-parser"); // allows web page/server to use the body-parser code

app.use(cors()); // has the app use the cors code
app.use(function(req, res, next) { /* gives access to the methods and headers within for the app to use for functionality, and allows the user to send the request and get a response from the server for the methods*/
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/api/movies', (req, res) => { /* gets a request to the web page/server using the specified url for a response to send the json data below.*/
    
    const mymovies = [
        {
            "Title":"Avengers: Infinity War",
            "Year":"2018",
            "imdbID":"tt4154756",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title":"Captain America: Civil War",
            "Year":"2016",
            "imdbID":"tt3498820",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            }
    ];
    res.status(200).json({ /*Makes the server respond if the json information outputs with the message below */
        message: "Everything is ok",
        movies:mymovies});
})

app.post('/api/movies', (req, res) => { /* requests a response of the server to log into the console the year, title and poster of the movies, as well as the message saying the movie was received*/
    console.log('Movie recieved!');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);
})

app.listen(port, () => { /*Will log into the console that the app is listening at the specified port for the latest changes made to the app/web page */
    console.log(`Example app listening at http://localhost:${port}`)
})