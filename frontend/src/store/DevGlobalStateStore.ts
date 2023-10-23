import { GlobalStateStore } from "./GlobalStateStore";

const debugGlobalStateStore = new GlobalStateStore({
    BaseUrl: "http://localhost:8000/api",
});

export { debugGlobalStateStore };
