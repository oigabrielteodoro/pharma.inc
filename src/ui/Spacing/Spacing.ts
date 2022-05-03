import { CSSProperties, cloneElement, ReactElement } from 'react'

type Props = { children: ReactElement } & Pick<
  CSSProperties,
  | 'margin'
  | 'marginLeft'
  | 'marginTop'
  | 'marginBottom'
  | 'marginRight'
  | 'padding'
  | 'paddingLeft'
  | 'paddingTop'
  | 'paddingBottom'
  | 'paddingRight'
>

export function Spacing({ children, ...props }: Props) {
  return cloneElement(children, {
    style: props,
  })
}
