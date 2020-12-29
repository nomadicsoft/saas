<template>
    <v-app-bar
        app
        color="primary"
        dark
        clipped-left
    >
        <v-app-bar-nav-icon @click="$emit('toggleDrawer')"
                            v-if="isDashboard"
        />
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
                    {{appName}}
                </h3>
            </div>
        </router-link>

        <v-spacer></v-spacer>

        <auth-user-dropdown v-if="$store.state.auth.token" />
        <v-btn text :to="{name: 'login'}" v-else>Login</v-btn>
    </v-app-bar>
</template>

<script>
    import AuthUserDropdown from "./AuthUserDropdown";
    export default {
        name: "top-menu",
        props: {
            isDashboard: {
                default: false,
                type: Boolean
            }
        },
        computed: {
            appName() {
                return process.env.VUE_APP_APP_NAME ? process.env.VUE_APP_APP_NAME : "Saas"
            }
        },
        components: {AuthUserDropdown},
        data: function () {
            return {}
        },
    }
</script>

<style scoped>

</style>
