import React, { useState, useEffect } from 'react'
import { fetchPokemon } from './api/fetchPokemon'
import './css/PokemonTileContainer.css'
import PokemonTile from './PokemonTile'

export default function PokemonTileContainer() {

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
      {isLoading ? <div className='pokemonTileContainer__loader app__loader'>Loading...</div>
        :
        <div className='pokemonTileContainer__content'>
          <PokemonTile pokemon={pokemon} />
        </div>
      }
    </>
  )
}
