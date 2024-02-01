import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
import { NavLink,Link } from "react-router-dom";
import logo from "./isologotipo con fondo transparente.png"
import hambur from "./menu-de-hamburguesas.png"
import { useState } from "react";


const NavBar = () => {

    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (index) => {
      setActiveItem(index === activeItem ? null : index);
    };
    const handleSubMenuClick = () => {
        // Cierra el menú desplegable cuando se hace clic en un elemento del menú
        setActiveItem(null);
    };
    console.log('NavBar renderizado');
    return (
        <div className="containerNav">
        <nav className="menu">
    
        <li className={`containerbotones ${activeItem === 0 ? 'active' : ''}`}>
        <img  className="hambur" src={hambur} onClick={() => handleItemClick(0)}></img>
        <ul className={`botones ${activeItem === 0 ? 'active' : ''}`}>
        <li><NavLink  className="btn1"to=  {`/category/tazas`} onClick={handleSubMenuClick} >Tazas</NavLink></li>
        <li><NavLink className="btn1" to=  {`/category/tazones`} onClick={handleSubMenuClick} >Tazones</NavLink></li>
        <li><NavLink className="btn1" to=  {`/category/Mates`} onClick={handleSubMenuClick}>Mates</NavLink></li>
        <li><NavLink  className="btn1"to=  {`/category/azucareras`} onClick={handleSubMenuClick}>Azucareras</NavLink></li>
        <li><NavLink className="btn1" to=  {`/category/bandejas`} onClick={handleSubMenuClick}>Bandejas</NavLink></li>
        <li><NavLink className="btn1" to=  {`/category/platos`}onClick={handleSubMenuClick} >Platos</NavLink></li>
        <li><NavLink  className="btn1"to=  {`/category/combo`} onClick={handleSubMenuClick}>Combos</NavLink></li>
        </ul>
        </li>
        <NavLink to=  {`/`}>
         <img  className="logo" src={logo}></img>
        </NavLink>
        
        <CartWidget/>
        </nav>
        </div>
    )
}
export default NavBar;