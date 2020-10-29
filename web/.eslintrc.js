module.exports = {
    env: {
        browser: true,
        jest: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        // 'standard'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/triple-slash-reference': 0,
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.js', '.jsx', '.tsx', 'ts'],
            },
        ],
        'global-require': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
        indent: ['error', 4],
    },
}
