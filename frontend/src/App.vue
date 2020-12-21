<template>
    <v-app>
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
                :to="{name: 'admin.users'}"
                text
            >
                <span class="mr-2">Dashboard</span>
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>

    export default {
        name: 'App',

        components: {
        },

        data: () => ({
            //
        }),
    };
</script>
