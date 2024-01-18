import React from 'react'
import { Link } from 'react-router-dom'

function Manufest() {
  return (
    <div className="decla">
      <section id="home">
        <div>
          <h1 id="mantitle">
            本サイトについて
          </h1>
          <p id="manmain">
            このサイトは情報関連について何も分からない！という方のために
            <br/>
            何かしらのヒントとなるように製作されました
            <br/>
            少しでも役に立ったなら幸いです
          </p>
        </div>
      </section>
      <section id="appuse">
        <div className='container'>
          <div>
            <h1 className="apptitle">使い方説明</h1>
          </div>
          <div className='appcontents'>
            <div className='appcont'>
              <Link to="/drive">
                <div className='appcontpic'>
                  <img 
                    src="./img/drive_icon.png"
                    width="100%"
                    height="100%"
                    alt=""
                    className="child-image"
                  />
                </div>
                <div className='appconttitle'>
                  Google Drive
                </div>
              </Link>
            </div>
            <div className='appcont'>
              <Link to="/meet">
                <div className='appcontpic'>
                  <img 
                    src="./img/meet_icon.png"
                    width="100%"
                    height="100%"
                    alt=""
                    class="child-image"
                  />
                </div>
                <div className='appconttitle'>
                  Google Meet
                </div>
              </Link>
            </div>
            <div className='appcont'>
              <Link to="/form">
                <div className='appcontpic'>
                  <img 
                    src="./img/form_icon.png"
                    width="100%"
                    height="100%"
                    alt=""
                    class="child-image"
                  />
                </div>
                <div className='appconttitle'>
                  Google Form
                </div>
              </Link>
            </div>
            <div className='appcont'>
              <Link to="/chat">
                <div className='appcontpic'>
                  <img 
                    src="./img/chat_icon.png"
                    width="100%"
                    height="100%"
                    alt=""
                    class="child-image"
                  />
                </div>
                <div className='appconttitle'>
                  Google Chat
                </div>
              </Link>
            </div>
            <div className='appcont'>
              <Link to="/spreadsheet">
                <div className='appcontpic'>
                  <img 
                    src="./img/spreadshet_icon.png"
                    width="100%"
                    height="100%"
                    alt=""
                    class="child-image"
                  />
                </div>
                <div className='appconttitle'>
                  Google Spreadsheet
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="programming">
        <div className='container'>
          <div>
            <h1 className="apptitle">プログラミング</h1>
          </div>
          <div className='appcontents'>
            <div className='procont'>
              <div className='appcontpic'>
                <img 
                  src="./img/beginer_icon.png"
                  width="100%"
                  height="100%"
                  alt=""
                  className="child-image"
                />
              </div>
              <div className='appconttitle'>
                プログラミング入門
              </div>
            </div>
            <div className='procont'>
              <div className='appcontpic'>
                <img 
                  src="./img/python_icon.png"
                  width="100%"
                  height="100%"
                  alt=""
                  class="child-image"
                />
              </div>
              <div className='appconttitle'>
                Python
              </div>
            </div>
            <div className='procont'>
              <div className='appcontpic'>
                <img 
                  src="./img/react_icon.png"
                  width="100%"
                  height="100%"
                  alt=""
                  class="child-image"
                />
              </div>
              <div className='appconttitle'>
                React
              </div>
            </div>
            <div className='procont'>
              <div className='appcontpic'>
                <img 
                  src="./img/html_icon.png"
                  width="100%"
                  height="100%"
                  alt=""
                  class="child-image"
                />
              </div>
              <div className='appconttitle'>
                HTML
              </div>
            </div>
            <div className='procont'>
              <div className='appcontpic'>
                <img 
                  src="./img/css_icon.png"
                  width="100%"
                  height="100%"
                  alt=""
                  class="child-image"
                />
              </div>
              <div className='appconttitle'>
                CSS
              </div>
            </div>
            <div className='procont'>
              <Link to="/c++">
                <div className='appcontpic'>
                  <img 
                    src="./img/cpp_icon.png"
                    width="100%"
                    height="100%"
                    alt=""
                    class="child-image"
                  />
                </div>
                <div className='appconttitle'>
                  C++
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Manufest
