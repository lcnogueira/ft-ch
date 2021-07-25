import dynamic from 'next/dynamic'
const Map = dynamic(() => import('components/Map'), { ssr: false })

import { useBoutiques } from 'hooks/useBoutiques'
import * as S from './styles'

export default function HomeTemplate() {
  const { userLocation, boutiques, loading, error } = useBoutiques()

  return (
    <S.Wrapper>
      {<S.ErrorMessage error={error}>{error}</S.ErrorMessage>}
      {!error && loading && <S.Spinner />}
      <Map userLocation={userLocation} boutiques={boutiques} />
    </S.Wrapper>
  )
}
