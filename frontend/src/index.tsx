import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import { BrowserRouter } from "react-router-dom";
import { ModalWindowState } from "./Context/ModalWindowContext";
import store from "../src/Redux/store/store";
import { Provider } from 'react-redux';
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ModalWindowState>
        <App />
      </ModalWindowState>
    </Provider>
  </BrowserRouter>
);
