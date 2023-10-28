import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { observer } from "mobx-react";
import AppRoutes from "./routes";

const App = observer(() => {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
});

export default App;
