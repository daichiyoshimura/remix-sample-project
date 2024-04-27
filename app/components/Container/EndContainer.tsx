import { Container } from '@components';

export type EndContainerProps = {
	children?: React.ReactNode;
};

export const EndContainer = ({ children }: EndContainerProps) => {
	return <Container justify="justify-end">{children}</Container>;
};
