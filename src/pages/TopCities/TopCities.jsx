import {useEffect, useState} from "react"
import Compare from "../../components/Compare/Compare";
import "./TopCities.css"

function TopCities() {

  const [topCities, setTopCities] = useState([]);

  useEffect(() => {

  }, [])

  return (
    <div>
      TopCities
      <Compare />
    </div>
  )
}

export default TopCities