<template>
    <v-main>
        <top-menu />
        <slot> <!--CONTENT--> </slot>
    </v-main>
</template>

<script>
    import TopMenu from "../components/TopMenu";

    export default {
        name: "front-layout",
        components: {TopMenu},
        data: function () {
            return {}
        },
    }
</script>

<style scoped>

</style>
