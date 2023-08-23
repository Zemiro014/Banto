import React from 'react'
import Layout from '../../component/leyout'
import './style.scss'
import BillBoard from '../../component/billBoard'
import Servicos from '../../component/servicos'
import CardComImage from '../../component/cards/cardComImage'
import Markting from '../../component/markting'

function Home() {
  return (
    <Layout>
        <BillBoard />
        <Markting />
        <CardComImage />
        <Servicos />
    </Layout>
  )
}

export default Home