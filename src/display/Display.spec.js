import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';

import Display from './Display';

describe('Display Component', () => {
	test('matches snapshot', () => {
		const tree = renderer.create(<Display />);
		expect(tree.toJSON()).toMatchSnapshot();
	});
	test('should be locked and closed ', () => {
		const { getByTestId } = render(<Display closed={false} locked={false} />);
		const lock = getByTestId('lock');
		const close = getByTestId('close');
		expect(lock.textContent).toMatch(/unlocked/i);
		expect(close.textContent).toMatch(/open/i);
	});

	test('When "locked" use "red-class" ', () => {
		const { getByText } = render(<Display locked={true} closed={true} />);

		const unlockGate = getByText(/locked/i);

		expect(unlockGate.className).toEqual('led red-led');
	});
	test('When "locked" use "green-class" ', () => {
		const { getByText } = render(<Display locked={false} closed={true} />);

		const unlockGate = getByText(/unlocked/i);

		expect(unlockGate.className).toEqual('led green-led');
	});
	test('When "closed" use "red-class" ', () => {
		const { getByText } = render(<Display locked={true} closed={true} />);

		const unlockGate = getByText(/closed/i);

		expect(unlockGate.className).toEqual('led red-led');
	});
	test('When "closed" use "green-class" ', () => {
		const { getByText } = render(<Display locked={false} closed={false} />);

		const unlockGate = getByText(/open/i);

		expect(unlockGate.className).toEqual('led green-led');
	});
});
