import React from 'react'
import "../App.css"

export default function PaginationComponent({ setCurrentPage, currentPage, pages }) {
    return (
        <div>
            {Array.from(Array(pages), (item, index) => {
                return (
                    <button
                        key={index}
                        style={index === currentPage ? {backgroundColor: "gray"} : null}
                        className='px-2 my-2 mx-2 hover:bg-gray-200 border-2 rounded-xl'
                        value={index}
                        onClick={(e) => setCurrentPage(Number(e.target.value))}
                    >
                        {index + 1}
                    </button>
                )
            })}
        </div>
    )
}