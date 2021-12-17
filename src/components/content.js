import React from 'react';
import { Component } from 'react';

// 'export' means we can export this component
export class Content extends React.Component {

    render() {
        return (
            <div>
                <h1>Welcome to my Soccer App!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
                <img id="myImg" src="https://images-na.ssl-images-amazon.com/images/I/715oHOC1gfL.__AC_SX300_SY300_QL70_ML2_.jpg" alt="" width="500" height="750"></img>
            </div>
        );
    }
}