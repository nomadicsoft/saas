<template>
    <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
    >
        <v-list-item class="px-2">
            <v-list-item-avatar  size="24">
                <!--https://randomuser.me/api/portraits/men/85.jpg-->
                <v-img :src="user.avatar_url"></v-img>
            </v-list-item-avatar>

            <v-list-item-title>
                {{user.name}}
                <v-btn  x-small  icon :to="{name: 'admin.profile'}">
                    <v-icon x-small>mdi-pencil</v-icon>
                </v-btn>
            </v-list-item-title>

            <v-btn
                icon
                @click.stop="mini = !mini"
            >
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item link :to="{name: 'admin.index'}">
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="{name: 'admin.price-plans.index'}">
                <v-list-item-icon>
                    <v-icon>mdi-application-cog</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Price Plans</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="{name: 'admin.users.index'}">
                <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Users</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "AdminDrawerMenu",
        computed: {
            ...mapState({
                user: state => state.auth.user
            })
        },
        data () {
            return {
                drawer: false,
                mini: false,
            }
        },
    }
</script>

<style scoped>

</style>
