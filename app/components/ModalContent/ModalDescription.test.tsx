import { render } from '@testing-library/react';
import ModalDescription from './ModalDescription';

describe('ModalDescription', () => {
	it('renders description correctly', () => {
		const description = 'This is a test description';
		const { getByText } = render(
			<ModalDescription description={description} />,
		);
		const descriptionElement = getByText(description);
		expect(descriptionElement).toBeDefined();
	});
});
