import Banner from "../Banner/Banner";
import ExtraUser from "../ExtraUser/ExtraUser";
import Features from "../Feature/Features";
import Review from "../Review/Review";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Features></Features>
           <ExtraUser></ExtraUser>
           <Review></Review>
        </div>
    );
};

export default Home;