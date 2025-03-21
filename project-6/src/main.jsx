import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "@/components/ui/provider" //we also have to make changes in viteconfig.js to use it(@)
import "@fontsource/ubuntu"; // Defaults to weight 400
// import { theme } from './theme/index.js'
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider >
    <App />
    </Provider>
  </StrictMode>,
)
