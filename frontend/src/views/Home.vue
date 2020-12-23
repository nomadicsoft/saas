<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <router-link :to="{name: 'about'}">About</router-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'Home',
    }
</script>
