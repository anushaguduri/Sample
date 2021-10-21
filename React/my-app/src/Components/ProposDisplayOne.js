import React from "react";
import PropTypes from 'prop-types';

const ProposDisplayOne = (props) => {
    console.log(props);
    const { obj, data } = props;

    return (
        <div>
            <h4> obj </h4>
             Name {obj.firstName} and age  {obj.age}
            <h4>Array of object</h4>
            {data.map(val => {
                return (
                    <div>
                       salary {val.salary}  designation {val.designation} and id {val.id}
                    </div>
                )
            })}
        </div>
    )
}
ProposDisplayOne.propTypes = {
    obj: PropTypes.objectOf(PropTypes.shape({
        firstName: PropTypes.string,
        age: PropTypes.number
    })),
    data: PropTypes.arrayOf(PropTypes.shape({
        salary: PropTypes.number.isRequired,
        designation: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }))
}

ProposDisplayOne.defaultProps = {
    obj: { firstName: 'A', age: 20, },
    data: [{ salary: 20000, designation: 'dev', id: 5 },
    { salary: 20000, designation: 'test', id: 6 }]
}


export default ProposDisplayOne;
