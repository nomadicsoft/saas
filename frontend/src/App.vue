<template>
    <v-app>
        <router-view/>
        <saas-snackbar />
    </v-app>
</template>

<script>

    import {mapActions, mapMutations} from "vuex";
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
            ...mapMutations(['setToken']),
            ...mapActions(['getAuthUser'])
        },
        mounted() {
            const token = localStorage.getItem('token')
            if (token) {
                this.setToken(token);
            }
            this.getAuthUser()
        },
    };
</script>
<style type="text/css">
    #nprogress .bar {
        height: 4px !important;
    }
</style>
