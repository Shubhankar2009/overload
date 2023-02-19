import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Help_Others from './components/Help_Others';
import Silly_Shots from './components/Silly_Shots';
import Home from './components/Home';
import Add_Shots from './components/Add_Shots';
import Get_Help from './components/Get_Help';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/help-others" element={<Help_Others/>}/>
        <Route path="/silly-shots" element={<Silly_Shots/>}/>
        <Route path="/add-shots" element={<Add_Shots/>}/>
        <Route path="/get-help" element={<Get_Help/>}/>
      </Routes>
    </div>
  );
}

export default App;
