import React, { useState } from 'react';
import NewMessageFormPresentational from './NewMessageFormPresentational';

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
        <NewMessageFormPresentational 
            handleTextChange={handleTextChange}
            handleSend={handleSend}
            inputText={inputText} 
        />
    )
};

export default NewMessageForm;