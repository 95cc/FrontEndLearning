import React, { useState, useEffect } from 'react'
import { Button } from 'antd'

interface Gretting {
  name: string
  firstName?: string
  lastName?: string
}

// 函数组件
const HelloHooks = (props: Gretting) => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState<string | null>(null)

  useEffect(() => {
    if (count > 5) {
      setText('休息一下')
    }
  }, [count])

  return (
    <>
      <p>你点击了 {count} 次</p>
      <Button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Hooks: Hello {props.name} {text}
      </Button>
    </>
  )
}

HelloHooks.defaultProps = {
  firstName: '',
  lastName: '',
}

export default HelloHooks
