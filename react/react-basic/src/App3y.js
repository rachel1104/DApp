//自定义Hook
// 封装自定义hook通用思路
// 1.声明以use打头的函数
// 2.在函数体内封装可复用的逻辑（只要是可复用的逻辑）
// 3.把组件中用到的状态或者回调return出去
// 4.在每个组件中药用到这个逻辑，执行这个函数，结构出来状态和回调进行使用
import { useState, useEffect } from 'react';

function useToggle() {
  const [value, setValue] = useState(true)
  const toggle = () => setValue(!value)
  return {
    value,
    toggle
  }
}
function App() {
  const { value, toggle } = useToggle()
  return (
    <div>
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  )
}
export default App;
