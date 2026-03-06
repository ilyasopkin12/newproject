import { Page } from "@/pages/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page />} />
            </Routes>
        </BrowserRouter>
    );
}