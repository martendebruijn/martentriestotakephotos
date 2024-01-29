import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseIcon from '@/components/global/BaseIcon.vue'

describe('BaseIcon', () => {
  it('should render a solid icon by default', () => {
    expect(BaseIcon.props.type.default).toEqual('fas')
  })

  it('should render alternative text when given alternative text', () => {
    const altText = 'Copy item'
    const wrapper = mount(BaseIcon, {
      global: {
        stubs: ['FontAwesomeIcon'],
      },
      props: {
        icon: 'copy',
        alt: altText,
      },
    })
    const altEl = wrapper.find('span.sr-only')

    expect(altEl.exists()).toBeTruthy()
    expect(altEl.text()).toEqual(altText)
  })
})
