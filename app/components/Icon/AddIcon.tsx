import { AddCircle } from '@mui/icons-material';
import { NoSsr } from '@mui/base';

export type AddIconProps = {
	style?: object;
};

export const AddIcon = ({ style = {} }: AddIconProps) => {
	return (
		<>
			<NoSsr>
				<AddCircle style={style} />
			</NoSsr>
		</>
	);
};
