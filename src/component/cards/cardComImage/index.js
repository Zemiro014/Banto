import React from 'react'
import './style.scss'
import ImagePropaganda from '../../../img/propaganda.jpg'

function CardComImage() {
    return (
        <div className='cardComImage'>
            <div className='imagem'>
                <img src={ImagePropaganda} alt='' />
            </div>
            <div className='content'>
                <h3>Soluções Digitais Personalizadas.</h3>
                <h4>Com a Banto tech, a sua empresa contará com um time de experts em tecnologia</h4>
                <p>Atendemos as maiores empresas do Brasil, 
                    sempre de forma colaborativa e conjunta focando no sucesso da sua organização.
                    Desenvolvemos softwares, Apps e integrações de ponta a ponta.</p>
                <p>Conte com uma equipe experiente para arquitetar, produzir e sustentar o que a sua empresa precisa.</p>
            </div>
        </div>
    )
}

export default CardComImage