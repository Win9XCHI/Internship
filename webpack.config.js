var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './code/js/index.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'js/bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    module:{
        rules:[   
            {
                test: /\.jsx?$/, 
                exclude: /(node_modules)/,  
                loader: "babel-loader",  
                options:{
                    presets:["env", "react"]   
                }
            }
        ]
    }
};
