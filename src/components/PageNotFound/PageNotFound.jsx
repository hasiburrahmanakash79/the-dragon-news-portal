
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='flex justify-content-center align-items-center'>
            <div className=''>
            <h1 className=''>Oops!</h1>
            <p className=''>404 - Page not found</p>
            <Link to='/' className=''>Go to home page</Link>
            </div>
        </div>
    );
};

export default PageNotFound;