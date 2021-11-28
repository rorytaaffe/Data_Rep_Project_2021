import React from 'react';
import { MovieItem } from './movieItem';

// 'export' means we can export this component
export class Movies extends React.Component {

    render() {
        return this.props.movie.map((movie) => {
            return <MovieItem movie={movie} ReloadData={this.props.ReloadData}></MovieItem>
        })

    }
}

