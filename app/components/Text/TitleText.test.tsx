import { render } from '@testing-library/react';
import { TitleText } from '@components';

describe('TitleText', () => {
	it('renders title correctly', () => {
		const title = 'Test Modal Title';
		const { getByText } = render(<TitleText title={title} />);
		const titleElement = getByText(title);
		expect(titleElement).toBeDefined();
	});
});
