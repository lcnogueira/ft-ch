import * as S from './styles'

export type Boutique = {
  _id: string
  name: string
  slug: string
  location: {
    lon: number
    lat: number
  }
  description: string
  logo?: {
    url: string
  }
  founder_quote: string
}

export type HomeTemplateProps = {
  boutiques: Boutique[]
}

const Home = ({ boutiques }: HomeTemplateProps) => (
  <S.Wrapper>
    <S.Title>Trouva Frontend Challenge</S.Title>
    <S.Description>
      A frontend challenge used to get a position at Trouva.
    </S.Description>
    {boutiques.map((boutique) => (
      <div key={boutique._id}>
        <span>{boutique._id}</span>
        <span>{boutique.name}</span>
      </div>
    ))}
  </S.Wrapper>
)

export default Home
