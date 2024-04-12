import { render } from '@testing-library/react';
import { LoadingIcon } from '@components';

describe('LoadingIcon', () => {
	it('renders without crashing', () => {
		render(<LoadingIcon />);
	});
});
