import React, { useState } from 'react';
import NewMessageForm from './components/NewMessageForm';
import MessageList from './components/MessageList';

const App = () => {
  let [messageList, setMessageList] = useState(['test1','test2','test3']);

  const handleSend = newMessage => setMessageList((prev) => {
    return [newMessage, ...prev];
  });
  
  return (
    <div>
      <NewMessageForm onSend={handleSend}/>
      <MessageList messages={messageList} />
    </div>
  );
};

export default App;