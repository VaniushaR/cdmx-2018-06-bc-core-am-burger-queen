import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';
import Breakfast from './Breakfast';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seeBreakfast: false,
      seeDinner: false
    };
    console.log(this.state.seeBreakfast);
    console.log(this.state.seeDinner);
  }

  render() {
    if (this.state.seeBreakfast == true) {
      return <Breakfast />;
    }
    return (
      <div>
        <h2>Menú</h2>
        <button
          onClick={() => {
            this.setState({ seeBreakfast: true });
            console.log(this.state.seeBreakfast);
          }}
        >
          DESAYUNOS
        </button>
        <Card
          className="small"
          header={<CardTitle image="img/sample-1.jpg">Card Title</CardTitle>}
          actions={[<a href="#">This is a Link</a>]}
        >
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </Card>
      </div>
    );
  }
}

export default Menu;

/*for (var type in MenuData) {
 console.log(type);
}
            const variety = Object.keys(MenuData);
            console.log(variety);
            variety.forEach(function(element) {
              console.log(element);
              console.log(typeof element);
            });


            for (var item in MenuData) {
              console.log(item);
              console.log(typeof item);
            }


            {MenuData.map(item => {
          console.log(item);
        })}
            */
