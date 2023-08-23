import React from 'react'
import './style.scss'
import Mark1 from '../../img/mrk1.jpg'
import Mark2 from '../../img/mark2.jpg'

function Markting() {
    return (
        <div className='markting'>
            <h2 className='title'>O TI de uma empresa deve apoiar sua estratégia de negócios, não limitá-la.</h2>
            <div className='body'>
                <div className='imgs'>
                    <img src={Mark1} alt='' />
                    <img src={Mark2} alt='' />
                </div>
                <div className='content'>
                    <p>Somos uma consultoria de TI capaz de propor a melhor metodologia de gestão, implantação e construção de uma equipe de TI, focada na solução de problemas<br /> e na melhoria integrada de processos.</p>
                    <p>A Banto tech se concentra nas necessidades estratégicas dos clientes para determinar os recursos tecnológicos necessários para apoiar suas metas de negócios.<br /> Propormos melhorias evolutivas que geram aumento da eficiência operacional e fornecem soluções definitivas para tratar problemas recorrentes.</p>
                </div>
            </div>
        </div>
    )
}

export default Markting