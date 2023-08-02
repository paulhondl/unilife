import {useContext} from 'react'
import { ShortlistContext } from '../../contexts/ShortlistContext'
import { Link } from 'react-router-dom'
import './ShortlistCard.css'
import {CiCircleRemove} from 'react-icons/ci'

function ShortlistCard({accomodation}) {

  const {removeAccomodation} = useContext(ShortlistContext)


  console.log(accomodation)
  return (
    <div className="shortlist-card-container" ><Link to={`../${accomodation.city_id._id}/${accomodation._id}`} relative="path">{accomodation?.address?.city}, {accomodation?.address?.street}</Link> <CiCircleRemove onClick={(e) => {e.stopPropagation(); removeAccomodation(accomodation._id)}} className="remove-icon" /></div>
  )
}

export default ShortlistCard