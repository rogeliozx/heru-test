import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GridGif from './GridGif';
configure({ adapter: new Adapter() });
describe('GrifGif', () => {
  it('Render Default title', () => {
    const testSrc = 'test';
    const gifsArray = [
      {
        images: {
          downsized: {
            url: testSrc,
          },
        },
      },
    ];
    const wrapper = shallow(<GridGif gifArray={gifsArray} />);
    expect(wrapper.contains('Top Gifs')).toEqual(true);
  });
  it('Render Default title', () => {
    const testSrc = 'test';
    const gifsArray = [
      {
        images: {
          downsized: {
            url: testSrc,
          },
        },
      },
    ];
    const wrapper = shallow(<GridGif gifArray={gifsArray} search={testSrc} />);
    expect(wrapper.contains(`Resultado para es"${testSrc}" `)).toEqual(true);
  });
});
