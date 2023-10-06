import icon from "./assets/cart.svg"

export default function CartWidget() {
    return (
        <div style={{marginRight: "1rem"}}>
            <img src={icon} width="30" height="30" alt="cart icon"/>
            <span style={{color: "#eaead1", fontSize: "1rem "}}>0</span>
        </div>
    )
}
