//获取接口数据
import { useState, useEffect } from 'react';

function Son() {
  // 渲染时开启一个定时器
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('定时器执行中...')
    }, 1000)
    return () => {
      // 清除副作用
      clearInterval(timer)
    }
  }, [])
  return <div>this is son</div>
}
function App() {
  const [show, setShow] = useState(true)
  return (
    <div>
      {show && <Son />}
      <button onClick={() => setShow(false)}>卸载组件</button>
    </div>
  )
}
export default App;
