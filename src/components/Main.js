import {Link} from 'react-router-dom';

const Main = () => {
    return (
        <main className="main">
            <Link to="/game" className="button">Empezar una nueva aventura</Link>
      </main>
    )
}

export default Main;