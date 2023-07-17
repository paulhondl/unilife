import "./Compare.css"

function Compare() {
  return (
    <div className="compare-container">
      <div className="compare-top-container">
        <h2>Compare all inclusive student homes.</h2>
        <div className="compare-features">
          <div className="compare-feature">
            <img src="../../../public/travel_explore_FILL0_wght300_GRAD0_opsz48.png" alt="travel logo"/>
            <h3>Search</h3>
            <p>Find your dream home in the perfect area near your university.</p>
          </div>
          <div className="compare-feature">
            <img src="../../../public/rule_FILL0_wght300_GRAD0_opsz48 1.png" alt="checklist logo"/>
            <h3>Compare</h3>
            <p>Compare student accommodation to find the right home for you.</p>
          </div>
          <div className="compare-feature">
            <img src="../../../public/receipt_long_FILL0_wght300_GRAD0_opsz48.png" alt="receipt logo" />
            <h3>Bills included</h3>
            <p>Bills are included in all rent prices. No hidden fees.</p>
          </div>
        </div>
      </div>
      <div className="compare-bottom-container">
        Bottom
      </div>
    </div>
    
  )
}

export default Compare