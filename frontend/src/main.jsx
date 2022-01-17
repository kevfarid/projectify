import React from 'react'
import ReactDOM from 'react-dom'
import Routes from 'Routes'
import Layout from 'Components/Layout'
import './styles/index.scss'
import 'animate.css'
import { UserContextProvider } from './context/UserContext'

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <Layout>
        <Routes />
      </Layout>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
