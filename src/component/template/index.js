import React from 'react'
import Header from '../header'
import Footer from '../footer'
import './style.scss'

function Template({ children }) {
    return (
        <div className="template">
            <div className='container'>
                <Header />
                {
                    children
                }
                <Footer />
            </div>
        </div>
    )
}

export default Template