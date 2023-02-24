import path from "path";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const inquirer = require("inquirer");

import { paths, prompts } from "./config";
import { createFn } from "./create-fn";

const template = path.resolve(__dirname, "template");
const src = path.resolve("./src");

inquirer.prompt(prompts).then((answers: Record<string, string>) => {
    const { name, type } = answers;
    const componentPath = `${src}/${paths[type]}/${name}`;

    createFn(template, componentPath, name, type);
});
