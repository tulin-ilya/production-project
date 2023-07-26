export type TBuildMode = "production" | "development";

export type TBuildPaths = {
    entry: string;
    build: string;
    html: string;
    src: string;
};

export type TBuildEnv = {
    mode: TBuildMode;
    port: number;
    baseApiHost: string;
};

export type TBuildOptions = {
    mode: TBuildMode;
    paths: TBuildPaths;
    isDev: boolean;
    port: number;
    baseApiHost: string;
};
