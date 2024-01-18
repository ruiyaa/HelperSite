import React from 'react'
import Header from '../header'

function Form() {
  return (
    <div>
        <Header/>
        <div className='artcontent'>
            <div>
                <h1 className='tx'>
                    Google Formの使い方
                </h1>
                <div className='centerer'>
                    <div className='tableContainer'>
                        <h2 className='tx'>
                            目次
                        </h2>
                        <p></p>
                        <ul className='table'>
                            <li><a href="#formNew">新しい質問の追加について</a></li>
                            <li><a href="#formChange">質問方法の変化について</a></li>
                            <li><a href="#formPic">写真の追加について</a></li>
                            <li><a href="#formSta">回答の見方</a></li>
                        </ul>
                    </div>
                </div>
                <div className='tx'>
                    <h2 id="formNew">
                        1:新しい質問の追加について
                    </h2>
                    <p>
                        この写真の１番を見てください
                        <br/>
                        ここを押すことで新たな質問を追加できます
                        <br/>
                        また2番で質問の内容を記述でき、
                        3番で選択肢を加えることができます
                    </p>
                    <img 
                        src="./artimg/formMenu.png"
                        width="50%"
                        height="50%"
                        className='img'
                        alt=""
                    >
                    </img>
                </div>
                <div className='tx'>
                    <h2 id="formChange">
                        2:質問方法の変化について
                    </h2>
                    <p>
                        写真の3番を見てください
                        <br/>
                        ここから質問方法を変えることができます

                    </p>
                    <img 
                        src="./artimg/howToAsk.png"
                        width="50%"
                        height="50%"
                        className='img'
                        alt=""
                    >
                    </img>
                    <p>デフォルトはラジオボタンです
                        <br/>
                        いくつかの中から１つを選ぶものですね
                        <br/>
                        <br/>
                        チェックボックスはそれを複数選択可にしたもので
                        <br/>
                        プルダウンはこのように縦に候補が出てくるものです
                    </p>
                    <img 
                        src="./artimg/pullform.png"
                        width="50%"
                        height="50%"
                        className='img'
                        alt=""
                    >
                    </img>
                    <p>
                        記述式や段落にすると意見を記述式で集められます
                        <br/>
                        段落の方が長く書けますが、
                        基本的には記述式でいいと思います
                    </p>
                </div>
                <div className='tx'>
                    <h2 id="formPic">
                        3:写真の追加について
                    </h2>
                    <p>
                        写真の5番を見てください
                        <br/>
                        ここを押すことで質問にを追加できます
                        <br/>
                        回答者にはこのように表示されます
                    </p>
                    <img 
                        src="./artimg/formPic.png"
                        width="50%"
                        height="50%"
                        className='img'
                        alt=""
                    >
                    </img>
                </div>
                <div className='tx'>
                    <h2 id="formSta">
                        4:回答の見方
                    </h2>
                    <p>
                        一番上のタブを見てください
                        <br/>
                        ここで質問の回答を見ることができます
                    </p>
                    <img 
                        src="./artimg/formAnswer.png"
                        width="50%"
                        height="50%"
                        className='img'
                        alt=""
                    >
                    </img>
                    <p>結果はこのようなグラフで表示されます</p>
                    <img 
                        src="./artimg/formAnswerFigure.png"
                        width="50%"
                        height="50%"
                        className='img'
                        alt=""
                    >
                    </img>
                    <p>「スプレッドシートにリンク」をクリックしてスプレッドシートに結果を記録させることもできます</p>
                    <p>スプレッドシートで処理をするとアンケートの結果を必要な条件で取り出したりなど、
                        さらに多様な操作ができます
                    </p>
                    <img 
                        src="./artimg/formSpread.png"
                        width="50%"
                        height="50%"
                        className='img'
                        alt=""
                    >
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

export default Form
