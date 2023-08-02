import {useContext} from 'react'
import {Link} from 'react-router-dom'
import { ShortlistContext } from '../../contexts/ShortlistContext'
import ShortlistCard from '../../components/ShortlistCard/ShortlistCard';
import './Shortlist.css'


function Shortlist() {

  const {shortlist, addAccomodation, removeAccomodation} = useContext(ShortlistContext);
 
  return (
    <div className="shortlist-container">
      <h2>Shortlist</h2>
      <div className="shortlisted-accomodations">
        {shortlist.length === 0 ? <p>Please <Link to="/" className="default-link">add accomodations</Link></p>: shortlist.map(accomodation => <ShortlistCard key={accomodation._id} accomodation={accomodation} />)}
      </div>
    </div>
  )
}

export default Shortlist