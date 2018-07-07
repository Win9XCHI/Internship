var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './code/js/index.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'js/bundle.js'
        //publicPath: 'src/'
    },
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
        //overlay: true
    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["env", "react"]    // используемые плагины
                }
            }
        ]
    }
};
