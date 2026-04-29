import { Home, Cabinet } from "@/pages/index";
import { ProtectedRoute } from "./router/protected-route";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cabinet" element={
                    <ProtectedRoute>
                        <Cabinet/>
                    </ProtectedRoute>}></Route>
            </Routes>
        </BrowserRouter>
    );
}