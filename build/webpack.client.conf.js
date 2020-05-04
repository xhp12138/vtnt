/*
 * @Description: 
 * @LastEditors: xhp
 * @Date: 2020-04-28 20:55:20
 * @LastEditTime: 2020-05-03 15:36:00
 * @FilePath: /mywork/myStudy/vtnt/build/webpack.client.conf.js
 */
const base = require('./webpack.base.conf');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { transformPath, styleloader } = require('./utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const entry = {
    'mobile': transformPath('main/mobile/index.ts'),
    //'desktop': transformPath('main/desktop/index.ts')
}
const htmlPlugin = function () {
    const arr = [];
    for (let i in entry) {
        arr.push(
            new HtmlWebpackPlugin({
                filename: `${i}/index.html`,
                template: transformPath(`main/${i}/index.html`),
                chunks: [i, 'vendor'],
                inject: true
            }))
    }
    return arr;
}
const client = merge(base, {
    entry,
    //stats: 'none',
    mode: 'production',
    output: {
        path: transformPath('dist'),
        filename: "[name]/index.js",
    },
    module: {
        rules: styleloader([
            {name:'css'},  
            {name:'scss',exexclude:[transformPath('src/styles/common.scss')]}
        ], process.env.NODE_ENV)
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             fooStyles: {
    //                 name: 'mobile',
    //                 test: (m, c, entry = 'foo') =>
    //                 // m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
    //                 {
    //                     console.log(m.resource)
    //                     if (m.resource == '/Users/hpxin/mywork/myStudy/vtnt/src/styles/mixins/config.scss') {
    //                         console.log('222');
    //                        return false
                            
    //                     }
    //                 },
    //                 chunks: 'all',
    //                 enforce: true,
    //             }
    //         },
    //     },
    // },
    plugins: [
        new CleanWebpackPlugin(),
        ...htmlPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]/index.css'
        })
    ]
});
module.exports = client;
