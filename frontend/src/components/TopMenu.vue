<template>
    <v-app-bar
        app
        color="primary"
        dark
    >
        <router-link :to="{name: 'home'}">
            <div class="d-flex align-center">
                <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                    transition="scale-transition"
                    width="30"
                />
                <h3 class="white--text">
                    Saas
                </h3>
            </div>
        </router-link>

        <v-spacer></v-spacer>

        <v-btn
            :to="{name: 'admin.users.index'}"
            text
        >
            <span class="mr-2">Dashboard</span>
            <v-icon>mdi-account</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        name: "top-menu",
        data: function () {
            return {}
        },
    }
</script>

<style scoped>

</style>
