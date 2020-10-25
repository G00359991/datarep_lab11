import React from 'react'; // pulls in code from react to be used in movies.js and allow for the code in this file to be outputted into the react app
import '../App.css';
import { MovieItem } from './movieItem'; // pulls in code from the movieItem.js component to be used in movies.js, which will then be brought in and used in read.js and App.js

export class Movies extends React.Component { // extends from and uses the code from react

    render() {
        return this.props.movies.map ( (movie)=>{
            return <MovieItem movie={movie}></MovieItem>
        }); /*Code up above outputs in the background and runs code necessary to put the information about movies in movieItem.js on to the screen without issue */
    }
}