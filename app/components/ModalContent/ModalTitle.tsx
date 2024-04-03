export type ModalTitleProps = {
	title: string;
};

const ModalTitle: React.FC<ModalTitleProps> = ({ title }) => {
	return (
		<>
			<h2 className="text-lg font-bold">{title}</h2>
		</>
	);
};

export default ModalTitle;
