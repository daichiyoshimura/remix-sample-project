import { render } from '@testing-library/react';
import { List } from '@components';

describe('List component', () => {
	const items = ['Item 1', 'Item 2', 'Item 3'];
	const renderItem = (item: string) => <span>{item}</span>;

	test('renders items correctly', () => {
		const { getByText } = render(<List items={items} render={renderItem} />);
		items.forEach((item) => {
			expect(getByText(item)).toBeInTheDocument();
		});
	});
});
