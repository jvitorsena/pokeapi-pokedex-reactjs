import React, { useState, useEffect } from "react";
import PaginationSelector from "./PaginationSelector";
import PaginationComponent from "./PaginationComponent";

export default function TablePokemon() {

    const [pokemonList, setPokemonList] = useState([])
    const [pokemon, setPokemon] = useState()
    const [itensPerPage, setItensPerPage] = useState(10) // 10 itens por pagina como default
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(pokemonList.length / itensPerPage) //Math.ceil arredonda para cima, nao deixando o numero quebrado
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = pokemonList.slice(startIndex, endIndex)

    useEffect(() => {
        const fetchPosts = async () => {
            // const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=50');
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=200&offset=0');
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
            <div>Home</div>
            <table className="border-2">
                <thead className="">
                    <tr>
                        <th>Name</th>
                        {/* <th>Url</th> */}
                    </tr>
                </thead>
                <tbody>
                    <PaginationSelector itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} />
                    {currentItens.map((poke) => (
                        <tr className="border-2" key={poke.name}>
                            <td className="">{poke.name}</td>
                            {/* <td>{poke.url}</td> */}
                            <button className="mx-3 my-1 px-2 py-1 border-gray-300 border-2 rounded-lg hover:bg-slate-600 hover:text-white hover:scale-110 transition ease-in-out duration-300" onClick={() => getUrl(poke.url)}>Ver pokemon</button>
                        </tr>
                    ))}
                    <PaginationComponent setCurrentPage={setCurrentPage} pages={pages} currentPage={currentPage} />
                </tbody>
            </table>
            <div>
                {(pokemon) ? (
                    <>
                        <div className="flex flex-col items-center my-5">
                            <h1 className="font-bold text-xl">Pokemon: <span className="font-normal">{pokemon.name}</span></h1>
                            <h1 className="font-bold text-xl flex flex-row">Tipo: <span className="font-normal">
                                {pokemon.types.map((types) => (
                                    <h1>{types.type.name}</h1>
                                ))}
                            </span></h1>
                        </div>
                        <div className="flex flex-row ">
                            <div className="flex flex-col items-center">
                                <h1 className="font-bold text-xl mr-3">Habilidades: </h1>
                                {pokemon.abilities.map((hab) => (
                                    // <h1>ola</h1>
                                    <h1>{hab.ability.name}</h1>
                                ))}
                            </div>
                            <div className="flex flex-col items-center">
                                <h1 className="font-bold text-xl mr-3">Status: </h1>
                                {pokemon.stats.map((status) => (
                                    <h1>{status.stat.name}: {status.base_stat}</h1>
                                ))}
                            </div>
                            <div className="flex flex-col items-center">
                                <h1 className="font-bold text-xl mr-3">Movimentos: </h1>
                                {pokemon.moves.map((moves) => (
                                    <h1>{moves.move.name}</h1>
                                ))}
                            </div>
                            <div className="flex flex-col items-center pt-32">
                                <div className="bg-gray-300 rounded-full pt-20 h-20">
                                    {/* <div className="bg-gray-400 rounded-2xl"> */}
                                    <img className="w-72 -mt-64" src={pokemon.sprites.front_default} />
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    )
}