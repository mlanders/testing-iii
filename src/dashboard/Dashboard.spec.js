import React from 'react';
// import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard';
import { render } from 'react-testing-library';

describe('Dashboard Component', () => {
	test('matches snapshot', () => {
		const tree = renderer.create(<Dashboard />);
		expect(tree.toJSON()).toMatchSnapshot();
	});
	test('component does not crash', () => {
		render(<Dashboard />);
	});
});
