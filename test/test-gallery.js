import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Gallery from '../js/components/gallery';

describe('Gallery component', function() {
	it('it pulls data for multiple images', function() {

		const images = [
        {
            url: "http://prod.static.raiders.clubs.nfl.com/nfl-assets/img/gbl-ico-team/OAK/logos/home/large.png " ,
            description: "rando description 1"
        },
        {
            url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png",
            description: "this photo is very photolike"
        }
    ]
		const renderer = TestUtils.createRenderer();
		renderer.render(<Gallery images={images} />);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('gallery');

	})
})
