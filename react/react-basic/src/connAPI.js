//获取接口数据
import { useState, useEffect } from 'react';
const URL = 'http://geek.itheima.net/v1_0/channels'

function App() {
  // 创建一个状态数据
  const [list, setList] = useState([])
  useEffect(() => {
    async function getList() {
      const res = await fetch(URL)
      const jsonRes = await res.json()
      console.log(jsonRes)
      setList(jsonRes.data.channels)
    }
    getList()
  }, [])
  return (
    <div>
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}
export default App;
