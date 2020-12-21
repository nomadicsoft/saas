<template>
    <button v-if="githubAuth" class="btn btn-dark text-white ml-auto" type="button" @click="login">
        Login With Github
    </button>
</template>

<script>
    export default {
        name: 'LoginWithGithub',

        computed: {
            githubAuth: () => window.config.githubAuth,
            url: () => `/api/oauth/github`
        },

        mounted () {
            window.addEventListener('message', this.onMessage, false)
        },

        beforeDestroy () {
            window.removeEventListener('message', this.onMessage)
        },

        methods: {
            async login () {
                const newWindow = openWindow('', "Login")

                const url = await this.$store.dispatch('fetchOauthUrl', {
                    provider: 'github'
                })

                newWindow.location.href = url
            },

            /**
             * @param {MessageEvent} e
             */
            onMessage (e) {
                if (e.origin !== window.origin || !e.data.token) {
                    return
                }


                this.$store.dispatch('setUserData', JSON.parse(e.data.user)).then(() => window.location.href = JSON.parse(e.data.user).redirect_path)

                // this.$router.push({ name: 'home' })
            }
        }
    }

    /**
     * @param  {Object} options
     * @return {Window}
     */
    function openWindow (url, title, options = {}) {
        if (typeof url === 'object') {
            options = url
            url = ''
        }

        options = { url, title, width: 600, height: 720, ...options }

        const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screen.left
        const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screen.top
        const width = window.innerWidth || document.documentElement.clientWidth || window.screen.width
        const height = window.innerHeight || document.documentElement.clientHeight || window.screen.height

        options.left = ((width / 2) - (options.width / 2)) + dualScreenLeft
        options.top = ((height / 2) - (options.height / 2)) + dualScreenTop

        const optionsStr = Object.keys(options).reduce((acc, key) => {
            acc.push(`${key}=${options[key]}`)
            return acc
        }, []).join(',')

        const newWindow = window.open(url, title, optionsStr)

        if (window.focus) {
            newWindow.focus()
        }

        return newWindow
    }
</script>
