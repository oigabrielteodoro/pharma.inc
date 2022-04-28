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

export const Avatar = styled.div`
  color: ${theme.colors.indigo[500]};
  border-radius: ${theme.radius.medium};
  background: ${theme.colors.indigo[50]};
  width: 5rem;
  height: 5rem;
  display: grid;
  place-items: center;
`
