import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import { Navbar} from 'react-bootstrap'




const navLinks =[

 {
  title:'Home',
  path:'/home'
 },

 {
  title: 'Menu',
  path:'/fMenu'
 },

 {
  title: 'Contact',
  path:'/contact'
 },
{
 Icon:'../assets/images/logo.png',
 path:'/logo'
}
]


export default function Navigation () {
  const [menuActive, setMenuActive] = useState(false)
  //console.log(cart);
  return (
    <Navbar bg="light" variant="light" sticky="top" >
  <nav className={`site-navigation ${menuActive && 'active'}`} role="navigation">
      <div className="logo">
      <img src={Logo} alt="logo" className="logo" height='100px' width='100px'/>
      <span class="logo__text"> CKM</span>
        </div>
        
      <div className="menu-content-container">
          <ul>
          { navLinks.map((link, index) => (
              <li key={index}>
                  <Link to={link.path}>{link.title}</Link>
              </li>
              ))
          }
          
          </ul>
      </div>
      <i 
          className="icon ionicons ion-ios-menu"
          onClick={(ev) => setMenuActive(!menuActive)}
      />
  </nav>
  </Navbar>
)

}

