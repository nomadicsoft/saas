export default {
    loadIntentToken(){
        return new Promise((resolve,reject) => {
            window.axios.get('/api/billing/setup-intent')
                        .then(response => resolve(response.data))
                        .catch(e => reject(e));
        })
    },

    updateSubscription(paymentMethodStripeId, planStripeId){
        return new Promise((resolve,reject) => {
            window.axios.put('/api/billing/subscription', {
                plan: planStripeId,
                payment: paymentMethodStripeId
            }).then(res => resolve(res.data) ).catch(e => reject(e));
        })
    },
    removePaymentMethod( methodStripeId ) {
        return new Promise((resolve, reject) => {
            window.axios.post('/api/billing/remove-payment', {
                id: methodStripeId
            }).then(res => resolve(res.data)).catch(e => reject(e));
        })
    }

}
