import { Edit } from '@mui/icons-material';
import { NoSsr } from '@mui/base';

export type EditIconProps = {
	className?: string;
};

export const EditIcon = ({ className = '' }) => {
	return (
		<>
			<NoSsr>
				<Edit className={className} />
			</NoSsr>
		</>
	);
};
