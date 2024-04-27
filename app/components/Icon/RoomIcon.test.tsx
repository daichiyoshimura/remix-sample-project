import { render } from '@testing-library/react';
import { RoomIcon } from '@components';

describe('RoomIcon', () => {
	it('renders without crashing', () => {
		render(<RoomIcon />);
	});
});
