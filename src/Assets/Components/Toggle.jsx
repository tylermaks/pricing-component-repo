import React from "react"

import "../Styles/Toggle.scss"

function Toggle({toggle}){
    return(
        <section className="toggle">
            <h1>Our Pricing</h1>
            <div className="toggle-inner">
                <label for="price-toggle">Annually</label>
                <label className="switch">
                    <input onClick={toggle} id="price-toggle" type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <label for="price-toggle">Monthly</label>
            </div>
        </section>
    )
}

export default Toggle;