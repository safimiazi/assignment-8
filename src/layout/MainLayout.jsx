import { Outlet } from "react-router-dom";
import Navber from "../Components/Header/Navber/Navber";


const MainLayout = () => {
    return (
        <div  className=' px-4 md:px-16 py-8'>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;