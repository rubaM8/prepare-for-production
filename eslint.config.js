import js from "@eslint/js";
import globals from "globals";

export default [
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        plugins: { js },
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
        },
        rules: {
            "no-var": "error",
            semi: ["error", "always"],
            "no-console": "warn",
            "no-unused-vars": "error",
            curly: ["error", "functions"],
            "arrow-parens": ["error", "always"],
            "no-unexpected-multiline": "error",
            "no-unreachable": "error",
            "no-cond-assign": "error",
            eqeqeq: "warn",
            "no-extra-parens": ["error", "functions"],
        },
    },
    {
        files: ["test/**/*.js"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.mocha,
            },
        },
    },
    {
        files: ["cypress/e2e/**/*.js"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.cypress,
            },
        },
    },
];
