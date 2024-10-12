import { QueryClient , QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomePage from "./components/HomePage";
import HomePageWithAxios from "./components/HomePageWithAxios";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import Form from "./components/Form";

function App() {

    const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient} >
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users/" element={<HomePageWithAxios/>} />
            <Route path="/users/:id" element={<UserDetails/>} />
            <Route path="/form" element={<Form/>} />
        </Routes>
        <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
