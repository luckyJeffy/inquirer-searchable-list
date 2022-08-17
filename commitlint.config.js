module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [2, 'always', ['pascal-case', 'kebab-case']],
    'subject-case': [0],
  },
}
