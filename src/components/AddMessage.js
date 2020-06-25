import React , { Component } from 'react';

class AddMessage extends Component {

  state = {
  message :''
};

handleSubmit = event => {
  event.preventDefault();

  this.props.onMessage(this.state.message)

}

handleInputChange = event => {
 const {value} = event.target;
 this.setState(() => ({
   message : value
 }));

}


  render () {

    const {message} = this.state
    return (
      <div>

      <form onSubmit= {this.handleSubmit}>
       <input
        type="text"
        name="name"
        placeholder="message"
        value = {message}
        onChange = {this.handleInputChange}

        />
      <button> Send </button>
      </form>
      </div>
    );

  }
}


export default AddMessage;
