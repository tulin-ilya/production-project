import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

import { TBuildOptions } from "./typings";

export const buildDevServer = (
    options: TBuildOptions
): DevServerConfiguration => {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
};
