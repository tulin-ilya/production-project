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
                            ? "[file]__[local]"
                            : "[hash:base64:8]",
                    },
                },
            },
            "sass-loader",
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    return [svgLoader, fileLoader, typescriptLoader, scssLoader];
};
