import { QueryClient , QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomePage from "./components/HomePage";
import HomePageWithAxios from "./components/HomePageWithAxios";
import { Route, Routes } from "react-router-dom";

function App() {

    const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient} >
        <Routes>
            <Route path="/q" element={<HomePageWithAxios/>} />
            <Route path="/" element={<HomePage />} />
        </Routes>
        <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
