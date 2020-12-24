<template>
    <v-app>
        <component :is="layout">
        <router-view/>
        </component>
        <saas-snackbar />
    </v-app>
</template>

<script>

    import {mapMutations} from "vuex";
    import AdminDashboardLayout from "./layouts/AdminDashboardLayout";
    import FrontLayout from "./layouts/FrontLayout";
    import UserDashboardLayout from "./layouts/UserDashboardLayout";
    import EmptyLayout from "./layouts/EmptyLayout";
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
            AdminDashboardLayout, FrontLayout, UserDashboardLayout, EmptyLayout,
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
