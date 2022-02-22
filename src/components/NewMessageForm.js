import React, { useState } from 'react';

const NewMessageForm = () => {
   let [inputText, setInputText] = useState('');

   const handleTextChange = e => {
       setInputText(e.target.value);
   };

   const handleSend = () => {
       setInputText('');
   }
   
    return (
        <div>
            <input 
                type="text"
                data-testid="messageText"
                value={inputText}
                onChange={handleTextChange}
            />
            <button
                data-testid="sendButton"
                onClick={handleSend}
            >
                Send
            </button>
        </div>
    );
};

export default NewMessageForm;