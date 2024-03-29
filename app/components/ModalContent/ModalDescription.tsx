import React from 'react';

interface ModalDescription {
	description: string;
}

const ModalDescription: React.FC<ModalDescription> = ({ description }) => {
	return (
		<>
			<p className="text-sm text-gray-600 mb-4">{description}</p>
		</>
	);
};

export default ModalDescription;
