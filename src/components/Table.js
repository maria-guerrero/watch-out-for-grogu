import Card from "./Card";
import Dice from '../images/dice.png';

const Table = (props) => {
  const cards = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
    <section>
      <div className="divDiceGroguPosition">
        <img src={Dice} alt="" onClick={props.numberComputer} className="buttonDice" />
        <p className="textResult">{props.textResult}</p>
        <p className="textQuantityElements">Grogu avanza a la posición: {props.grogu}</p>
      </div>

      <div className="tableStyles">
        {cards.map((card) => (
          <Card></Card>
        ))}
      </div>
    </section>
    </>
  );
};

export default Table;
