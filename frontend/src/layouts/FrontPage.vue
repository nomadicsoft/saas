<template>
    <v-main>
        <top-menu />
        <!--SLOT-->
        <slot>
            <!-- This is where the content goes lol -->
        </slot>
        <!--SLOT-->
    </v-main>
</template>

<script>
    import TopMenu from "../components/TopMenu";

    export default {
        name: "front-page",
        components: {TopMenu},
        data: function () {
            return {}
        },
    }
</script>

<style scoped>

</style>
