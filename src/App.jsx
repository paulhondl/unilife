import {BrowserRouter, Routes, Route} from "react-router-dom"
// import ShortlistContextProvider from "./contexts/ShortlistContext"
import Header from "./components/Header/Header"
import SocialMedia from "./components/SocialMedia/SocialMedia"
import TopCities from "./pages/TopCities/TopCities"
import AllCities from "./pages/AllCities/AllCities"
import Accomodations from "./pages/Accomodations/Accomodations"
import AccomodationDetails from "./pages/AccomodationDetails/AccomodationDetails"
import Footer from "./components/Footer/Footer"
import ShortlistContextProvider from "./contexts/ShortlistContext"
import './App.css'

function App() {
 
  return (
   <BrowserRouter>
    <ShortlistContextProvider>
      <Header />
      <Routes>
        <Route path="" element={<TopCities />} />
        <Route path="all-cities" element={<AllCities />} />
        <Route path=":city_id" exact element={<Accomodations />} />
        <Route path=":city_id/:accomodation_id" element={<AccomodationDetails />} />
      </Routes>
      <SocialMedia />
      <Footer />
    </ShortlistContextProvider>
   </BrowserRouter>
  )
  
}

export default App
