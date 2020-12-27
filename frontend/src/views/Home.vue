<template>
    <front-layout>
        <v-container>
            <v-row class="text-center">
                <v-col cols="12">
                    {{ $t('languages.en')}}
                    <router-link :to="{name: 'about'}">About</router-link>
                </v-col>
            </v-row>
        </v-container>
    </front-layout>
</template>

<script>
    import FrontLayout from "../layouts/FrontLayout";
    export default {
        name: 'Home',
        components: {FrontLayout},
    }
</script>
