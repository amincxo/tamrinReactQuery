import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient ,QueryClientProvider , useQuery } from "@tanstack/react-query"

const queryClinet = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClinet} >
        <App />
    </QueryClientProvider>
  </StrictMode>,
)
