<template>
    <v-navigation-drawer
        :mini-variant.sync="mini"
        permanent app clipped
    >
        <v-list-item class="px-2">
            <v-list-item-avatar>
                <!--https://randomuser.me/api/portraits/men/85.jpg-->
                <v-img :src="$auth.user().avatar_url"></v-img>
            </v-list-item-avatar>

            <v-list-item-title>
                {{$auth.user().name}}
                <v-btn  x-small  icon :to="{name: 'admin.profile'}">
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
        name: "AdminDrawerMenu",
        props: ['mini'],
        data () {
            return {
                menu: menu,
            }
        },
    }
</script>

<style scoped>

</style>
