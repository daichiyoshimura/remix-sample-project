import { render } from '@testing-library/react';
import LoadingIcon from './LoadingIcon';

describe('LoadingIcon', () => {
	it('renders without crashing', () => {
		render(<LoadingIcon />);
	});
});
