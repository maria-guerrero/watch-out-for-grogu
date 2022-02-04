import Table from "./Table";
import Cookie from "../images/cookie.png";
import Frog from "../images/frog.png";
import Egg from "../images/egg.png";

const Game = (props) => {

  return (
    <>
      <div className="divGame">
        <section className="sectionMoveGrogu">
          <Table
            textResult={props.textResult}
            numberComputer={props.numberComputer}
            setGrogu={props.setGrogu}
            grogu={props.grogu}
          />
        </section>
        <section className="sectionElements">
          <div className="divElements">

            <div value="cookies" className="divContentImg">
              <img className="imgElements js-cookie" src={Cookie} alt="cookie" />
              <p className="textQuantityElements">
                Cantidad de cookies: {props.cookies}
              </p>
            </div>

            <div value="frogs" className="divContentImg">
              <img className="imgElements js-frog" src={Frog} alt="frog" />
              <p className="textQuantityElements">
                Cantidad de ranas: {props.frogs}
              </p>
            </div>

            <div value="eggs" className="divContentImg">
              <img className="imgElements" src={Egg} alt="egg" />
              <p className="textQuantityElements">
                Cantidad de huevos: {props.eggs}
              </p>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};
export default Game;
