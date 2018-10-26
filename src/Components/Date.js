import React, { Component } from 'react';

class Time extends Component {
  render() {
    return (
      <div>
        <h5> You are active since {new Date().toLocaleTimeString()}</h5>
      </div>
    );
  }
}

export default Time;
