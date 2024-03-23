import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            Opps!!!
            <Link to="/"><button>Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;