const BASE_URL =  "https://pokeapi.co/api/v2/pokemon"
const pokedexEntryNumberLimit = 151

export const fetchPokemon = async () => {

    // [1, 151]
    // We subtract 1 from the limit, then add 1 afterwards to make sure 1 is the lowest, and 151 is the highest
    const index = Math.floor(Math.random() * (pokedexEntryNumberLimit - 1) + 1)

    return await fetch(`${BASE_URL}/${index}`)
        .then((response) => response.json())
}