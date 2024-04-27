import { Link } from '@remix-run/react';

type MenuItem = {
	title: string;
	to: string;
};

export type MenuProps = {
	items: MenuItem[];
};

export const Menu = ({ items }: MenuProps) => {
	return (
		<div className="fixed left-0 top-0 h-full bg-gray-800 text-white p-4">
			<ul>
				{items.map((item, index) => (
					<li key={index} className="mb-4">
						<Link to={item.to} className="block px-3 py-2 rounded hover:bg-gray-700">
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
