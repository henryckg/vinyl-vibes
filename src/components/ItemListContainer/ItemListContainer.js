import "./ItemListContainer.css"    
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../helpers/getData'
import { useParams } from 'react-router-dom'
import SpinnerComponent from "../Spinner/Spinner"


export default function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState("")
    const {categoryId} = useParams()
    
    useEffect(() => {

        getProducts()
            .then((res) => {
                if(categoryId){
                    setProducts(res.filter((prod) => prod.category === categoryId))
                    setTitle("")
                } else {
                    setProducts(res)
                    setTitle("Todos los Productos")
                }
            })
    }, [categoryId])
    

    return (
        <div className="main-container">
            <h2 style={{fontWeight:"bold", color:"black"}}>{greeting}</h2>
            {products.length === 0 ? <SpinnerComponent /> : <ItemList products={products} title={title} />}
        </div>
    )
}
