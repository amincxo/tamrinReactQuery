import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient ,QueryClientProvider , useQuery } from "@tanstack/react-query"

const MINUTE = 1000 * 60 ;

const queryClinet = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 10 * MINUTE
        }
    }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClinet} >
        <App />
    </QueryClientProvider>
  </StrictMode>,
)
