import '../.jest/next-image.mock'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from 'styles/theme'

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
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
