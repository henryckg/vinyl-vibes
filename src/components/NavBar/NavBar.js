import React from 'react'
import MenuButton from '../MenuButton/MenuButton'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

export default function NavBar() {
    return (
        <nav className='d-flex justify-content-between align-items-center p-2 nav'>
            <h1 className='title'>Vinyl<span className='subtitle'>Vibes</span></h1>
            <div className='botones-menu'>   
                <MenuButton text={"Inicio"} />
                <MenuButton text={"Música"} />
                <MenuButton text={"Tornamesas"} />
                <MenuButton text={"Accesorios"} />
                <MenuButton text={"Contacto"} />
            </div>
            <CartWidget/>
        </nav>  
    )
}
