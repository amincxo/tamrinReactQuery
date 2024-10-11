import { QueryClient , QueryClientProvider } from "@tanstack/react-query"
import HomePage from "./components/HomePage";
import HomePageWithAxios from "./components/HomePageWithAxios";

function App() {

    const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient} >
        <HomePageWithAxios />
        <HomePage />
    </QueryClientProvider>
  )
}

export default App
