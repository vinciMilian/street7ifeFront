import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/home/Home';
import { Outlet } from 'react-router-dom'




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
