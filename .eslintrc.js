export default {
  'env': {
    'es2021': true,
    'node': true,
  },
  'extends': ['google', 'prettier'],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'camelcase': 'off',
    'prettier/prettier': 'error',
  },
};