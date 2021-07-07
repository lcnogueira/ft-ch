interface Boutique {
  _id: string
  name: string
  slug: string
  location: {
    lon: number
    lat: number
  }
  distance?: number
  description: string
  logo?: {
    url: string
  }
  founder_quote: string
}
