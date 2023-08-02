import {useContext} from 'react'
import { ShortlistContext } from '../../contexts/ShortlistContext'
import './ShortlistCard.css'
import {CiCircleRemove} from 'react-icons/ci'

function ShortlistCard({accomodation}) {
  
  const {removeAccomodation} = useContext(ShortlistContext)

  return (
    <div>{accomodation?.address?.city} <CiCircleRemove onClick={() => removeAccomodation(accomodation._id)} className="remove-icon" /></div>
  )
}

export default ShortlistCard