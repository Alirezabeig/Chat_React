import React from 'react';
import AddMessage from './components/AddMessage';
import ChatWindow from './components/ChatWindow';
import MessageHistory from './components/MessageHistory'


function App() {
  return (
    <div className="App">
     <AddMessage/>
     <ChatWindow/>
     <MessageHistory/>
    </div>
  );
}

export default App;
