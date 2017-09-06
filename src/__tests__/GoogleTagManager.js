import React from 'react';
import cheerio from 'cheerio';
import { render } from 'enzyme';
import GoogleTagManager from '../GoogleTagManager';

describe('GoogleTagManager', () => {
  describe('when is id prop is passed', () => {
    const id = 'GTM-9010';

    const wrapper = render(<GoogleTagManager id={id} />);
    const $ = cheerio(wrapper.html());

    it('renders a <noscript />', () => {
      expect($.find('noscript')).toHaveLength(1);
    });

    it('renders an <iframe /> in the <noscript />', () => {
      expect($.find('noscript > iframe')).toHaveLength(1);
    });

    it('renders an <iframe /> with the GTM URI as its src attribute', () => {
      const gtmURI = `//www.googletagmanager.com/ns.html?id=${id}`;
      expect($.find('noscript > iframe').attr('src')).toEqual(gtmURI);
    });
  });
});
