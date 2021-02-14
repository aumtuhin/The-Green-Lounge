import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-buttom.component';

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    );
}

export default CartDropdown;
