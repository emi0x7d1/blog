import { ReactNode } from 'react'

export interface DetailsProps {
  summary: string
  children?: ReactNode
}
export function Details(props: DetailsProps) {
  return (
    <details>
      <summary style={{ fontWeight: '700' }}>{props.summary}</summary>
      {props.children}
    </details>
  )
}
