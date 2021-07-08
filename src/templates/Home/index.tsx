import dynamic from 'next/dynamic'
const Map = dynamic(() => import('components/Map'), { ssr: false })

import { useBoutiques } from 'hooks/useBoutiques'
import * as S from './styles'

export default function HomeTemplate() {
  const { userLocation, boutiques, loading } = useBoutiques()

  return (
    <S.Wrapper>
      {loading && <S.Spinner />}
      <Map userLocation={userLocation} boutiques={boutiques} />
    </S.Wrapper>
  )
}
