import { render } from '@testing-library/react';
import { ParticipantCard } from '@features';

describe('ParticipantCard', () => {
	it('renders correctly', () => {
		const props = {
			id: '1',
			name: 'John Doe',
		};
		const { getByText } = render(<ParticipantCard {...props} />);
		expect(getByText(props.name)).toBeDefined();
	});
});
