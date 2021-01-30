<template>
    <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
            <v-btn  color="primary" rounded
                    dark
                    v-bind="attrs"
                    v-on="on"
            >
                Welcome
            </v-btn>
        </template>
        <v-list>
            <v-list-item :to="{name: dashboardLink}">
                <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>
            <v-list-item  @click="handleLogout">
                <v-list-item-title class="cursor-pointer">Logout</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>

    export default {
        name: "auth-user-dropdown",
        computed: {
            dashboardLink() {
              return this.$auth.user().primary_role_name === 'admin' ? 'admin.index' : 'dashboard.index'
            },
            auth() {
                return this.$auth
            }
        },
        data: function () {
            return {}
        },
        methods: {
            handleLogout() {
               this.$auth.logout()
            },
        }
    }
</script>

<style scoped>

</style>
