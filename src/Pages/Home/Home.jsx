import { useLoaderData } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import Banner from "../../Components/Header/Banner/Banner";


const Home = () => {
    const data = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <Cards data={data}></Cards>

        </div>
    );
};

export default Home;