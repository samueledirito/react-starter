import React from 'react';
import {MessagesPage} from './MessagesPage';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {getMessage} from "../selectors";
import reducers from "../reducers";
import {createSetMessage, setMessage} from "../actions";

configure({adapter: new Adapter()});

describe('Messages >>> MessagesPage', () => {
    let container;

    beforeEach(() => {
        container = shallow(<MessagesPage/>);
    });

    it('renders without crashing', () => {
        expect(container.length).toEqual(1);
    });
});

describe('Messages >>> Selectors', () => {
    const mockStore = configureStore();
    const initialState = {message: 'message'};
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it('should select last message', () => {
        expect(getMessage(initialState)).toBe('message');
    });
});

describe('Messages >> Reducers', () => {
    it('should set message in state', () => {
        const action = createSetMessage('check me'),
            state = {message: ''};

        const nextState = reducers(state, action);

        expect(nextState.message).toBe('check me');
    })
})