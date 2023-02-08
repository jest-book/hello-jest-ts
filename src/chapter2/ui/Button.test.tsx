/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  // react-test-rendererを利用した、スナップショットテスト
  it('renders correctly with react-test-renderer', () => {
    const button = renderer.create(<Button />)
    expect(button.toJSON()).toMatchSnapshot()
  })

  // React Testing Libraryを利用した、動きのあるコンポーネントのテスト
  it('changes the button text upon clicking the button using React Testing Library', () => {
    const button = render(<Button />)
    // ボタンをクリックするとONからOFFにボタンの文字列が変化することを確認
    fireEvent.click(button.getByText('ON'))
    expect(button.getByText(/OFF/i)).toBeTruthy()
    // ボタンをクリックするとOFFからONにボタンの文字列が変化することを確認
    fireEvent.click(button.getByText('OFF'))
    expect(button.getByText(/ON/i)).toBeTruthy()
  })

  // it('debug screen', () => {
  //   const button = render(<Button />)
  //   screen.debug()
  // })
})
