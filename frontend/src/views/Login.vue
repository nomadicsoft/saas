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
                                    <v-text-field :error-messages="errors.email" label="Email" v-model="email"/>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field :error-messages="errors.password"  type="password" label="Password" v-model="password"/>
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
    import FrontLayout from "../layouts/FrontLayout";

    export default {
        name: "Login",
        components: {FrontLayout},
        /*        components: {LoginWithGithub, LoginWithGoogle},*/
        data: function () {
            return {
                email: '',
                password: '',
                errors: {},
            }
        },
        methods: {
            async handleLogin() {
                const {email, password} = this;
                this.$auth.login({data: {email, password}, redirect: null})
                    .then(res => {
                        let route = res.data.data.roles.findIndex(role => role === 'admin') > -1
                            ? this.$auth.options.loginData.redirect.admin
                            : this.$auth.options.loginData.redirect.other

                        this.$router.push(route)
                    })
                    .catch((error) => {
                        this.errors = error.response.data.errors;
                    })
            },
        }
    }
</script>

<style scoped lang="scss">

</style>
