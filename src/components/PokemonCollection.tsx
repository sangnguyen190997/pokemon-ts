import React from 'react'
import { Pokemon, PokemonDetail } from '../interface'
import PokemonList from './PokemonList'
import "./pokemon.css"
import { Detail } from '../App'

interface Props {
    pokemons: PokemonDetail[],
    viewDetail: Detail,
    setViewDetail: React.Dispatch<React.SetStateAction<Detail>>
}

const PokemonCollection:React.FC<Props> = (props) => {
    const {pokemons, viewDetail, setViewDetail} = props
    const selectPokemon = (id: number) => {
       if(!viewDetail.isOpened){
        setViewDetail({
            id, 
            isOpened: true
        })
       }
    }
  return (
    <>
        <section className={viewDetail.isOpened ? "collection-container-active" : "collection-container"}>
        {viewDetail.isOpened ? (<div className='overlay'></div>) : (<div className=''></div>)}
            {pokemons.map((pokemon, index) => {
                return (
                    <div key={index} onClick={() => selectPokemon(pokemon.id)}>
                        <PokemonList 
                            key={pokemon.id}
                            name={pokemon.name}
                            id={pokemon.id}
                            abilities={pokemon.abilities}
                            image={pokemon.sprites.front_default}
                            viewDetail={viewDetail}
                            setViewDetail={setViewDetail}
                        />
                    </div>
                )
            })}
        </section>
    </>
  )
}

export default PokemonCollection;