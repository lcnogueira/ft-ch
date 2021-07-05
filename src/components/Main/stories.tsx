import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'trouva-dark'
    }
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'basic title',
  description: 'basic description'
}

export const Default: Story = (args) => <Main {...args} />
