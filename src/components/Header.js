import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
        <nav className="nav">
            <Link to="/" className="title">¡Cuidado con Grogu!</Link>
            <Link to="/rules" className="textHeader">Reglas del juego</Link>
            <Link to="/pieces" className="textHeader">Fichas</Link>
            <Link to="/game" className="textHeader">Juego</Link>
        </nav>
      </header>
    )
}

export default Header;