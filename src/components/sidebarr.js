import React from 'react'
// import { SidebarData } from './SidebarData.js'
import { useEffect } from 'react';

// function Sidebar() {
//   return (
//     <div className = "Sidebar">
//       <ul className = "SidebarList">
//         {SidebarData.map((value,key) => {
//             return(
//                 <li 
//                     key = {key}
//                     // id={window.location.pathname === value.link ? "active" : ""}
//                     className = "row"
//                     // onClick={() => {
//                     //     window.location.pathname = value.link;
//                     // }}
//                 >
//                     <a href={`#${value.link}`}>
//                         {value.title}
//                     </a>
//                 </li>
//             )
//         })}
//       </ul>
//     </div>
//   )
// }

// export default Sidebar
function Sidebar() {
  useEffect(() => {
    const handleClick = (e) => {
      const anchorElement = e.target.closest('a'); // クリックされた要素またはその祖先から最初の<a>要素を取得
    
      if (anchorElement) {
        e.preventDefault();
        const targetId = anchorElement.getAttribute('href').substring(1); // hrefから'#'を取り除いてIDを取得
        const targetElement = document.getElementById(targetId);
    
        if (targetElement) {
          // ジャンプの処理
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []); // 空の配列で初回レンダリング時のみ実行

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <li className="row">
          <a href="#home" className="no-style">
            ホーム
          </a>
        </li>
        <li className="row">
          <a href="#appuse" className="no-style">
            使い方説明
          </a>
        </li>
        <li className="row">
          <a href="#programming" className="no-style">
            プログラミング
          </a>
        </li>
      </ul>
    </div>
    // <div className = "Sidebar">
    //   <ul className="SidebarList">
    //     {SidebarData.map((value, key) => (
    //       <li key={key} className="row">
    //         <a href={`#${value.link}`}>
    //           {value.title}
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default Sidebar;