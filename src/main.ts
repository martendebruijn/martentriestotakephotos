// Vue imports
import { createApp } from 'vue'

import App from './App.vue'

// CSS imports
import '@/assets/tailwind.css'
import '@/assets/reset.css'

// FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// @TODO import only the icons that you really use
const FAStyles = [far, fas, fab]
FAStyles.forEach((style) => library.add(style))

// Global components
import BaseIcon from '@/components/global/BaseIcon.vue'

createApp(App)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .component('BaseIcon', BaseIcon)
  .mount('#app')
