import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { default as MessageList } from "../components/MessageList/MessageListContainer";

afterEach(cleanup);

describe('<MessageList />', () => {

    test('number of list items', () => {
        const messages = ['test1','test2','test3'];
        render(<MessageList messages={messages} />);
        const items = screen.getAllByRole('listitem');
        expect(items.length).toBe(3);
    });
});


