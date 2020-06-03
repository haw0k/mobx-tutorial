import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer} from 'mobx-react';

class Counter extends React.Component {
  count = 0;

  render() {
    return(
      <div>
        Counter: {this.count} <br />
        <button onClick={this.handleDec}>-</button>
        <button onClick={this.handleInc}>+</button>
      </div>
    )
  }

  handleDec = () => {

  }

  handleInc = () => {

  }
}

export default Counter;