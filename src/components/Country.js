import React from "react"

export default function Country(props) {
    const { data } = props

    return (
        <div className="country" onClick={props.onClick}>
            <img src={data.flags.png} alt={`Flag of ${data.name.official}`}/>
            <div>
                <h3>{data.name.common}</h3>
                <p><span className="bold">Population: </span>{data.population.toLocaleString()}</p>
                <p><span className="bold">Region: </span>{data.region}</p>
                <p><span className="bold">Capital: </span>{data.capital}</p>
            </div>
        </div>
    )
}