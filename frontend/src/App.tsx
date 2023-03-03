import { Outlet } from "react-router-dom"
import LeftNav from "./components/LeftNav.js";
import TopNav from './components/TopNav.js';
import './style/css/main.css';

function App() {
  return (
    <>
    <header>
    <TopNav />
    </header>
    <main>
    <LeftNav />
    <Outlet />
    </main>
    </>
  )
}

export default App