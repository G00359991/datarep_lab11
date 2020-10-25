import React from 'react'; // pulls in code from react to be used in read.js and allow for the html to be outputted into the react app
import '../App.css';
import { Movies } from './movies'; // pulls in code from the movies.js component to be used in read.js, which will then be brought in and used for App.js

export class Read extends React.Component { // extends from and uses the code from react

    state = {
        movies: [ /*code below outputs the title, year of release, and image/poster of each movie to the screen*/
            {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
            "Title": "Charlie Wilson's War",
            "Year": "2007",
            "imdbID": "tt0472062",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
            }
            ]            
    };
    render() {
        return ( /*outputs the heading text for the read.js to the screen, and also runs code that allows for the code from movies.js to run properly and output to the screen.*/ 
            <div className="App">
                <h1>My read is another component</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}