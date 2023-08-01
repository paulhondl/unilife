import {useState, useEffect, createContext} from 'react'

export const ShortlistContext = createContext();

export default function ShortlistContextProvider(props) {

  const [shortlist, setShortlist] = useState([]);

  useEffect(() => {
    const storedAccomodations = localStorage.getItem("shortlist")
    storedAccomodations && setShortlist(JSON.parse(storedAccomodations))
  }, [])

  useEffect(() => {
    localStorage.setItem("shortlist", JSON.stringify(shortlist))
  }, [shortlist])

  function addAccomodation(newAccomodation) {
    setShortlist(prevShortlist => {
      return {
        ...prevShortlist,
        newAccomodation
      }
    })
  }

  function removeAccomodation(id) {
    setShortlist(prevShortlist => prevShortlist.filter(accomodation => accomodation.id !== id))
  }

  return (
    <ShortlistContext.Provider value={{shortlist, addAccomodation, removeAccomodation}}>{props.childern}</ShortlistContext.Provider>
  )
}