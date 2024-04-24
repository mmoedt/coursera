module.exports = {
    env: {
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'plugin:prettier/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: false,
    },
    plugins: ['@typescript-eslint', 'prettier', 'import'],
    rules: {
        'curly': ['error', 'all'],
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'no-console': 'off',
        'no-shadow': 'off', // in favor of the typescript compatible one
        'no-undef': 'off',
        'class-methods-use-this': 'off',
        'no-unused-vars': ['off', { args: 'all', argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-unused-vars': ['off', { args: 'all', argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/order': [
            'error',
            {
                'newlines-between': 'never',
                groups: [
                    ['builtin', 'external'],
                    ['internal', 'parent', 'sibling', 'index'],
                ],
            },
        ],
        "prettier/prettier": [
            "error",{
                "endOfLine": "auto"
            }
        ],
        // Tweaks: Things that should be warnings (e.g. style related) but are showing as errors
        'object-shorthand': 'warn',
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-shadow': ["error"]
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

                // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

                // use <root>/path/to/folder/tsconfig.json
                project: './tsconfig.json',
            },
        },
    },
    // See https://eslint.org/docs/latest/use/configure/migration-guide#ignoring-files
    ignorePatterns: [
        'dist',
        'node_modules',
        '.vscode',
        '.eslintrc.js',
        '.nvm',
        'jest.config.js',
        'CHANGELOG.md',
        'README.md'
    ]
};
