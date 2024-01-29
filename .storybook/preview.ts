// Storybook imports
import { setup, Preview } from '@storybook/vue3'

// CSS imports
import '@/assets/tailwind.css'

// FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Global components
import BaseIcon from '../src/components/global/BaseIcon.vue'

setup((app) => {
  const FAStyles = [far, fas, fab]
  FAStyles.forEach((style) => library.add(style))
  app
    .component('BaseIcon', BaseIcon)
    .component('FontAwesomeIcon', FontAwesomeIcon)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decorators: [
      (story) => ({
        components: { story },
        template: '<div style="margin: 3em;"><story /></div>',
      }),
    ],
  },
}

export default preview
