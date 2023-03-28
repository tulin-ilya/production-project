// eslint-disable-next-line no-undef
module.exports = {
    settings: {
        react: {
            version: "detect",
        },
    },
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "simple-import-sort",
        "i18next",
        "react-hooks",
    ],
    rules: {
        "@typescript-eslint/ban-ts-comment": "warn",
        "i18next/no-literal-string": [
            "error",
            {
                markupOnly: true,
            },
        ],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        indent: [2, 4],
        "no-unused-vars": "warn",
        "no-shadow": "off",
        "no-underscore-dangle": "off",
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "off",
        "react/function-component-definition": "off",
        "react/display-name": "off",
        "react/jsx-filename-extension": [
            2,
            {
                extensions: [".js", ".jsx", ".tsx"],
            },
        ],
        "react-hooks/rules-of-hooks": "warn",
        "react-hooks/exhaustive-deps": "warn",
        "simple-import-sort/imports": "error",
    },
    overrides: [
        {
            files: ["*.test.{tsx,ts}"],
            rules: {
                "i18next/no-literal-string": "off",
            },
        },
    ],
};
