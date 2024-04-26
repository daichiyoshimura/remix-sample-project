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
		<div className="menu">
			<ul>
				{items.map((item, index) => (
					<li key={index}>
						<Link to={item.to}>{item.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
