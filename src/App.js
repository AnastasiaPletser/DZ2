import React, {Component} from 'react';
import Counter from './Counter';
import Form from './Form';

// class Clock extends Component {
//   constructor(props){
//   super(props);

//   this.state = {
//     clock: Date.now(),
//   }
// }

// componentDidMount(){
//    this.interval = setInterval(()=>{
//       this.setState({clock: Date.now() })
//     },1000)

//     console.log ('[DID_MOUNT]')
//   }

// componentDidUpdate(prevProps, prevState){
//   console.log ('[DID_UPDATE]', {
    
//   })
// }

//   componentWillUnmount(){
//     console.log ('[WILL_UNMOUNT:CLOCK]')
//   }
//   render () {
//     return (
//       <h1>{this.state.clock}</h1>
//     )
//   }
// }

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

