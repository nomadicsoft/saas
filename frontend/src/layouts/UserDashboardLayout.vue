<template>
    <div class="d-flex flex-grow-1">
        <top-menu @toggleDrawer="mini = ! mini"  :is-dashboard="true"  />
        <user-drawer-menu :mini="mini"  />
        <v-main>
            <v-container>
                <slot> <!--CONTENT--> </slot>
            </v-container>
        </v-main>
    </div>
</template>

<script>
    import UserDrawerMenu from "../components/dashboard/UserDrawerMenu";
    import TopMenu from "../components/TopMenu";
    export default {
        name: "user-dashboard-layout",
        components: {TopMenu, UserDrawerMenu},
        data: function () {
            return {
                mini: false,
            }
        },
    }
</script>

<style scoped>

</style>
