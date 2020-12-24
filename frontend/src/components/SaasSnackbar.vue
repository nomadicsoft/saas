<template>
    <v-snackbar
        v-model="snackbar.show"
        bottom right :color="snackbar.color"
        :timeout="snackbar.timeout ? snackbar.timeout : -1"
    >
        {{ snackbar.text }}

        <template v-slot:action="{ attrs }">
            <v-btn
                dark
                text
                v-bind="attrs"
                @click="hideSnackBar()"
            >
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
    import {mapMutations, mapState} from "vuex";

    export default {
        name: "saas-snackbar",
        computed: {
            ...mapState({
                snackbar: state => state.site.snackbar
            })
        },
        data: function () {
            return {}
        },
        methods: {
            ...mapMutations(['hideSnackBar'])
        },

    }
</script>

<style scoped>

</style>
