import {useState, useEffect, createContext} from 'react'

export const ShortlistContext = createContext();

export default function ShortlistContextProvider(props) {

  const [shortlist, setShortlist] = useState([]);

  // on page load, if there is already a shortlist in local storage, get it

  useEffect(() => {
    const storedAccomodations = localStorage.getItem("shortlist")
    storedAccomodations && setShortlist(JSON.parse(storedAccomodations))
  }, [])

  // whenever the shortlist changes, reflect those changes in local storage

  useEffect(() => {
    localStorage.setItem("shortlist", JSON.stringify(shortlist))
  }, [shortlist])

  function addAccomodation(newAccomodation) {
      if(!shortlist.some(accomodation => accomodation._id === newAccomodation._id)) {
        setShortlist(prevShortlist => [...prevShortlist, newAccomodation])
      }
  }

  function removeAccomodation(id) {
    setShortlist(prevShortlist => prevShortlist.filter(accomodation => accomodation._id !== id))
  }

  return (
    <ShortlistContext.Provider value={{shortlist, addAccomodation, removeAccomodation}}>{props.children}</ShortlistContext.Provider>
  )
}