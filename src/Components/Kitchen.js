import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-materialize';
import { db } from '../Components/Credentials';

class Kitchen extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    };
  }

  componentDidMount() {
    db.collection('orders').onSnapshot(querySnapshot => {
      //const orders = [];
      querySnapshot.forEach(doc => {
        console.log(doc.data().orderSender);
        return (
          <div>
            <h4>{doc.data().orderSender.attention}</h4>
          </div>
        );
      });
      //orders.push(doc.data());
    });
    //console.log('Current ORDERS ', orders.join(', '));
  }

  // componentDidMount() {
  //   db.collection('orders').onSnapshot(querySnapshot => {
  //     const orders = [];
  //     querySnapshot.forEach(doc => {
  //       const { status, order, name } = doc.data();
  //       console.log(status, order);
  //       let dataOrder = { status, order, name, id: doc.id };
  //       orders.push(dataOrder);
  //     });
  //     this.setState({ orders });
  //   });
  // }

  render() {
    return (
      <div>
        <Row>
          <Col s={6} m={6}>
            <h4>KITCHEN PAGE</h4>
          </Col>
          <Col s={4} m={4}>
            <Button>Back to Menú</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Kitchen;
