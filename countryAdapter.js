class CountryAdapter{
  constructor(url){
    this.baseURL = url
  }

  fetchAndMakeCountries(){
    return fetch(this.baseURL)
      .then((obj) => obj.json())
      .then(function(countriesArray){
        return countriesArray.forEach(function(country){
          return new Country(country)
        })
      })
  }

  editCountry(body, countryId){
    return fetch(`${this.baseURL}/${countryId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(body)
    })
  }
}
