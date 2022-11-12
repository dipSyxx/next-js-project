import { type } from 'os'
import React from 'react'

type HeadingProps = {
    text?: string
    tag?:string
}

export const Heading = ({text,tag}:HeadingProps) => {
    const Tag:any = tag || "h1"
  return (
    <div>
        <Tag>{text}</Tag>
    </div>
  )
}

export default Heading