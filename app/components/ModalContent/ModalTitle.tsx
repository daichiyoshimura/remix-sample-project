import React from 'react';

interface ModalTitle {
	title: string;
}

const ModalTitle: React.FC<ModalTitle> = ({ title }) => {
	return (
		<>
			<h2 className="text-lg font-bold">{title}</h2>
		</>
	);
};

export default ModalTitle;
