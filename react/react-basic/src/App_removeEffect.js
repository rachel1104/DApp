// import logo from './logo.svg';
import './App.css';
import './index.css'
import { useState } from 'react'
// 项目的根组件 -> indexedDB.js -> public / index.html
function getName() {
  return 'jack'
}
function Button() {
  return <button>click me!</button>
}
const list = [
  { id: 1001, name: 'Vue' },
  { id: 1002, name: 'React' },
  { id: 1001, name: 'Angular' }
]
const isLogin = false
const articleType = 1
function getArticleTeam() {
  if (articleType === 0) {
    return <div>我是无图模式</div>
  } else if (articleType === 1) {
    return <div>我是单图模式</div>
  } else {
    return <div>我是三图模式</div>
  }
}

function App() {
  // const handleClick = (e) => {
  //   console.log('button被点击了', e)
  // }
  const [count, setCount] = useState(0)
  // const handleClick = (name, e) => {
  //   console.log('button被点击了', name, e)
  // }
  const handleClick = () => {
    setCount(count + 1)
  }
  const [form, setForm] = useState({ name: 'jack' })
  const changeForm = () => {
    setForm({
      ...form,
      name: 'john'
    })
  }
  return (
    <div>
      <button onClick={handleClick}>{count}</button>
      <button onClick={changeForm}>修改form{form.name}</button>
      <span className="foo">this is class foo</span>
    </div>
  );
}

export default App;
