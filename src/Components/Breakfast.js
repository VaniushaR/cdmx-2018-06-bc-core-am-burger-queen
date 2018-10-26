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

class Breakfast extends Component {
  constructor() {
    super();
    this.state = {
      order: [],
      client: ''
    };
    console.log(this.state.order);
  }
  nameKeeper = event => {
    console.log(event.target.value);
    this.setState({ client: event.target.value });
  };

  handleOnClick = event => {
    const { value, name } = event.target;

    const orderCopy = this.state.order;
    orderCopy.push({ name: name, price: value });
    console.log(orderCopy);

    this.setState({
      order: orderCopy
    });
  };

  render() {
    const List = MenuData.Desayunos.map(item => {
      console.log(item.name);
      console.log(item.price);
      return (
        <div>
          <div>
            <Col s={4} m={4}>
              <Card
                className="medium"
                header={<CardTitle image={item.pic}>{item.name}</CardTitle>}
                actions={[
                  <Button
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
            <Col s={4} m={4}>
              <input
                type="text"
                onChange={this.nameKeeper.bind(this)}
                placeholder="Nombre del cliente"
              />

              <Collection
                header={
                  <div>
                    <h4>Order of:</h4>
                    <h3> {this.state.client}</h3>
                  </div>
                }
              >
                <CollectionItem>
                  {this.state.order.map(item => {
                    console.log(item);
                    return (
                      <h6>
                        {item.name} {item.price}
                        <Button
                          floating
                          small
                          className="red"
                          waves="light"
                          icon="clear"
                          onClick={() => {
                            this.state.order.map(item => {
                              this.state.order.pop();
                              console.log('pop' + this.state.order);
                            });
                          }}
                        />
                      </h6>
                    );
                  })}{' '}
                </CollectionItem>
                <CollectionItem>
                  {new Date().toLocaleTimeString()}
                </CollectionItem>
                <Button large waves="light">
                  <Icon large right>
                    check
                  </Icon>
                  ORDER
                </Button>
              </Collection>
            </Col>
          </div>
        </Row>
      </div>
    );
  }
}

export default Breakfast;
