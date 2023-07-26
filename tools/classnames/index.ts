type TModeClasses = Record<string, string | boolean>;

export default (
    mainClass: string,
    modeClasses: TModeClasses = {},
    additionalClasses: Array<string | undefined> = []
): string => {
    return [
        mainClass,
        ...additionalClasses.filter(Boolean),
        ...Object.entries(modeClasses)
            .filter(([_, condition]) => Boolean(condition))
            .map(([classname]) => classname),
    ].join(" ");
};
