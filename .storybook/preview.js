import '../.jest/next-image.mock'
import GlobalStyles from '../src/styles/global'

export const parameters = {
  backgrounds: {
    default: 'rg-light',
    values: [
      {
        name: 'trouva-light',
        value: '#eeeeee',
      },
      {
        name: 'trouva-dark',
        value: '#030517'
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles removeBg/>
      <Story />
    </>
  )
]
