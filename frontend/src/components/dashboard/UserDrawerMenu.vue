<template>
    <v-navigation-drawer
        :mini-variant.sync="mini"
        permanent app clipped
    >
        <v-list-item class="px-2">
            <v-list-item-avatar>
                <v-img :src="$auth.user().avatar_url"></v-img>
            </v-list-item-avatar>

            <v-list-item-title>
                {{$auth.user().name}}
                <v-btn x-small icon :to="{name: 'dashboard.profile'}">
                    <v-icon x-small>mdi-pencil</v-icon>
                </v-btn>
            </v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item link :to="link.to" v-for="link in menu" :key="JSON.stringify(link)">
                <v-list-item-icon>
                    <v-icon>{{link.icon}}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{link.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import menu from "./menu";

    export default {
        name: "UserDrawerMenu",
        props: ['mini'],
        data () {
            return {
                drawer: false,
                menu: menu,
            }
        },
        mounted() {
            console.log(this.$auth.user().id)
        }
    }
</script>

<style scoped>

</style>
