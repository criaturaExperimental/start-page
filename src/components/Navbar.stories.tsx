import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavBar from './Navbar';

export default {
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

export const Primary: ComponentStory<typeof NavBar> = () => <NavBar></NavBar>;
