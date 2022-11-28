import React, { useState, useEffect } from 'react'
import './css/PokedexContainer.css'
import { fetchPokemon } from './api/fetchPokemon'
import PokemonTileContainer from './PokemonTileContainer'

export default function PokedexContainer() {

  const [pokemon, setPokemon] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    setIsLoading(true)

    fetchPokemon()
      .then(setPokemon)

      .then(() => setIsLoading(false))
  }, [])

  return (
    <>
      {isLoading ? <div className='pokemonContainer__loader app__loader'>Loading...</div>
        :
        <div className="pokedexContainer__content">
          <div className="pokedexContainer__title">Pokedex</div>
          <PokemonTileContainer pokemon={pokemon}/>
        </div>
      }
    </>
  )
}
