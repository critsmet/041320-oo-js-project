class Country{

  static all = []
  static countryContainer = document.getElementById('country-container')

  constructor({id, name, population, bird}){
    this.id = id
    this.name = name
    this.population = population
    this.bird = bird

    this.main = document.createElement('div')
    this.main.id = `country-${this.id}`
    this.details = document.createElement('div')
    this.details.id = `country-${this.id}-details`
    this.cities = document.createElement('div')
    this.cities.id = `country-${this.id}-cities`
    this.main.appendChild(this.details)
    this.main.appendChild(this.cities)

    Country.all.push(this)
  }

  cities(){
    console.log("Single Source of Truth");
  }

  renderDetails(){
    this.details.innerHTML = `
      <p>Name: <span>${this.name}</span></p>
      <p>Population: <span>${this.population}</span></p>
      <p>National Bird: <span>${this.bird}</span></p>
    `
  }

  renderCities(){
    this.cities.innerHTML = `
      We'll build this out tomorrow
    `
  }

  static renderAllCountries(){
    Country.all.forEach((country) => {
      country.renderDetails()
      country.renderCities()
      countryContainer.appendChild(country.main)
    })
  }
}

// let obj = {
//   attr1: "Regina",
//   att2: "Ryan"
// }
//
// test(obj)
//
// function test({attr1, attr2}){
//   attr1 => "Regina"
//   attr2 => "Ryan"
// }
