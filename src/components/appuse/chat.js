import React from 'react'
import Header from '../header'

function Chat() {
  return (
    <div>
      <Header/>
      <div className='artcontent'>
        <div>
          <h1 className='tx'>
            Google Chatの使い方
          </h1>
          <div className='centerer'>
            <div className='tableContainer'>
              <h2 className='tx'>
              目次
              </h2>
              <p></p>
              <ul className='table'>
              <li><a href="#chatDirect">ダイレクトメッセージについて</a></li>
              <li><a href="#chatSpace">スペースについて</a></li>
              </ul>
            </div>
          </div>
          <div className='tx'>
            <h2 id="chatDirect">
              1:ダイレクトメッセージについて
            </h2>
            <p>
              左上の「チャットを新規作成」を押してください
            </p>
            <img 
              src="./artimg/Newchat.png"
              width="50%"
              height="50%"
              className='img'
              alt="">
            </img>
            <p>
              ここに個人間のメッセージを送りたい相手のメールアドレスを入力すると、その相手とチャットをすることができます
            </p>
            <p>
              入力する際には@は外しましょう
            </p>
            <img 
              src="./artimg/chatDirect.png"
              width="50%"
              height="50%"
              className='img'
              alt="">
            </img>
          </div>
          <div className='tx'>
            <h2 id="chatSpace">
              2:スペースについて
            </h2>
            <p>
              上の写真の「スペースを作成」を押すことで、複数人で会話するグループを作ることができます
            </p>
            <p>
              スペースではファイルを共有したり、一人一人にタスクを割り振ることができます
            </p>
            <img 
              src="./artimg/chatSpace.png"
              width="50%"
              height="50%"
              className='img'
              alt="">
            </img>
            <p>
              タスクでは要件と担当する人、締め切りを決めることができます
            </p>
            <img 
              src="./artimg/chatTask.png"
              width="50%"
              height="50%"
              className='img'
              alt="">
            </img>
          </div>
          <div className='author'>
            <p>著:Mira</p>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Chat


