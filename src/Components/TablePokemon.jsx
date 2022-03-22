import React, { useState, useEffect } from "react";
import PaginationSelector from "./PaginationSelector";
import PaginationComponent from "./PaginationComponent";
import Card from "./Card";

export default function TablePokemon() {

    const [pokemonList, setPokemonList] = useState([])
    const [pokemon, setPokemon] = useState('')
    const [itensPerPage, setItensPerPage] = useState(10) // 10 itens por pagina como default
    const [currentPage, setCurrentPage] = useState(0)
    const [searchPokemon, setSearchPokemon] = useState('')

    const pages = Math.ceil(pokemonList.length / itensPerPage) //Math.ceil arredonda para cima, nao deixando o numero quebrado
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = pokemonList.slice(startIndex, endIndex).filter((el) => el.name.toLowerCase().includes(searchPokemon.toLowerCase()))

    function SearchPoke(value) {
        setSearchPokemon(value)
        setItensPerPage(9999)
        if (value == '') {
            setItensPerPage(10)
        }
    }

    useEffect(() => {
        const fetchPosts = async () => {
            // const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=50');
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=3000&offset=0');
            const postsData = await response.json();
            setPokemonList(postsData.results);
        };
        fetchPosts();
    }, []);

    async function getUrl(url) {
        const fetchPosts = async () => {
            const response = await fetch(url)
            const postsData = await response.json()
            setPokemon(postsData)
            console.log(pokemon)
        }
        fetchPosts()
    }

    useEffect(() => {
        setCurrentPage(0)
    }, [itensPerPage])


    return (
        <div className="flex flex-col items-center" style={{ padding: "5px" }}>
            <div className="mb-2">
                Pesquisar:
                <input onChange={(e) => SearchPoke(e.target.value)} type="text" className="border-2 rounded-xl mb-2 ml-2" />
            </div>
            <div className="flex pt-5">
                {/* {pokemon == '' ? ( */}
                <>
                    <div>
                        <table className="flex items-center justify-center border-2 p-4 rounded-xl w-96">
                            <tbody>
                                {itensPerPage != '9999' ? (<PaginationSelector itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} />) : null}
                                {currentItens != '' ? (
                                    <>
                                        {currentItens.map((poke) => (
                                            <tr key={poke.name}>
                                                <td>{poke.name}</td>
                                                {/* <td>{poke.url}</td> */}
                                                <button className="mx-3 my-1 px-2 py-1 border-gray-300 border-2 rounded-lg hover:bg-slate-600 hover:text-white hover:scale-110 transition ease-in-out duration-300" onClick={() => getUrl(poke.url)}>Ver {poke.name}</button>
                                            </tr>
                                        ))}
                                    </>
                                ) : (
                                    <div className="font-bold text-2xl my-4 mx-4">
                                        Item não encontrado
                                    </div>

                                )}
                                <div className="mt-6 mb-6">
                                    {itensPerPage != '9999' ? (< PaginationComponent setCurrentPage={setCurrentPage} pages={pages} currentPage={currentPage} />) : null}
                                </div>
                            </tbody>
                        </table>
                    </div>
                </>
                <div className="ml-20">
                    {(pokemon) ? (
                        <>
                            <Card
                                pokemonName={pokemon.name}
                                pokemonType={pokemon.types}
                                pokemonHabilities={pokemon.abilities}
                                pokemonStats={pokemon.stats}
                                pokemonImg={pokemon.sprites.front_default}
                                pokemonId={pokemon.id}
                            />
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    )
}