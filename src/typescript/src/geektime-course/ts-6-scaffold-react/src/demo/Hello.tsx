import React from 'react'
import { Button } from 'antd'

interface Gretting {
  name: string
  firstName?: string
  lastName?: string
}

// const Hello = (props: Gretting) => {
//   return <Button>Hello {props.name}</Button>
// }

// 函数组件
const Hello: React.FC<Gretting> = ({ name, firstName, lastName }) => (
  <Button>
    Hello {name} {firstName} {lastName}
  </Button>
)

Hello.defaultProps = {
  firstName: '',
  lastName: '',
}

export default Hello
