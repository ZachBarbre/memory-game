import React from 'react';
import './MemoryCard.css';

function MemoryCard(props) {

    const memoryCardInnerClass = props.isFlipped? 'MemoryCardInner flipped' : 'MemoryCardInner';

    return (
        <div className='MemoryCard' onClick={props.pickCard}>
            <div className={memoryCardInnerClass}>
                <div className='MemoryCardBack'>
                    <img src='https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png' 
                    alt='DigitalCrafts Logo'/>
                </div>
                <div className='MemoryCardFront'>
                    {props.symbol}
                </div>
            </div>
        </div>
    )
}


export default MemoryCard;