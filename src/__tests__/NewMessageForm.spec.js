import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewMessageForm from "../components/NewMessageForm";

describe('<NewMessageForm />', () => {

    describe('clicking the send button', () => {
        
        test('clears the text field', () => {
            render(<NewMessageForm />);
            userEvent.click(screen.getByTestId('sendButton'));
            expect(screen.getByTestId('messageText').value).toEqual('');
        })

    })
    
});



