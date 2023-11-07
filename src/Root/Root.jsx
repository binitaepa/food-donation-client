import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Helmet } from 'react-helmet';


const Root = () => {
    return (
        <div>
<Helmet>
    <title>NourishNeighbor</title>
</Helmet>
         <div>
         <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
         </div>
        </div>
    );
};

export default Root;