<template>
    <front-page>
        <v-container>
            <v-row class="text-center">
                <v-col cols="12">
                    <router-link :to="{name: 'about'}">About</router-link>
                </v-col>
            </v-row>
        </v-container>
    </front-page>
</template>

<script>


    import FrontPage from "../layouts/FrontPage";

    export default {
        name: 'Home',
        components: {
            FrontPage
        }
    }
</script>
