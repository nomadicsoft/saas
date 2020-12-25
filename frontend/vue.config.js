module.exports = {
    "devServer": {
        "proxy": process.env.APP_URL
    },
    "outputDir": "../public/assets/",
    "publicPath": process.env.NODE_ENV === 'production'
        ? '/assets/'
        : '/',
    // modify the location of the generated HTML file.
    "indexPath": process.env.NODE_ENV === 'production'
        ? '../../resources/views/spa.blade.php'
        : 'index.html',
    "transpileDependencies": [
        "vuetify"
    ]
}
