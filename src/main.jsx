import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import UserProvider from "./Context/UserContext.jsx";
import MenuProvider from './Context/MenuContext.jsx'
import MessageProvider from './Context/MessageContext.jsx'
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <UserProvider>
      <MenuProvider>
        <MessageProvider>
          
      <App />
      
      </MessageProvider>
      </MenuProvider>
    </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
