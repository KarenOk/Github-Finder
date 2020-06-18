import React from 'react';
import notFound from "./404_Error.jpg";

const NotFound = () => {
    return (
        <div className="all-center">
            <img src={notFound} alt="The page you're looking for does not exist." />
        </div>
    );
};

export default NotFound;
