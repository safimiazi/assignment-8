import { Link, useLoaderData } from "react-router-dom";


const Card = ({data}) => {
    console.log(data)
    
     const {backgroundColor,buttonBackgroundColor,category
,id,image,title,titleColor} = data || {}
    return (
            <Link to={`/card/${id}`}>
            <div style={{backgroundColor:backgroundColor}} className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
             <div className="relative overflow-hidden rounded-t-xl bg-white bg-clip-border text-gray-700">
               <img
                 src={image}
                 className="h-full w-full object-cover"
               />
             </div>
             <div className="p-6">
               <div className="mb-2 flex items-center justify-between">
                 <button  className="py-1 px-2 rounded" style={{backgroundColor:buttonBackgroundColor, color:titleColor}}>{category}</button>
                 
               </div>
               <p style={{color:titleColor}} className="font-bold">
                 {title}
               </p>
             </div>
            
           </div>    
        </Link>
    );
};

export default Card;