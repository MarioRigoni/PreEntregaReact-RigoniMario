import CartWitget from "../CartWidget/CardWidget";

export default function NavBar() {
    return(
        <nav>
            <ul>
                <li>Home</li>
                <li>Motherboard</li>
                <li>Microprocesador</li>
                <li>Memoria DDR4</li>
            </ul>
            <CartWitget/>
        </nav>
    )
}