import React from 'react'
import Header from '../header'

function Spreadsheet() {
  return (
    <div>
      <Header/>
      <div className="artcontent">
        <div>
          <h1 className='tx'>
            Googleスプレッドシートの使い方
          </h1>
          <div className='centerer'>
            <div className='tableContainer'>
              <h2 className='tx'>
                目次
              </h2>
              <p></p>
              <ol>
                <li>
                  <a href="#first">Googleスプレッドシートとは</a>
                </li>
                <li>
                  <a href="#second">Googleスプレッドシートの特徴</a>
                  <ol>
                    <li><a href="#second-first">Webブラウザ上で図表作成・表計算ができる</a></li>
                    <li><a href="#second-second">同時編集で複数人作業を効率的に行える</a></li>
                    <li><a href="#second-third">コメントで確認・修正のコミュニケーションを取れる</a></li>
                    <li><a href="#second-fourth">Excelファイルをそのまま編集できる</a></li>
                    <li><a href="#second-fifth">PDFやCSVでの書き出しも可能</a></li>
                  </ol>
                </li>
                <li>
                  <a href="#third">Googleスプレッドシートの使い方:作成・Excelの変換</a>
                  <ol>
                    <li><a href="#third-first">新規スプレッドシートの作成</a></li>
                    <li><a href="#third-second">Excelファイルをアップロードしてスプレッドシートに変換</a></li>
                  </ol>
                </li>
                <li>
                  <a href="#fourth">Googleスプレッドシートの使い方:共有・共同編集</a>
                  <ol>
                    <li><a href="#fourth-first">他のユーザーと共有する</a></li>
                    <li><a href="#fourth-second">コメント機能でコミュニケーションを取る</a></li>
                    <li><a href="#fourth-third">編集履歴で編集前の状態に戻す</a></li>
                  </ol>
                </li>
                <li>
                  <a href="#fifth">Googleスプレッドシートの使い方:保存・書き出し</a>
                  <ol>
                    <li><a href="#fifth-first">Excel形式やPDF・CSVファイルとして保存</a></li>
                  </ol>
                </li>
                <li>
                  <a href="#six">スマホでの利用</a>
                </li>
              </ol>
            </div>
          </div>
          <div class="tx">
            <h2 id="first">1:Googleスプレッドシートとは</h2>
            <p></p>
            <p>Google が提供する、オンラインでリアルタイムによる共同編集が可能な表計算ソフト</p>
            <p>Google スプレッドシートは、Google Workspace のGoogle ドライブの中で作成できる、Google アカウントを持っていれば、無料で利用することができる。</p>
            <p>「クラウド版(オンライン版)エクセル」のようなもの</p>
            <p>Googleスプレッドシート:<a href="https://www.google.com/intl/ja_jp/sheets/about/">Google Sheets: オンライン スプレッドシート エディタ</a></p>
          </div>
          <div class="tx">
            <h2 id="second">2:Googleスプレッドシートの特徴</h2>
            <p></p>
            <h3 id="second-first">Webブラウザ上で図表作成・表計算ができる</h3>
            <p>Microsoft Excelのような図表作成・表計算をオンラインで行うことができる。</p>
            <p>ブラウザ上で動くため、Windows,Mac,Linux,ChromebookなどOSを問わずに編集することができる。</p>
            <p>また、スマートフォンでもアプリを利用することで閲覧・編集をすることが可能。</p>
            <h3 id="second-second">同時編集で複数人作業を効率的に行える</h3>
            <p>複数人で同時編集できることがGoogleスプレッドシートの大きな利点。</p>
            <p>詳しくは「Googleスプレッドシートの使い方:共有・共同編集」で解説</p>
            <h3 id="second-third">コメントで確認・修正のコミュニケーションを取れる</h3>
            <p>シート内のコメント機能を利用することで同時に作業している人とコミュニケーションをとることができる。</p>
            <p>セルを指定してコメントを付与し、コミュニケーションを取ることができる。</p>
            <h3 id="second-fourth">Excelファイルをそのまま編集できる</h3>
            <p>Microsoft Excelのファイルを変換せず、Excelファイルのまま編集することができる。</p>
            <p>Googleスプレッドシートで作成したシートをExcelとしてダウンロードすることも可能。</p>
            <h3 id="second-fifth">PDFやCSVでの書き出しも可能</h3>
            <p>microsoft Excel形式の他、PDFやCSV形式で書き出すこともできる。</p>
            <p>詳しくは「Googleスプレッドシートの使い方:保存・書き出し」の項目で解説</p>
          </div>
          <div class="tx">
            <h2 id="third">3:Googleスプレッドシートの使い方:作成・Excelの変換</h2>
            <p></p>
            <p>基本的にPCでの方法を解説する。</p>
            <h3 id="third-first">新規スプレッドシートの作成</h3>
            <p>新規スプレッドシートはGoogleドライブもしくはスプレッドシートアプリから行う。</p>
            <p>Excelファイルを編集する場合はGoogleドライブの「ファイルをアップロード」からかドラッグ＆ドロップしてアップロードできる。</p>
            <p>利用しているブラウザがGoogle Chromeであればアドレスバーに「sheet.new」入力しEnterを押すことでも作成可能。</p>
            <p>Googleドライブから新規シートを作成する手順は以下の通り</p>
            <p>1. Google ドライブのホーム画面から、左上の「新規」をクリック。</p>
            <img 
              src="./artimg/spF1.png"
              width="50%"
              height="50%"
              className='img'
              alt="">
            </img>
            <p>2.「 Google スプレッドシート 」を選択</p>
            <img 
              src="./artimg/spF2.png"
              width="50%"
              height="50%"
              className='img'
              alt="">
            </img>
            <h3 id="third-second">Excelファイルをアップロードしてスプレッドシートに変換</h3>
            <p>GoogleスプレッドシートはExcelファイルを取り扱うこともできる。</p>
            <p>ExcelファイルをGoogleドライブに保存しGoogleドライブから開くだけで特殊な操作をせずに編集できる。</p>
            <p>
              基本的にはダブルクリックで開くことができる。開けなかった場合でもファイルを右クリックし、
              <br/>
              「アプリで開く」→「Googleスプレッドシート」を選択すると自動でファイルが変換されて開くことができる。
            </p>
            <img 
              src="./artimg/spF3.png"
              width="50%"
              height="50%"
              className='img'
              alt="">
            </img>
          </div>
          <div>
            <div className='tx'>
              <h2 id="fourth">4:Googleスプレッドシートの使い方:共有・共同編集</h2>
              <p></p>
              <h3 id="fourth-first">他のユーザーと共有する</h3>
              <p>Googleスプレッドシートでは他のユーザーとシートを共有し、共同編集することができる。</p>
              <p>Googleスプレッドシートを共有する手順は以下の通り</p>
              <p>1.シートの編集画面で右上の「共有」をクリック</p>
              <img 
                src="./artimg/spF4.png"
                width="50%"
                height="50%"
                className='img'
                alt="">
              </img>
              <p>2. 共有したい相手の Gmail アドレスを入力し、「完了」をクリック</p>
              <img 
                src="./artimg/spF5.png"
                width="50%"
                height="50%"
                className='img'
                alt="">
              </img>
              <p>
                また上記画面で左下の「リンクをコピー」をクリックすればシートのURLをコピーできる。
                <br/>
                コピーしたURLをLINEなどで相手に伝えれば、シートを共有することができる。
                <br/>
                この時「一般的なアクセス」を「制限付き」ではなく「リンクを知っている全員」などにする。
              </p>
              <p>Googleスプレッドシートの共有権限は以下の3種類</p>
            </div>
            <div className='centerer'>
              <div className='tableContainer2'>
                <ul className='table'>
                  <li>閲覧者</li>
                  <li>閲覧者(コメント可)</li>
                  <li>編集者</li>
                </ul>
              </div>
            </div>
            <div className='tx'>
              <p>それぞれ各アカウント言に権限を設定することができる。</p>
              <p>※リンクでの共有の場合権限は一括変更される。</p>
              <h3 id="fourth-second">コメント機能でコミュニケーションを取る</h3>
              <p>コメントをつけたい場所を選択し、右クリックして「コメント」をクリックすると、その位置にコメントを入力できる。</p>
              <img 
                src="./artimg/spF6.png"
                width="50%"
                height="50%"
                className='img'
                alt="">
              </img>
              <p>コメントは追記や返信を行うことができるためシート上で簡単なでディスカッションを行える。</p>
              <h3 id="fourth-third">編集履歴で編集前の状態に戻す</h3>
              <p>Googleスプレッドシートの共同編集では誰かが間違って編集してしまう可能性がある。</p>
              <p>そこで役に立つのが「変更履歴」機能。</p>
              <p>Googleスプレッドシートではある程度の間隔で文書の変更履歴が自動保存されており、元に戻したいバージョンに戻すことで編集を無かったことにできる。</p>
              <p>変更履歴画面は、「ファイル」→「変更履歴」→「変更履歴を表示」で確認可能</p>
              <img 
                src="./artimg/spF7.png"
                width="50%"
                height="50%"
                className='img'
                alt="">
              </img>
              <p></p>
              <img 
                src="./artimg/spF8.png"
                width="50%"
                height="50%"
                className='img'
                alt="">
              </img>
              <p>この画面から戻したいバージョンを選択することで復元できる。</p>
            </div>
          </div>
          <div>
            <div className='tx'>
              <h2 id="fifth">Googleスプレッドシートの使い方:保存・書き出し</h2>
              <p></p>
              <p>Googleスプレッドシートで作成したシート(ファイル)はクラウド(オンライン)上に自動保存されるため保存作業は不要。</p>
              <p>ローカルファイルとして取り扱いたい場合は以下の用に形式を買えて書き出すことが可能。</p>
              <h3 id="fifth-first">Excel形式やPDF・CSVファイルとして保存</h3>
              <p>Googleスプレッドシートは以下の形式に変換してダウンロードできる。</p>
            </div>
            <div className='centerer'>
              <div className='tableContainer2'>
                <ul className='table'>
                  <li>Microsoft Excel(.xlsx)</li>
                  <li>OpenDocument(.ods)</li>
                  <li>PDF(.pdf)</li>
                  <li>ウェブページ(.html)</li>
                  <li>カンマ区切り形式(.csv)</li>
                  <li>タブ区切り形式(.tsv)</li>
                </ul>
              </div>
            </div>
            <div className='tx'>
              <p>異なる形式に変換して書き出すには、画面上部メニューの[ファイル]→[ダウンロード]から、該当する形式を選択</p>
              <img 
                src="./artimg/spF9.png"
                width="50%"
                height="50%"
                className='img'
                alt="">
              </img>
              <p>※CSV形式に関してはシート単位でのダウンロードしかできないので注意</p>
            </div>
          </div>
          <div class="tx">
            <h2 if="six">スマホでの利用</h2>
            <p></p>
            <p>GoogleスプレッドシートはiPhoneやAndroidなどのスマートフォンからも公式アプリを利用することで利用可能。</p>
            <p>使い方は基本的に同じだがスマホは画面が小さいため本格的な編集には向かないので、確認や簡単な修正に向いている。</p>
            <p>アプリのリンク</p>
            <p>Android:<a href="https://play.google.com/store/apps/details?id=com.google.android.apps.docs.editors.sheets">Google スプレッドシート - Google Play のアプリ</a></p>
            <p>iPhone:<a href="https://apps.apple.com/jp/app/google-%E3%82%B9%E3%83%97%E3%83%AC%E3%83%83%E3%83%89%E3%82%B7%E3%83%BC%E3%83%88/id842849113">「Google スプレッドシート」をApp Storeで</a></p>
          </div>
          <div className='author'>
            <p>著:かきのたね</p>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Spreadsheet
