import { GlobalStateStore } from "./GlobalStateStore";

const debugGlobalStateStore = new GlobalStateStore({
    BaseUrl: "http://localhost:8000/api",
    User: {
        id: 0,
        username: "Adrian Henry",
        email: "adrianhenry2115@gmail.com",
        phoneNumber: "321-370-0836",
        isLoggedIn: true,
    },
});

export { debugGlobalStateStore };
