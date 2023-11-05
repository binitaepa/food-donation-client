import { Link } from 'react-router-dom';
import notfound from '../assets/undraw_page_not_found_re_e9o6.svg'
import { ArrowBackIcon } from '@chakra-ui/icons';
const ErrorPage = () => {
    return (
        <div className=' flex items-center justify-center flex-col'>
            <img src={notfound} alt="" />
            <Link to='/'><h2 className='btn bg-red-600 text-white mt-5'><ArrowBackIcon></ArrowBackIcon> GO BACK</h2></Link>
        </div>
    );
};

export default ErrorPage;