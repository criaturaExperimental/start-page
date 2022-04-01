import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SimpleAccordion } from './Accordion';

export default {
  component: SimpleAccordion,
} as ComponentMeta<typeof SimpleAccordion>;

export const Primary: ComponentStory<typeof SimpleAccordion> = () => <SimpleAccordion></SimpleAccordion>;
