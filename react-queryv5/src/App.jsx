import { QueryClinet ,QueryClientProvider } from "@tanstack/react-query"

function App() {

    const queryClinet = new QueryClient()
  return (
    <QueryClientProvider client={queryClinet} >
        <>
        heloooooooooooooooooooow
        </>
    </QueryClientProvider>
  )
}

export default App
