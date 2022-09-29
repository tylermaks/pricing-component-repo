import React from "react"

import "../Styles/Toggle.scss"

function Toggle({toggle}){
    return(
        <section className="toggle">
            <h1>Our Pricing</h1>
            <div className="toggle-inner">
                <label htmlFor="price-toggle">Annually</label>
                <label className="switch">
                    <input onClick={toggle} name="price-toggle" type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <label htmlFor="price-toggle">Monthly</label>
            </div>
        </section>
    )
}

export default Toggle;