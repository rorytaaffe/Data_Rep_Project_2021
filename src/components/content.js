import React from 'react';
import { Component } from 'react';

// 'export' means we can export this component
export class Content extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}