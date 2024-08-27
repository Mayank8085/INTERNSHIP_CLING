// import "bootstrap/scss/bootstrap.scss";
import "./styles/index.scss";
import "./assets/icons.scss";
import "./assets/styles.scss";
import "../src/layouts/admin-panel/bootstrap.min.css";
import "../src/layouts/admin-panel/color.css";
import "../src/layouts/admin-panel/default.css";
import React from "react"
import ReactDOM from "react-dom";
import { Loading } from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Index = () => {

  return (
    
     <Provider store={store}>
     <ToastContainer/>
    <BrowserRouter>
      <React.Suspense fallback={() => <Loading loading={true} />}>
          <App />
      </React.Suspense>
    </BrowserRouter>
   </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
