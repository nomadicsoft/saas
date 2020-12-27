<template>
    <admin-dashboard-layout>
        <v-data-table
            :loading="loading"
            loading-text="Loading... Please wait"
            :headers="headers"
            :items="users"
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
    import User from '../../../models/User';
    import AdminDashboardLayout from "../../../layouts/AdminDashboardLayout";

    export default {
        name: "users-index",
        components: {AdminDashboardLayout},
        data: function () {
            return {
                loading: false,
                users: [],
                headers: [
                    {
                        text: '# ID',
                        align: 'start',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Name', value: 'name' },
                    { text: 'Email', value: 'email' },
                    { text: 'Created at', value: 'created_at' },
                ],
            }
        },
        methods: {
            handleClickRow(user) {
                console.log(user)
                this.$router.push({name: 'admin.users.show', params: {id: user.id}})
            }
        },
        async mounted() {
            this.loading = true
            this.users = await User.get()
            this.loading = false
        },
    }
</script>

<style scoped>

</style>
