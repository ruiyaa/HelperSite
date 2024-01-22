import './App.css';
import "./article.css"
import MainContents from './components/MainContents';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Drive from "./components/appuse/drive.js"
import Meet from './components/appuse/meet';
import Form from './components/appuse/form';
import Chat from './components/appuse/chat';
import Spreadsheet from './components/appuse/Spreadsheet';
import Cpp from './components/programming/Cpp';


function App() {
  return (
    <Router basename="/HelperSite">
      <div className="App">
        <div>
          <Routes>                                    
            <Route exact path="/" element={<MainContents/>}/>
            <Route path="/drive" element={<Drive/>}/>
            <Route path="/meet" element={<Meet/>}/>
            <Route path="/form" element={<Form/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/spreadsheet" element={<Spreadsheet/>}/>
            <Route path="/c++" element={<Cpp/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
{/* <MainContents/> */}
{/* <Manufest />
<Sidebar /> */}
{/* <Route path="/" component={MainContents}/>  
<Route path="/drive" component={Drive}/> */}
