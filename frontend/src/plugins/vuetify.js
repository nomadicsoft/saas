import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#4474ee',
                secondary: '#424242',
                lightGrey: '#afafaf',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107'
            },
            dark: {
                primary: '#fd5312',
                secondary: '#424242',
                lightGrey: '#f2f2f2',
                accent: '#fb9f1e',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107'
            },
        },
    },
});
