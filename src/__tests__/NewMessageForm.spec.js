import React from "react";
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewMessageForm from "../components/NewMessageForm";
import MessageList from "../components/MessageList";

afterEach(cleanup);

describe('<NewMessageForm />', () => {

    describe('clicking the send button', () => {
        
        test('clears the text field', () => {
            const handleSend = jest.fn()
            render(<NewMessageForm onSend={handleSend}/>);
            userEvent.click(screen.getByRole('button'));
            expect(screen.getByRole('textbox').value).toEqual('');
        })

        test('calls onSend', () => {
            const handleSend = jest.fn()
            render(<NewMessageForm onSend={handleSend}/>)
            userEvent.click(screen.getByRole('button'));
            expect(handleSend).toHaveBeenCalled();
        })
    })
    
});



