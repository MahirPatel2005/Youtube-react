import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import Sidebar from './components/Sidebar/Sidebar.jsx'
import Maincontent from './components/Maincontent/Maincontent.jsx'
import Searchbar from './components/Searchbar/Searchbar.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className="full">
    <Sidebar />
    <div className="Part2">
      <Searchbar/>
      <Maincontent/>
    </div>
    </div>
  </StrictMode>,
)
