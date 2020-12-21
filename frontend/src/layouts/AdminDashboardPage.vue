<template>
    <v-container fluid class="fill-height">
        <v-row class="fill-height">
            <v-flex shrink>
                <admin-menu />
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
</template>

<script>
    import AdminMenu from "../components/admin/AdminMenu";

    export default {
        name: "admin-dashboard-page",
        components: {AdminMenu},
        data: function () {
            return {}
        },
    }
</script>

<style scoped>

</style>
