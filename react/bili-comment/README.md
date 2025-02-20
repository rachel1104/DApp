工具：lodash     npm i --save lodash
安装classnames    npm install classnames
安装uuid   npm install uuid
安装Day.js   npm install dayjs
安装json-server   npm install -g json-server
安装axios    npm install axios
1.渲染评论列表  
    1.使用useState维护评论列表
    2.使用map方法对列表数据进行遍历渲染（加key）
2.删除评论实现
    1.只有自己的评论才能删除  
    {user.uid === item.user.uid && <button className="delete-btn">删除</button>}
    2.点击删除按钮，删除当前评论，列表中不再显示
    const handleDel = (id) => {
    setCommentList(
      commentList.filter(item => item.rpid !== id)
    )
  }
  {user.uid === item.user.uid && <button className="delete-btn" onClick={() => handleDel(item.rpid)}>删除</button>}
3.渲染导航Tab和高亮实现
    点击哪个tab，哪个做高亮处理
    点击谁就把谁的type记录下来，然后和遍历时的每一项的type做匹配
    const [type, setType] = useState('hot')
  const handleTabChange = (type) => {
    setType(type)
  }
    {tabs.map(item => <button key="item.type" className={`nav-item ${type === item.type && 'active'}`} onClick={() => handleTabChange(item.type)}>{item.text}</button>)}
4.评论列表排序功能实现
    点击最新，评论列表阿钊创建时间倒序排列
    点击最热，按照点赞数量排列
5.点击发布按钮发布评论
  获取评论内容
  点击发布按钮发表评论
6. id处理和时间处理
  rpid要求一个唯一的随机id --uuid
  ctime要求以以前的时间为标准，生成固定格式dayjs

7.发表后文本框清空，聚焦

8.优化
  使用请求接口的方式获取评论列表并渲染
  使用自定义Hook函数封装数据请求的逻辑
  把评论中的每一项抽象成一个独立的组件实现渲染

9. 优化-自定义Hook函数封装数据请求
  1.编写一个use打头的函数
  2.函数内部编写封装逻辑
  3.return出去组件中用到的状态和方法
  4.组件中调用函数结构赋值使用
