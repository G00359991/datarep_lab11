import React from 'react'; // pulls in code from react to be used in read.js and allow for the html to be outputted into the react app
import '../App.css';
import { Movies } from './movies'; // pulls in code from the movies.js component to be used in read.js, which will then be brought in and used for App.js
import axios from 'axios'; // pulls in code from axios to be used in read.js to allow for json to be outputted correctly into the react app

export class Read extends React.Component { // extends from and uses the code from react

    state = {
        movies: []
    };

    componentDidMount() { /* fetches the necessary jsonblob information to be outputted in read.js in order to acquire the necessary data for the movies to be outputted to the screen at the localhost port specified below in the url. An error message to pop up in case something goes wrong. */
        axios.get('http://localhost:4000/api/movies')
            .then(
                (response) => {
                    this.setState({ movies: response.data })
                }
            )
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return ( /*outputs the heading text for the read.js to the screen, and also runs code that allows for the code from movies.js to run properly and output to the screen.*/
            <div className="App">
                <h1>My read is another component</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}