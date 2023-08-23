import React from 'react'
import './style.scss'
import CardServicos from './subComponents/CardServicos'

function Servicos() {

  const data = [
    { id: 1, title: 'Front-end', aptidoes: ['HTML', 'Reacts Js', 'Angular', 'Vue Js', 'TypeScript', 'Sass', 'Styled-component', 'Entre outros'] },
    { id: 2, title: 'Back-end', aptidoes: ['Java', 'C#', 'Node Js', 'Spring Boot', 'Quarkus', 'Nest Js', '.Net'] },
    { id: 3, title: 'Mobile', aptidoes: ['Flutter', 'React Nactive'] },
    { id: 4, title: 'Banco de dados', aptidoes: ['PostgreSql', 'MongoDB', 'Cassandra', 'MySql', 'Redis', 'Oracle', 'DynamoDB'] },
    { id: 5, title: 'cloud', aptidoes: ['AWS', 'Azure'] },
    { id: 6, title: 'SO', aptidoes: ['WINDOWS', 'LINUX'] },
  ]
  return (
    <div className='servicos'>
      <h3>Nossas aptidões</h3>
      <p>Trabalhamos com as tecnologias mais modernas do mercado. Confira algumas delas:</p>
      <div className='cards'>
        {
          data.map(item => (
            <CardServicos key={item.id} data={item} />
          ))
        }
      </div>
      <div className='infoExtra'>
        Mais que squads e estruturas multifuncionais, na Banto ampliamos as frentes de
        eficiência em ciclos evolutivos de tecnologia do seu negócio.
        <button>Fale com a gente</button>
      </div>
    </div>
  )
}

export default Servicos