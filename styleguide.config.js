const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    title: 'vue-bw documentation',
    components: 'src/components/**/*.vue',
    usageMode: 'expand',
    require: [
        path.join(__dirname, 'src/index.scss'),
    ],
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    exclude: /node_modules/,
                    loader: 'vue-loader',
                },
                {
                    test: /\.scss$/,
                    loaders: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ],
        },
        plugins: [
            new VueLoaderPlugin(),
        ],
    },
};
