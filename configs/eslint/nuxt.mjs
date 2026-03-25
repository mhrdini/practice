import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import nuxt from '@nuxt/eslint-config'

import { config as baseConfig } from './base.mjs'

/**
 * ESLint config for Vue + Nuxt apps
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const nuxtConfig = [
  ...baseConfig,

  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,

  // Vue SFC support
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },

  // Vue recommended rules (flat config style)
  {
    ...vue.configs['flat/recommended'],
    ...nuxt(),
  },

  // Nuxt-specific globals
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,

        // Nuxt auto-imports
        defineNuxtConfig: 'readonly',
        useAsyncData: 'readonly',
        useFetch: 'readonly',
        useRuntimeConfig: 'readonly',
        navigateTo: 'readonly',
        definePageMeta: 'readonly',
        useRoute: 'readonly',
        useRouter: 'readonly',
      },
    },
  },

  // Vue-specific tweaks
  {
    rules: {
      // allow script setup without explicit imports
      'vue/script-setup-uses-vars': 'error',

      // stylistic preferences (adjust if needed)
      'vue/multi-word-component-names': 'off',

      // useful in Nuxt apps
      'vue/no-multiple-template-root': 'off', // Vue 3 allows it anyway

      // keep your unused imports system working
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
]