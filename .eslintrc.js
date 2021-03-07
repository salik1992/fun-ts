module.exports = {
    extends: ['airbnb-typescript'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        "indent": "off",
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/no-unused-vars": "off",
        "import/prefer-default-export": "off",
    },
};
