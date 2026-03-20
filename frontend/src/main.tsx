
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DemoRequestProvider } from './context/DemoRequestContext'

createRoot(document.getElementById('root')!).render(
    <DemoRequestProvider>
        <App />
    </DemoRequestProvider>
)
