import '../.jest/next-image.mock'
import GlobalStyles from '../src/styles/global'

export const parameters = {
  backgrounds: {
    default: 'rg-light',
    values: [
      {
        name: 'trouva-light',
        value: theme.colors.white
      },
      {
        name: 'trouva-dark',
        value: theme.colors.mainBg
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
