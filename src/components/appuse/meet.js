import React from 'react'
import Header from '../header'

function Meet() {
  return (
    <div>
      <Header />
      <div className='artcontent'>
        <div>
          <h1 className='tx'>
            Google Meetの使い方
          </h1>
          <div className='centerer'>
            <div className='tableContainer'>
              <h2 className='tx'>
                目次
              </h2>
              <p></p>
              <ul className='table'>
                <li><a href="#meetCom">コメントについて</a></li>
                <li><a href="#meetRay">レイアウト変更について</a></li>
                <li><a href="#meetIns">カメラ、マイクの設定について</a></li>
                <li><a href="#meetShare">画面共有について</a></li>
              </ul>
            </div>
          </div>
          <div className='tx'>
            <h2 id="meetCom">
              1:コメントについて
            </h2>
            <p>
              この写真の１番を見てください
              <br/>
              ここを押すことでコメントを開くことができ、
              他の人のコメントを見たり、コメントを送ったりできます
            </p>
            <img 
              src="./artimg/meet.png"
              width="50%"
              height="50%"
              className='img'
              alt="">
            </img>
          </div>
          <div className='tx'>
            <h2 id="meetRay">
              2:レイアウト変更について
            </h2>
            <p>
              写真の２番を見てください
              <br/>
              ここを押すことで様々なことができますが、
              一番上の「レイアウトを変更を押してみましょう」
            </p>
            <img 
              src="./artimg/meetRayout.png"
              width="50%"
              height="50%"
              className='img'
              alt="">
            </img>
            <p>
              全員が見たければ「タイル表示」
              <br/>
              誰か一人に注目したければ「スポットライト」か
              「サイドバー」がおすすめです
            </p>
          </div>
          <div className='tx'>
            <h2 id="meetIns">
              3:カメラ、マイクの設定について
            </h2>
            <p>
              同じく２番の一番下、設定から
              使用するカメラとマイクの設定ができます
              <br/>
              ON,OFFのボタンは元の画面の中央のアイコン達の左2つです
            </p>
            <img 
              src="./artimg/meetMicro.png"
              width="50%"
              height="50%"
              className='img'
              alt="">
            </img>
          </div>
          <div className='tx'>
            <h2 id="meetShare">
              4:画面共有について
            </h2>
            <p>
              写真の4番を見てください
              <br/>
              ここを押すことであなたの画面を
              他の会議の参加者に見せることができます
              <br/>
              <br/>
              上のバーから共有範囲を選ぶことができます
              <br/>
              1つのタブだけを見せたいなら「Chromeタブ」
              <br/>
              画面全体を見せたいのなら「画面全体」にしましょう
              <br/>
              特にこだわりが無いなら「画面全体」にするのがおすすめです
            </p>
          </div>
          <div className='author'>
            <p>著:Mira</p>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Meet
