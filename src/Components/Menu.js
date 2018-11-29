import React, { Component } from 'react';
import { Col, Button, Icon, Row } from 'react-materialize';
import Breakfast from './Breakfast';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seeBreakfast: false,
      seeDinner: false
    };
    //  console.log(this.state.seeBreakfast);
    //  console.log('there should be the dinner for', this.state.seeDinner);
    //onClick={this.goToKitchen.bind()}
  }

  render() {
    if (this.state.seeBreakfast === true) {
      return <Breakfast waiter={this.props.attentionBy} />;
    }
    return (
      <div>
        <Row>
          <Col s={6} m={6}>
            <section className="action">
              <Button
                large
                waves="yellow"
                onClick={() => {
                  this.setState({ seeBreakfast: true });
                  //console.log(this.state.seeBreakfast);
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
