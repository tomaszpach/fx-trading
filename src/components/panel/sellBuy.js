import React from 'react';

const sellBuy = (props) => {
    const {value, pair, target} = props;
    const split = (pair).split(' '),
        part1 = (value + "").substr(0, 4),
        part2 = (value + "").substr(4, 2),
        part3 = (value + "").substr(6, 1);

    return (
        <div className={target}>
            <h6 className='top-description'>{target.charAt(0).toUpperCase() + target.slice(1) + ' ' + split[0]}</h6>
            <div>
                <span>{part1}</span>
                <span className='featured'>{part2}</span>
                <sup>{part3}</sup>
            </div>
        </div>
    )
};

export default sellBuy;