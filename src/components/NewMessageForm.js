import React, { useState } from 'react';

const NewMessageForm = ({ onSend }) => {
   let [inputText, setInputText] = useState('New Message');

   const handleTextChange = e => {
       setInputText(e.target.value);
   };

   const handleSend = () => {  
    onSend(inputText);
    setInputText('');
   }
   
    return (
        <div>
            <input 
                type="text"
                value={inputText}
                onChange={handleTextChange}
                class="inputField"
                data-cy="messageInput"
            />
            <button
                onClick={handleSend}
                class="button"
            >
                Send
            </button>
        </div>
    );
};

export default NewMessageForm;