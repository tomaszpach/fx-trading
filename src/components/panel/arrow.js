import React from 'react';

const arrow = ( props ) => {
    const { arrow } = props;

    return (
        <div className='arrow-wrapper'>
            <div className={`arrow ${arrow ? 'up' : 'down'}`}/>
        </div>
    )
};

export default arrow;