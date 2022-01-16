import React from 'react'
import Card from './Card'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Card
        data={100}
        title="Project Name"
        description="Total number of projects"
        percentage={50}
      />
    </React.Fragment>
  )
}

export default Layout
