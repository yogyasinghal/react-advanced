import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };
  constructor() {
    super();
    //this.increment = this.increment.bind(this);
  }
  componentDidMount() {
    document.title = `count-${this.state.count}`;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    if (this.state.count !== prevState.count) {
      document.title = `count-${this.state.count}`;
    }
  }
  increment() {
    console.log(this);
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    let { count } = this.state;
    return (
      <div>
        <button onClick={(e) => this.increment()}>+1</button>
        count : <span>{count}</span>
      </div>
    );
  }
}
