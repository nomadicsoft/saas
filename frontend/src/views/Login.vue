<template>
    <div class="flex-wrapper-full-background d-flex  fill-height" style="width: 100%">
        <v-card class="mx-auto my-auto pa-5" max-width="900" min-width="500" raised>
            <v-card-title>Login</v-card-title>
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
                            <v-btn @click="handleLogin">Login</v-btn>
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
</template>

<script>
/*    import LoginWithGithub from "../components/LoginWithGithub";
    import LoginWithGoogle from "../components/LoginWithGoogle";*/
import {mapActions} from "vuex";
import User from "../models/User";

    export default {
        name: "Login",
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
                this.login({email, password}).then(async () => {
                    this.users = await User.get()
                    console.log(this.users);
                })
            },

            ...mapActions(['login']),
        }
    }
</script>

<style scoped lang="scss">

</style>
