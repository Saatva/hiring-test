import React, { useContext } from 'react'

const Banner = () => {

  const message = 'Save with our Rise & Shine Sale! Enjoy $200 off any purchase of $1,000 or more before midnight Monday 10/5'

  return (
    <aside className="banner">
      <div className="container banner__container">
        <div className="banner__message">{message}</div>
      </div>
    </aside>
  )
}

export default Banner