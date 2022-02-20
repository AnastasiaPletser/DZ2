import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
        state = {
        // userName: "userName",
        // email: "email",
        // form_text: "значение пустое",
        title: "Counter",
        counter: 0
      }
           
      

      onMinus=(event)=> {
      this.setState({counter: this.state.counter - 1})
    }
    
    onPlus= (event)=> {
      this.setState({counter: this.state.counter + 1})
    }
      
      onSubmit= (event) => {
        event.preventDefault();
        // console.log ("[SUBMIT], event")
      }
      

      onChange = (event) => {
    this.setState({userName: event.target.value})
      }
      

      render () {
        return(
          <>
          <h1>{this.state.title}</h1>
<div className='counter'>
          <button onClick={this.onMinus}>-</button>
           <h2>{this.state.counter}</h2>
           <button onClick={this.onPlus}>+</button>
          </div>
          </>
        )
      }
}


    export default Counter;