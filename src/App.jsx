import './App.css'
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"
import NoPage from "./pages/NoPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
