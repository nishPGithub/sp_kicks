import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import AppRoutes from "./Components/Routing/AppRoutes";

function App() {
    const routes = [{ path: "/", element: <Home /> }];

    return (
        <BrowserRouter>
            <div className="App">
                <div className="headerWrapper">
                    <Header />
                </div>
                <AppRoutes routes={routes} />
            </div>
        </BrowserRouter>
    );
}

export default App;
