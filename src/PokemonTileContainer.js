import React from 'react'
import './css/PokemonTileContainer.css'
import PokemonTile from './PokemonTile'

export default function PokemonTileContainer({ pokemon }) {

  return (
    <>
      <div className='pokemonTileContainer__content'>
        <PokemonTile key={pokemon.id} pokemon={pokemon} />
      </div>
    </>
  )
}
