import nextConfig from 'eslint-config-next'
import prettier from 'eslint-config-prettier'

const eslintConfig = [
  ...nextConfig,
  prettier,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
]

export default eslintConfig
