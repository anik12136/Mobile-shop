import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className=" text-center mt-0">

        <div className=' mx-auto'>
            <img className='mx-auto ' src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-21357.jpg" alt="404 error" />
        </div>
        <Link to="/"><button className="btn btn-wide">Go back to Home page</button></Link>
    </div>
    );
};

export default NotFound;