import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';


import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems, history }) => {
    return (
        <div className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (

                        <span className="empty-message">Your cart is empty</span>
                    )
            }
            <Link to="/checkout"><button className="btn btn-primary">Order Now</button></Link>
        </div>
    );
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
