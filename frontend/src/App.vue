<template>
    <v-app>
        <router-view/>
        <saas-snackbar />
    </v-app>
</template>

<script>

    import {mapMutations} from "vuex";
    import SaasSnackbar from "./components/SaasSnackbar";

    export default {
        name: 'App',
        computed: {
            layout() {
                return `${(this.$route.meta.layout || 'empty')}-layout`
            },
        },
        components: {
            SaasSnackbar,
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
<style type="text/css">
    #nprogress .bar {
        height: 4px !important;
    }
</style>
