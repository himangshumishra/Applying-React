import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Counterproject from './Counter.jsx'
import Colorchnagerproject from './Cc.jsx'
import PasswordGenerator from './pgen.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <Counterproject />
    <Colorchnagerproject />
    <PasswordGenerator />
    </>
)
