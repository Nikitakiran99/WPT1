import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    // Mounting Phase: Initializes the component
    super(props);
    this.state = { count: 0 };
    console.log('Mounting: constructor - Initialize state');
  }

  componentDidMount() {
    // Mounting Phase: Runs after component is added to DOM
    console.log('Mounting: componentDidMount - Setup timers or API calls');
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Updating Phase: Controls whether component should re-render
    console.log('Updating: shouldComponentUpdate - Check if update is needed');
    return nextState.count % 2 === 0; // Only update on even counts
  }

  componentDidUpdate(prevProps, prevState) {
    // Updating Phase: Runs after DOM updates
    console.log(`Updating: componentDidUpdate - Previous count: ${prevState.count}, New count: ${this.state.count}`);
  }

  componentWillUnmount() {
    // Unmounting Phase: Cleanup before component is removed
    console.log('Unmounting: componentWillUnmount - Clean up timers');
    clearInterval(this.timer);
  }

  render() {
    // Mounting & Updating Phase: Renders UI
    console.log('Mounting/Updating: render - Generate UI');
    return <div>Count: {this.state.count}</div>;
  }
}

export default LifecycleDemo;