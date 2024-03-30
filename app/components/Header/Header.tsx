import React from 'react';

export interface HeaderProps {
	currentPageTitle: string;
}

const Header: React.FC<HeaderProps> = ({ currentPageTitle }) => {
	return (
		<header className="fixed top-0 left-0 w-full bg-primary text-white py-2 text-center">
			<h1 className="text-3xl font-bold">{currentPageTitle}</h1>
		</header>
	);
};

export default Header;
