export const paths: Record<string, string> = {
    widget: "d_widgets",
    component: "g_shared/ui-components",
};

export const prompts = [
    {
        type: "list",
        name: "type",
        message: "К чему тносится компонент",
        choices: Object.keys(paths),
    },
    {
        type: "input",
        name: "name",
        message: "Название компонента",
        default: "simple-component",
    },
];
