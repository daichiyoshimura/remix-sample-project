import { AccountIcon, Menu } from '@components';

export const SideBar = () => {
	return (
		<div className="bg-gray-800 text-white p-2 h-full flex flex-col gap-y-2">
			<div className="flex justify-between flex-col items-center">
				<AccountIcon />
				<p className="px-2">{`john`}</p>
			</div>
			<Menu />
		</div>
	);
};
