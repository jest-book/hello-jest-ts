/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer'
import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './Button'

describe('Button', () => {
  it('renders correctly with react-test-renderer', () => {
    const button = renderer.create(<Button />)
    expect(button.toJSON()).toMatchSnapshot()
  })
  it('changes the text after click', () => {
    const button = render(<Button />)
    fireEvent.click(button.getByText('ON'))
    expect(button.getByText(/OFF/i)).toBeTruthy()
    fireEvent.click(button.getByText('OFF'))
    expect(button.getByText(/ON/i)).toBeTruthy()
  })

  // it('debug screen', () => {
  //   const button = render(<Button />)
  //   screen.debug()
  // })
})
