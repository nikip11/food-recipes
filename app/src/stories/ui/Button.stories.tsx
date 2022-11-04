import Button, { ButtonProps } from "@/components/ui/Button"
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AddIcon } from "@/components/Icons";

export default {
  title: 'UI/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({})

Primary.args = {
  children: <>Hello</>,
  style: 'primary',
  onClick: () => alert('dsdsd')
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: <>Hello</>,
  style: 'secondary',
  onClick: () => alert('dsdsd')
}

export const Icon = Template.bind({})
Icon.args = {
  children: <AddIcon />,
  style: 'icon',
  onClick: () => alert('dsdsd')
}