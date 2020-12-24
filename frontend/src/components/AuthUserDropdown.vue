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
            <v-list-item :to="{name: 'admin.users.index'}">
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
        data: function () {
            return {}
        },
        methods: {
            handleLogout() {
                this.$store.dispatch('logout').then(() => window.location.href = '/')
            },
        }
    }
</script>

<style scoped>

</style>
