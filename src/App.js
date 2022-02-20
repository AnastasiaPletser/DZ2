import React, {Component} from 'react';
import Counter from './Counter';
import Form from './Form';

class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      name: 'React',
      // clock: Date.now(),
      showClock: true,
    }
    // console.log ('[CONSTRUCTOR]')

  }

  render() {
    // console.log ('[RENDER]')
    return (
    <>
    <Form/>, 
    <Counter/>
    </>)
 
  }
}

export default App;

