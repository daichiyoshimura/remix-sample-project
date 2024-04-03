import React from 'react';
import ModalTitle from './ModalTitle';
import ModalDescription from './ModalDescription';
import Container from '~/components/Container/Container';
import Button from '~/components/Button/Button';

export type ModalMessageProps = {
	title: string;
	description: string;
};

type ModalMessageArgs = {
	props: ModalMessageProps;
	handleClose: () => void;
};

const ModalMessage: React.FC<ModalMessageArgs> = ({
	props,
	handleClose,
}) => {
	return (
		<>
			<ModalTitle title={props.title} />
			<ModalDescription description={props.description} />
			<Container alignment="right">
				<Button onClick={handleClose}>close</Button>
			</Container>
		</>
	);
};

export default ModalMessage;
