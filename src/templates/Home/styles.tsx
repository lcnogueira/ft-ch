import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

type SpinnerProps = {
  show: boolean
}

export const Spinner = styled.div<SpinnerProps>`
  z-index: 1100;
  position: absolute;

  border: 8px solid #eeeeee;
  border-left-color: var(--highlight);
  height: 60px;
  width: 60px;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  opacity: 0;
  pointer-events: none;
  visibility: hidden;

  ${({ show }) =>
    !!show &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`

type ErrorMessageProps = {
  show: boolean
}

export const ErrorMessage = styled.span<ErrorMessageProps>`
  z-index: 1100;
  position: absolute;
  background-color: var(--white);
  color: var(--black);
  padding: var(--small);
  border-radius: 0.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);

  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transition: transform 0.2s ease-in, opacity 0.3s ease-in-out;
  transform: translateY(-2rem);

  ${({ show }) =>
    !!show &&
    css`
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
    `}
`
