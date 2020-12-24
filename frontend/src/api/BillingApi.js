export default {
    loadIntentToken(){
        return new Promise((resolve) => {
            window.axios.get('/api/billing/setup-intent').then(response => resolve(response.data))
        })
    },

    updateSubscription(paymentMethodStripeId, planStripeId){
        return new Promise((resolve) => {
            window.axios.put('/api/billing/subscription', {
                plan: planStripeId,
                payment: paymentMethodStripeId
            }).then(res => resolve(res.data) );
        })
    },
    removePaymentMethod( methodStripeId ) {
        return new Promise((resolve) => {
            window.axios.post('/api/billing/remove-payment', {
                id: methodStripeId
            }).then(res => resolve(res.data));
        })
    }

}
