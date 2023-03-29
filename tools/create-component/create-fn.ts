import fs from "fs";

import { formatData } from "./helpers/format-data";

export const createFn = (
    templatePath: string,
    newComponentPath: string,
    componentName: string,
    baseType: string
) => {
    fs.mkdirSync(newComponentPath);

    const files = fs.readdirSync(templatePath);
    files.forEach((item) => {
        try {
            const data = fs.readFileSync(`${templatePath}/${item}`, "utf-8");
            if (item.includes("component-name")) {
                item = item.replace("component-name", componentName);
            }
            fs.writeFileSync(
                `${newComponentPath}/${item}`,
                formatData(data, componentName, baseType)
            );
        } catch (e) {
            createFn(
                `${templatePath}/${item}`,
                `${newComponentPath}/${item}`,
                componentName,
                baseType
            );
        }
    });
};
