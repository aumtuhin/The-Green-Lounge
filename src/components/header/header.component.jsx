import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="menu fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to='/'><i className="fa fa-pagelines"></i> The Forest Lounge</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/menus">Menus</Link>
                            </li>
                            {currentUser ? (
                                <li className="nav-item" onClick={() => auth.signOut()}>
                                    <Link className='nav-link' to="">Sign Out</Link>
                                </li>
                            ) : (
                                    <li className="nav-item">
                                        <Link className='nav-link' to='/signin'>Sign In</Link>
                                    </li>
                                )}
                            <li className="nav-item dropdown">
                                <CartIcon />
                                <CartDropdown />
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
