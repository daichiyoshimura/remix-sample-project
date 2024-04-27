import { Container } from '@components';

export type BetweenContainerProps = {
	children?: React.ReactNode;
};

export const BetweenContainer = ({ children }: BetweenContainerProps) => {
	return <Container justify="justify-between">{children}</Container>;
};
