import React from 'react';

export class ChildClass extends React.Component {
  componentDidMount() {
    console.log('Mounted');
  }

  componentDidUpdate() {
    console.log('Update');
  }

  componentWillUnmount() {
    console.log('Unmount');
  }
  
  render() {
    console.log('Rendering');

    return (
      <h2>Child class</h2>
    )
  }
}