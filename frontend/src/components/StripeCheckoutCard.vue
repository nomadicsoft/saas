<template>
    <v-card class="mx-auto px-15 py-15"  max-width="600" elevation="2">
        <v-card-text>
            <v-form>
                <v-row>
                    <v-col>
                        <label>Card Holder Name</label>
                        <v-text-field dense outlined id="card-holder-name" type="text" v-model="name" class="form-control mb-2" />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <div id="card-element">

                        </div>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn id="add-card-button" @click="handleSubmit">
                Submit
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import StripeApi from "../api/StripeApi";
    import BillingApi from "../api/BillingApi";

    export default {
        name: "StripeCheckoutCard",
        data: function () {
            return {
                publishableKey: 'pk_test_51HX08wCgYzmVVpXhy3kDaHLTr73031tO7qb75IlJJQlX9LjZkNfPqi3J2Nh5b23KoM5lRZhP4monqOsH1g5gLCv900TbsNGIEu',
                stripe: '',
                elements: '',
                card: '',
                intentToken: '',
                name: '',
                addPaymentStatusError: '',
            }
        },
        methods: {
            handleSubmit() {
                const payload = {payment_method: {card: this.card, billing_details: {name: this.name}}}
                this.stripe.confirmCardSetup(
                    this.intentToken.client_secret, payload
                ).then(result => {
                    if (result.error) {
                        this.addPaymentStatusError = result.error.message;
                    } else {
                        this.card.clear();
                        this.name = '';
                        this.$emit('submit-card', result.setupIntent.payment_method)
                    }
                });
            }
        },
        async mounted() {
            this.intentToken = await  BillingApi.loadIntentToken();
            StripeApi.includeStripe(() => {
                this.stripe = window.Stripe( this.publishableKey );
                this.elements = this.stripe.elements();
                this.card = this.elements.create('card');
                this.card.mount('#card-element');
            });
        }
    }
</script>

<style scoped>

</style>
