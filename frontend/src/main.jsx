import React from 'react'
import ReactDOM from 'react-dom'
import Routes from 'Routes'
import Layout from 'Components/Layout'
import './styles/index.scss'
import 'animate.css'

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Routes />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
)
