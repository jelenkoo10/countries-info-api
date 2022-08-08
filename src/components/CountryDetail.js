import React from "react"

export default function CountryDetail(props) {
    const { data, onClick } = props
    const [currentCountry, setCurrentCountry] = React.useState(data)
    const countries = props.allCountries
    
    function getLanguages(languageArray) {
        let langString = ""

        for (let key in languageArray) {
            if (languageArray.hasOwnProperty(key)) {
                let value = languageArray[key]
                langString += `${value}, `
            }
        }
        return langString.slice(0, -2)
    }

    function getNativeName(nameArray) {
        let nameString = ""
        let nameValues = []
        
        for (let key in nameArray) {
            if (nameArray.hasOwnProperty(key)) {
                let value = nameArray[key]
                nameValues.push(value)
            }
        }

        for (let key in nameValues) {
            if (nameValues.hasOwnProperty(key)) {
                let value = nameValues[key]
                nameString += `${value.common}, `
            }
        }
        return nameString.slice(0, -2)
    }

    function getCurrencies(currencyArray) {
        let currString = ""
        let currValues = []
        
        for (let key in currencyArray) {
            if (currencyArray.hasOwnProperty(key)) {
                let value = currencyArray[key]
                currValues.push(value)
            }
        }

        for (let key in currValues) {
            if (currValues.hasOwnProperty(key)) {
                let value = currValues[key]
                currString += `${value.name}`
            }
        }
        return currString
    }

    function searchCountry(code) {
        let name
        for (let i = 0; i < countries.length; i++) {
            if (countries[i].cca3 == code) {
                name = countries[i].name.common
            }
        }
        return name
    }

    return (
        <div className="wrapper">
            <div className="country-detail">
                <button onClick={() => onClick()}>Back</button>
                <div className="country-display">
                    <img src={currentCountry.flags.png} alt={`Flag of ${currentCountry.name.official}`}/>
                    <div className="country-desc">
                        <h1>{currentCountry.name.common}</h1>
                        <div className="country-flex">
                            <div>
                                <p><span className="bold">Native name: </span>{getNativeName(currentCountry.name.nativeName)}</p>
                                <p><span className="bold">Population: </span>{currentCountry.population.toLocaleString()}</p>
                                <p><span className="bold">Region: </span>{currentCountry.region}</p>
                                <p><span className="bold">Sub Region: </span>{currentCountry.subregion}</p>
                                <p><span className="bold">Capital: </span>{currentCountry.capital}</p>
                                <br></br>
                            </div>
                            <div>
                                <p><span className="bold">Top level domain: </span>{currentCountry.tld[0]}</p>
                                <p><span className="bold">Currencies: </span>{getCurrencies(currentCountry.currencies)}</p>
                                <p><span className="bold">Languages: </span>{getLanguages(currentCountry.languages)}</p>
                            </div>
                        </div>
                        <h2>Border countries: </h2>
                        {currentCountry.borders ? <div className="border" id="border">
                            <span className="country-link" style={{visibility: currentCountry.borders[0] ? 'visible' : 'hidden'}} >{searchCountry(currentCountry.borders[0]) !== undefined ? searchCountry(currentCountry.borders[0])  + " ": ""}</span>
                            <span className="country-link" style={{visibility: currentCountry.borders[1] ? 'visible' : 'hidden'}} >{searchCountry(currentCountry.borders[1]) !== undefined ? searchCountry(currentCountry.borders[1])  + " ": ""}</span>
                            <span className="country-link" style={{visibility: currentCountry.borders[2] ? 'visible' : 'hidden'}} >{searchCountry(currentCountry.borders[2]) !== undefined ? searchCountry(currentCountry.borders[2])  + " ": ""}</span>
                            <span className="country-link" style={{visibility: currentCountry.borders[3] ? 'visible' : 'hidden'}} >{searchCountry(currentCountry.borders[3]) !== undefined ? searchCountry(currentCountry.borders[3])  + " ": ""}</span>
                            <span className="country-link" style={{visibility: currentCountry.borders[4] ? 'visible' : 'hidden'}} >{searchCountry(currentCountry.borders[4]) !== undefined ? searchCountry(currentCountry.borders[4])  + " ": ""}</span>
                            <span className="country-link" style={{visibility: currentCountry.borders[5] ? 'visible' : 'hidden'}} >{searchCountry(currentCountry.borders[5]) !== undefined ? searchCountry(currentCountry.borders[5])  + " ": ""}</span>
                            <span className="country-link" style={{visibility: currentCountry.borders[6] ? 'visible' : 'hidden'}} >{searchCountry(currentCountry.borders[6]) !== undefined ? searchCountry(currentCountry.borders[6])  + " ": ""}</span>
                            <span className="country-link" style={{visibility: currentCountry.borders[7] ? 'visible' : 'hidden'}} >{searchCountry(currentCountry.borders[7]) !== undefined ? searchCountry(currentCountry.borders[7])  + " ": ""}</span>
                            <span className="country-link" style={{visibility: currentCountry.borders[8] ? 'visible' : 'hidden'}} >{searchCountry(currentCountry.borders[8]) !== undefined ? searchCountry(currentCountry.borders[8])  + " ": ""}</span>
                            <span className="country-link" style={{visibility: currentCountry.borders[9] ? 'visible' : 'hidden'}} >{searchCountry(currentCountry.borders[9]) !== undefined ? searchCountry(currentCountry.borders[9])  + " ": ""}</span>
                            <span className="country-link" style={{visibility: currentCountry.borders[10] ? 'visible' : 'hidden'}} >{searchCountry(currentCountry.borders[10]) !== undefined ? searchCountry(currentCountry.borders[10]) + " " : ""}</span>
                            <span className="country-link" style={{visibility: currentCountry.borders[11] ? 'visible' : 'hidden'}} >{searchCountry(currentCountry.borders[11]) !== undefined ? searchCountry(currentCountry.borders[11]) + " " : ""}</span>
                            <span className="country-link" style={{visibility: currentCountry.borders[12] ? 'visible' : 'hidden'}} >{searchCountry(currentCountry.borders[12]) !== undefined ? searchCountry(currentCountry.borders[12]) + " " : ""}</span>
                            <span className="country-link" style={{visibility: currentCountry.borders[13] ? 'visible' : 'hidden'}} >{searchCountry(currentCountry.borders[13]) !== undefined ? searchCountry(currentCountry.borders[13]) + " " : ""}</span>
                        </div> : "None"}
                    </div>
                </div>
            </div>
        </div>
    )
}
