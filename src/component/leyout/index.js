import React from 'react'
import './style.scss'
import CardText from './subComponents/cardText'

function Layout({ children }) {
    const dataLeft = {
        inicio: 'A',
        title: "Banto",
        content: "é uma marca que visa posicionar empresas na internet, de forma proﬁssional através do desenvolvimento de aplicativos e websites."
    }
    const dataRight = {
        title: "Foco",
        content: "diversidade e qualidade."
    }
    return (
        <div className='layout'>
            <div className='head'>
                <div className='left'>
                    <CardText data={dataLeft} type='cardTextLeft' />
                </div>
                <div className='right'>
                    <CardText data={dataRight} type='cardTextRight' />
                </div >
            </div>
            {
                children
            }
        </div>
    )
}

export default Layout