<template>
    <user-dashboard-layout>
        <v-container fluid class="fill-height p-5">
            <v-row>
                <v-col>
                    <v-card  class="mx-auto my-auto" >
                        <v-card-text>
                            <v-row>
                                <v-col>
                                    <avatar-edit
                                        :current_url="user.avatar_url"
                                        @input="handleUpdateProfile"
                                        v-model="user.avatar_url"
                                    ></avatar-edit>

                                </v-col>
                                <v-col>
                                    <v-form>
                                        <v-container>
                                            <v-row>
                                                <v-col>
                                                    <v-text-field v-model="user.name" label="Name"
                                                                  placeholder=""></v-text-field>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col>
                                                    <v-btn @click="handleUpdateProfile">Update</v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-form>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>

            </v-row>
        </v-container>
    </user-dashboard-layout>
</template>

<script>
    import UserDashboardLayout from "../../layouts/UserDashboardLayout";
    import User from "../../models/User";
    import AvatarEdit from "../../components/AvatarEdit";
    import {mapState} from "vuex";
    export default {
        name: "Profile",
        components: {AvatarEdit, UserDashboardLayout},
        computed: {
            ...mapState({
                user: state => state.auth.user
            })
        },
        data: function () {
            return {
            }
        },
        methods: {
            async handleUpdateProfile() {
                const user = new User(this.user);
                this.user = await user.save()
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
