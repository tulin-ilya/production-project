import path from "path";
import type webpack from "webpack";

module.exports = ({ config }: { config: webpack.Configuration }) => {
    const srcPath = path.resolve("./src");

    config.resolve.modules.push(srcPath);
    config.resolve.extensions.push(".ts", ".tsx");

    config.resolve.alias = {
        "@app": `${srcPath}/a_app`,
        "@processes": `${srcPath}/b_processes`,
        "@pages": `${srcPath}/c_pages`,
        "@widgets": `${srcPath}/d_widgets`,
        "@features": `${srcPath}/e_features`,
        "@shared": `${srcPath}/g_shared`,
        "@config": path.resolve("config"),
        "@tools": path.resolve("tools"),
    };

    return config;
};
