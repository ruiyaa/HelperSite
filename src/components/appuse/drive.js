import React from 'react'
import Header from '../header'

function Drive() {
  return (
    <div>
      <Header />
      <div className='artcontent'>
        <div>
          <h1 className='tx'>
            Google ドライブの使い方
          </h1>
          <div className='centerer'>
            <div className='tableContainer'>
              <h2 className='tx'>
                目次
              </h2>
              <p></p>
              <ul className='table'>
                <li><a href="#driveAbout">Google Driveとは</a></li>
                <li><a href="#driveAccess">Google Driveへのアクセス</a></li>
                <li><a href="#driveSerch">検索機能</a></li>
                <li><a href="#driveUpload">ファイル・フォルダのアップロード</a></li>
                <li><a href="#driveFolder">フォルダを作成してファイルを格納する</a></li>
                <li><a href="#driveShare">ファイル・フォルダを共有する</a></li>
                <li><a href="#drivelast">残りのストレージ容量を確認する</a></li>
                <li><a href="#driveUpgrade">Google Driveの容量を増やす</a></li>
                <li><a href="#shareDrive">共有ドライブについて</a></li>
                <li><a href="#driveDif">共有ドライブとマイドライブの違い</a></li>
              </ul>
            </div>
          </div>
          <div className="tx">
            <h2 id="driveAbout">1:Google Driveとは</h2>
            <p>Googleが提供するクラウドストレージ。</p>
            <p>
              お使いのモバイル デバイス、タブレット、パソコンから、ファイルやフォルダを保存、共有、共同編集できます。
            </p>
            <p>
              引用元:
              <a href="https://www.google.com/intl/ja_jp/drive/">
              個人向けのクラウド ストレージおよびファイル共有プラットフォーム - Google
              </a>
            </p>
          </div>
          <div className="tx">
            <h2 id="driveAccess">2:Google Driveへのアクセス</h2>
            <p>Google DriveへのアクセスのURL</p>
            <a href="https://drive.google.com/drive/">https://drive.google.com/drive/</a>
            <p>Google Driveにアクセスすると、最近使ったファイルやフォルダが表示される。</p>
            <img               
              src="./artimg/f1.png"
              width="50%"
              height="50%"
              className='img'
              alt=""
            >
            </img>
            <p>Google Driveの利用にはGoogleアカウントが必要となるので持っていない場合は以下のURLから作成しよう。</p>
            <a href="https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp">
              Googleアカウントの作成
            </a>
          </div>
          <div className="tx">
            <h2 id="driveSerch">3:検索機能</h2>
            <p>ファイル名を入力して検索。</p>
            <img src="./artimg/f2.png" alt="">
            </img>
            <p>「ドライブで検索」の隣をタップすることで絞り込むことができる。</p>
          </div>
          <div className='centerer'>
            <div className='tableContainer2'>
              <h2 className='tx'>
                項目
              </h2>
              <p></p>
              <ul className='table'>
                <li>種類(PDF、ドキュメント、スプレッドシートなど)</li>
                <li>オーナー(作成した人)</li>
                <li>含まれている語句</li>
                <li>アイテム名(ファイル名)</li>
                <li>場所(マイドライブ、共有ドライブ)</li>
                <li>更新日(全期間、今日、昨日、7日間など)</li>
                <li>承認</li>
                <li>共有先</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="tx">
              <h2 id="driveUpload">4:ファイル・フォルダのアップロード</h2>
              <p>1.左上の「新規」をクリック</p>
              <img src="./artimg/f3.png" alt=""></img>
              <p>2.「ファイル（フォルダ）のアップロード」をクリック</p>
              <img src="./artimg/f4.png" alt=""></img>
              <p>3.アップロードしたいファイルやフォルダを選択</p>
              <p>※Google ドライブにアップロードしたファイルやフォルダをダウンロードする手順</p>
            </div>            
            <div className='centerer'>
              <div className='tableContainer2'>
                <div className='table'>
                  <li>1.Google Driveにアクセス</li>
                  <li>2.ダウンロードしたいファイル・フォルダを右クリック</li>
                  <li>3.「ダウンロード」をクリック</li>
                </div>
              </div>
            </div>
            <p className='tx'>フォルダは ZIP 形式（圧縮ファイル）でダウンロードされ、ファイルによっては以下の形式に変換されてダウンロードされる。</p>
            <div className='centerer'>
              <div className='tableContainer2'>
                <div className='table'>
                  <li>Google スプレッドシート：エクセル（.xlxs）</li>
                  <li>Google ドキュメント：ワード（.docx）</li>
                  <li>Google スライド：パワーポイント（.pptx）</li>
                </div>
              </div>
            </div>
          </div>
          <div className='tx'>
            <h2 id="driveFolder">5:フォルダを作成してファイルを格納する</h2>
            <p>1.左上の「新規」をクリック</p>
            <img src="./artimg/f5.png" alt=""></img>
            <p>2.「新しいフォルダ」をクリック</p>
            <img src="./artimg/f6.png" alt=""></img>
            <p>3.フォルダの名前を入力し[作成]をクリック</p>
            <img src="./artimg/f7.png" alt=""></img>
            <p>フォルダ内にフォルダを作成したい場合は、フォルダを開いた状態で右クリックし、上記の点順に沿ってフォルダを作成する。</p>
            <p>フォルダにファイルを格納するには、ファイルをドラッグ&ドロップ。</p> 
          </div>
          <div>
            <div className="tx">
              <h2 id="driveShare">6:ファイル・フォルダを共有する</h2>
              <p>1.Google ドライブ内の共有したいファイル・フォルダを右クリックし[共有]をクリック</p>
              <img src="./artimg/f8.png" alt=""></img>
              <p>2.共有先のメールアドレスを入力</p>
              <img src="./artimg/f9.png" alt=""></img>
              <p>3.権限と通知を設定し[送信]をクリック</p>
              <img src="./artimg/f10.png" alt=""></img>
            </div>
            <div className='centerer'>
              <div className='tableContainer2'>
                <p className='tx'>
                  権限
                </p>
                <p></p>
                <ul className='table'>
                  <li>閲覧者：共有相手はファイルの閲覧のみ可能</li>
                  <li>閲覧者（コメント可）：共有相手はファイルの閲覧とコメントが可能</li>
                  <li>編集者：共有相手は自分と同じようにファイルを編集可能</li>
                </ul>
              </div>
            </div>
            <div className='tx'>
              <p>誰でもアクセスできるようにしたい場合は、2の図にある[一般的なアクセス]を[リンクを知っている全員]に変更。</p>
              <p>[リンクをコピー]で共有リンクをコピーできるので、メールやチャットなどにペーストすることで知らせたい相手に知らせることができる。</p>
              <p>[通知]にチェックを入れると、共有相手にファイルを共有したことを知らせるメールが届く</p>
            </div>
          </div>
          <div className="tx">
            <h2 id="drivelast">7:残りのストレージ容量を確認する</h2>
            <p>個人向けの無料の Google アカウントの場合は「15 GB 中 〇〇 GB を使用」という形式で表示される。</p>
            <img src="./artimg/f11.png" alt=""></img>
          </div>
          <div className="tx">
            <h2 id="driveUpgrade">8:Google Driveの容量を増やす</h2>
            <p>個人向け Google Driveの保存容量を増やすには、画面左の「保存容量を購入」をクリックし、有料の Google One に申し込む必要がある。</p>
            <p>[容量とと月額(年額)]</p>
            <li>100 GB:¥250（¥2,500）</li>
            <li>200 GB:¥380（¥3,800）</li>
            <li>2 TB:¥1,300（¥13,000）</li>
            <p>組織向け(学校など) Google Workspace の Google Driveの保存容量を増やすには、プランを変更する必要がある。</p>
            <p>[プラン]</p>
            <li>Business Starter:30 GB</li>
            <li>Business Standard:2 TB</li>
            <li>Business Plus:5 TB</li>
            <li>Enterprise:要相談*</li>
          </div>
          <div className="tx">
            <h2 id="shareDrive">9:共有ドライブについて</h2>
            <p>
              チームで使うファイルの保存、検索、および、ファイルへのアクセスが可能。
              <br/>
              共有ドライブ内のファイルは、マイドライブとは違って個人ではなくチームが所有する。
              <br/>
              そのため、メンバーがチームから抜けてもファイルはそのまま残るため、チームで引き続き情報を共有して仕事を進めることができる。
            </p>
          </div>
          <div>
            <div className='centerer'>
                <div className='tableContainer2'>
                  <h2 className="tx" id="driveDif">10:共有ドライブとマイドライブの違い</h2>
                  <table border="1">
                    <tr>
                      <th>ドライブの種類</th>
                      <th>マイドライブ</th>
                      <th>共有ドライブ</th>
                    </tr>
                    <tr>
                      <th>保存場所</th>
                      <th>ユーザー個人</th>
                      <th>ユーザーグループまたは組織全体</th>
                    </tr>
                    <tr>
                      <th>容量</th>
                      <th>契約内容による</th>
                      <th>契約内容による</th>
                    </tr>
                    <tr>
                      <th>アクセス制限</th>
                      <th>ユーザー個人が設定</th>
                      <th>組織の管理者が設定</th>
                    </tr>
                    <tr>
                      <th>メリット</th>
                      <th>個人のファイルやフォルダを保存</th>
                      <th>ユーザーグループや組織全体のファイルやフォルダを保存</th>
                    </tr>
                    <tr>
                      <th>デメリット</th>
                      <th>アクセス権限の設定が難しい</th>
                      <th>フォルダの階層や保存できるファイル数に制限</th>
                    </tr>
                  </table>
                </div>
              </div>
          </div>
          <div className='author'>
            <p>著:かきのたね</p>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Drive
