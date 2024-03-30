import React from 'react';

export interface ModalDescriptionProps {
	description: string;
}

const ModalDescription: React.FC<ModalDescriptionProps> = ({ description }) => {
	return (
		<>
			<p className="text-sm text-gray-600 mb-4">{description}</p>
		</>
	);
};

export default ModalDescription;
