import { QueryClient , QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomePage from "./components/HomePage";
import HomePageWithAxios from "./components/HomePageWithAxios";

function App() {

    const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient} >
        <HomePageWithAxios />
        <HomePage />
        <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
