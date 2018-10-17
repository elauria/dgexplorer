module.exports = {
  plugins: ['prettier'],
  extends: ['prettier'],
  parserOptions: {
    ecmaVersion: 6
  },
  parser: 'babel-eslint',
  env: {
    node: true,
    browser: true,
    mocha: true
  },
  globals: {
    expect: true,
    mount: true,
    render: true,
    shallow: true,
    sinon: true,
    spy: true
  },
  rules: {
    'import/no-named-as-default': 0
  },
  overrides: [
    {
      files: ['*.spec.*'],
      rules: {
        'no-unused-expressions': 0,
        'chai-friendly/no-unused-expressions': 2
      }
    }
  ]
};
