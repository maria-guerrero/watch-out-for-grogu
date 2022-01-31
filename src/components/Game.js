import Table from "./Table";
import Cookie from "../images/cookie.png";
import Frog from "../images/frog.png";
import Egg from "../images/egg.png";

const Game = () => {

    const cookies = [1,2,3];
    const frogs = [1,2,3];
    const eggs = [1,2,3];

    return (
        <>
        <div className="divGame">
        <section className="sectionMoveGrogu">
            <Table />
        </section>
        <section className="sectionElements">
            <div className="divElements">
                <button className="buttonPlay">Dado</button>
                
                <div value="cookies" className="divContentImg">                   
                    {cookies.map((cookie) => {
                        return (
                            <img className="imgElements" src={Cookie} alt="cookie" />
                        )
                    })}
                </div>

                <div value="frogs" className="divContentImg">
                    {frogs.map((frog) => {
                        return (
                            <img className="imgElements" src={Frog} alt="frog" />
                        )
                    })}
                </div>

                <div value="eggs" className="divContentImg">
                    {eggs.map((egg) => {
                        return (
                            <img className="imgElements" src={Egg} alt="egg" />
                        )
                    })}
                </div>
            </div>
        </section>
        </div>
        </>
    )
}

export default Game;