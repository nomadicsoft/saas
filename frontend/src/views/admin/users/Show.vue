<template>
    <admin-dashboard-layout>
        <v-card>
            <v-card-title>
                <v-row>
                    <v-col>
                        {{user.name}}
                    </v-col>
                    <v-col class="text-right">
                        <v-btn text :to="{name: 'admin.users.index'}">return</v-btn>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="user.email" disabled></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="user.created_at" disabled></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </admin-dashboard-layout>
</template>

<script>
    import User from "../../../models/User";
    import AdminDashboardLayout from "../../../layouts/AdminDashboardLayout";

    export default {
        name: "users-show",
        components: {AdminDashboardLayout},
        data: function () {
            return {
                user: {}
            }
        },
        async mounted() {
            const userId = this.$route.params.id
            this.user = await User.find(userId)
        },
    }
</script>

<style scoped>

</style>
