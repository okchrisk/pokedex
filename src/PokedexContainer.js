import React from 'react'
import './css/PokedexContainer.css'
import PokemonTileContainer from './PokemonTileContainer'

export default function PokedexContainer() {

  return (
    <>
      <div className="pokedexContainer__content">
        <div className="pokedexContainer__title">Pokedex</div>
        <PokemonTileContainer />
      </div>
    </>
  )
}
