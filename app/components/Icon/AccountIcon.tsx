import { AccountCircle } from '@mui/icons-material';
import { NoSsr } from '@mui/base';

export type AccountIconProps = {
	className?: string;
	size?: 's' | 'm' | 'l' | 'xl';
};

export const AccountIcon = ({ className = '', size = 'm' }: AccountIconProps) => {
	const fontSize = (() => {
		switch (size) {
			case 's':
				return 20;
			case 'm':
				return 40;
			case 'l':
				return 80;
			case 'xl':
				return 120;
			default:
				return 20;
		}
	})();
	return (
		<>
			<NoSsr>
				<AccountCircle style={{ fontSize: fontSize }} className={className} />
			</NoSsr>
		</>
	);
};
