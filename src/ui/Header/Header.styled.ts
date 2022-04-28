import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.header`
  background: ${theme.colors.white};
  box-shadow: ${theme.shadow.medium};
  padding: ${theme.spacing[3]};
`

export const Content = styled.div`
  max-width: ${theme.grid.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.h1`
  color: ${theme.colors.gray[700]};
  font-size: ${theme.font.sizes.subtitle};

  span {
    color: ${theme.colors.indigo[500]};
  }
`

export const User = styled.div`
  display: flex;
  align-items: center;

  .userInfo {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-right: ${theme.spacing[3]};

    strong {
      font-weight: 500;
      font-size: ${theme.font.sizes.small};
    }

    small {
      margin-top: 0.4rem;
      color: ${theme.colors.gray[400]};
      font-size: ${theme.font.sizes.disclaimer};
    }
  }
`

export const Avatar = styled.div`
  color: ${theme.colors.indigo[500]};
  border-radius: ${theme.radius.medium};
  background: ${theme.colors.indigo[50]};
  width: 5rem;
  height: 5rem;
  display: grid;
  place-items: center;
`
