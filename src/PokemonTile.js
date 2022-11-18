import React from 'react'
import './css/PokemonTile.css'

export default function PokemonTile() {
  return (
    <>
      <div className="pokemonTile__content">
        <div className="pokemonTile__thumbnail"></div>
        <div className="pokemonTile__description">
          <div className="pokemonTile__number"></div>
          <div className="pokemonTile__name"></div>
          <div className="pokemonTile__type"></div>
        </div>
      </div>
    </>
  )
}
