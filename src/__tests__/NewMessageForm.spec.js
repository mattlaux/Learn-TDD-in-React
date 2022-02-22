import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewMessageForm from "../components/NewMessageForm";

describe('<NewMessageForm />', () => {
    let getByTestId;

    describe('clicking the send button2', () => {
        
        test('clears the text field', () => {
            render(<NewMessageForm />);
            userEvent.click(screen.getByTestId('sendButton'));
            expect(screen.getByTestId('messageText').value).toEqual('');
        })
    })
    
});



