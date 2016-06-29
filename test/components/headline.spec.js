import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Headline from '../../src/components/headline'

describe('components', () => {
  describe('Headline', () => {
    it('should render correctly', () => {

      const props = {"text":"Hello Node!"};
      const renderer = TestUtils.createRenderer()
      renderer.render(<Headline {...props} />)
      const output = renderer.getRenderOutput()

      expect(output.type).toBe('h1')
    })
  })
})
