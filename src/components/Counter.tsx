// Import React and the Component class from 'react'
import React, { Component } from 'react';

// Define an interface for the component's state
interface CounterState {
  count: number;
}

// Define an interface for the component's props
// In this case, no props are needed, but we define it for consistency
interface CounterProps {}

// Define a class-based component that extends React.Component
class Counter extends Component<CounterProps, CounterState> {
  // Initialize the component's state with a 'count' value of 0
  state: CounterState = {
    count: 0
  };

  // Method to increment the count in the state
  increment = (): void => {
    // Update the state using this.setState and increment the count
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  // The render method returns the JSX to be displayed by this component
  render() {
    return (
      <div>
        {/* Display the current count from the state */}
        <p>Count: {this.state.count}</p>

        {/* Button that calls the increment method when clicked */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Export the Counter component as the default export from this file
export default Counter;
