module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint'
    ],
    root: true,
    env: {
        node: true,
        jest: true
    },
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
        '@typescript-eslint/no-use-before-define': 'off',

        'no-use-before-define': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
        indent: ['error', 4]
    }
}
