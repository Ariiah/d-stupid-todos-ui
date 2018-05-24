import React, { Component } from 'react'
import './header-container.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Header extends Component {
  logoutClick = (e) => {
    e.preventDefault()
    // this.props.logout()
  }
  render() {
    return (
      <div className="header-container">
        <a href="#title" className="title">heck</a>
        { this.props.username !== null && <a href='#logout' onClick={ this.logoutClick }>{`Logout${this.props.username}`}</a> }
      </div>
    )
  }
}

//reads the key from root-reducer
const mapStateToProps = (state) => state.auth
// const mapDispatchToProps = (dispatch) => bindActionCreators({logout}, dispatch)

export default connect(mapStateToProps)(Header)
