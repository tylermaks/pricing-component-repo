import React from "react"

import "../Styles/Card.scss"
import cardData from "../../cardData.js"

function Cards({billingPlan}){
    return(
        <section className="card-flex">
            {
                cardData.map(data => {

                    const setPrice = billingPlan ? data.annually : data.monthly ;
                    const cardType = data.key === 1 ? "primary" : "secondary"

                    return(
                        <div key={data.key} className={"card card--" + cardType}>
                            <h3>{data.plan}</h3>
                            <div className="price">
                                <span>$</span>
                                <h1>{setPrice}</h1>
                            </div>
                            <p>{data.storage} Storage</p>
                            <p>{data.users} Users Allowed</p>
                            <p>Send up to {data.send} GB</p>
                            <button>Learn More</button>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Cards;