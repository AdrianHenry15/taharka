import { createContext } from "react";
import { debugGlobalStateStore } from "../store/DevGlobalStateStore";
import { GlobalStateStore, globalStore } from "../store/GlobalStateStore";

const stateStore = process.env.NODE_ENV === "development" ? debugGlobalStateStore : globalStore;

export const GlobalStateContext = createContext<GlobalStateStore>(stateStore);
