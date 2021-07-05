import * as S from './styles'

const Main = ({
  title = 'Trouva Frontend Challenge',
  description = 'A frontend challenge used to get a position at Trouva.'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
