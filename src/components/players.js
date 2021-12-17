import React from 'react';
import { PlayerItem } from './playerItem'; 

// 'export' means we can export this component
export class Players extends React.Component {

    render() {
        return this.props.player.map((player) => {
            return <PlayerItem player={player} ReloadData={this.props.ReloadData}></PlayerItem>
        })

    }
}

