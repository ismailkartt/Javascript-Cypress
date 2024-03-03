import { countries } from "../data/countries.js";


const loadCountries = () => {
    let strCountry = "<option>Seçiniz</option>";

    countries.forEach( (item)=>{
        strCountry += `<option value="${item.ccn3}">${item.name.common}</option>`
    })

    const lstCountries = document.querySelector("#lstCountries");
    lstCountries.innerHTML = strCountry;
}

const getCountry = (code) => {
    const selectedCountry = countries.filter( (item) => item.ccn3 === code );
    return selectedCountry[0];
}


document.querySelector("#lstCountries").addEventListener("change", (e)=> {
    const countryCode = e.target.value;
    const country = getCountry(countryCode);

    document.querySelector("#capital").innerHTML = country.capital.join("-");
    document.querySelector("#currency").innerHTML = Object.keys(country.currencies).join("-");
    document.querySelector("#language").innerHTML = Object.values(country.languages).join("-");
    document.querySelector("#area").innerHTML = country.area;
    document.querySelector("#map").innerHTML = `<a href="https://www.google.com/maps/@${country.latlng},6z?entry=ttu" target="_blank">Google Maps</a>` 
})



loadCountries();