<template>
    <v-main>
        <top-menu/>
        <v-container fluid class="fill-height  ma-0 pa-0">
            <v-row class="fill-height pl-2">
                <v-flex shrink>
                    <user-drawer-menu />
                </v-flex>
                <v-flex grow class="px-15">
                    <slot> <!--CONTENT--> </slot>
                </v-flex>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import UserDrawerMenu from "../components/dashboard/UserDrawerMenu";
    import TopMenu from "../components/TopMenu";
    export default {
        name: "user-dashboard-layout",
        components: {TopMenu, UserDrawerMenu},
        data: function () {
            return {}
        },
    }
</script>

<style scoped>

</style>
