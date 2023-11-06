import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";


import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location =useLocation();
    if(loading){
        return <div><Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box></div>
    }
        if(user){
            return children;
        }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;