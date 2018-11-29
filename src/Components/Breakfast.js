import React, { Component } from 'react';
import MenuData from '../Data/menu.json';
import {
  Card,
  CardTitle,
  Row,
  Col,
  Button,
  Collection,
  CollectionItem,
  Icon
} from 'react-materialize';
import { db } from '../Components/Credentials';

class Breakfast extends Component {
  constructor() {
    super();
    this.state = {
      order: [],
      client: '',
      total: 0,
      attention: null
    };
  }

  nameKeeper = event => {
    this.setState({ client: event.target.value });
    this.setState({
      attention: this.props.waiter
    });
  };

  //Function to add or rest the value of the items
  handleOnClick = event => {
    const { value, name } = event.target;
    const orderCopy = this.state.order;
    orderCopy.push({ name: name, price: value });
    //addition function
    let totalState = this.state.total;
    let valueI = parseInt(value);
    let totalPay = valueI + totalState;
    console.log(totalPay);
    //set state of items selected
    this.setState({
      order: orderCopy
    });
    this.setState({
      total: totalPay
    });
  };
  //function to delete all the order:
  deleteall = event => {
    if (window.confirm('Are you sure you want to delete all the order?')) {
      this.setState({
        order: [],
        total: 0
      });
    }
  };

  //delete function to erase one by one item of the order:
  delete = index => {
    this.setState({
      order: this.state.order.filter((item, i) => {
        //console.log('forEach item', item);

        return i !== index;
      })
    });
    this.state.order.forEach((item, i) => {
      if (i === index) {
        //console.log('forEach sustraction', this.state.total);
        this.setState({ total: this.state.total - parseInt(item.price) });
      }
    });
  };
  //Function to send the order to the kitchen (firestore database) and being processed
  sendOrder = () => {
    //variables to keep the state on the promises
    const orderSender = this.state;
    const currentOrderClient = this.state.client;
    const currentWaiter = this.state.attention;
    console.log(currentOrderClient);
    //create and keep the order in the collection orders in firestore db
    db.collection('orders')
      .add({ orderSender })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
        //confirm the order is sended and the time to be ready
        alert(
          'Ready! The order of ' +
            currentOrderClient +
            ' will be ready in 15 min.' +
            ' Nice job ' +
            currentWaiter +
            '!!'
        );
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
    //clean the state to be able to create new orders
    this.setState({
      order: [],
      client: '',
      total: 0,
      attention: null
    });
    //clean input of the client's Name
    const eraseInput = document.getElementById('clientsName');
    eraseInput.value = '';
    //send to the kitchen component
  };

  render() {
    const List = MenuData.Desayunos.map((item, i) => {
      return (
        <div key={i}>
          <div>
            <Col s={4} m={4}>
              <Card
                className="medium"
                header={<CardTitle image={item.pic}>{item.name}</CardTitle>}
                actions={[
                  <Button
                    key={i}
                    large
                    onClick={this.handleOnClick}
                    name={item.name}
                    value={item.price}
                    type="button"
                  >
                    $ {item.price}
                  </Button>
                ]}
              >
                {item.description}
              </Card>
            </Col>
          </div>
        </div>
      );
    });

    return (
      <div>
        <Row>
          {List}
          <div>
            <Col s={8} m={8}>
              <Card className="amber lighten-4">
                <Card>
                  <input
                    id="clientsName"
                    type="text"
                    onChange={this.nameKeeper.bind(this)}
                    placeholder="Write the client's name"
                  />
                </Card>

                <Collection
                  header={
                    <div>
                      <h4>Order of:</h4>
                      <h3> {this.state.client}</h3>
                    </div>
                  }
                >
                  <CollectionItem>
                    {this.state.order.map((item, i) => {
                      return (
                        <h6>
                          {item.name} {item.price}
                          <Button
                            floating
                            small
                            className="red"
                            waves="light"
                            icon="clear"
                            onClick={
                              // console.log('clear btn');
                              this.delete.bind(this, i)
                            }
                          />
                        </h6>
                      );
                    })}{' '}
                  </CollectionItem>
                  <CollectionItem>
                    {' '}
                    <h5>
                      {' '}
                      Total: <span>{this.state.total} </span>
                    </h5>
                  </CollectionItem>
                  <CollectionItem>
                    <p>{new Date().toLocaleTimeString()}</p>
                    <span>{new Date().toDateString()}</span>
                  </CollectionItem>
                  <CollectionItem>
                    <div className="buttons">
                      <Button
                        floating
                        large
                        className="red"
                        waves="light"
                        icon="delete"
                        onClick={this.deleteall.bind(this)}
                      />

                      <Button
                        large
                        waves="light"
                        onClick={this.sendOrder.bind(this)}
                      >
                        <Icon large right>
                          check
                        </Icon>
                        ORDER
                      </Button>
                    </div>
                  </CollectionItem>
                </Collection>
              </Card>
            </Col>
          </div>
        </Row>
      </div>
    );
  }
}

export default Breakfast;
