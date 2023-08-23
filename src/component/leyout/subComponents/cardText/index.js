import React from 'react'
import './style.scss'

function CardText({ data, type }) {
    return (
        <div className={type || 'cardText'}>
            <div className='title'>
                {data.inicio} <span> {data.title}: </span>
            </div>
            <div className='desc'>
                "{data.content}"
            </div>
        </div>
    )
}

export default CardText