import React, { Component } from 'react'
import './header-container.css'

// const Header = () => (
//   <h1>Header</h1>
// )

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <a href="#title" className="title">what the todo</a>
      </div>
    )
  }
}

export default Header
