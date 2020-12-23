<template>
    <v-data-table
        :headers="headers"
        :items="users"
        :items-per-page="5"
        class="elevation-1"
        @click:row="handleClickRow"
    >
        <template v-slot:item.created_at="{ item }">
            {{ item.created_at }} <!--TODO add day.js and default format -->
        </template>
    </v-data-table>
</template>

<script>
    import User from '../../../models/User';

    export default {
        name: "users-index",
        data: function () {
            return {
                users: [],
                headers: [
                    {
                        text: '# ID',
                        align: 'start',
                        sortable: false,
                        value: 'id',
                    },
                    { text: 'Name', value: 'name' },
                    { text: 'Email', value: 'email' },
                    { text: 'Created at', value: 'created_at' },
                ],
            }
        },
        methods: {
            handleClickRow(user) {
                console.log(user)
                this.$router.push({name: 'admin.users.show', params: {id: user.id}})
            }
        },
        async mounted() {
            this.users = await User.get()
            console.log(this.users);
        },
    }
</script>

<style scoped>

</style>
