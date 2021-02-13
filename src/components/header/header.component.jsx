import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
 
const Header = ({currentUser}) => {
    return (
        <div className="header" >
            <Link to='/' className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop" >SHOP</Link>
                <Link className="option" to="/contact" >CONTACT</Link>
                {
                    currentUser ? 
                    <div className="option" onClick={() => auth.signOut()}>SIGNOUT</div>
                    :
                    <Link className="option" to="/signin" >SIGNIN</Link>
                }
            </div>
        </div>
    );
}

export default Header;
