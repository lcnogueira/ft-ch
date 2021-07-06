import styled from 'styled-components'
import NextImage from 'next/image'

export const Wrapper = styled.div`
  padding: var(--large) var(--medium);
`

export const Container = styled.section`
  max-width: var(--container);
  padding-bottom: var(--large);
  margin: auto;
`

export const LinkWrapper = styled.div`
  position: fixed;
  z-index: 1100;
  top: var(--medium);
  right: var(--medium);
  color: var(--white);
  cursor: pointer;

  svg {
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--medium);
`

export const Description = styled.p`
  margin-bottom: var(--medium);
`

export const Image = styled(NextImage)`
  margin-top: var(--medium);
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`
