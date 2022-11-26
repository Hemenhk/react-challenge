import React from "react";
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello, ',
            name: 'guest!',
            buttonText: 'login',
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('PreviouState', prevState);
            console.log('Previous Props', prevProps);
            return {
                message: prevState.message === 'Hello, ' ? 'Welcome back, ' : 'Hello, ',
                name: prevState.name === 'guest!' ? 'user!' : 'guest!',
                buttonText: prevState.buttonText === 'login' ? 'logout' : 'login'
            }
        })
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <span>{this.state.message} {this.state.name}</span>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default NavBarSimple;