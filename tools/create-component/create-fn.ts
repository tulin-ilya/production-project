import fs from "fs";

import { formatData } from "./helpers/format-data";

export const createFn = (
    templatePath: string,
    newComponentPath: string,
    componentName: string,
    baseType: string
) => {
    fs.mkdirSync(newComponentPath);

    let currentTemplatePath = templatePath;
    let currentComponentPath = newComponentPath;

    const files = fs.readdirSync(currentTemplatePath);
    files.forEach((item) => {
        try {
            let data = fs.readFileSync(
                `${currentTemplatePath}/${item}`,
                "utf-8"
            );
            if (item.includes("component-name")) {
                item = item.replace("component-name", componentName);
            }
            fs.writeFileSync(
                `${currentComponentPath}/${item}`,
                formatData(data, componentName, baseType)
            );
        } catch (e) {
            createFn(
                `${currentTemplatePath}/${item}`,
                `${currentComponentPath}/${item}`,
                componentName,
                baseType
            );
        }
    });
};
