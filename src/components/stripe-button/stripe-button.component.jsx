import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HhVuxA1K7ntooPHjpjB5wLKxwV0HB87LnC4vUtiaEeVY0CsZ1lnQCoEf4DyAiPRFVpY95na56hF1AP0CYx66ko80021ntE0S7';

    const onToken = token => {
        console.log(token);
        if(token){
            alert('Payment Successful');
        }
    };

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Outdoor Clothing'
            billingAddress=''
            shippingAddress=''
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;