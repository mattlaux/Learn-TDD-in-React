import React from "react";

const MessageList = ({ messages }) => {
    return (
        <div>
            <ul>
                {messages.map(message => <li key={message}>{message}</li>)}
            </ul>
        </div>
    )
}

export default MessageList;