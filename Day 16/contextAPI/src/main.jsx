import { contextData } from "./context/contextData.jsx";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { userData } from './context/contextData.jsx'

createRoot(document.getElementById('root')).render(
  <contextData.Provider value={userData}>
    <App />
  </contextData.Provider>
  

)
