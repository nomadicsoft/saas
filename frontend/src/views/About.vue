<template>
    <front-layout>
        <v-container>
            <v-row class="text-center">
                <v-col cols="12">
                    <router-link :to="{name: 'home'}">Home</router-link>
                </v-col>
            </v-row>
        </v-container>
    </front-layout>
</template>

<script>

    import FrontLayout from "../layouts/FrontLayout";
    export default {
        name: 'about',
        components: {FrontLayout},
    }
</script>
