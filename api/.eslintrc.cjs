module.exports = {
    root: true,
    env: {
        node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: [
            'tsconfig.app.json',
            'tsconfig.config.json',
        ],
        sourceType: 'module',
        ecmaVersion: 2020,
    },
    plugins: ["@typescript-eslint"],
    extends: [
        'airbnb-base',
        'airbnb-typescript/base'
    ],
    rules: {
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'no-restricted-syntax': 'off',
        "@typescript-eslint/member-delimiter-style": ["error", {
            "multiline": {
                "delimiter": "semi",
                "requireLast": true
            },
            "singleline": {
                "delimiter": "semi",
                "requireLast": false
            },
            "multilineDetection": "brackets"
        }],
        "max-classes-per-file": "off",
        "import/prefer-default-export": "off",
    },
    ignorePatterns: [".eslintrc.cjs", "dist"],
};