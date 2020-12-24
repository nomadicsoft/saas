<template>
    <user-dashboard-layout>
     <v-card class="mx-auto px-15 py-15">
        <v-card-text>
            <div v-if="activePricePlan && activePricePlan.name">
                Your Plan is: {{activePricePlan.name}}
            </div>
            <stripe-checkout-card @submit-card="savePaymentMethod" />


            <div class="mt-15">
                <div  v-if="paymentMethods.length === 0" class="">
                    No payment method found, please add a payment method.
                </div>
                <div v-else>
                    <div v-for="(method, key) in paymentMethods"
                         :key="'method-'+key"
                         @click="paymentMethodSelected = method.id"
                         class="border rounded row p-1"
                         v-bind:class="{
                            'bg-success text-light': paymentMethodSelected == method.id
                        }">
                        <div class="col-2">
                            {{ method.brand.charAt(0).toUpperCase() }}{{ method.brand.slice(1) }}
                        </div>
                        <div class="col-7">
                            Ending In: {{ method.last_four }} Exp: {{ method.exp_month }} / {{ method.exp_year }}
                        </div>
                        <div class="col-3">
                            <span v-on:click.stop="removePaymentMethod( method.id )">Remove</span>
                        </div>
                    </div>
                </div>
            </div>
        </v-card-text>

    </v-card>
    </user-dashboard-layout>
</template>

<script>
    import BillingApi from "../../../api/BillingApi";
    import StripeCheckoutCard from "../../../components/StripeCheckoutCard";
    import {mapActions, mapMutations, mapState} from "vuex";
    import PricePlan from "../../../models/PricePlan";
    import UserDashboardLayout from "../../../layouts/UserDashboardLayout";

    export default {
        name: "Index",
        components: {StripeCheckoutCard, UserDashboardLayout},
        computed: {
            ...mapState({
                user: state => state.auth.user
            })
        },
        data: function () {
            return {
                paymentMethods: [],
                paymentMethodSelected: {},
                activePricePlan: {},
            }
        },
        methods: {

            loadPaymentMethods(){
                window.axios.get('/api/billing/payment-methods').then(response => this.paymentMethods = response.data);
            },
            removePaymentMethod( methodStripeId ){
                BillingApi.removePaymentMethod(methodStripeId).then(() => {
                    this.loadPaymentMethods()
                    this.showSnackBar({color: 'success', timeout: 3000, text: 'Billing Method Removed Successfully'})
                })
            },
            savePaymentMethod( method ){
                window.axios.post('/api/billing/payments', {
                    payment_method: method
                }).then( function(response){
                    console.log(response)
                    this.showSnackBar({color: 'success', timeout: 3000, text: 'Billing Method Added Successfully'})
                    this.loadPaymentMethods()
                }.bind(this));
            },
            ...mapMutations(['showSnackBar']),
            ...mapActions(['getAuthUser'])
        },
        async mounted() {
            this.loadPaymentMethods();
            if (this.user.price_plan_id) {
                console.log(this.user)
                this.activePricePlan = await PricePlan.find(this.user.price_plan_id)
            }
        }
    }
</script>

<style scoped>

</style>
