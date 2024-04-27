import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Menu } from '@components';

describe('Menu component', () => {
	test('renders menu items', () => {
		const { getByRole } = render(
			<MemoryRouter>
				<Menu />
			</MemoryRouter>,
		);

		const menuItems = [
			{
				title: 'Rooms',
				to: '/rooms',
			},
			{
				title: 'Participants',
				to: '/',
			},
			{
				title: 'Account',
				to: '/',
			},
			{
				title: 'Sign Out',
				to: '/',
			},
		];

		menuItems.forEach((item) => {
			const linkElement = getByRole('link', { name: item.title });
			expect(linkElement).toBeInTheDocument();
			expect(linkElement).toHaveAttribute('href', item.to);
		});
	});
});
