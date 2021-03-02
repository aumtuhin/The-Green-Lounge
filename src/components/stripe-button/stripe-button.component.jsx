import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton= ({price}) => {
    const priceForStripe = price* 100;
    const publishableKey = 'pk_test_5PS3GmMsjXL6kgqnEXZrBLFB00HQzY8YLZ';
    const onToken = token => {
        console.log(token);
        alert('payment successfull');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='The Green Lounge'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeButton;
