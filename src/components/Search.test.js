import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';
configure({ adapter: new Adapter() });
describe('NotFound', () => {
  it('Render Default title', () => {
    const mockSearch = jest.fn();
    const prevent = jest.fn();
    const wrapper = mount(<Search searchGif={mockSearch} />);
    wrapper.find('input').simulate('change', { target: { value: 'My todo!' } });
    wrapper.find('form').simulate('submit', { preventDefault: prevent });
    expect(mockSearch.mock.calls).toEqual([['My todo!']]);
    expect(prevent.mock.calls).toEqual([[]]);
  });
});
