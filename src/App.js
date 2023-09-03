import "./App.css";
import DetailProduct from "./page/DetailProduct/DetailProduct";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <DetailProduct />
    </Provider>
  );
}

export default App;
