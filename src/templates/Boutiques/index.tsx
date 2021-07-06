import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import NextLink from 'next/link'

import * as S from './styles'
import { useRouter } from 'next/router'
import { BoutiqueProp } from 'components/Map'

export type BoutiquesTemplateProps = {
  boutique: BoutiqueProp
}

export default function BoutiquesTemplate({
  boutique
}: BoutiquesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

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
