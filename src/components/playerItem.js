import React from 'react';
import Card from 'react-bootstrap/Card'; // importing the card style
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// 'export' means we can export this component
export class PlayerItem extends React.Component {

    constructor(){
        super();

        this.DeletePlayer = this.DeletePlayer.bind(this);
    }

    DeletePlayer(e){
        e.preventDefault();
        console.log("Delete: " + this.props.player._id);

        axios.delete("http://localhost:4000/api/players/" + this.props.player._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }

    

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.player.name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.player.picture} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <br></br>
                                {this.props.player.age}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/change/" + this.props.player._id} className="btn btn-primary btn-lg btn-dark">Change</Link>
                    <Button variant="secondary" onClick={this.DeletePlayer}>Delete</Button>

                </Card>
            </div>
        );
    }
}

