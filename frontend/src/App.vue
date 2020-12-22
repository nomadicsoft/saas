<template>
    <v-app>
        <router-view/>

    </v-app>
</template>

<script>

    import {mapMutations} from "vuex";

    export default {
        name: 'App',

        components: {
        },

        data: () => ({
            //
        }),
        methods: {
          ...mapMutations(['setToken'])
        },
        mounted() {
            const token = localStorage.getItem('token')
            if (token) {
                this.setToken(token);
            }
        }
    };
</script>
