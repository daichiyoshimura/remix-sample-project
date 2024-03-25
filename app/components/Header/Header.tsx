import './Header.css';

interface HeaderProps {
	currentPageTitle: string;
}

const Header: React.FC<HeaderProps> = ({ currentPageTitle }) => {
	return (
		<header className="header">
			<h1>{currentPageTitle}</h1>
		</header>
	);
};

export default Header;
