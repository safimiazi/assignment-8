import Card from "./Card/Card";


const Cards = ({data}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
            {
                data?.map((data, inx) => <Card key={inx} data={data}></Card>)
            }
        </div>
    );
};

export default Cards;