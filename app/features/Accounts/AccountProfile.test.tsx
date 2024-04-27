import { render } from '@testing-library/react';
import { AccountProfile } from '@features';

describe('AccoutProfile', () => {
	it('renders correctly', () => {
		const props = {
			id: '1',
			name: 'John Doe',
			email: 'a@bmail.com',
		};
		const { getByText } = render(<AccountProfile {...props} />);
		expect(getByText(props.name)).toBeDefined();
	});
});
