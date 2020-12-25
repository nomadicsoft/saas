<template>
    <v-navigation-drawer
        :mini-variant.sync="mini"
        permanent app clipped
    >
        <v-list-item class="px-2">
            <v-list-item-avatar>
                <v-img :src="user.avatar_url"></v-img>
            </v-list-item-avatar>

            <v-list-item-title>
                {{user.name}}
                <v-btn x-small icon :to="{name: 'dashboard.profile'}">
                    <v-icon x-small>mdi-pencil</v-icon>
                </v-btn>
            </v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item link :to="{name: 'dashboard.index'}">
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="{name: 'dashboard.billing'}">
                <v-list-item-icon>
                    <v-icon>mdi-credit-card</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Billing</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="{name: 'dashboard.billing.select-plan'}">
                <v-list-item-icon>
                    <v-icon>mdi-credit-card</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Select a plan</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "UserDrawerMenu",
        props: ['mini'],
        computed: {
            ...mapState({
                user: state => state.auth.user
            })
        },
        data () {
            return {
                drawer: false,
            }
        },
    }
</script>

<style scoped>

</style>
