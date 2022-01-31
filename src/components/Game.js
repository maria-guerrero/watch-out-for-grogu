import Table from "./Table";
import Cookie from "../images/cookie.png";
import Frog from "../images/frog.png";
import Egg from "../images/egg.png";

const Game = () => {
    const getRandomNumber = (max) => {
        return Math.ceil(Math.random() * max);
    }

    const randomSelection = () => {
        const randomNum = getRandomNumber(4);

        let computerSelection;

        if(randomNum < 2) {
            computerSelection = 'groot';
        } else if(randomNum >= 5) {
            computerSelection = 'cookies';
        } else if(randomNum >= 8) {
            computerSelection = 'eggs';
        } else {
            computerSelection = 'frogs';
        }
        return computerSelection;
    }

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