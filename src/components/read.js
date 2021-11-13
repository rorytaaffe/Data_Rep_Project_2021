import React from 'react';
import { Movies } from './movies'; // imported Movies component
import axios from 'axios';

// 'export' means we can export this component
export class Read extends React.Component {

    state = {
        movies: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
        .then(
            (response) => {
                this.setState({ movies: response.data.movies })
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        );
    }

    render() {
        return (
            <div>
                <h1>This is the Read Component.</h1>
                <Movies movie={this.state.movies}></Movies>
            </div>
        );
    }
}