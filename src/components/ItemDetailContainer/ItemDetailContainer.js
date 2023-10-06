import { useState, useEffect } from "react"
import { getProductById } from "../../helpers/getData"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

export default function ItemDetailContainer() {

    const [product, setProduct] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        
        getProductById(id)
            .then((res)=>setProduct(res))
    }, [id])
    
    return (
        <div>
            {product && <ItemDetail product={product}/>}
        </div>
    )
}
