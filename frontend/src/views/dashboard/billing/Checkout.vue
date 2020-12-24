<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-card class="mx-auto px-15 py-15" flat outlined max-width="800">
                    <v-card-title>You're subscribing to {{selectedPlan.name}}</v-card-title>
                    <v-card-text>
                        <stripe-checkout-card @submit-card="subscribe" />
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import BillingApi from "../../../api/BillingApi";
    import StripeCheckoutCard from "../../../components/StripeCheckoutCard";
    import {mapMutations} from "vuex";

    export default {
        name: "Checkout",
        components: {
            StripeCheckoutCard
        },
        data: function () {
            return {
                addPaymentStatusError: '',
                selectedPlan: {},
            }
        },
        methods: {
            subscribe(method){
                BillingApi.updateSubscription(method, this.selectedPlan.stripe_id).then(() => {
                    this.showSnackBar({color: 'success', timeout: 3000, text: 'Subscription confirmed'})
                })
            },
            ...mapMutations(['showSnackBar'])
        },
        async mounted(){
            if (this.$route.params.plan) {
                this.selectedPlan = this.$route.params.plan;
            } else {
                this.$router.push({name: 'dashboard.billing.select-plan'})
            }
        },
    }
</script>

<style scoped>

</style>
