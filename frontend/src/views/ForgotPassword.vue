<template>
    <front-layout>
        <div class="flex-wrapper-full-background d-flex  fill-height" style="width: 100%">
            <v-card class="mx-auto my-auto pa-5" max-width="900" min-width="500" raised>
                <v-card-title>Password Reset</v-card-title>
                <v-card-text>
                    <v-form>
                        <v-row>
                            <v-col>
                                <v-text-field label="Email" v-model="email"/>
                            </v-col>
                        </v-row>

                    </v-form>
                </v-card-text>
                <v-card-actions  class="text-center">
                    <v-btn @click="handleForgotPassword">Reset</v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </front-layout>
</template>

<script>
    import {mapActions} from "vuex";
    import FrontLayout from "../layouts/FrontLayout";
    import Api from "../api/Api";

    export default {
        name: "ForgotPassword",
        components: {FrontLayout},
        data: function () {
            return {
                email: '',
            }
        },
        methods: {
            async handleForgotPassword() {
                const {email} = this;
                let response = await Api.forgotPassword(email)
                console.log(response);
            },
            ...mapActions(['signUp']),
        },
    }
</script>

<style scoped lang="scss">

</style>
