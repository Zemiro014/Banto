import React from 'react'
import './style.scss'

function CardServicos({data}) {
  return (
    <div className='cardServicos'>
      <span>{data.title}</span>
      <div className='body'>
        <ul>
          {
            data.aptidoes?.map(item => (
              <li key={item}>{item}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default CardServicos