import React from 'react'
import './style.scss'

function BillBoard() {
    return (
        <div className='billboard'>
            <div className='banner-content'>
                <h4 className='title'>Busca por profissionais com experiência e qualidade?</h4>
                <div className='content'>
                    A nossa equipe possui experiência e habilidades necessária em resolver problemas de uma forma segura e barata.
                </div>
                <div className='btn'>
                    <button>Conheça os nossos especialistas</button>
                </div>
            </div>
        </div>
    )
}

export default BillBoard