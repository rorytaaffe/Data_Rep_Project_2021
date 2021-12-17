import React from 'react';
import axios from 'axios';

// 'export' means we can export this component
export class New extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangePicture = this.onChangePicture.bind(this);

        this.state = {
            Name: '',
            Age: '',
            Picture: ''
        }
    }


    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }


    onChangeAge(e){
        this.setState({
            Age: e.target.value
        });
    }


    onChangePicture(e){
        this.setState({
            Picture: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Player: " + this.state.Name + " " + this.state.Age + " " + this.state.Picture);

        const newPlayer = {
            name: this.state.Name,
            age: this.state.Age,
            picture: this.state.Picture
        }

        axios.post('http://localhost:4000/api/players', newPlayer)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Add Player Name: </label> 
                        <input type='text'
                            className='form-control'
                            value={this.state.Name}
                            onChange={this.onChangeName}>
                            </input>
                    </div>

                    <div className="form-group">
                        <label>Add Player Age: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Age}
                        onChange={this.onChangeAge}>
                        </input>
                    </div>

                    <div className='form-group'>
                        <label>Player's Picture: </label>
                        <textarea type='text'
                        className='form-control'
                        value={this.state.Picture}
                        onChange={this.onChangePicture}>
                        </textarea>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Add Player'
                            className='btn btn-primary btn-dark'></input>
                    </div>
                </form>
            </div>
        );
    }
}

