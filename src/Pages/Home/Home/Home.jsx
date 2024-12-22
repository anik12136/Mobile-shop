import { useContext } from "react";
import FeaturedProducts from "../../../components/FeaturedProducts/FeaturedProducts";
import Banner from "../../../components/Home/Banner";
import { AuthContext } from "../../../Provider/AuthProvider";

const Home = () => {

    const  {user}  = useContext(AuthContext);
    console.log(user)
    return (
       <div>
        <Banner></Banner>
        <FeaturedProducts></FeaturedProducts>
       </div>
    );
};

export default Home;