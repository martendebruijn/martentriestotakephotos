import { mergeConfig } from 'vite'
import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config, options) {
    return mergeConfig(config, {
      css: {
        postcss: {
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      },
    })
  },
}
export default config
