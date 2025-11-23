import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { MainTemplate } from "./components/MainTemplate";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainTemplate />
    </QueryClientProvider>
  );
}

export default App;
