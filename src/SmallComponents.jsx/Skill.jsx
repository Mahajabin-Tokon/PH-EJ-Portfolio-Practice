import React from 'react';

const Skill = ({icon, name}) => {
    return (
        <div className="btn">
            <div className="">{icon}</div>
            <div className="">{name}</div>
        </div>
    );
};

export default Skill;