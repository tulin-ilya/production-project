import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import { TBuildOptions } from "./typings";

export const buildPlugins = ({
    paths,
    isDev,
    baseApiHost,
}: TBuildOptions): webpack.WebpackPluginInstance[] => {
    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new webpack.DefinePlugin({
            __IS_DEV: JSON.stringify(isDev),
            __BASE_API_HOST: JSON.stringify(baseApiHost),
        }),
    ];

    if (isDev) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new BundleAnalyzerPlugin()
        );
    }

    return plugins;
};
