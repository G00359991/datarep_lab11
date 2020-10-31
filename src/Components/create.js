import React from 'react'; // pulls in code from react to be used in create.js and allow for the code within to be outputted into the react app if necessary
import '../App.css';

export class Create extends React.Component { // extends from and uses the code from react
    constructor() {
        super();

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
    onSubmit(e) { /*calls the submit button's method on the create.js page to submit the information inputted */
        e.preventDefault();
        alert("Movie: " + this.state.Title + " "
            + this.state.Year + " " +
            this.state.Poster);
    }

    render() {
        return ( /* outputs the forms into the create.js page on screen to have a new movie title, year, and poster outputted in via a button. */
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
                            value='Add Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}