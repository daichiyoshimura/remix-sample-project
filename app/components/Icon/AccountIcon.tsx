import { AccountCircle } from '@mui/icons-material';
import { NoSsr } from '@mui/base';

export type AccountIconProps = {
	className?: string;
};

export const AccountIcon = ({ className = '' }) => {
	return (
		<>
			<NoSsr>
				<AccountCircle className={className} />
			</NoSsr>
		</>
	);
};
