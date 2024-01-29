import type { Meta, StoryObj } from '@storybook/vue3'
import HeaderComponent from '@/components/HeaderComponent.vue'

/** Header component for displaying the city name, country and date. */

const meta: Meta<typeof HeaderComponent> = {
  title: 'HeaderComponent',
  component: HeaderComponent,
}

export default meta
type Story = StoryObj<typeof HeaderComponent>

export const Default: Story = {
  render: (args) => ({
    components: { HeaderComponent },
    setup() {
      return { args }
    },
    template: '<HeaderComponent v-bind="args" />',
  }),
  args: { city: 'Brussels', country: 'Belgium', date: '2024-01-20' },
}

export const LongCityName: Story = {
  render: (args) => ({
    components: { HeaderComponent },
    setup() {
      return { args }
    },
    template: '<HeaderComponent v-bind="args" />',
  }),
  args: {
    city: 'Taumatawhakatangihangak',
    subtitle:
      'Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu',
    country: 'New Zealand',
    date: '2024-01-20',
  },
}

export const LongCountryName: Story = {
  render: (args) => ({
    components: { HeaderComponent },
    setup() {
      return { args }
    },
    template: '<HeaderComponent v-bind="args" />',
  }),
  args: {
    city: 'Kingstown',
    country: 'SVG',
    subtitle: 'Saint Vincent and the Grenadines',
    date: '2024-01-20',
  },
}
