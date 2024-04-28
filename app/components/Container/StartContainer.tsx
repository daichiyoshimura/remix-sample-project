import { Container } from '@components';

export const StartContainer = ({ children }: { children?: React.ReactNode }) => {
	return <Container justify="justify-start">{children}</Container>;
};
