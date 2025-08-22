import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppContainer, GlobalStyles } from "./globals/global-styles";
import { MainRoutes } from "./routes/routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      {/* Navbar */}
      <GlobalStyles />
      <AppContainer>
          <MainRoutes />
      </AppContainer>
      {/* Footer */}
    </QueryClientProvider>
  )
}

export default App
