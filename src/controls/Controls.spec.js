import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';
const mock = jest.fn();

describe('Controls Component', () => {
	test('matches snapshot', () => {
		const tree = renderer.create(<Controls />);
		expect(tree.toJSON()).toMatchSnapshot();
	});
	test('component does not crash', () => {
		render(<Controls />);
	});

	test('"Close Gate" fires a function ', () => {
		const { getByText } = render(
			<Controls closed={false} locked={false} toggleClosed={mock} />
		);

		const button = getByText(/close gate/i);

		fireEvent.click(button);
		expect(mock).toHaveBeenCalled();
	});
	test('"Open Gate" fires a function ', () => {
		const { getByText } = render(<Controls closed={true} locked={false} toggleLocked={mock} />);

		const button = getByText(/open gate/i);

		fireEvent.click(button);
		expect(mock).toHaveBeenCalled();
	});

	test('"Lock Gate" fires a function ', () => {
		const { getByText } = render(<Controls closed={true} locked={false} toggleLocked={mock} />);

		const button = getByText(/lock gate/i);

		fireEvent.click(button);
		expect(mock).toHaveBeenCalled();
	});
	test('"Unlock Gate" fires a function ', () => {
		const { getByText } = render(<Controls closed={true} locked={true} toggleLocked={mock} />);

		const button = getByText(/unlock gate/i);

		fireEvent.click(button);
		expect(mock).toHaveBeenCalled();
	});
	test('lock gate should be disabled if gate is open', () => {
		const { getByText } = render(<Controls closed={false} locked={false} />);

		const button = getByText(/lock gate/i);

		expect(button).toBeDisabled();
	});
	test('open gate should be disabled if gate is locked', () => {
		const { getByText } = render(<Controls closed={true} locked={true} />);

		const button = getByText(/open gate/i);

		expect(button).toBeDisabled();
	});
});
