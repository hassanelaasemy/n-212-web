import { Provider } from "react-redux";

import { store } from "../redux/store";
import Navbar from "./components/Navbar"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Navbar />
        <div className="container mx-auto relative top-20 ">
         <Home/>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}
