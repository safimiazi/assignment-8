
import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const CardDetails = () => {
    const cards = useLoaderData()
    const { id } = useParams()
    const findCard = cards?.find(card => card.id == id)
    console.log(findCard)

    const handleClicked = (id) =>{
        const localStorageCard = JSON.parse(localStorage.getItem('donations')) || [];
        const newArray = localStorageCard.find(card => card.id == id.id)
        if (!newArray) {
            localStorageCard.push(id);
            localStorage.setItem('donations', JSON.stringify(localStorageCard));
            Swal.fire(
                'Good job!!',
                'You clicked the button!',
                'success'
            );
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            });
        }

 

    }
    return (
        <div className="my-10">
            {
                findCard ? <div>
                    <div>
                       <div className="relative">
                       <img className="w-full" src={findCard.image} alt="" />
                        <div className="absolute bottom-0 px-4 py-4 bg-black/40 w-full">
                            <button onClick={()=> handleClicked(findCard)} style={{backgroundColor:findCard.titleColor}} className="btn text-white">Donate ${findCard.price} 
                         </button>
                        </div>
                       </div>
                        <h1 className="text-4xl my-2 font-bold">{findCard.title}</h1>
                        <p>{findCard.description}</p>
                    </div>
                </div> : ''
            }
        </div>
    );
};

export default CardDetails;