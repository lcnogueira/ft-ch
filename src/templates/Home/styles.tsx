import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Spinner = styled.div`
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
`
