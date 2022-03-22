import React from 'react'
import { IconList } from './Icons'

export default function AsideBar() {
    return (
        <aside className={`flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900 rounded-br-xl h-96 w-60`}>
            <div className={`flex flex-col items-center justify-center bg-gradient-to-t from-indigo-500 to-yellow-400 h-32`}>
                {/* <Logo /> */}
                {/* logomarca */}
                <a href={"/home"} className='cursor-pointer'>
                    <img className='w-20' src='pokedex.png' />
                </a>
            </div>
            <ul className="flex flex-col items-center justify-center pt-5">
                <li className='hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded-lg'>
                    <a href={"/pokemons"} className='flex justify-center items-center m-3 dark:text-gray-200'>
                        {IconList}
                        <span className='text-xs font-normal'>Pokemons</span>
                    </a>
                </li>
                {/* <MenuItem url="/" texto="Início" icone={IconeCasa} /> */}
                {/* <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} /> */}
                {/* <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} /> */}
            </ul>
            <ul>
                {/* <MenuItem
                    texto="Sair" icone={IconeSair}
                    onClick={logout}
                    className={`
                    text-red-600 dark:text-red-400
                    hover:bg-red-400 hover:text-white
                    dark:hover:text-white
                `}
                /> */}
            </ul>
        </aside>
    )
}