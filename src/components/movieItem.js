import React from 'react';
import Card from 'react-bootstrap/Card'; // importing the card style
import {Link} from 'react-router-dom';

// 'export' means we can export this component
export class MovieItem extends React.Component {

    render() {
        return (
            <div>

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
                    <Link to={"/edit/" + this.props.movie._id} className="btn btn-primary">Edit</Link>
                </Card>
            </div>
        );
    }
}

