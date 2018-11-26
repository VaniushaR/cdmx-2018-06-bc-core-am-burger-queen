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
      client: '',
      total: 0
    };
    //console.log(this.state.order);
  }
  nameKeeper = event => {
    //console.log(event.target.value);
    this.setState({ client: event.target.value });
  };

  //this.setState({order : event.target.value});
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
  //function to delete all the order
  deleteall = event => {
    if (window.confirm('Are you sure you want to delete all the order?')) {
      this.setState({
        order: []
      });
      console.log(this.state.order);
    }
  };

  //function to delete one by one item to
  delete = index => {
    console.log(index);
    this.setState({
      order: this.state.order.filter((item, i) => {
        return i !== index;
      })
    });
    console.log(this.state.order);
  };

  /*  //  deleteTask(task) {
    this.setState({
      toDo: this.state.toDo.filter((e, i) => {
        return i !== task;
      })
    });
  } */
  render() {
    const List = MenuData.Desayunos.map((item, i) => {
      //console.log(item.name);
      //console.log(item.price);
      return (
        <div>
          <div key={i}>
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
            <Col s={8} m={8}>
              <Card className="amber lighten-4">
                <Card>
                  <input
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

                      <Button large waves="light">
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
