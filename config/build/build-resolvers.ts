import path from "path";
import webpack from "webpack";

import type { TBuildOptions } from "./typings";

export const buildResolvers = (
    options: TBuildOptions
): webpack.ResolveOptions => {
    const {
        paths: { src },
    } = options;

    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        modules: [src, "node_modules"],
        mainFiles: ["index"],
        alias: {
            "@app": `${src}/a_app`,
            "@processes": `${src}/b_processes`,
            "@pages": `${src}/c_pages`,
            "@widgets": `${src}/d_widgets`,
            "@features": `${src}/e_features`,
            "@entities": `${src}/f_entities`,
            "@shared": `${src}/g_shared`,
            "@config": `${path.resolve("config")}`,
            "@tools": `${path.resolve("tools")}`,
        },
    };
};
