import { useEffect, useState } from "react";


const Donation = () => {
    const [card, setCard] = useState([])
    const [clicked, setClicked] = useState(false)
    useEffect(() => {
        const getCard = localStorage.getItem('donations')
        const lastGetCard = JSON.parse(getCard)
        setCard(lastGetCard)

    }, [])

    const handleClicked = () => {
        setClicked(!clicked)

    }
    console.log(clicked)
    return (
        <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
            {card.length > 0 && clicked == false?
                card.slice(0,4).map(card => <div key={card.id}>
                    
                    <div style={{backgroundColor:card.backgroundColor}} className="">
                        <div className="md:flex px-3 md:px-0 gap-3">
                            <img src={card.image} className="rounded-l-lg shadow-2xl" />
                            <div className="py-4">
                                <button style={{backgroundColor:card.buttonBackgroundColor}}>{card.category}</button>
                                <h1 className="text-2xl font-bold">{card.title}</h1>
                                <p className="py-6" style={{color:card.titleColor}}>${card.price}</p>
                                <button style={{backgroundColor: card.buttonBackgroundColor}} className="btn">View Details</button>
                            </div>
                        </div>
                    </div>
                    
                </div>) : 
                 card.map(card => <div key={card.id}>
                    
                    <div style={{backgroundColor:card.backgroundColor}} className="">
                        <div className="md:flex px-3 md:px-0 gap-3">
                            <img src={card.image} className="rounded-l-lg shadow-2xl" />
                            <div className="py-4">
                                <button style={{backgroundColor:card.buttonBackgroundColor}}>{card.category}</button>
                                <h1 className="text-2xl font-bold">{card.title}</h1>
                                <p className="py-6" style={{color:card.titleColor}}>${card.price}</p>
                                <button style={{backgroundColor: card.buttonBackgroundColor}} className="btn">View Details</button>
                            </div>
                        </div>
                    </div>
                    
                </div>)
            } 
          
        </div>
       
        <div className="flex justify-center">
        <button onClick={handleClicked}  className={`btn bg-lime-400 ${clicked ? 'hidden': ''}`}>show all</button> 
        </div>

        </div>
    );
};

export default Donation;