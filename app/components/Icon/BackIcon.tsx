import { ArrowBackIosNew } from '@mui/icons-material';
import { NoSsr } from '@mui/base';

export type BackIconProps = {
	style?: object;
};

export const BackIcon = ({ style = {} }: BackIconProps) => {
	return (
		<>
			<NoSsr>
				<ArrowBackIosNew style={style} />
			</NoSsr>
		</>
	);
};
