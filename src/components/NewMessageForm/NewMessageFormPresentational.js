import React from 'react';

const NewMessageFormPresentational = ({ handleSend, handleTextChange, inputText}) => {
   
    return (
        <div>
            <input 
                type="text"
                value={inputText}
                onChange={handleTextChange}
                data-cy="messageInput"
            />
            <button
                onClick={handleSend}
                data-cy="submitButton"
            >
                Send
            </button>
        </div>
    );
};

export default NewMessageFormPresentational;