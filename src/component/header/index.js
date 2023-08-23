import React from 'react'
import Logo from '../../img/logo-principal.png'
import './style.scss'


const menus = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Sobre",
    url: "/sobre",
  },
  {
    id: 3,
    title: "Contato",
    url: "/contato",
  },
  {
    id: 4,
    name: "Serviços",
    url: "/servicos",
  },
  {
    id: 5,
    name: "Nossos parceiros",
    url: "/parceiros",
  },
  {
    id: 6,
    name: "Fazer parte",
    url: "inscrever",
  }
]

export default function Header() {
  return (
    <div className='header'>
      <div className="logo">
        <img src={Logo} alt='logo' />
      </div>
      <div className='menus'>
        {
          menus.map(item => (
            <div className="menu" key={item.id}>{item.name}</div>
          ))
        }
        <div className='menu'>
          <button>Contratar Serviço</button>
        </div>
      </div>
    </div>
  )
}