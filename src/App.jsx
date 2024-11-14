import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import AppRoutes from "./AppRoutes";

const queryClient = new QueryClient();

export default function App() {
  return (

    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className="container mx-auto relative top-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </Router>
          {/* <Footer /> */}
      </Provider>
    </QueryClientProvider>
  );
}
