import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./app/store";
import { Provider } from "react-redux";
import MyProvider from "./components/ConfirmarCarrito/provider";
import { ModalProvider } from "./context/modalContext";
import { EmptyProvider } from "./context/emptyContext";
import { FormProvider } from "./context/formContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyProvider>
        <ModalProvider>
          <EmptyProvider>
            <FormProvider>
                <App />
            </FormProvider>
          </EmptyProvider>
        </ModalProvider>
      </MyProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
