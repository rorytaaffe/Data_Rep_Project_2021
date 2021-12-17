import React from 'react';
import { Players } from './players'; // imported Players component
import axios from 'axios';

// 'export' means we can export this component
export class Soccer extends React.Component {

    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        players: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/players')
        .then(
            (response) => {
                this.setState({ players: response.data })
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        );
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/players')
        .then(
            (response) => {
                this.setState({ players: response.data })
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
                <h1>These are the Greats</h1>
                <Players player={this.state.players} ReloadData = {this.ReloadData}></Players> 
            </div>
        );
    }
}