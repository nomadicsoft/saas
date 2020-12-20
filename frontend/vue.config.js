module.exports = {
    devServer: {
        proxy: 'http://saas.local'
    },

    // output built static files to Laravel's public dir.
    // note the "build" script in package.json needs to be modified as well.
    outputDir: '../public/assets/',

    publicPath: process.env.NODE_ENV === 'production'
        ? '/assets/'
        : '/',

    // modify the location of the generated HTML file.
    indexPath: process.env.NODE_ENV === 'production'
        ? '../../resources/views/spa.blade.php'
        : 'index.html'
}
