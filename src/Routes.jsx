import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchPokemon from "./Components/SearchPokemon";
import Pokemons from "./Components/Pokemons";
import Home from "./Components/Home";

// import Home from '../components/home/Home'
// import UserCrud from "../components/user/UserCrud";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path='*' element={<Home />}></Route>
                <Route path="/pokemons" element={<Pokemons/>}/>
                {/* <Route exact path='/about' element={< About />}></Route> */}
                {/* <Route exact path='/contact' element={< Contact />}></Route> */}
            </Routes>
        </Router>
    )
}