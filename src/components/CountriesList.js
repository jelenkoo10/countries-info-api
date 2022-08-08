import React from "react"
import Country from "./Country"
import CountryDetail from "./CountryDetail"

export default function CountriesList() {
    const [countries, setCountries] = React.useState([])
    const [userInput, setUserInput] = React.useState("")
    const [allCountries, setAllCountries] = React.useState([])
    const [chosenRegion, setChosenRegion] = React.useState("")
    const [isHomepage, setIsHomepage] = React.useState(true)
    const [clickedCountry, setClickedCountry] = React.useState({})

    React.useEffect(function() {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setAllCountries(data))
        let api = "https://restcountries.com/v3.1/"
        if (chosenRegion == "" && userInput == "") {
            api += "all"
        } else if (userInput != "") {
            api += `/name/${userInput}`
        } else {
            api += `/region/${chosenRegion}`
        }
        fetch(api)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [userInput, chosenRegion])

    function changeInput() {
        setUserInput(document.getElementById("input").value)
    }

    function chooseRegion() {
        let select = document.getElementById('region');
        let value = select.options[select.selectedIndex].value;
        setChosenRegion(value)
    }

    function saveCountry(country) {
        setClickedCountry(country)
        setIsHomepage(false)
    }

    function deleteSavedCountry() {
        setClickedCountry({})
        setIsHomepage(true)
        setCountries(allCountries)
    }

    let countriesData = countries.map(function(country) {
        return <Country data={country} key={country.cca2} onClick={() => saveCountry(country)} />
    })

    if (isHomepage) {
        return (
            <main>
            <form action="#">
                <input type="text" placeholder="Search for a country..." name="search" id="input" onChange={changeInput} autoComplete="off" />
                <select name="regions" id="region" onChange={chooseRegion}>
                    <option value="" selected disabled hidden>Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </form>
            <div className="countries">
                {countriesData}
            </div>
        </main>
        )
    } else {
        return (
            <CountryDetail data={clickedCountry} allCountries={allCountries} onClick={deleteSavedCountry} />
        )
    }
}