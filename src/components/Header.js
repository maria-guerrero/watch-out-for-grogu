import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
        <nav className="nav">
          <h1 className="title">¡Cuidado con Grogu!</h1>
            <Link to="/rules">Reglas del juego</Link>
            <Link to="/pieces">Fichas</Link>
            <Link to="/game">Juego</Link>
        </nav>
      </header>
    )
}

export default Header;