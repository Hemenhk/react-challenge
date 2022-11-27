import React from 'react'

function NavBarChild(props) {
  return (
    <div>
        {
            props.isLoggedIn ? (
                <div>
                    <button onClick={props.handleLogin}>Login</button>
                </div>
            ) : (
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder='username'></input>
                    <label htmlFor="pword">Password:</label>
                    <input type="password" id="pword" name="pword" placeholder='password'></input>
                    <button onClick={props.handleLogout}>Submit</button>
                </div>
            )
        }
    </div>
  )
}

export default NavBarChild