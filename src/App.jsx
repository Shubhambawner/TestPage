import './App.css'
import Home from "./pages/home.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx"
import NoPage from "./pages/nopage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      
          <Route index element={<Home />} />
          
          <Route path="*" element={<NoPage />} />
        
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
