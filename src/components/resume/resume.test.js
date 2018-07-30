import React from 'react';
import Template from './Template.js';

import { shallow } from 'enzyme';


describe('Templated tests', () => {

    const component = shallow(<Template />);

    it('should render', () => {
        expect(component.find('div')).toHaveLength(1);
    });
});