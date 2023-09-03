import React from 'react'

interface Gretting {
  name: string
}

const Hello = (props: Gretting) => {
  return <h1>Hello {props.name}</h1>
}

export default Hello
