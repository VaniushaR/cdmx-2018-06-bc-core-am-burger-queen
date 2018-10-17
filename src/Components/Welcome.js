import React, { Component } from 'react';
import monthlyOffer from '../Assets/Offer.png';

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="offers">
          <img
            src={monthlyOffer}
            alt="Monthly Offer"
            className="monthly-offer"
          />
        </div>
      </div>
    );
  }
}

export default Welcome;
