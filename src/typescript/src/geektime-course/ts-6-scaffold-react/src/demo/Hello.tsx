import React from 'react'
import { Button } from 'antd'

interface Gretting {
  name: string
}

const Hello = (props: Gretting) => {
  return <Button>Hello {props.name}</Button>
}

export default Hello
