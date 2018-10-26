import React, { Component } from 'react';

class Time extends Component {
  render() {
    return (
      <div>
        <h2> {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Time;
