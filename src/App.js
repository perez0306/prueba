import "./App.css";
import DetailProduct from "./page/DetailProduct/DetailProduct";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Toaster position="top-right" />
      <DetailProduct />
    </Provider>
  );
}

export default App;
