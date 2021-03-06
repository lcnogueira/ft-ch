import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import NextLink from 'next/link'

import * as S from './styles'

export type BoutiquesTemplateProps = {
  boutique: Boutique
}

export default function BoutiquesTemplate({
  boutique
}: BoutiquesTemplateProps) {
  return (
    <>
      <S.LinkWrapper>
        <NextLink href="/">
          <CloseOutline size={32} aria-label="Go back to map" />
        </NextLink>
      </S.LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{boutique.name}</S.Heading>
          <S.Description>{boutique.description}</S.Description>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
