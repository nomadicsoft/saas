<template>
    <front-layout>
        <div class="flex-wrapper-full-background d-flex  fill-height" style="width: 100%">
            <v-card class="mx-auto my-auto pa-5" max-width="900" min-width="500" raised>
                <v-card-title>Password Reset</v-card-title>
                <v-card-text>
                    <v-form>
                        <v-row>
                            <v-col>
                                <v-text-field label="Email" disabled v-model="email"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field label="Password" type="password"  v-model="password"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field label="Password Confirmation" type="password"  v-model="password_confirmation"/>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
                <v-card-actions  class="text-center">
                    <v-btn @click="handleResetPassword">Reset</v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </front-layout>
</template>

<script>
    import FrontLayout from "../layouts/FrontLayout";
    import Api from "../api/Api";

    export default {
        name: "ResetPassword",
        components: {FrontLayout},
        data: function () {
            return {
                email: '',
                token: '',
                password: '',
                password_confirmation: '',
            }
        },
        methods: {
            async handleResetPassword() {
                const {email, password, password_confirmation, token} = this;
                let response = await Api.resetPassword({email, password, password_confirmation, token})
                console.log(response);
            },
        },
        mounted() {
            this.email = this.$route.query.email
            this.token = this.$route.query.token
        }
    }
</script>

<style scoped lang="scss">

</style>
