import { render } from '@testing-library/react';
import { LocationBar, LocationBarProps } from '@components';

test('renders location bar correctly', () => {
	const props: LocationBarProps = {
		pathname: '/home/about',
		title: 'About Page',
	};
	const { getByText } = render(<LocationBar {...props} />);

	expect(getByText(props.title)).toBeInTheDocument();
	expect(getByText(props.pathname)).toBeInTheDocument();
});
