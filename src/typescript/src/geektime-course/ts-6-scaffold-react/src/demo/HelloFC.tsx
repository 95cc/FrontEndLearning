import React from 'react'
import { Button } from 'antd'

interface Gretting {
  name: string
  firstName?: string
  lastName?: string
}

// 函数组件
const HelloFC: React.FC<Gretting> = ({ name, firstName, lastName }) => (
  <Button>
    函数组件：Hello {name} {firstName} {lastName}
  </Button>
)

HelloFC.defaultProps = {
  firstName: '',
  lastName: '',
}

export default HelloFC
