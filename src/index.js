import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import storage from "./services/storage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend} >
      <Provider store={storage}>
      <App />
    </Provider>
    </DndProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
