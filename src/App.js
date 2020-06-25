import React, {Component} from 'react';
import AddMessage from './components/AddMessage';
import ChatWindow from './components/ChatWindow';
import MessageHistory from './components/MessageHistory'



class App extends Component {

  state = {
    messages : [],
  };

  onMessage = (username, message) => {
    const newMessage = {
      ['username']: username,
      ['text']: message,
    }
    this.setState((currState)=> ({
      messages : currState.messages.concat([newMessage]),
    }))
  }

  render (){


    return (
      <div className="App">
       <AddMessage/>
       <ChatWindow/>
       <MessageHistory/>
      </div>
    );

  }

}

export default App;
