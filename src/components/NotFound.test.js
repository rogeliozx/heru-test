import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from './NotFound';
configure({ adapter: new Adapter() });
describe('NotFound', () => {
  it('Render Default title', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.contains('Sin resultados')).toEqual(true);
  });
});
