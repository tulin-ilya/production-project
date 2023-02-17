type TModeClasses = Record<string, string | boolean>;

export default (
    mainClass: string,
    modeClasses?: TModeClasses,
    additionalClasses?: string[]
): string => {
    return [
        mainClass,
        ...additionalClasses,
        ...Object.entries(modeClasses)
            .filter(([_, condition]) => Boolean(condition))
            .map(([classname]) => classname),
    ].join(" ");
};
