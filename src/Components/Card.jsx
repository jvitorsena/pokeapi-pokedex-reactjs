import React from "react"

export default function Card({ pokemonName, pokemonType, pokemonHabilities, pokemonStats, pokemonImg, pokemonId}) {

    const water = "bg-blue-400"
    const fire = "bg-red-400"
    const grass = "bg-green-400"
    const bug = "bg-green-400"
    const electric = "bg-yellow-400"
    const poison = "bg-purple-400"
    const ghost = "bg-purple-400"
    const psychic = "bg-purple-400"
    const normal = "bg-gray-400"
    const dark = "bg-black"
    const ground = "bg-amber-900"
    const fighting = "bg-amber-600"
    const fairy = "bg-pink-600"
    const ice = "bg-blue-600"
    const dragon = "bg-amber-600"

    return (
        <div className={`shadow-lg rounded-xl 
        ${pokemonType[0].type.name == 'water' ? water : null} 
        ${pokemonType[0].type.name == 'fire' ? fire : null} 
        ${pokemonType[0].type.name == 'grass' ? grass : null} 
        ${pokemonType[0].type.name == 'electric' ? electric : null} 
        ${pokemonType[0].type.name == 'poison' ? poison : null} 
        ${pokemonType[0].type.name == 'ghost' ? ghost : null} 
        ${pokemonType[0].type.name == 'psychic' ? psychic : null} 
        ${pokemonType[0].type.name == 'normal' ? normal : null} 
        ${pokemonType[0].type.name == 'dark' ? dark : null} 
        ${pokemonType[0].type.name == 'bug' ? bug : null} 
        ${pokemonType[0].type.name == 'ground' ? ground : null} 
        ${pokemonType[0].type.name == 'fighting' ? fighting : null} 
        ${pokemonType[0].type.name == 'fairy' ? fairy : null} 
        ${pokemonType[0].type.name == 'ice' ? ice : null} 
        ${pokemonType[0].type.name == 'dragon' ? dragon : null} 
        `}>
            {/* Cartão topo */}
            <div className="p-7">
                <div className="text-gray-100 flex justify-between items-center">
                    <h2 className="mb-1 font-bold text-3xl">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1, 20)}</h2>
                    <span>#0{pokemonId}</span>
                </div>
                {pokemonType.map((types) => (
                    <span className="text-sm bg-gray-100 opacity-70 rounded-xl py-1 px-3 shadow-lg mr-2">{types.type.name}</span>
                ))}
                <div className="flex -mt-10 w-96 h-96">
                    <img src={pokemonImg} alt="" />
                </div>
            </div>
            <div className="flex flex-row  bg-slate-100 -mt-32 px-8 pt-6 pb-12 justify-between rounded-bl-lg rounded-br-lg">
                {/* Cartão informações */}
                <div className="px-3 w-48 mt-20">
                    <h3 className="font-bold text-2xl">Status</h3>
                    <hr className="border-x border-black"></hr>
                    <ul>
                        {pokemonStats.map((status) => (
                            <>

                                <li className="my-2"><span className="font-semibold">{status.stat.name}</span>: {status.base_stat}</li>
                                <hr className="border-x border-black opacity-10" />
                            </>
                        ))}
                    </ul>
                </div>
                {/* <h1 className="font-bold text-xl mr-3">Status: </h1>
                {pokemon.stats.map((status) => (
                    <h1>{status.stat.name}: {status.base_stat}</h1>
                ))} */}
                {/* Cartão habiliades */}
                <div className="px-3 w-48 mt-20">
                    <h3 className="font-bold text-2xl">Habilidades</h3>
                    <hr className="border-x border-black" />
                    <ul>
                        {pokemonHabilities.map((hab) => (
                            <div key={hab.ability.name}>
                                <li className="my-2">{hab.ability.name}</li>
                                <hr className="border-x border-black opacity-10" />
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}