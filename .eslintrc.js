module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: { jsx: true, modules: true, experimentalObjectRestSpread: true },
  },
  parser: 'babel-eslint',
  globals: {
    window: true,
    localStorage: true,
    document: true,
    alert: true,
    FileReader: true,
    FormData: true,
  },
  plugins: ['babel', 'react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    'semi-spacing': 'error',
    curly: ['error', 'multi-line'],
    'max-len': [
      'off',
      {
        code: 120,
        ignoreUrls: true,
      },
    ],
    'no-var': 'error',
    'no-unused-vars': ['off', { args: 'none' }],
    'prefer-const': 'error',
    'valid-jsdoc': [
      'off',
      {
        requireParamDescription: false,
        requireReturnDescription: false,
        requireReturn: false,
        prefer: { returns: 'return' },
      },
    ],
    'no-array-constructor': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-new-wrappers': 'error',
    'no-new-object': 'error',
    'quote-props': ['off'],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'no-throw-literal': 'error',
    'default-case': 'error',
    'class-methods-use-this': 'error',
    'no-with': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-invalid-this': 'off',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-useless-escape': 'off',
    'brace-style': 'error',
    camelcase: ['error', { properties: 'never' }],
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'new-cap': 'off',
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'no-trailing-spaces': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        asyncArrow: 'always',
        anonymous: 'never',
        named: 'never',
      },
    ],
    'spaced-comment': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'rest-spread-spacing': 'error',
    'no-console': 'off',
    'arrow-body-style': [0, 'as-needed'],
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 0,
    'import/prefer-default-export': 0,
    'no-mixed-operators': 0,
    'no-lonely-if': 0,
    'no-param-reassign': 0,
    eqeqeq: 0,
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'no-plusplus': 0,
    'one-var': 0,
    'prefer-destructuring': 0,
    'function-paren-newline': 0,
    'object-curly-spacing': 0,
    'array-callback-return': 0,
    radix: [2, 'as-needed'],
    'dot-notation': 0,
    'object-curly-newline': 0,
    'object-shorthand': 0,
    'import/first': 0,
    'import/no-duplicates': 0,
    'import/newline-after-import': 0,
    'import/no-extraneous-dependencies': 0,
    'no-use-before-define': 0,
    'space-infix-ops': 0,
    'prefer-template': 0,
    'consistent-return': 0,
    'one-var-declaration-per-line': 0,
    'func-names': 0,
    'padded-blocks': 0,
    'no-else-return': 0,
    'no-shadow': 0,
    'no-continue': 0,
    'no-prototype-builtins': 0,
    'no-return-assign': 0,
    'no-unused-expressions': 0,
    'no-useless-computed-key': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-curly-spacing': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/anchor-has-content': 0,
    'babel/no-invalid-this': 2,
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/jsx-uses-vars': 2,
    'react/no-array-index-key': 0,
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/no-unused-prop-types': 0,
    'react/no-find-dom-node': 1,
  },
};
