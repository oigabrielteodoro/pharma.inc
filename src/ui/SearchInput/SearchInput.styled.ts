import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.fieldset`
  border: 0;
  background: ${theme.colors.gray[50]};
  border-radius: ${theme.radius.medium};
  height: 4.2rem;
  display: flex;
  border: 0.1rem solid rgba(0, 0, 0, 0.06);

  input {
    border: 0;
    background: transparent;
    flex: 1;
    padding: ${theme.spacing[3]};
    color: ${theme.colors.gray[400]};
    min-width: 30rem;
  }

  button {
    border: 0;
    border-left: 0.1rem solid rgba(0, 0, 0, 0.06);
    width: 4.2rem;
    background: transparent;
    color: ${theme.colors.gray[400]};
  }
`
