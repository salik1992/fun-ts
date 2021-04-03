module.exports = {
    extends: ['airbnb-typescript'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        "indent": "off",
        "@typescript-eslint/indent": ["error", 4],
        "import/prefer-default-export": "off",
    },
};
