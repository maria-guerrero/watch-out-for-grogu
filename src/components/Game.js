import Table from "./Table";
import cookieImg from "../images/cookie.png";
import frogImg from "../images/frog.png";
import eggImg from "../images/egg.png";

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
              <img className="imgElements js-cookie" src={cookieImg} alt="cookie" />
              <p className="textQuantityElements">
                Galletas azules: {props.cookies}
              </p>
            </div>

            <div value="frogs" className="divContentImg">
              <img className="imgElements js-frog" src={frogImg} alt="frog" />
              <p className="textQuantityElements">
                Ranas: {props.frogs}
              </p>
            </div>

            <div value="eggs" className="divContentImg">
              <img className="imgElements" src={eggImg} alt="egg" />
              <p className="textQuantityElements">
                Huevos de rana: {props.eggs}
              </p>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};
export default Game;
