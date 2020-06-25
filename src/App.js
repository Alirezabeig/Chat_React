import React, {Component} from 'react';
import AddMessage from './components/AddMessage';
import ChatWindow from './components/ChatWindow';
import MessageHistory from './components/MessageHistory'

const users = [{ username: 'Amy' }, { username: 'Jon' }];

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
    const {messages} = this.state

    return (
      <div className="App">

      {users.map(user => (
        <ChatWindow
        key={users.username}
        user={user}
        messages={messages}
        onMessage={this.onMessage}
        />

      ))}

      </div>
    );
  }
}

export default App;
