import React from "react";

const Display = (props) => {
    const { movieData } = props;
    const movieDataList = movieData.map(data => {
        return (
            <React.Fragment key={data.id}>
                <p>{data.name}</p>
                <p>{data.price}</p>
            </React.Fragment>
        )
    });
    
    return (
        <div>
            {movieDataList}
        </div>
    )
}

export default Display;