export type ModalDescriptionProps = {
	description: string;
};

export const ModalDescription: React.FC<ModalDescriptionProps> = ({ description }) => {
	return (
		<>
			<p className="text-sm text-gray-600 mb-4">{description}</p>
		</>
	);
};
