import { Container } from '@components';

export const EndContainer = ({ children }: { children?: React.ReactNode }) => {
	return <Container justify="justify-end">{children}</Container>;
};
