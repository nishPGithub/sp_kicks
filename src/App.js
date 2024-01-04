import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import AppRoutes from "./Components/Routing/AppRoutes";
import "./Global/global"

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
