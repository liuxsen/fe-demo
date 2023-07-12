import type { PropsWithChildren } from 'react'

interface Props {
  onClick?: () => void
}

export const Button = (props: PropsWithChildren<Props>) => {
  return <button onClick={props.onClick}>
    {props.children}
  </button>
}
