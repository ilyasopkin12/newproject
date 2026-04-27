import { Home, Cabinet } from "@/pages/index";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cabinet" element={<Cabinet/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}