import { Outlet } from 'react-router-dom';
import { Navbar } from './components/index.ts';
import './App.css';

function App() {
  return (
    <>
      <h1>TItle</h1>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
