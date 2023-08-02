import {useContext} from 'react'
import { ShortlistContext } from '../../contexts/ShortlistContext'
import ShortlistCard from '../../components/ShortlistCard/ShortlistCard';
import './Shortlist.css'


function Shortlist() {
  const {shortlist, addAccomodation, removeAccomodation} = useContext(ShortlistContext);
  console.log(shortlist)
  return (
    <div className="shortlist-container">
      <h2>Shortlist</h2>
      <div className="shortlisted-accomodations">
        {shortlist.map(accomodation => <ShortlistCard key={accomodation._id} accomodation={accomodation} />)}
      </div>
    </div>
  )
}

export default Shortlist