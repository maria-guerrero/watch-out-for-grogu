import Grogu from '../images/grogu.png';

const Card = () => {
    return (
        <div value="grogu" className="card">
            <img className="groguImg" src={Grogu} alt="Grogu" />
        </div>
    )
}

export default Card;