import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { TBuildOptions } from "./typings";

export const buildLoaders = ({
    isDev,
}: TBuildOptions): webpack.RuleSetRule[] => {
    // Если не использовать ts то нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const scssLoader = {
        test: /\.s|[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\.module\./,
                        localIdentName: isDev
                            ? "[path][name]__[local]"
                            : "[hash:base64:8]",
                    },
                },
            },
            "sass-loader",
        ],
    };

    return [typescriptLoader, scssLoader];
};
