// Import React and the FC (Functional Component) type from 'react'
import React, { FC } from 'react';

// Define an interface to specify the props type
// This interface ensures that the 'name' prop must be a string
interface GreetingProps {
  name: string;
}

// Define a functional component using the FC type with the props defined by GreetingProps
const Greeting: FC<GreetingProps> = ({ name }) => {
  // Return a simple JSX element that displays the greeting with the name prop
  return <div>Hello, {name}!</div>;
};

// Export the Greeting component as the default export from this file
export default Greeting;
