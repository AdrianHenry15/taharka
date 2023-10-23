import { useLocation, useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";
import { useContext, useEffect } from "react";
import { GlobalStateStore } from "../store/GlobalStateStore";
import { GlobalStateContext } from "../context/GlobalStoreContext";

export default function AppRoutes() {
    const store = useContext<GlobalStateStore>(GlobalStateContext);
    const location = useLocation();

    useEffect(() => {
        // Update Mobx store with the current page whenever the route changes
        const currentPage = location.pathname;
        store.CurrentPage = currentPage;
    }, [location.pathname]);

    const routes = store.User.isLoggedIn ? protectedRoutes : publicRoutes;
    const routing = useRoutes([...routes]);
    return <>{routing}</>;
}
