import React, {Component} from 'react';


class Form extends Component {
    state = {
    userName: "userName",
    password: "password",
    title: "Form"
    
  }
  onSubmit= (event) => {
    event.preventDefault();
    // console.log ("[SUBMIT], event")
  }

  onChange = (event) => {
this.setState({userName: event.target.value})
  }
  onClick(){
            let name = document.getElementById("nam")
            if (name.value) {
              console.log(name.value);
                      }
                    else  if (name.value==false) {
                        console.log("поле не заполнено");
                                }
               else {
                           
                // alert ("'Поле обязательно к заполнению'");
      }
    }

    render () {
    return(
      <div className='form'>
      <h2>{this.state.title}</h2>
      <form onSubmit={this.onSubmit}>

      <>
      <input type="text" id='nam' onChange={this.onChange}  placeholder="Username" pattern='[A-Za-z]{1,10}'  title='Ввод не верный'/>
      <div id="userName" class="form_text">Введите латинские буквы</div>

      <input type="text"  id='nam' onChange={this.onChange}  placeholder="Password" pattern='[a-z0-9]{0,10}' title='Ввод не вернный'/>
      <div id="password" class="form-text">Введите строчные латинские буквы, цифры'</div>

            <input type="submit" onClick={this.onClick}/>  
      {/* <button className="btn btn-light" onClick={this.onClick}>Save</button> */}
     </> 
      </form>
      
      </div>
    )
  }
}
export default Form;





