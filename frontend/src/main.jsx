import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./globals.css";
import { globalStore } from "./store/GlobalStateStore";
import { debugGlobalStateStore } from "./store/DevGlobalStateStore"
import { GlobalStateContext } from "./context/GlobalStoreContext"

const stateStore = process.env.NODE_ENV === "development" ? debugGlobalStateStore : globalStore
ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalStateContext.Provider value={stateStore}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GlobalStateContext.Provider>
);
