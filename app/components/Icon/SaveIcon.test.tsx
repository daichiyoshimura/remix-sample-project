import { render } from '@testing-library/react';
import { SaveIcon } from '@components';

describe('SaveIcon', () => {
	it('renders without crashing', () => {
		render(<SaveIcon className="test-class" />);
		expect(document.querySelector('.test-class')).toBeInTheDocument();
	});
});
