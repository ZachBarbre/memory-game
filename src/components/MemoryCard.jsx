import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
    state = { isFlipped: false };

    clickHandler = () => {
        this.setState(
           { isFlipped: !this.state.isFlipped }
        )
    } 

    render () {
        const memoryCardInnerClass = this.props.isFlipped? 'MemoryCardInner flipped' : 'MemoryCardInner';

        return (
            <div className='MemoryCard' onClick={this.clickHandler}>
                <div className={memoryCardInnerClass}>
                    <div className='MemoryCardBack'>
                        <img src='https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png' 
                        alt='DigitalCrafts Logo'/>
                    </div>
                    <div className='MemoryCardFront'>
                        {this.props.symbol}
                    </div>
                </div>
            </div>
        )
    }
}

export default MemoryCard;