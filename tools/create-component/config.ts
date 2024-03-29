export const paths: Record<string, string> = {
    page: "c_pages",
    feature: "e_features",
    entitie: "f_entities",
    widget: "d_widgets",
    component: "g_shared/ui-kit",
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
