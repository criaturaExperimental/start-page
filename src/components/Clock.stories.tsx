import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Clock } from './Clock';

export default {
  component: Clock,
} as ComponentMeta<typeof Clock>;

export const Primary: ComponentStory<typeof Clock> = () => <Clock></Clock>;