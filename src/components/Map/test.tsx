import { render, screen } from '@testing-library/react'

import Map from '.'

const mockedBoutique = {
  _id: '58f8993879b34604006c2f1b',
  name: 'Store Thirty3',
  slug: 'store-thirty3-in-ss91sw',
  location: {
    lon: 0.6539279000000001,
    lat: 51.5423065
  },
  description:
    'Store Thirty3 prides itself on being an ever-changing, inspirational boutique full of beautiful homeware and lifestyle products with a distinctly Scandinavian feel. Their range includes designer homeware from brands like House Doctor and Bloomingville, luxury clothing from brands including Saint Tropez, Soaked In Luxury and Coster Copenhagen, stunning jewellery and a collection of bags and accessories.',
  founder_quote: ''
}

describe('<Map />', () => {
  it('should render without any boutique', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    render(<Map boutiques={[mockedBoutique]} />)

    expect(screen.getByTitle(/store thirty3/i)).toBeInTheDocument()
  })
})
