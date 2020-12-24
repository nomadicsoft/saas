<template>
    <v-main>
        <top-menu />
        <v-container fluid class="fill-height">
            <v-row class="fill-height">
                <v-flex shrink>
                    <admin-drawer-menu />
                </v-flex>
                <v-flex grow class="px-15">
                    <slot> <!--CONTENT--> </slot>
                </v-flex>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import AdminDrawerMenu from "../components/admin/AdminDrawerMenu";
    import TopMenu from "../components/TopMenu";

    export default {
        name: "admin-dashboard-layout",
        components: {TopMenu, AdminDrawerMenu},
        data: function () {
            return {}
        },
    }
</script>

<style scoped>

</style>
