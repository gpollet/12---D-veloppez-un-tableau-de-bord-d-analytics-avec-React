import { Outlet } from "react-router-dom"
import TopNav from './Components/TopNav.js';
import './style/css/main.css';

function App() {
  

  return (
    <>
    <TopNav />
    <main>
    <Outlet />
    </main>
    </>
  )
}

export default App