import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header"
import SocialMedia from "./components/SocialMedia/SocialMedia"
import TopCities from "./pages/TopCities/TopCities"
import AllCities from "./pages/AllCities/AllCities"
import Accomodations from "./pages/Accomodations/Accomodations"
import Footer from "./components/Footer/Footer"
import './App.css'

function App() {
 
  return (
   <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<TopCities />} />
      <Route path="/all-cities" element={<AllCities />} />
      <Route path="/:city_id" element={<Accomodations />} />
    </Routes>
    <SocialMedia />
    <Footer />
   </BrowserRouter>
  )
  
}

export default App
