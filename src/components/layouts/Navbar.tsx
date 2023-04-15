import { Link } from "react-router-dom"

import Container from "./Container"
import styles from "./Navbar.module.css"

import Logo from "../../img/costs_logo.png"

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link className={styles.img} to="/">
          <img src={Logo} alt="" />
        </Link>
        <ul className={styles.list}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projetos</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          <li><Link to="/company">Compania</Link></li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar