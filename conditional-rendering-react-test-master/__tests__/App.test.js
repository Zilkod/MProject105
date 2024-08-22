import React from 'react';
import Enzyme, { shallow, configure, render, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from '../components/App';
// import { act } from 'react-test-renderer';
import { act } from 'react-dom/test-utils';

describe('App tests', () => {

    test('Change State button exists', () => {

        const screen = render(<App />);

        const x = screen.find("#stateChangeButton");
        expect(x.text()).toEqual('Change State');
    })

    test('Change Style button exists', () => {

        const screen = render(<App />);

        const x = screen.find("#styleChangeButton");
        expect(x.text()).toEqual('Change Style');
    })

    test('Component exists with false initially', () => {

        const screen = render(<App />);

        const x = screen.find("#data");
        expect(x.text()).toEqual('False');
    })

    test('Component exists without styles initially', () => {

        const screen = render(<App />);

        const x = screen.find("#data");
        expect(x.hasClass('content')).toEqual(false);
    })

    test('Component state toggles', () => {

        const screen = mount(<App />);

        const stateChangeButton = screen.find("#stateChangeButton");
        const data = screen.find("#data");
        
        expect(data.text()).toEqual('False');

        // toggle state
        stateChangeButton.simulate('click');
        // stateChangeButton.simulate("click");
        expect(data.text()).toEqual('True');

        // toggle state
        stateChangeButton.simulate('click')
        expect(data.text()).toEqual('False');
    })

    test('Component style toggles', () => {

        const screen = mount(<App />);

        const styleChangeButton = screen.find("#styleChangeButton");
        let data = screen.find("#data");

        expect(styleChangeButton).not.toBeNull();
        expect(data.hasClass('content')).toEqual(false);

        // toggle style
        styleChangeButton.simulate('click');

        const x = screen.find("#data");
        expect(x.hasClass('content')).toEqual(true);

        // toggle style
        styleChangeButton.simulate('click');

        const y = screen.find("#data");
        expect(y.hasClass('content')).toEqual(false);
    })
})
