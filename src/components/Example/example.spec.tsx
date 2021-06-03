import React from 'react'
import { render, screen } from 'utils/test-utils'

import { Example } from '.'

const props: ExampleProps = {
  name: 'Paulo Luan'
}

describe('Example Page', () => {
  it('should renders Example page correctly', () => {
    const { asFragment } = render(<Example {...props}/>)
    expect(asFragment()).toMatchSnapshot()
  })

  it("should find the Example test id and it's mindingo's class", () => {
    const { getByTestId } = render(<Example {...props}/>)
    const result = getByTestId('Example').textContent
    expect(result).toEqual('example')
  })
})
