import React from 'react'; // pulls in code from react to be used in create.js and allow for the code within to be outputted into the app if necessary
import axios from 'axios'; // pulls in code from axios to be used in create.js and allow for the code within to be outputted into the app if necessary
import '../App.css';

export class Edit extends React.Component { // extends from and uses the code from react
    constructor() {
        super(); // calls parent's constructor method and gets access to the parent's properties and methods

        this.onSubmit = this.onSubmit.bind(this); // binds the code for the submit button to allow it to submit the contents entered
        this.onChangeTitle = this.onChangeTitle.bind(this); // binds the code for a movie title to be inputted and then submitted from the create.js page in the react app
        this.onChangeYear = this.onChangeYear.bind(this); // binds the code for a movie year to be inputted and then submitted from the create.js page in the react app
        this.onChangePoster = this.onChangePoster.bind(this); // binds the code for a movie poster to be inputted and then submitted from the create.js page in the react app

        this.state = { /*calls the title, year and poster values to the screen */
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    componentDidMount(){ /*fetches the necessary jsonblob information to be outputted in edit.js in order to acquire the necessary updated data for the movies to be outputted to the screen at the localhost port specified below in the url. Will log into the console the updated data if successful. An error message to pop up in the console in case something goes wrong. */
        console.log(this.props.match.params.id);

        axios.get('https://localhost:4000/api/movies/'+ this.props.match.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                Title:response.data.title,
                Year:response.data.year,
                Poster:response.data.poster
            })
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    onChangeTitle(e) { /* calls the title method for the create.js page to allow the information inputted to be outputted*/
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear(e) { /* calls the year method for the create.js page to allow the information inputted to be outputted*/
        this.setState({
            Year: e.target.value
        });
    }

    onChangePoster(e) { /* calls the poster method for the create.js page to allow the information inputted to be outputted*/
        this.setState({
            Poster: e.target.value
        });
    }
    onSubmit(e) { /*calls the submit button's method on the create.js page to submit the information inputted to the localhost port specified within the axios method in the url, logging into the console then if the server responded successfully, an error message to pop up if something goes wrong. Used for both posting and updating data */
        e.preventDefault();
        alert("Movie: " + this.state.Title + " "
            + this.state.Year + " " +
            this.state.Poster);

            const newMovie = {
                title: this.state.Title,
                year: this.state.Year,
                poster: this.state.Poster,
                _id: this.state._id
            }

            axios.put('http://localhost:4000/api/movies/'+this.state._id, newMovie)
            .then(res =>{
                console.log(res.data);
            })
            .catch();

            axios.post('http://localhost:4000/api/movies', newMovie)
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            });

    }

    render() {
        return ( /* outputs the forms into the edit.js page on screen to edit the movie title, year, and poster selected via a button. */
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                    </div>
                    <div className="form-group">
                        <label>Movies Poster: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangePoster}>
                        </textarea>
                    </div>
                    <div className='form-group'>
                        <input type='submit'
                            value='Edit Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}