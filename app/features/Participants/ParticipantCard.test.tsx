import React from 'react';
import { render } from '@testing-library/react';
import ParticipantCard from './ParticipantCard';

describe('ParticipantCard', () => {
	it('renders correctly', () => {
		const props = {
			id: '1',
			name: 'John Doe',
			part: 'Guest',
		};
		const { getByText } = render(<ParticipantCard {...props} />);
		expect(getByText(props.name)).toBeDefined();
		expect(getByText(`<${props.part}>`)).toBeDefined();
	});
});
