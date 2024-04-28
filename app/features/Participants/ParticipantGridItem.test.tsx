import { render } from '@testing-library/react';
import { ParticipantGridItem } from '@features';

describe('ParticipantCard', () => {
	it('renders correctly', () => {
		const props = {
			id: '1',
			name: 'John Doe',
		};
		const { getByText } = render(<ParticipantGridItem {...props} />);
		expect(getByText(props.name)).toBeDefined();
	});
});
