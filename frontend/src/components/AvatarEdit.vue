<template>
    <div>
        <div>
            <vue-dropzone
                ref="myVueDropzone" id="dropzone"
                :options="dropzoneOptions"
                @vdropzone-success="handleSuccess"
            ></vue-dropzone>
        </div>
    </div>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'

    export default {
        name: "avatar-edit",
        components: {
            vueDropzone: vue2Dropzone
        },
        props: ['current_url'],
        data: function () {
            return {
                dropzoneOptions: {
                    url: '/api/upload',
                    thumbnailWidth: 250,
                    maxFilesize: 5,
                    headers: {
                        Authorization: "Bearer 1|LC8pJHMPzi4q5Tekv9nYD0VihIiQsAVUIv8brBT3"
                    }
                }
            }
        },
        methods: {
            handleSuccess(file, res) {
                console.log(res);
                this.$emit('input', res);
            },
        },
        watch: {
            current_url() {
                if (this.current_url) {
                    this.$refs.myVueDropzone.removeAllFiles();
                    let file = {
                        size: 123,
                        name: this.current_url,
                        url: this.current_url,
                        thumbnail: this.current_url
                    };
                    this.$refs.myVueDropzone.manuallyAddFile(file, this.current_url);
                } else {
                    this.$refs.myVueDropzone.removeAllFiles();
                }
            },
        },
        async mounted() {
            const token = await localStorage.getItem('token')
            this.dropzoneOptions.headers.Authorization = "Bearer "+token
        }
    }
</script>

<style scoped>
    .dz-clickable.dz-started {
        text-align: center;
    }
</style>
