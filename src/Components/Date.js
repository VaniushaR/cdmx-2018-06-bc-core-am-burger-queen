import React, { Component } from 'react';

class Time extends Component {
  render() {
    return (
      <div>
        <h6> You are active since {new Date().toLocaleTimeString()}</h6>
      </div>
    );
  }
}

export default Time;
