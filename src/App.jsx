import { Provider } from "react-redux";
import { store } from "../redux/store";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Login from "./pages/Login"; // Import the Login component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import Footer from "./components/Footer";
import Register from "./pages/Auth/Register";

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
