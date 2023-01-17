import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { screen, userEvent } from '@storybook/testing-library'
import { Button } from './Button'

export default { component: Button } as ComponentMeta<typeof Button>
export const Primary: ComponentStoryObj<typeof Button> = {}
export const Secondary: ComponentStoryObj<typeof Button> = {
  args: { primary: false },
}

export const ClickButton: ComponentStoryObj<typeof Button> = {
  play: async () => {
    const button = screen.getByRole('button')
    await userEvent.click(button)
  },
}
