module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    // 'react/require-render-return',
    ''
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "import"],
  rules: {
    // 'react-refresh/only-export-components': [
    //   'warn',
    //   { allowConstantExport: true },
    // ],
    // "react/no-multi-comp": ['error', { "ignoreStateless": true}],
    "import/no-cycle": ["error", { "maxDepth": 10 , "ignoreExternal": true}]
  },
  // "settings": {
  //   "import/resolver": {
  //     "node": {          
  //       "paths": ["src"],
  //       "extensions": [".js", ".jsx", ".ts", ".tsx"]
  //     }
  //   }
  // }
}
