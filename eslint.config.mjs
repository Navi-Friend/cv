import react from 'eslint-plugin-react';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	...compat.extends(
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
	),
	{
		files: ['**/*.js', '**/*.jsx'],
		ignores: ['node_modules/', '.config/'],
		plugins: {
			react,
		},
		settings: {
			react: {
				pragma: 'React',
				fragment: 'Fragment',
				version: 'detect',
				defaultVersion: '',
			},
		},

		languageOptions: {
			globals: {
				...globals.browser,
			},
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		rules: {
			'no-var': 'error',
			'prefer-const': 'warn',
			semi: ['warn', 'always'],
			'react/jsx-uses-react': 'off',
			'react/prop-types': 'off',
			'react/jsx-uses-vars': 'warn',
			'react/react-in-jsx-scope': 'off',
			'prettier/prettier': [
				'warn',
				{
					endOfLine: 'auto',
				},
			],
			// 'no-mixed-spaces-and-tabs': 'warn',
			'no-unused-vars': 'error',
		},
	},
];
