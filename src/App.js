import logo from './logo.svg';
import './App.css';
import AddFriend from './components/AddFriend';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<AddFriend/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
