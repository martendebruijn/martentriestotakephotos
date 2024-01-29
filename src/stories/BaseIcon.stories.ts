import type { Meta, StoryObj } from '@storybook/vue3'
import BaseIcon from '@/components/global/BaseIcon.vue'

/**
 * Icon wrapper.
 *
 * There are a couple of different types:
 *
 * * `fas`: Font Awesome Solid icons (default)
 * * `far`: Font Awesome Regular icons
 * * `fab`: Font Awesome Brands icons
 *
 * See also the documentation of [Font Awesome](https://fontawesome.com/icons).
 */

const meta: Meta<typeof BaseIcon> = {
  title: 'Global/BaseIcon',
  component: BaseIcon,
}

export default meta
type Story = StoryObj<typeof BaseIcon>

export const Solid: Story = {
  render: (args) => ({
    components: { BaseIcon },
    setup() {
      return { args }
    },
    template: '<BaseIcon v-bind="args" />',
  }),
  args: { icon: 'star' },
}

export const Regular: Story = {
  render: (args) => ({
    components: { BaseIcon },
    setup() {
      return { args }
    },
    template: '<BaseIcon v-bind="args" />',
  }),
  args: { icon: 'star', type: 'far' },
}

export const Brands: Story = {
  render: (args) => ({
    components: { BaseIcon },
    setup() {
      return { args }
    },
    template: '<BaseIcon v-bind="args" />',
  }),
  args: { icon: 'facebook', type: 'fab' },
}

export const AlternativeText: Story = {
  render: (args) => ({
    components: { BaseIcon },
    setup() {
      return { args }
    },
    template: '<BaseIcon v-bind="args" />',
  }),
  args: { icon: 'copy', alt: 'Copy item' },
}

export const FullWidth: Story = {
  render: (args) => ({
    components: { BaseIcon },
    setup() {
      return { args }
    },
    template: '<BaseIcon v-bind="args" />',
  }),
  args: { icon: 'star', fullWidth: true },
}
