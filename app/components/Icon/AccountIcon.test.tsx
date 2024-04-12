import { render } from '@testing-library/react';
import { AccountIcon } from '@components';

describe('AccountIcon', () => {
	it('renders without crashing', () => {
		render(<AccountIcon className="test-class" />);
		expect(document.querySelector('.test-class')).toBeInTheDocument();
	});
});
