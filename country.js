const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = (countries) => {

    const countriesHTML = countries.map(country => getCountryHTML(country));
    const container = document.getElementById("countries");
    container.innerHTML = countriesHTML.join(" ");
}

const getCountryHTML = ({ name, area, flags, region }) => {
    return `

    <div class="country">
        <h2>${name.common}</h2>
        <p>${area}</p>
        <p>${region}</p>
        <img src="${flags.png}" alt="">
    </div>  
    
    `

}

