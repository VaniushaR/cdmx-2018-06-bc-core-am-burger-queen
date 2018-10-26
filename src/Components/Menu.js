import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'react-materialize';
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
        <h2>Clients Order: </h2>
        <Row>
          <Col s={6} m={6}>
            <section className="action">
              <Button
                large
                waves="yellow"
                onClick={() => {
                  this.setState({ seeBreakfast: true });
                  console.log(this.state.seeBreakfast);
                }}
              >
                <Icon right>local_cafe</Icon>
                BREAKFAST
              </Button>
            </section>
          </Col>
          <Col s={6} m={6}>
            <section className="action">
              <Button
                large
                waves="yellow"
                onClick={() => {
                  this.setState({ seeBreakfast: true });
                  console.log(this.state.seeBreakfast);
                }}
              >
                <Icon right>restaurant</Icon>
                DINNER
              </Button>
            </section>
          </Col>
        </Row>
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
