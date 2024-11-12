import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import { store } from "../redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
}
