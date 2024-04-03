import { render } from '@testing-library/react';
import { ModalTitle } from '@components';

describe('ModalTitle', () => {
	it('renders title correctly', () => {
		const title = 'Test Modal Title';
		const { getByText } = render(<ModalTitle title={title} />);
		const titleElement = getByText(title);
		expect(titleElement).toBeDefined();
	});
});
