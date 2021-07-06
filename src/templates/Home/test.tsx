import { render, screen } from '@testing-library/react'

import Home from '.'

describe('<Home />', () => {
  it('should render the heading', () => {
    const { container } = render(<Home boutiques={[]} />)

    expect(
      screen.getByRole('heading', { name: /trouva frontend challenge/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
