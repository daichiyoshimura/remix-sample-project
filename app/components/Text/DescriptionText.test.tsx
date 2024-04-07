import { render } from '@testing-library/react';
import { DescriptionText } from '@components';

describe('DescriptionText', () => {
	it('renders description correctly', () => {
		const description = 'This is a test description';
		const { getByText } = render(<DescriptionText description={description} />);
		const descriptionElement = getByText(description);
		expect(descriptionElement).toBeDefined();
	});
});
