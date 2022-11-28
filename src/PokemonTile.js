import React from 'react'
import './css/PokemonTile.css'

export default function PokemonTile({ pokemon }) {
  return (
    <>
      <div className="pokemonTile__content">
        <div className="pokemonTile__thumbnail"
          style={{backgroundImage:`url(${pokemon['sprites']['front_default']})`}}></div>
        <div className="pokemonTile__description">
          <div className="pokemonTile__number">{pokemon['id']}</div>
          <div className="pokemonTile__name">{pokemon['name']}</div>
          <div className="pokemonTile__type"></div>
        </div>
      </div>
    </>
  )
}
