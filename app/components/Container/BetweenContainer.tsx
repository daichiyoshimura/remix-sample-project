import { Container } from '@components';

export const BetweenContainer = ({ children }: { children?: React.ReactNode }) => {
	return <Container justify="justify-between">{children}</Container>;
};
