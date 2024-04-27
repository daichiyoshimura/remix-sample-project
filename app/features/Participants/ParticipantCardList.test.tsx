import { render } from '@testing-library/react';
import { ParticipantCardList } from '@features';

describe('ParticipantCardList', () => {
	it('renders correctly', () => {
		const participants = [
			{ id: '1', name: 'John Doe' },
			{ id: '2', name: 'Jane Smith' },
		];
		const { getByText } = render(<ParticipantCardList participants={participants} />);
		expect(getByText('John Doe')).toBeDefined();
		expect(getByText('Jane Smith')).toBeDefined();
	});
});
