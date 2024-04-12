import { render } from '@testing-library/react';
import { EditIcon } from '@components';

describe('EditIcon', () => {
	it('renders without crashing', () => {
		render(<EditIcon className="test-class" />);
		expect(document.querySelector('.test-class')).toBeInTheDocument();
	});
});
