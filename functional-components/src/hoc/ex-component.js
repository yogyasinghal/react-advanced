import React, { Component } from "react";

// Higher Order Component
const withLifecycleLogging = (WrappedComponent) => {
  return class WithLifecycleLogging extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} did mount`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} will unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Example Component
class MyComponent extends Component {
  render() {
    return <div>MyComponent rendered!</div>;
  }
}

// Apply the HOC to the component
const MyComponentWithLogging = withLifecycleLogging(MyComponent);

// Usage of the enhanced component
const App = () => {
  return (
    <div>
      <MyComponentWithLogging />
    </div>
  );
};

export default App;
