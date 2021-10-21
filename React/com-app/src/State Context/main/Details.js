import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Details = () => {
    const movies = useContext(MovieContext);
    console.log(movies);
    return (
        <React.Fragment>
            Count: {movies.length}
        </React.Fragment>
    )
}

export default Details;