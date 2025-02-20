import './App.css';
import './index.css'
import { useState, useRef } from 'react'
import _ from 'lodash'
import classnames from 'classnames'
import { v4 as uuidV4 } from 'uuid'
import dayjs from 'dayjs'
const list = [
  {
    rpid: 3,
    user: {
      uid: '13258165',
      avatar: './image.png',
      uname: '周杰伦',
    },
    content: "adfawesfd",
    ctime: "2024-10-14 13:12:12",
    like: 16
  },
  {
    rpid: 2,
    user: {
      uid: '13258165',
      avatar: './image.png',
      uname: '周杰伦',
    },
    content: "adfawesfd",
    ctime: "2024-10-16 13:12:12",
    like: 11
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar: './image.png',
      uname: '前端',
    },
    content: "adfawesfd",
    ctime: "2024-10-13 13:12:12",
    like: 13
  }
]
const user = {
  uid: '30009257',
  avatar: '',
  uname: '前端'
}
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' }
]
function App() {
  // 渲染评论列表
  const [commentList, setCommentList] = useState(_.orderBy(list, 'like', 'desc'))
  // 删除功能
  const handleDel = (id) => {
    setCommentList(
      commentList.filter(item => item.rpid !== id)
    )
  }
  // tab切换功能
  const [type, setType] = useState('hot')
  const handleTabChange = (type) => {
    setType(type)
    //排序功能
    if (type === 'hot') {
      // 根据点赞数排序
      setCommentList(_.orderBy(commentList, 'like', 'desc'))
    } else {
      // 根据创建时间排序
      setCommentList(_.orderBy(commentList, 'ctime', 'desc'))
    }
  }
  // 发表评论
  const [content, setContent] = useState('')
  const inputRef = useRef(null)
  const handlePublish = () => {
    setCommentList([
      ...commentList,
      {
        rpid: uuidV4(),  //随机id
        user: {
          uid: '30009257',
          avatar: './image.png',
          uname: '前端',
        },
        content: content,
        ctime: dayjs(new Date()).format('MM-DD hh:mm'),  //格式化
        like: 13
      }
    ])
    // 清空输入框中内容
    setContent('')
    // 重新聚焦
    inputRef.current.focus()
  }
  return (
    <div className="app">
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <h4 className="nav-title-text">评论</h4>
            <span className="total-reply">(10)</span>
          </li>
          <li className="nav-sort">
            {/* {tabs.map(item => <span key="item.type" className={`nav-item ${type === item.type && 'active'}`} onClick={() => handleTabChange(item.type)}>{item.text}</span>)} */}
            {tabs.map(item => <span key="item.type" className={classnames('nav-item', { active: type === item.type })} onClick={() => handleTabChange(item.type)}>{item.text}</span>)}

          </li>
        </ul>
      </div>
      <div className="comment">
        <textarea placeholder='发一条评论' value={content} onChange={(e) => setContent(e.target.value)} ref={inputRef}></textarea>
        <button onClick={handlePublish}>发 布</button>
      </div>
      <div class="reply-wrap">
        <div className="box-normal">
        </div>
        <div className="replay-list">
          {commentList.map(item => (
            <div key={item.rpid} className="reply-item">
              <div className="root-reply-avator">
                <div className="bili-avatar">
                  {/* <span>{item.rpid}</span> */}
                  <img className="bili-avator-img" alt="" src={item.user.avatar} />
                </div>
              </div>
              <div className="content-wrap">
                <div className="user-info">
                  <div className="user-name">
                    {item.user.uname}
                  </div>
                  <div className="root-reply">
                    <span class="reply-content">{item.content}</span>
                    <div className="reply-info">
                      <span className="reply-time">{item.ctime}</span>
                      <span className="reply-like">点赞数:{item.like}</span>
                      {user.uid === item.user.uid && <button className="delete-btn" onClick={() => handleDel(item.rpid)}>删除</button>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
