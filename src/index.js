import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { observable } from 'mobx';

const appState = observable({
  count : 0
})

appState.increment = function() {
  this.count++
}

appState.decrement = function() {
  this.count--
}

ReactDOM.render(
  <React.StrictMode>
    <Counter store={appState} />
  </React.StrictMode>,
  document.getElementById('root')
);