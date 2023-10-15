import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";
import { useAppState } from "../store/hooks";
import { selectUser } from "../store/slices/userSlice";

export default function AppRoutes() {
    const user = useAppState(selectUser);

    const routes = user.isLoggedIn ? protectedRoutes : publicRoutes;
    const routing = useRoutes([...routes]);
    return <>{routing}</>;
}
