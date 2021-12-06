import React from 'react'
import classes from './Layout.module.css'
import MainNavigation from './MainNavigation'

const Layout = (props) => {
    return <React.Fragment>
          <MainNavigation/>
          <main className={classes.main}>{props.children}</main>
    </React.Fragment>
}

export default Layout
//we can create wrapper component using props n props.children
// here we wil make Layout as our wrapper in App.js around swich
