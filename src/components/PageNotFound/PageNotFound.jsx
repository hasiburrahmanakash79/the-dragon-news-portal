import X from '../../assets/Red_X.svg.png'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='text-center my-5'>
            <div className=''>
            <h1 className='fw-bold'>Oops!</h1>
            <img style={{height: "400px"}} src={X} alt="" />
            <p className='mt-5'>404 - Page not found</p>
            <Link to='/' className='btn btn-danger'>Go to home page</Link>
            </div>
        </div>
    );
};

export default PageNotFound;