
// Filter: el parámetro es cada uno de los objetos del array
// y devuelve aquellos objetos que cumplen la condición
const obtenerPokemones = async() => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await res.json()
   // console.log(data.results)
   const arrayNombres = data.results.filter(poke => poke.name !=='bulbasaur')
    console.log(arrayNombres)
  } catch (error) {
    console.log(error)
  }
}
obtenerPokemones()