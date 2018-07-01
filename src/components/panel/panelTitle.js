import React from 'react';

const panelTitle = (props) => {
    const { pair } = props;

    return (
        <h2 className='title'>{pair}</h2>
    )
};

export default panelTitle;