import products from "../data/products.json"

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 1200)
    })
}

export const getProductById = (id) =>{
    return new Promise((resolve ) => {

        const item = products.find(prod => prod.id === id)

        item && resolve(item)
    })
}  