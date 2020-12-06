import React from 'react'; // pulls in code from react to be used in movieItem.js and allow for the html to be outputted into the react app
import Card from 'react-bootstrap/Card'; // pulls down from bootstrap for added css styling on the card
import Button from 'react-bootstrap/Button'; // pulls down from bootstrap for added css styling on the button
import axios from 'axios'; // pulls in code from axios to be used in movieItem.js and allow for the code within to be outputted into the app if necessary
import {Link} from 'react-router-dom'; // pulls in code from react-router-dom to be used in movieItem.js and allow for the link code within to be outputted into the app if necessary
import '../App.css';

export class MovieItem extends React.Component { // extends from and uses the code from react

    constructor(){
        super(); // invokes the parent's constructor

        this.DeleteMovie = this.DeleteMovie.bind(this); // binds the delete method to the instance
    }

    DeleteMovie(e){ // method used to delete a movie 
        e.preventDefault(); // prevents method from being called everytime page is loaded
        console.log("Delete: "+ this.props.movie._id); // logs into the console that the movie has been deleted

        axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id) /* deletes movie on screen at specified url and allows for the data to be reloaded */
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }

    render() {
        return ( /*outputs the code down below and inputs it into a card format, along with inputting both an edit and a delete button underneath for the screen*/
            <div className="App">
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header> 
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/"+ this.props.movie._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>
            </div>
        );
    }
}