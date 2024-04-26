import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Menu, MenuProps } from '@components';

describe('Menu component', () => {
	const menuItems: MenuProps['items'] = [
		{ title: 'Home', to: '/' },
		{ title: 'About', to: '/about' },
		{ title: 'Contact', to: '/contact' },
	];

	test('renders menu items', () => {
		const { getByRole } = render(
			<MemoryRouter>
				<Menu items={menuItems} />
			</MemoryRouter>,
		);

		menuItems.forEach((item) => {
			const linkElement = getByRole('link', { name: item.title });
			expect(linkElement).toBeInTheDocument();
			expect(linkElement).toHaveAttribute('href', item.to);
		});
	});
});
