import React from 'react'
import './css/PokemonTile.css'

export default function PokemonTile({ pokemon }) {

  const thumbnail = null
  // const id = pokemon.id.toLocaleString('en-US', {
  //   minimumIntegerDigits: 3,
  //   useGrouping: false
  // })
  const id = pokemon.id
  const name = pokemon.name
  const types = null

  return (
    <>
      <div className="pokemonTile__content">
        {/* <div className="pokemonTile__thumbnail"
          style={{backgroundImage:`url(${pokemon['sprites']['front_default']})`}}></div> */}
        <div className="pokemonTile__thumbnail"></div>
        <div className="pokemonTile__description">
          <div className="pokemonTile__number">#{id}</div>
          <div className="pokemonTile__name">{name}</div>
          <div className="pokemonTile__type"></div>
        </div>
      </div>
    </>
  )
}
