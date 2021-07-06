import { Boutique } from 'components/Map'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('components/Map'), { ssr: false })

import * as S from './styles'

export type HomeTemplateProps = {
  boutiques: Boutique[]
}

const Home = ({ boutiques }: HomeTemplateProps) => (
  <S.Wrapper>
    <S.Title>Trouva Frontend Challenge</S.Title>
    <Map boutiques={boutiques} />
  </S.Wrapper>
)

export default Home
