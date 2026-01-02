import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from './components/Board';
import Create from './components/Create';
import Archive from './components/Archive';

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Board/>} />
          <Route path="/archive" element={<Archive/>}/>
          <Route path="/create" element={<Create/>}/>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App;
