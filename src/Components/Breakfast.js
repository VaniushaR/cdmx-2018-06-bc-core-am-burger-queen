import React, { Component } from 'react';
import MenuData from '../Data/menu.json';

class Breakfast extends Component {
  constructor() {
    super();
    this.state = {
      order: []
    };
    console.log(this.state.order);
  }

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
            <h4>{item.name}</h4>
            <button
              onClick={this.handleOnClick}
              name={item.name}
              value={item.price}
              type="button"
            >
              {item.price}
            </button>
            <img src={item.pic} />
          </div>
        </div>
      );
    });

    return (
      <div>
        {List}
        <div>
          <h3>Tu Orden:</h3>
          {this.state.order.map(item => {
            console.log(item);
            return (
              <p>
                {item.name} {item.price}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Breakfast;
