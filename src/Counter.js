import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer} from 'mobx-react';

@observer class Counter extends Component {
  @observable count = 0;

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