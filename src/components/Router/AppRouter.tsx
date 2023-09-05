import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import Home from "../../page/Home";
import Details from "../../page/details/Details";

function AppRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />}/>
                    <Route path="product/:id" element={<Details />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter