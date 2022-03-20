import React, { useState, useEffect } from "react";
import TablePokemon from "./TablePokemon";
import AsideBar from "./AsideBar";

export default function Home() {
    return (
        <>
            <div className='flex h-screen w-screen'>
                <AsideBar />
                <div className={`flex flex-col w-full p-7`}>
                    <TablePokemon />
                </div>
            </div>
        </>
    )
}