import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ExampleRouteComponent extends Component {
  render() {
    return (
      <div>
        <Link to="/">Go to the UgcApp!</Link>
        <h1>I am a test route!</h1>
        <p>I don't do much, but another top level smart component would go here.....</p>
        <h2>-_____________-</h2>
      </div>
    );
  }
}
