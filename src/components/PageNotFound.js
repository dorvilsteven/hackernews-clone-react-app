import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <p>
            Page Not Found. Go to <Link to="/">Home Page</Link>
        </p>
    );
};

export default PageNotFound;