module.exports = {
    entry: "./app/App.js",
    output: {
        filename: "public/bundle.js"
    },
    module:{
        loaders:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets: ["react"]
                }
            }
        ]
    }
}