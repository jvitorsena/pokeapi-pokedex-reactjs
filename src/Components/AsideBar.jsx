import React from 'react'
import { IconList } from './Icons'

export default function AsideBar() {
    return (
        <aside className={`flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900 h-full h-screen`}>
            <div className={`flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20`}>
                {/* <Logo /> */}
                logomarca
                <img className='w-20' src='pokedex.png' />
            </div>
            <ul className="flex-grow">
                <li className='hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer'>
                    <a className='flex justify-center items-center mt-5 mx-3 h-10 w-24 dark:text-gray-200'>
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