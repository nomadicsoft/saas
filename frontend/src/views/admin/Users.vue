<template>
    <admin-dashboard-page>
        <v-data-table
            :headers="headers"
            :items="users"
            :items-per-page="5"
            class="elevation-1"
        >
            <template v-slot:item.created_at="{ item }">
                {{ item.created_at }} <!--TODO add day.js and default format -->
            </template>
        </v-data-table>
    </admin-dashboard-page>
</template>

<script>
    import User from '../../models/User';
    import AdminDashboardPage from "../../layouts/AdminDashboardPage";

    export default {
        name: "Users",
        components: {AdminDashboardPage},
        data: function () {
            return {
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
        async mounted() {
            this.users = await User.get()
            console.log(this.users);
        },
    }
</script>

<style scoped>

</style>
