import React, { Component } from 'react';

export default class ExampleRouteComponent extends Component {
  render() {
    const { props } = this;
    console.log('*****');
    console.log('props coming in...')
    console.dir(props);
    console.log('*****');
    return (
      <div>
        <h1>I am a test route!</h1>
        <p>I don't do much, but another top level smart component would go here.....</p>
        <h2>-_____________-</h2>
      </div>
    );
  }
}
