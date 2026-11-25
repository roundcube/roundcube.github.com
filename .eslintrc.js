module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb-base',
        'plugin:unicorn/recommended',
    ],
    parserOptions: {
        ecmaVersion: '2022',
        sourceType: 'module',
    },
    ignorePatterns: [
        '!.*',
        '*.min.js',
    ],
    rules: {
        'brace-style': ['error', '1tbs'],
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
            imports: 'always-multiline',
            objects: 'always-multiline',
        }],
        curly: ['error', 'all'],
        indent: ['error', 4, {
            SwitchCase: 1,
        }],
        'linebreak-style': ['error', 'unix'],
        'no-multi-spaces': ['error', {
            exceptions: {
                Property: true,
                VariableDeclarator: true,
            },
        }],
        'object-shorthand': ['error', 'never'],
        'padding-line-between-statements': ['error', {
            blankLine: 'always',
            next: ['continue', 'break', 'export', 'return', 'throw'],
            prev: '*',
        }],
        'spaced-comment': ['error', 'always', {
            block: {
                balanced: true,
                exceptions: ['*'],
                markers: ['!'],
            },
            line: {
                exceptions: ['-', '+'],
                markers: ['/'],
            },
        }],
        strict: 'off',
        'wrap-iife': ['error', 'inside'],
        'func-names': 'off',
        'no-param-reassign': 'off',
        'no-use-before-define': 'off',
        'prefer-destructuring': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-query-selector': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/prevent-abbreviations': 'off',
    },
    reportUnusedDisableDirectives: true,
    globals: {
        bootstrap: true,
    },
};
