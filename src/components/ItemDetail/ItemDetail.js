import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"

export default function productDetail({ product }) {
    return (
        <div className="container-detail">
            <div className="product-detail-container">
                <h2 className="product-title">{product.name}</h2>
                <img className="product-img" src={process.env.PUBLIC_URL + product.img} alt={product.name} />
                <div className="product-details">
                    <p className="product-price">USD ${product.price}</p>
                    <p className="product-stock">Stock disponible: {product.stock}</p>   
                    <ItemCount stock={product.stock}/>
                    <p>Categoría: {product.category}</p>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    )
}
