import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import { store } from "../redux/store";
import Commingsoonsection from "./components/commingsoonsection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Navbar />
        <div className="container mx-auto relative top-20 ">
          <Commingsoonsection />
        </div>
      </Provider>
    </QueryClientProvider>
  );
}
