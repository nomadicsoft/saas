<template>
    <div class="d-flex flex-grow-1">
        <top-menu @toggleDrawer="mini = ! mini" :is-dashboard="true" />
        <admin-drawer-menu :mini="mini"  />
        <v-main>
            <v-container>
                <slot> <!--CONTENT--> </slot>
            </v-container>
        </v-main>
    </div>
</template>

<script>
    import AdminDrawerMenu from "../components/admin/AdminDrawerMenu";
    import TopMenu from "../components/TopMenu";

    export default {
        name: "admin-dashboard-layout",
        components: {TopMenu, AdminDrawerMenu},

        data: function () {
            return {
                mini: false,
            }
        },
    }
</script>

<style scoped>

</style>
