import { theme } from 'config'
import styled from 'styled-components'
import { variant } from 'styled-system'

type Props = {
  variant: 'icon' | 'text'
}

export const Button = styled('button')<Props>(
  {
    transition: 'filter 300ms',
    border: 0,
    borderRadius: theme.radius.medium,
    display: 'grid',
    placeItems: 'center',

    '&:hover': {
      filter: 'brightness(0.95)',
    },
  },
  variant({
    variants: {
      icon: {
        height: '3.2rem',
        width: '3.2rem',
        color: theme.colors.gray[400],
        background: theme.colors.gray[100],
      },
      text: {
        width: '100%',
        height: '4.2rem',
        color: theme.colors.white,
        background: theme.colors.indigo[500],
      },
    },
  }),
)
