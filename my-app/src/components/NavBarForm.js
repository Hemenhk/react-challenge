import React, { Component } from 'react'
import css from "./css/NavBarSimple.module.css"
import NavBarChild from './NavBarChild'

export class NavBarForm extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true

      }
    }

    handleLogin = () => {
        this.setState({
            isLoggedIn: false
        })
        console.log(this)
    }

    handleLogout = () => {
        this.setState({
            isLoggedIn:true
        })
        console.log(this)
    }

    render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <NavBarChild
            isLoggedIn={this.state.isLoggedIn}
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
        />
      </div>
    )
  }
}

export default NavBarForm