import React, { Component } from "react";

// Render Props Component

class RenderPropsComponent extends Component {
  // state management logic
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return this.props.render(this.state.count, this.incrementCount);
  }
}

// Usage of Render Props Component
const App = () => {
  return (
    <div>
      <RenderPropsComponent
        render={(count, incrementCount) => (
          <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment Count</button>
          </div>
        )}
      />
    </div>
  );
};

export default App;
