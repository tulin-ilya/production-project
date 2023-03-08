module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:i18next/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "simple-import-sort", "i18next"],
    rules: {
        indent: [2, 4],
        "i18next/no-literal-string": ["error", { markupOnly: true }],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "no-unused-vars": "warn",
        "no-shadow": "off",
        "no-underscore-dangle": "off",
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "off",
        "react/display-name": "off",
        "react/jsx-filename-extension": [
            2,
            { extensions: [".js", ".jsx", ".tsx"] },
        ],
        "simple-import-sort/imports": "error",
        "@typescript-eslint/ban-ts-comment": "warn",
    },
    overrides: [
        {
            files: ["*.test.{tsx,ts}"],
            rules: { "i18next/no-literal-string": "off" },
        },
    ],
};
