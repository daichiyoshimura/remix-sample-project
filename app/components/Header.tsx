import { Link } from '@remix-run/react';
import Logo from './Logo'; // ロゴコンポーネントのインポート

interface HeaderProps {
	currentPageTitle: string; // 現在のページのタイトル
}

const Header = ({ currentPageTitle }: HeaderProps) => {
	return (
		<header className="bg-darkslategray py-4 fixed top-0 w-full z-10">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-white text-lg font-semibold flex-grow text-center">
					{currentPageTitle}
				</h1>
			</div>
		</header>
	);
};

export default Header;
