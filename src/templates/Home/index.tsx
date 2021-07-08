import dynamic from 'next/dynamic'
const Map = dynamic(() => import('components/Map'), { ssr: false })

import { useBoutiques } from 'hooks/useBoutiques'
import * as S from './styles'

export default function HomeTemplate() {
  const { userLocation, boutiques } = useBoutiques()

  return (
    <S.Wrapper>
      <Map userLocation={userLocation} boutiques={boutiques} />
    </S.Wrapper>
  )
}
