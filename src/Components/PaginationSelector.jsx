import React from 'react'

export default function PaginationSelector({ itensPerPage, setItensPerPage }) {
    return (
        <div>
            Itens por página:
            <select value={itensPerPage} onChange={(e) => setItensPerPage(Number(e.target.value))}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
                <option value={9999}>Todos</option>
            </select>
        </div>
    )
}