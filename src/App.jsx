import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import AppRoutes from "./AppRoutes";

const queryClient = new QueryClient();

export default function App() {
  return (

    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </QueryClientProvider>
  );
}
