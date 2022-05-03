import styled, { CSSProperties } from 'styled-components'
import { theme } from 'config'

export const Card = styled.div.attrs((props) => ({
  style: props,
}))<CSSProperties>`
  background: ${theme.colors.white};
  border-radius: ${theme.radius.medium};
  padding: ${theme.spacing[6]};

  .cardTitle {
    font-weight: 600;
    font-size: ${theme.font.sizes.paragraph};
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacing[3]};

    span {
      font-size: ${theme.font.sizes.paragraph};
      color: ${theme.colors.gray[500]};
    }
  }

  .cardDescription {
    margin-bottom: ${theme.spacing[5]};
    color: ${theme.colors.gray[400]};
  }
`
