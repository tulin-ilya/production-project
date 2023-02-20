import path from "path";
const inquirer = require("inquirer");

import { prompts, paths } from "./config";
import { createFn } from "./create-fn";

const template = path.resolve(__dirname, "template");
const src = path.resolve("./src");

inquirer.prompt(prompts).then((answers: Record<string, string>) => {
    const { name, type } = answers;
    const componentPath = `${src}/${paths[type]}/${name}`;

    createFn(template, componentPath, name, type);
});
