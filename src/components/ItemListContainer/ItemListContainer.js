import React from 'react'
import "./ItemListContainer.css"

export default function ItemListContainer({greeting}) {
    return (
        <div className="contenedor-productos">
            <h2 style={{fontWeight:"bold", color:"black"}}>{greeting}</h2>
        </div>
    )
}
