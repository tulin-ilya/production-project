import path from "path";
import webpack from "webpack";

import { buildWebpackConfig } from "./config/build/build-webpack-config";
import { TBuildEnv, TBuildPaths } from "./config/build/typings";

export default (env: TBuildEnv) => {
    const paths: TBuildPaths = {
        build: path.resolve(__dirname, "build"),
        entry: path.resolve(__dirname, "src", "index.tsx"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    };

    const mode = env.mode || "development";
    const PORT = env.port || 3000;
    const baseApiHost = env.baseApiHost || "http://localhost:8000";

    const isDev = mode === "development";

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        baseApiHost,
    });

    return config;
};
