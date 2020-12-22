<template>
    <v-main>
        <top-menu/>
        <v-container fluid class="fill-height">
            <v-row class="fill-height">
                <v-flex shrink>
                    <user-drawer-menu />
                </v-flex>
                <v-flex grow class="px-15">
                    <!--SLOT-->
                    <slot>
                        <!-- This is where the content goes lol -->
                    </slot>
                    <!--SLOT-->
                </v-flex>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import UserDrawerMenu from "../components/dashboard/UserDrawerMenu";
    import TopMenu from "../components/TopMenu";
    export default {
        name: "UserDashboardPage",
        components: {TopMenu, UserDrawerMenu},
        data: function () {
            return {}
        },
    }
</script>

<style scoped>

</style>
