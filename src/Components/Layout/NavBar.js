import { Link } from "react-router-dom"

import styles from './NavBar.module.css'
import logo from '../../img/costs_logo.png'

import Container from "./Container"

function NavBar() {
return (
    <header>
        <nav className={styles.Navbar}>
            <Container>
                <Link to='/'>
                    <img src={logo} alt='Logo Costs' />
                </Link>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Projects'>Projetos</Link></li>
                    <li><Link to='/contato'>Contato</Link></li>
                    <li><Link to='/empresa'>Empresa</Link></li>
                </ul>
            </Container>
        </nav>
    </header>
    )
}

export default NavBar