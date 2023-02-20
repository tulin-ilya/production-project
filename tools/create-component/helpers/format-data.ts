import { toPascalCase } from "./to-pascal-case";

export const formatData = (
    data: string,
    componentName: string,
    baseType?: string
) => {
    return (data = data
        .replaceAll("component-name", componentName)
        .replaceAll("ComponentName", toPascalCase(componentName))
        .replaceAll("component-type", baseType)
        .replaceAll("ComponentType", toPascalCase(baseType)));
};
