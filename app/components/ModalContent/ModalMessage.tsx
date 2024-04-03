import React from 'react';
import ModalTitle from './ModalTitle';
import ModalDescription from './ModalDescription';
import Container from '~/components/Container/Container';
import Button from '~/components/Button/Button';

export type ModalMessageProps = {
	title: string;
	description: string;
	handleClose: () => void;
};

const ModalMessage: React.FC<ModalMessageProps> = ({ title, description, handleClose }) => {
	return (
		<>
			<ModalTitle title={title} />
			<ModalDescription description={description} />
			<Container alignment="right">
				<Button onClick={handleClose}>close</Button>
			</Container>
		</>
	);
};

export default ModalMessage;
