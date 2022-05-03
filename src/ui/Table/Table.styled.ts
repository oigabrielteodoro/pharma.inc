import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.table`
  background: ${theme.colors.white};
  table-layout: auto;
  width: 100%;
  text-align: left;
  border-radius: 0.2rem 0.2rem 0 0;
  border-collapse: separate;
  border-spacing: 0;
  font-feature-settings: 'tnum';
  font-size: ${theme.font.sizes.small};
  font-variant: tabular-nums;

  th {
    font-weight: 500;
    text-align: left;
    background: ${theme.colors.gray[50]};
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.06);
    transition: background 0.3s ease;
    overflow-wrap: break-word;
    padding: ${theme.spacing[3]};
    position: relative;
    color: ${theme.colors.gray[500]};
    width: 40rem;
  }

  td {
    overflow-wrap: break-word;
    padding: ${theme.spacing[3]};
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.06);
  }

  tbody tr {
    transition: background 300ms;

    &:hover {
      background: ${theme.colors.gray[50]};
    }
  }
`
