import "./Compare.css"

function Compare() {
  return (
    <div className="compare-container">
      <div className="compare-top-container">
        <h2>Compare all inclusive student homes.</h2>
        <div className="compare-features">
          <div className="compare-feature">
            <img src="travel_explore_FILL0_wght300_GRAD0_opsz48.png" alt="travel logo"/>
            <h3>Search</h3>
            <p>Find your dream home in the perfect area near your university.</p>
          </div>
          <div className="compare-feature">
            <img src="rule_FILL0_wght300_GRAD0_opsz48 1.png" alt="checklist logo"/>
            <h3>Compare</h3>
            <p>Compare student accommodation to find the right home for you.</p>
          </div>
          <div className="compare-feature">
            <img src="receipt_long_FILL0_wght300_GRAD0_opsz48.png" alt="receipt logo" />
            <h3>Bills included</h3>
            <p>Bills are included in all rent prices. No hidden fees.</p>
          </div>
        </div>
      </div>
      <div className="compare-bottom-container">
        <div className="bottom-info">
          <div className="info-selection">
            <img src="real_estate_agent_FILL0_wght300_GRAD0_opsz48.png" alt="real-estate-logo" />
            <div className="selection-text">
              <h3>Best selection</h3>
              <p>Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
            </div>
          </div>
          <div className="info-favorite">
            <img src="favorite_FILL0_wght300_GRAD0_opsz48.png" alt="favorite-logo" />
            <div className="favorite-text">
              <h3>Your favorite</h3>
              <p>Shortlist your favourite properties and send enquiries in one click.</p>
            </div>
          </div>
          <button>Search & Compare</button>
        </div>
        <div className="bottom-picture">
        </div>
      </div>
      <button>Search & Compare</button>
    </div>
    
  )
}

export default Compare