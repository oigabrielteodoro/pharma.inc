import { theme } from 'config'
import styled from 'styled-components'

export const Container = styled.main`
  max-width: ${theme.grid.maxWidth};
  margin: 10rem auto;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
