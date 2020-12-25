<template>
    <front-layout>
        <div class="flex-wrapper-full-background d-flex  fill-height" style="width: 100%">
            <v-card class="mx-auto my-auto pa-5" max-width="900" min-width="500" raised>
                <v-card-title>Login</v-card-title>
                <v-card-text>
                    <v-container>
                        <v-form>
                            <v-row>
                                <v-col>
                                    <v-text-field label="Email" v-model="email"/>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field type="password" label="Password" v-model="password"/>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>

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
                </v-card-text>
                <v-card-actions class="text-center justify-space-around">
                    <div>
                        <div>
                            <v-btn @click="handleLogin">Login</v-btn>
                        </div>
                        <div class="mt-15 ">
                            <v-btn x-small text :to="{name: 'forgot-password'}">Forgot Password?</v-btn>
                            <v-btn x-small text :to="{name: 'sign-up'}">Sign Up</v-btn>
                        </div>
                    </div>
                </v-card-actions>
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
                user: [],
            }
        },
        methods: {
            handleLogin() {
                const {email, password} = this;
                this.login({email, password}).then(async (res) => {
                    this.$router.push({path: res.redirect_link});
                })
            },

            ...mapActions(['login']),
        }
    }
</script>

<style scoped lang="scss">

</style>
