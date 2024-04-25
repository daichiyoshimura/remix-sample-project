// ModalErrorBoundary.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import { ModalErrorBoundary } from '@components';

const meta: Meta = {
	title: 'Components/ModalErrorBoundary',
	component: ModalErrorBoundary,
	tags: ['autodocs'],
};

export default meta;

const Template: StoryFn = (args) => <ModalErrorBoundary {...args} />;

export const ErrorBoundaryModal = Template.bind({});
ErrorBoundaryModal.args = {};
