import React, { useContext } from 'react'

import Banner from './Banner'
import Nav from './Nav'

const Header = () => {

  return (
    <header className="header">
      <Banner />
      <Nav />
    </header>
  )
}

export default Header