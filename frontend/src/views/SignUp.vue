<template>
    <front-layout>
        <div class="flex-wrapper-full-background d-flex  fill-height" style="width: 100%">
            <v-card class="mx-auto my-auto pa-5" max-width="900" min-width="500" raised>
                <v-card-title>Sign Up</v-card-title>
                <v-container>
                    <v-form>
                        <v-row>
                            <v-col>
                                <v-text-field  :error-messages="errors.email"  label="Email" v-model="email"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field  :error-messages="errors.password"  type="password" label="Password" v-model="password"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field type="password" :error-messages="errors.password_confirmation"  label="Password" v-model="password_confirmation"/>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-btn @click="handleSignUp">Sign Up</v-btn>
                            </v-col>
                            <!--     <v-col>
                                     <login-with-github />
                                 </v-col>
                                 <v-col>
                                     <login-with-google />
                                 </v-col>-->
                        </v-row>
                    </v-form>
                </v-container>
            </v-card>
        </div>
    </front-layout>
</template>

<script>
    /*    import LoginWithGithub from "../components/LoginWithGithub";
        import LoginWithGoogle from "../components/LoginWithGoogle";*/
    import {mapActions} from "vuex";
    import FrontLayout from "../layouts/FrontLayout";

    export default {
        name: "Login",
        components: {FrontLayout},
        /*        components: {LoginWithGithub, LoginWithGoogle},*/
        data: function () {
            return {
                email: '',
                password: '',
                password_confirmation: '',
                errors: {},
                user: [],
            }
        },
        methods: {
            handleSignUp() {
                const {email, password, password_confirmation} = this;
                this.signUp({email, password, password_confirmation}).then(async (res) => {
                    console.log(res)
                    this.$router.push({path: res.redirect_link});
                }).catch(e => this.errors = e.response.data.errors)
            },
            ...mapActions(['signUp']),
        }
    }
</script>

<style scoped lang="scss">

</style>
