import Card from "./Card";

const Table = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7];

    return (
            <div className="tableStyles">               
                {cards.map((card) => <Card></Card>)}
            </div>
    )
}

export default Table;