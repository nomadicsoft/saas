<template>
    <user-dashboard-layout>
        <v-row>
            <v-col v-for="plan in pricePlans" :key="plan.id">
                <v-card>
                    <v-card-title>{{plan.name}}</v-card-title>
                    <v-card-actions>
                        <v-btn @click="handlePlanSelect(plan)">Select</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </user-dashboard-layout>
</template>

<script>
    import PricePlan from "../../../models/PricePlan";
    import UserDashboardLayout from "../../../layouts/UserDashboardLayout";

    export default {
        name: "SelectPlan",
        components: { UserDashboardLayout},
        data: function () {
            return {
                pricePlans: []
            }
        },
        methods: {
            handlePlanSelect(plan) {
                this.$router.push({name: 'dashboard.billing.checkout', params: {plan}})
            }
        },
        async mounted() {
            this.pricePlans = await PricePlan.get()
        },
    }
</script>

<style scoped>

</style>
