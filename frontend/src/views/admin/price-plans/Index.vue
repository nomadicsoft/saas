<template>
    <admin-dashboard-layout>
        <v-row>
            <v-col class="text-right">
                <v-btn @click="$router.push({name: 'admin.price-plans.create'})">Create</v-btn>
            </v-col>
        </v-row>
        <v-data-table
            :loading="loading"
            loading-text="Loading... Please wait"
            :headers="headers"
            :items="pricePlans"
            :items-per-page="5"
            class="elevation-1"
            @click:row="handleClickRow"
        >
            <template v-slot:item.created_at="{ item }">
                {{ item.created_at }} <!--TODO add day.js and default format -->
            </template>
        </v-data-table>
    </admin-dashboard-layout>
</template>

<script>
    import AdminDashboardLayout from "../../../layouts/AdminDashboardLayout";
    import PricePlan from "../../../models/PricePlan";

    export default {
        name: "users-index",
        components: {AdminDashboardLayout},
        data: function () {
            return {
                pricePlans: [],
                loading: false,
                headers: [
                    {
                        text: '# ID',
                        align: 'start',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Name', value: 'name' },
                ],
            }
        },
        methods: {
            handleClickRow(plan) {
                this.$router.push({name: 'admin.price-plans.edit', params: {id: plan.id}})
            }
        },
        async mounted() {
            this.loading = true
            this.pricePlans = await PricePlan.get()
            this.loading = false
        },
    }
</script>

<style scoped>

</style>
