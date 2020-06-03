import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer} from 'mobx-react';


@observer class Counter extends Component {
  @observable count = 0;

  render() {
    return(
      <div>
        Counter: {this.props.store.count} <br />
        <button onClick={this.handleInc}>-</button>
        <button onClick={this.handleDec}>+</button>
      </div>
    )
  }

  handleDec = () => {
    this.props.store.increment()
  }

  handleInc = () => {
    this.props.store.decrement()
  }
}

export default Counter;