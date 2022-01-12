import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props)=>{

    return ( 
        <header className={classes.Header}>
            <NavLink className={({isActive}) => isActive ? classes.navActive : classes.nav} to='/'>HOME</NavLink>
            <NavLink className={({isActive}) => isActive ? classes.navActive : classes.nav} to='contact'>Contact</NavLink>
        </header>
    )
}

export default Header