import { AccountIcon } from '@components';

export const Header = () => {
	return (
		<header className="fixed top-0 left-0 w-full h-12 bg-primary text-white p-4 flex justify-between items-center">
			<h1 className="text-2xl font-bold">Awsome App</h1>
			<div className="flex justify-between items-center">
				<AccountIcon />
				<p className="px-2">{`john`}</p>
			</div>
		</header>
	);
};
